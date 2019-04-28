const readDir = require('recursive-readdir');
const path = require('path');
const UglifyJS = require('uglify-es-web');
const fs = require('fs');

const { exec } = require('child_process');

// const { Parser } = require("htmlparser2");
// const ParseDom = Parser.parseDOM;

const Result = require('../Result/Result');

class Preview {

  constructor(projectPath, staticPath) {
    this.projectPath = projectPath;
    this.staticPath = staticPath;
  }

  /**
   *  @public
   *  @desp 初始化组件列表
   *  @type GET
   *  @url /init
   */
  init() {
    const projectPath = this.projectPath;
    const staticPath = this.staticPath;
    return async function (ctx, next) {
      try {
        const componentPath = path.resolve(path.join(projectPath, 'src/@aweb-components'));

        const files = await readDir(componentPath);

        //组件列表
        const vueFiles = files.filter(f => f.lastIndexOf('.vue') !== -1).map(f => f.replace(componentPath, '.')).sort();

        //生成Vue Use
        const content = `import Vue from 'vue';${vueFiles.map(f => ` Vue.use("${f}")`).join('\n')}`;

        const list = await new Promise((res, rej) => fs.writeFile(path.join(componentPath, 'aweb.components.js'), content, err => err ? rej(err) : res('success')));

        //npm run build  生成样式
        const build = await new Promise((res, rej) => {
          const process = exec('npm run build', { encoding: "utf8", cwd: path.resolve(projectPath) }, (error, stdout, stderr) => {
            error ? rej(error) : res({
              error,
              stdout,
              stderr
            })
          });
          process.stderr.on('data', data => {
            console.log(data);
          });
          process.stdout.on('data', data => {
            console.log(data);
          });
          process.stdout.on('close', data => {
            console.log(data);
            res({
              data
            });
          });
        });

        const html = Buffer.from(fs.readFileSync(path.resolve(path.join(projectPath, './dist/index.html')))).toString();

        const css = html.match(/<link[^>]+>/g).filter(l => l.indexOf('.css') !== -1).map(e => e.match(/href=([^\s]+)/)).filter(e => !!e).map(e => e.input);

        

        const vueEditor = Buffer.from(fs.readFileSync(path.resolve(path.join(staticPath, './vueEditor.html')))).toString();

        const newVueEditor = vueEditor.replace('<!--css-->', css.join('\n'));

        const htmlResult = await new Promise((res, rej) =>  fs.writeFile(path.resolve(path.join(projectPath,'./dist/vueEditor.html')),newVueEditor, err => err ? rej(err) : res('success')));
       
        Result.success(ctx, {
          content,
          result: {
            list,
            build
          },
          html,
          newVueEditor,
          htmlResult
        });
      } catch (e) {
        Result.error(ctx, e);
      }
    }
  }

    /**
   *  @public
   *  @desp 获取style内容
   *  @type GET
   *  @url /style
   */
  style(platform) {
    const projectPath = this.projectPath;
    const staticPath = this.staticPath;    
    return function (req) {
      try {
        const html = Buffer.from(fs.readFileSync(path.resolve(path.join(projectPath, './dist/index.html')))).toString();

        const css = html.match(/<link[^>]+>/g).filter(l => l.indexOf('.css') !== -1).map(e => e.match(/href=([^\s]+)/)).filter(e => !!e).map(e => e[1]);


        const content = Array.from(new Set(css)).map(f=>fs.readFileSync(path.resolve(path.join(projectPath,'./dist',f)).toString()));

        platform.sendSuccessResult(req, `<style>${content.join('')}</style>`);
      } catch (e) {
        platform.sendErrorResult(req,e);
      }
    }
  }
}

module.exports = Preview;