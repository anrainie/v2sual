const readDir = require('recursive-readdir');
const path = require('path');
const UglifyJS = require('uglify-es-web');
const fs = require('fs');

const config = require('../config/config.base');
const Result = require('../util/Result');

class Page {

  constructor(path) {
    this.pagePath = path;
  }

  /**
   * 
   * @desp 截取匹配内容
   * @param 文件内容 content 
   * @param 开始 startTag 
   * @param 结束 endTag 
   */
  getMatchPart(content, startTag, endTag) {
    const start = content.indexOf(startTag);
    const end = content.indexOf(endTag);

    return start !== -1 ? content.substring(start + startTag.length, end) : '';
  }

   /**
   * 
   * @desp 替换匹配内容
   * @param 文件内容 content 
   * @param 开始 startTag 
   * @param 结束 endTag 
   */
  changeMatchPart(content, startTag, endTag,targetContent) {
    return content.replace(this.getMatchPart(content, startTag, endTag),targetContent);
  }

  /**
   * 
   * @desp 解析注解
   * @param 方法信息 key
   * 
   */
  getMethodComments(key) {
    var ret = {
      desp: ''
    };
    try {
      const comments = key.start.comments_before[0];
      var lines = comments.value.split('*').map(l => l !== undefined && l !== null ? l : '').map(l => l.trim()).filter(l => !!l.trim());


      lines.forEach(l => {
        var params = l.match(/@([^\s]+)\s([^$]+)/);

        ret[params[1]] = params[2];
      });
    } catch (e) {
      console.log(e);
    } finally {
      return ret;
    }
  }

  /**
   * @desp  获取文件信息
   * @param 文件路径 filepath 
   * @param 文件内容 content 
   */
  getPageInfo(filepath, content) {
    let args = {
      desp: filepath
    };

    try {
      this.getMatchPart(content, '<!--', '-->')
        .split(/[\n\r]/)
        //去空行
        .map(l => l.trim())
        .filter(l => !!l)
        //分词
        .map(l => l.match(/@([^\s]+)([^$]+)/))
        //去掉不匹配的字符
        .filter(l => l && l.length === 3)
        //生成map
        .forEach(l => args[l[1]] = l[2]);
    } catch (e) {
      console.log(e);
    } finally {
      return args;
    }
  }

  /**
   * @desp  获取脚本信息
   * @param 文件路径 filepath 
   * @param 文件内容 content 
   */
  async getPageScriptInfo(filepath, content) {
    try {
      const script = this.getMatchPart(content, '<script>', '</script>');

      const ast = UglifyJS.parse(script);

      const exportAst = ast.body.filter(b => !!b.exported_value);
      const methodsAst = exportAst[0].exported_value.properties.filter(p => p.key === 'methods' && p.start.value === 'methods');
      const methodList = methodsAst[0].value.properties;

      const pageMap = {

      };

      const methods = methodList
        //if m.key
        .filter(m => m.key && m.key)
        //if m.value
        .filter(m => m && m.value && m.value.body && m.value.body.length)
        // return key,body
        .map(m => {
          const params = this.getMethodComments(m.key);

          const name = typeof m.key === 'object' ? m.key.name : m.key;


          let list = [].concat(m.value.body);
          let method;
          let pages = [];

          while (method = list.pop()) {

            try {
              // 检查appopen
              if (method.expression && method.expression.start.value === 'app' && method.expression.end.value === 'open') {
                let args = {};
                try {
                  method.args[0].properties.forEach(a => {
                    args[a.start.value] = a.end.value;
                    // 检查appopen函数里的参数
                    if (a.value.body) {
                      list.push(a.value.body[0].body);
                    }
                  });
                  pages.push(args);
                } catch (e) {

                }
                // 检查method下的函数参数
              } else if (method.expression && method.args && method.args.length) {
                list = list.concat(method.args);
                // 检查method下的声明类型
              } else if (method.definitions && method.definitions.length) {
                list = list.concat(method.definitions.filter(i => i.value)
                  .map(i => i.value));
                // 检查数组
              } else if (method.elements && method.elements.length) {
                list = list.concat(method.elements);
                // 检查对象
              } else if (method.properties && method.properties.length) {
                list = list.concat(method.properties.map(i => i.value));
                // 赋值
              } else if (method.operator && method.operator === "=") {
                list.push(method.right);
              }


              if (method.body && Array.isArray(method.body)) {
                list = list.concat(method.body);
              } else if (method.body) {
                list.push(method.body);
              }

              list = list.concat(Object.values(method).filter(e => Array.isArray(e)));
            } catch (e) {

            }


          }


          return {
            catalog: 'method',
            name: name,
            label: params.desp || name,
            children: pages.map(p => {
              pageMap[p.page] = pageMap[p.page] || [];

              return {
                label: p.title,
                children: pageMap[p.page],
                catalog: 'page'
              }
            })
          }
        });

      await new Promise(async resolve => {
        let pages = Object.keys(pageMap);
        let page;
        while (page = pages.pop()) {

          const content = await this.analysis(`${page}.vue`);

          pageMap[page].push(content);

        }

        resolve();
      });

      return {
        methods: methods
      }
    } catch (e) {
      console.log(e);
      return {
        methods: []
      }
    }
  }

  /**
   *  @desp 分析内容
   *  @type GET
   *  @path
   */
  async analysis(filepath) {
    const content = await new Promise(resolve => fs.readFile(path.join(this.pagePath, filepath), 'utf8', (error, response) => {
      if (error) {
        throw error;
      } else {
        resolve(response)
      }
    }));

    const info = this.getPageInfo(filepath, content);

    const script = await this.getPageScriptInfo(filepath, content);

    return {
      ...info,
      label: info.desp,
      children: script.methods
    };
  }

  /**
   * @public
   * @desp 获取文件脚本内容
   */
  script(platform) {
    const context = this;
    return async function (req) {
      try {
        const query = ctx.request.query;
        const filepath = query.path;
        const content = await new Promise(resolve => fs.readFile(path.join(context.pagePath, filepath), 'utf8', (error, response) => error ? Result.error(ctx, error) : resolve(response)));
        const script = context.getMatchPart(content, '<script>', '</script>');

        platform.sendSuccessResult(req, {
          script
        });

      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  }
  /**
  * @public
  * @desp 获取逻辑列表
  */
  logicList(platform) {
    const context = this;
    return async function (req) {
      try {
        const query = req.data;
        const filepath = query.path;
        const content = await new Promise(resolve => fs.readFile(filepath, 'utf8', (error, response) => error ? platform.sendErrorResult(req, error) : resolve(response)));
        const script = context.getMatchPart(content, '<script>', '</script>');
        let methodRes = [], watchRes = [],dataRes=[];
        if (script) {
          const ast = UglifyJS.parse(script);
          const exportAst = ast.body.filter(b => !!b.exported_value);
          const dataAst = exportAst[0].exported_value.properties.filter(p => p.key.name === 'data' && p.start.value === 'data');
          if(dataAst.length){
            dataRes = dataAst[0].print_to_string({ beautify: true });
            dataRes = dataRes.slice(dataRes.indexOf("return"),dataRes.length-1);
            dataRes = dataRes.replace(/return/,"data=");
          }
          const methodsAst = exportAst[0].exported_value.properties.filter(p => p.key === 'methods' && p.start.value === 'methods');
          if (methodsAst.length) {
            const methodList = methodsAst[0].value.properties;
            methodRes = methodList.map(item => {
              let code = item.print_to_string({ beautify: true });
              if (item.key.name) {
                return {
                  name: item.key.name,
                  code: code
                };
              } else {
                return {
                  name: item.key,
                  code: code
                };
              }
            })
          }
          const watchAst = exportAst[0].exported_value.properties.filter(p => p.key === 'watch' && p.start.value === 'watch');
          if (watchAst.length) {
            const watchList = watchAst[0].value.properties;
            watchRes = watchList.map(item => {
              let code = item.print_to_string({ beautify: true });
              if (item.key.name) {
                return {
                  name: item.key.name,
                  code: code
                };
              } else {
                return {
                  name: item.key,
                  code: code
                };
              }
            })
          }
        }

        platform.sendSuccessResult(req, {
          methods: methodRes,
          watch: watchRes,
          data: dataRes
        });

      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  }

  /**
  * @public
  * @desp 保存逻辑概览
  */
 logicSave(platform) {
  const context = this;
  return async function (req) {
    const obj =`data={
      style: {
        color: "green"
      },
      value1: "1",
      value2: "2",

      overview: {
        color: 0
      }
    }`;
    const filepath = `D:/job/program/v2sual-master/src/components/Test/ov1.vue`
    const content = await new Promise(resolve => fs.readFile(filepath, 'utf8', (error, response) => error ? platform.sendErrorResult(req, error) : resolve(response)));
    const script = context.getMatchPart(content, '<script>', '</script>');
    const ast = UglifyJS.parse(script);
    const objast = UglifyJS.parse(obj);
    let exportAst = ast.body.filter(b => !!b.exported_value);
    //data
    let dataAst = exportAst[0].exported_value.properties.filter(p => p.key.name === 'data' && p.start.value === 'data');
    dataAst[0].value.body[0].value = objast.body[0].body.right;
    // watch
    let watchAst = exportAst[0].exported_value.properties.filter(p => p.key === 'watch' && p.start.value === 'watch');
    // 写入vue
    let res = ast.print_to_string({ beautify: true });
    let test = context.changeMatchPart(content, '<script>', '</script>',res);
    fs.writeFileSync(filepath,test,{ encoding: 'utf8'})
    try {
      platform.sendSuccessResult(req, {
        status:true
      });

    } catch (e) {
      platform.sendErrorResult(req, e);
    }
  }
}
  
  /**
   * @public
   * @desp 获取文件内容
   * @type GET
   * @url /content?path=[filepath]
   */
  content(platform) {
    const analysis = this.analysis;
    const context = this;
    return function (filepath) {
      return new Promise(async (res, rej) => {
        try {
          const ret = await analysis.call(context, filepath.replace(context.pagePath, ''));
          res(ret);
        } catch (e) {
          rej(e)
        }
      })

    }
  }

  /**
   *  @public
   *  @desp 获取文件列表
   *  @type GET
   *  @url /list
   */
  list(platform) {
    const pagePath = this.pagePath;
    return async function (req) {
      try {
        const files = await readDir(pagePath);

        const vueFiles = files.filter(f => f.lastIndexOf('.vue') !== -1).map(f => f.replace(pagePath, '')).sort();

        platform.sendSuccessResult(req, vueFiles);
        //Result.success(ctx, vueFiles);
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  }
}

module.exports = {
  consume(platform, consumption) {
    const page = new Page(config.runtime.page);
    Object.keys(consumption).map(c => platform.socket.on(c, page[consumption[c]](platform)));
  }
};