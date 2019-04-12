const reader = require('filelist_reader');
const path = require('path');
const UglifyJS = require('uglify-es');
const fs = require('fs');

class Page {
  constructor (_path) {
    this.pagePath = _path;
  }

  /**
   *  @desp 获取文件列表
   *  @type GET
   *  @url /list
   */
  list () {
    const pagePath = this.pagePath;
    return async function (ctx, next) {
      // const pagePath=this.getPagePath();
      pagePath;
      ctx.response.type = 'json';

      try {
        ctx.response.body = await new Promise(
          (resolve, reject) => reader(pagePath)
            .then((result) => {
              resolve(JSON.stringify(result))
            })
            .catch(e => {
              console.log(e);
              ctx.throw(500);
            }));
      } catch (e) {
        console.log(e);
        ctx.throw(500);
      }
    };
  }
  /**
   * @desp 获取文件内容
   * @type GET
   * @url /content/:filepath
   */
  content () {
    const pagePath = this.pagePath;
    return async function (ctx) {

      const filepath = ctx.params.filepath;

      if (filepath) {
        ctx.response.type = 'json';
        const content = await new Promise((resolve, reject) => {
          fs.readFile(path.resolve(pagePath, filepath.replace(/\$\$/g, '/')), 'utf8', (error, response) => {
            if (error) {
              console.log(error);
              reject(error);
            } else {
              resolve(response);
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
}

module.exports = Page;
