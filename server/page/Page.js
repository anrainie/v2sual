const reader = require('filelist_reader');
const readDir = require('recursive-readdir');
const path = require('path');
const UglifyJS = require('uglify-es');
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
  /**
   * @desp 获取文件内容
   * @type GET
   * @url /content/:filepath
   */
  content() {
    const pagePath = this.pagePath;
    return async function (ctx) {

      const filepath = ctx.params.filepath;

      if (filepath) {
        ctx.response.type = 'json';
        const content = await new Promise((resolve, reject) => {
          fs.readFile(path.resolve(pagePath, filepath), 'utf8', (error, response) => {
            if (error) {
              console.log(error);
              reject(error)
            } else {
              resolve(response)
            }
          });
        });
        const startTag = '<script>';
        const start = content.indexOf(startTag);
        const endTag = '</script>';
        const end = content.indexOf(endTag);

        const script = start !== -1 ? content.substring(start + startTag.length, end) : '';

        const ast = UglifyJS.parse(script);


        debugger;

        // const ast = UglifyJS.parse(script);

        ctx.response.body = JSON.stringify(ast);

      } else {
        ctx.throw(500);
      }
    }
  }


  /**
   * @desp 获取文件内容方法与属性
   * @type GET
   */

}

module.exports = Page;
