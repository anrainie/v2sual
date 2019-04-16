const readDir = require('recursive-readdir');
const path = require('path');
const UglifyJS = require('uglify-es-web');
const fs = require('fs');

// const { Parser } = require("htmlparser2");
// const ParseDom = Parser.parseDOM;

const Result = require('../Result/Result');

class Page {

  constructor(_path) {
    this.pagePath = _path;
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
  getPageScriptInfo(filepath, content) {
    try {
      const script = this.getMatchPart(content, '<script>', '</script>');

      const ast = UglifyJS.parse(script);

      const exportAst = ast.body.filter(b => !!b.exported_value);
      const methodsAst = exportAst[0].exported_value.properties.filter(p => p.key === 'methods' && p.start.value === 'methods');
      const methodList = methodsAst[0].value.properties;

      var t = methodList
        //if m.key
        .filter(m => m.key && m.key)
        //if m.value
        .filter(m => m && m.value && m.value.body && m.value.body.length)
        // return key,body
        .map(m => {
          const params = this.getMethodComments(m.key);

          const name = typeof m.key === 'object' ? m.key.name : m.key;

          return {
            name: name,
            desp: params.desp || name,
            key: m.key,
            body: m.value.body
          }
        });

      return {
        methods: t
      }
    } catch (e) {
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
    const content = await new Promise(resolve => fs.readFile(path.join(this.pagePath, filepath), 'utf8', (error, response) => error ? Result.error(ctx, error) : resolve(response)));

    const info = this.getPageInfo(filepath, content);

    const script = this.getPageScriptInfo(filepath, content);

    return {
      ...info,
      label:info.desp,
      children: script.methods
    };
  }

  /**
   * @public
   * @desp 获取文件内容
   * @type GET
   * @url /content?path=[filepath]
   */
  content() {
    const analysis = this.analysis;
    const context = this;
    return async function (ctx) {

      try {
        const query = ctx.request.query;
        const filepath = query.path;
        const ret = await analysis.call(context, filepath);

        Result.success(ctx, ret)
      } catch (e) {
        Result.error(ctx, e);
      }
    }
  }

  /**
   *  @public
   *  @desp 获取文件列表
   *  @type GET
   *  @url /list
   */
  list() {
    const pagePath = this.pagePath;
    return async function (ctx, next) {
      try {
        const files = await readDir(pagePath);

        const vueFiles = files.filter(f => f.lastIndexOf('.vue') !== -1).map(f => f.replace(pagePath, ''));

        Result.success(ctx, vueFiles);
      } catch (e) {
        Result.error(ctx, e);
      }
    }
  }
}

module.exports = Page;