const readDir = require('recursive-readdir');
const path = require('path');
const fs = require('fs');
const camelcase = require('camelcase');
const mkdirp = require("mkdirp");

const {
  exec
} = require('child_process');
const Result = require('../util/Result');
const Router = require('koa-router');

// const { Parser } = require("htmlparser2");
// const ParseDom = Parser.parseDOM;

const config = require('../config/config.base');

class Preview {

  constructor(projectPath) {
    this.projectPath = projectPath;
  }

  mddir(fpath) {
    return new Promise((res) => {
      console.log('heleleleods', fpath);
      mkdirp(fpath, function (err) {
        if (err) {
          res(false);
          console.log(err);
        } else {
          res(true);
        }
      });
    })
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
    // /Users/lijiancheng/Agree/v2sual/runtime/dist/static/vueEditor.html
    // /Users/lijiancheng/Agree/v2sual/runtime/dist/static/vueEditor.html
    const projectPath = this.projectPath;
    const mddir = this.mddir;
    return async function (ctx, next) {
      try {
        //缓存vueEditor
        const vueEditorPath = path.resolve(config.runtime.dist, './static/vueEditor.html');
        const vueEditorCache = await fs.readFileSync(vueEditorPath);
        try {


          const componentPath = path.resolve(path.join(projectPath, 'src/@aweb-components'));

          const files = await readDir(componentPath);

          //组件列表
          let vueMap = {};
          const vueFiles = files.filter(f => f.lastIndexOf('.vue') !== -1).map(f => f.replace(componentPath, '.')).sort().map(f => {
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
                path: f
              }
            })


          //生成Vue Use
          const content = `        
          ${vueFiles.map(f => `import ${f.name}  from '${f.path.replace(/\\/g,'/')}'`).join(';\n')}

          ${pipeList.map(f => `import ${f.name}  from '${f.path.replace(/\\/g,'/')}'`).join(';\n')}

          let app = {
            ${pipeList.map(f => f.name).join(',\n\t')}
          };
          
          window.pipe = app;

          export default {
            ${vueFiles.map(f => `${f.name}`).join(',\n\t')}
          }`;

          const list = await new Promise((res, rej) => fs.writeFile(path.join(componentPath, 'aweb.components.js'), content, err => err ? rej(err) : res('success')));

          // //npm run build  生成样式
          const build = await new Promise((res, rej) => {
            const process = exec('npm run build', {
              encoding: "utf8",
              cwd: path.resolve(projectPath)
            }, (error, stdout, stderr) => {
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

          const jsdev = await new Promise((res, rej) => {
            const process = exec('vue build -t lib -d v2sual ./src/@aweb-components/aweb.components.js', {
              encoding: "utf8",
              cwd: path.resolve(projectPath)
            }, async (error, stdout, stderr) => {
              console.log('0');
              const makePath = await mddir(vueEditorPath);
              if (makePath) {
                await fs.writeFileSync(vueEditorPath, vueEditorCache);
              }

              error ? rej(error) : res({
                error,
                stdout,
                stderr
              })
            });
            process.stderr.on('data', data => {
              console.log('1');
            });
            process.stdout.on('data', data => {
              console.log('2');
            });
            process.stdout.on('close', data => {
              console.log('3');
              res({
                data
              });
            });
          });
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
        const html = Buffer.from(fs.readFileSync(path.resolve(path.join(projectPath, './dist/index.html')))).toString();

        const css = html.match(/<link[^>]+>/g).filter(l => l.indexOf('.css') !== -1).map(e => e.match(/href=([^\s]+)/)).filter(e => !!e).map(e => e[1]);


        const content = Array.from(new Set(css)).map(f => fs.readFileSync(path.resolve(path.join(projectPath, './dist', f)).toString()));

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
        const js = Buffer.from(fs.readFileSync(path.resolve(path.join(projectPath, './v2sual/@aweb-template/vue-spa.umd.min.js')))).toString();

        platform.sendSuccessResult(req, js);
      } catch (e) {
        platform.sendErrorResult(req, e);
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
