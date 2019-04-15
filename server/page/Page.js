const reader = require('filelist_reader');
const readDir = require('recursive-readdir');
const path = require('path');
const UglifyJS = require('uglify-es-web');
const fs = require('fs');

const Result = require('../Result/Result');

class Page {



  constructor(_path) {
    this.pagePath = _path;
  }

  /**
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


  getComments(comments) {
    var ret = {
      desp: ''
    };
    try {
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
  getPageName(filepath, content) {
    try {
      return content.split(/[\n\r]/)[0].match(/<!--@desp (.*)-->/)[1].trim();
    } catch (e) {
      return filepath
    }
  }
  /**
   *  @desp 分析内容
   *  @type GET
   *  @path
   */
  async analysis(filepath) {
    const content = await new Promise(resolve => fs.readFile(path.join(this.pagePath, filepath), 'utf8', (error, response) => error ? Result.error(ctx, error) : resolve(response)));

    const startTag = '<script>';
    const start = content.indexOf(startTag);
    const endTag = '</script>';
    const end = content.indexOf(endTag);

    const script = start !== -1 ? content.substring(start + startTag.length, end) : '';

    const ast = UglifyJS.parse(script);

    //获取方法列表
    let methodList;
    try {
      const exportAst = ast.body.filter(b => !!b.exported_value);
      const methodsAst = exportAst[0].exported_value.properties.filter(p => p.key === 'methods' && p.start.value === 'methods');
      methodList = methodsAst[0].value.properties;

      return {
        label: this.getPageName(filepath, content),
        children: methodList.map(m => m.key).map(p => {
          const params = this.getComments(p.start.comments_before[0]);
          return {
            desp: params.desp || p.name,
            name: p.name
          }
        }),
      };
    } catch (e) {
      console.log(e);
      return {
        methods: []
      }


    }
  }

  /**
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
   * @desp 获取文件内容方法与属性
   * @type GET
   */

}

module.exports = Page;
