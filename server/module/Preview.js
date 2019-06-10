const readDir = require('recursive-readdir');
const path = require('path');
const fs = require('fs');
const camelcase = require('camelcase');

const {
  exec
} = require('child_process');
const Result = require('../util/Result');
const Router = require('koa-router');

// const { Parser } = require("htmlparser2");
// const ParseDom = Parser.parseDOM;

const config = require('../config/config.base');


const execCmd = function (cmd, cwd) {
  return new Promise((res, rej) => {
    const process = exec(cmd, {
      encoding: "utf8",
      cwd
    }, async (error, stdout, stderr) => {
      error ? rej(error) : res({
        error,
        stdout,
        stderr
      })
    });
    process.stderr.on('data', data => console.log(data));
    process.stdout.on('data', data => console.log(data));
    process.stdout.on('close', data => {
      console.log(data);
      res(data);
    });
  });
};

class Preview {

  constructor(projectPath = config.runtime.base) {
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
  init() {
    const projectPath = this.projectPath;
    return async function (ctx, next) {
      try {
        try {
          const componentPath = config.runtime.component;

          const files = await readDir(componentPath);

          //组件列表
          let vueMap = {};
          const vueFiles = files
            .filter(f => f.lastIndexOf('package.json') !== -1)
            .map(f => f.replace(path.sep + 'package.json', '').replace(componentPath, '.'))
            .sort()
            .map(f => {
              return {
                name: camelcase(f.split(path.sep)[1]),
                path: f
              }
            }).filter(f => {
              if (vueMap[f.name]) {
                return false;
              } else {
                vueMap[f.name] = true;

                return true;
              }
            })

          //pipe
          const pipes = await readDir(config.runtime.pipe);
          const pipeList = pipes
            .filter(f => f.lastIndexOf('package.json') !== -1)
            .map(f => f.replace(path.sep + 'package.json', ''))
            .sort()
            .map(f => {
              const paths = f.split(path.sep);
              const name = (paths[paths.length - 1]).split('.');
              return {
                name: name[name.length - 1],
                path: path.relative(path.dirname(config.runtime.componentFile), f)
              }
            })


          //生成Vue Use
          const content = `        
          ${vueFiles.map(f => `import ${f.name}  from '${f.path.replace(/\\/g, '/')}'`).join(';\n')}

          ${pipeList.map(f => `import ${f.name}  from '${f.path.replace(/\\/g, '/')}'`).join(';\n')}

          let app = {
            ${pipeList.map(f => f.name).join(',\n\t')}
          };
          
          window.pipe = app;

          export default {
            ${vueFiles.map(f => `${f.name}`).join(',\n\t')}
          }`;

          const list = await new Promise((res, rej) => fs.writeFile(config.runtime.componentFile, content, err => err ? rej(err) : res('success')));

          const absProjectPath = path.resolve(projectPath);

          //删除package-lock.josn
          fs.unlinkSync(path.resolve(absProjectPath,'package-lock.json'));

          //重新安装一次依赖
          const initDev = await execCmd(config.module.preview.script.init, absProjectPath);

          //npm run style  生成样式
          const styleDev = await execCmd(config.module.preview.script.style, absProjectPath);

          // npm run script 生成脚本
          const jsdev = await execCmd(config.module.preview.script.script, absProjectPath);
        } catch (e) {
          Result.error(ctx, e);
        } finally {

        }



        Result.success(ctx, {
          content: {
            result: true
          }
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
    return function (req) {
      try {
        const html = Buffer.from(fs.readFileSync(config.runtime.homepage)).toString();

        const css = html.match(/<link[^>]+>/g).filter(l => l.indexOf('.css') !== -1).map(e => e.match(/href=([^\s]+)/)).filter(e => !!e).map(e => e[1]);


        const content = Array.from(new Set(css)).map(f => fs.readFileSync(path.resolve(path.join(config.runtime.dist, f)).toString()));

        platform.sendSuccessResult(req, `<style>${content.join('')}</style>`);
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  }

  runtimeWidget(platform) {
    const projectPath = this.projectPath;
    return function (req) {
      try {
        let _path = path.resolve(path.join(projectPath, config.module.preview.result));
        const js = Buffer.from(fs.readFileSync(_path)).toString();

        platform.sendSuccessResult(req, js);
      } catch (e) {
        console.error(e)
        platform.sendErrorResult(req, e.message || e);
      }
    }
  }
}

module.exports = {
  consume(platform, consumption, runtime) {
    const preview = new Preview(runtime);
    Object.keys(consumption).map(c => platform.socket.on(c, preview[consumption[c]](platform)));
  },
  router(runtime, consumption) {
    const preview = new Preview(runtime);
    const router = Router();

    Object.keys(consumption).map(c => {
      console.log(`${c}- TEEE`)
      return router.get(c, preview[consumption[c]]())
    });

    return router;
  }
};
