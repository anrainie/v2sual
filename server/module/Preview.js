const readDir = require('recursive-readdir');
const path = require('path');
const UglifyJS = require('uglify-es-web');
const fs = require('fs');
const camelcase=require('camelcase');

const { exec } = require('child_process');

// const { Parser } = require("htmlparser2");
// const ParseDom = Parser.parseDOM;

class Preview {

  constructor(projectPath) {
    this.projectPath = projectPath;
  }

  


  /**
   * @private
   * @desp 生成 Component 文件
   * @param {*} platform 
   */

  /**
   *  @public
   *  @desp 初始化组件列表
   *  @type GET
   *  @url /init
   */
  init(platform) {
    const projectPath = this.projectPath;
    return async function (req) {
      try {
        const componentPath = path.resolve(path.join(projectPath, 'src/@aweb-components'));

        const files = await readDir(componentPath);

        //组件列表
        const vueFiles = files.filter(f => f.lastIndexOf('.vue') !== -1).map(f => f.replace(componentPath, '.')).sort().map(f=>{
          return {
            name:camelcase(f.split(path.sep)[1]),
            path:f
          }
        });

        //生成Vue Use
        const content = `        
${vueFiles.map(f => `import ${f.name}  from '${f.path}'`).join(';\n')}



export default {
  ${vueFiles.map(f => `${f.name}`).join(',\n\t')}
}`;

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

        const jsdev=await new Promise((res,rej)=>{
          const process = exec('vue build -t lib -d v2sual ./src/@aweb-components/aweb.components.js', { encoding: "utf8", cwd: path.resolve(projectPath) }, (error, stdout, stderr) => {
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

        platform.sendSuccessResult(req, {
          content,
          result: {
            list,
            build
          },
          html,
          htmlResult
        });
      } catch (e) {
        platform.sendErrorResult(req,e);
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

  runtimeWidget(platform){
    const projectPath = this.projectPath;
    return function (req) {
      try {
        const js = Buffer.from(fs.readFileSync(path.resolve(path.join(projectPath, './v2sual/@aweb-template/vue-spa.umd.min.js')))).toString();

        platform.sendSuccessResult(req, js);
      } catch (e) {
        platform.sendErrorResult(req,e);
      }
    }
  }
}

module.exports = {
  consume(platform, consumption,runtime) {
    const preview = new Preview(runtime);
    Object.keys(consumption).map(c => platform.socket.on(c, preview[consumption[c]](platform)));
  }
};