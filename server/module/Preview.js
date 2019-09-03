const readDir = require('recursive-readdir');
const path = require('path');
const fs = require('fs');
const camelcase = require('camelcase');
const util = require("../util/Util");
const {
  exec
} = require('child_process');
const Result = require('../util/Result');
const Router = require('koa-router');

const config = require('../config/config.base');
const configJson = require("../config/config.json");


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

  constructor(projectPath = config.runtime.base, componentPath, componentFile,pipePath, isInit) {
    this.isInit = isInit || false;
    this.projectPath = projectPath;
    this.componentPath = componentPath || config.runtime.component;
    this.componentFile = componentFile || config.runtime.componentFile;
    this.pipePath=pipePath||config.runtime.pipe;
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
 async initComponent(platform,req) {
    try {
      const projectPath = this.projectPath;
      const context = this;
      // const absProjectPath = path.resolve(projectPath);
  
  
      //组件列表
      let vueMap = {},
          componentContent={},
          pipeContent={},
          compoCss =[];

  
      //平台级组件
      const platformComponentPath = path.join(context.projectPath, configJson.runtime.platformComponent);
      if (fs.existsSync(platformComponentPath)) {
        const components = await readDir(platformComponentPath);
        components
          .filter(f => f.lastIndexOf('package.json') !== -1)
  
          .forEach(f => {
            let repath = f.replace(path.sep + 'package.json', '');

            const contentStr = fs.readFileSync(f).toString();
            const content = JSON.parse(contentStr);
  
            const paths = f.split(path.sep);
            const scope = content.name;
            const name = camelcase(paths[paths.length - 2]);
  
            vueMap[name] = scope;

            let distPath=path.join(repath,`./dist/${name}.umd.min.js`);
            if(fs.existsSync(distPath)){
              componentContent[name]= Buffer.from(fs.readFileSync(distPath)).toString();
            }
         
            let compoCssPath = path.join(repath,`./dist/${name}.css`);
    
            if(fs.existsSync(compoCssPath)){
 
              compoCss.push(Buffer.from(fs.readFileSync(compoCssPath)).toString())
            }
            //参数编辑器
            if (content.paramEditor) {
              vueMap[content.paramEditor.name] = path.join(scope, content.paramEditor.path);
              let paramEditorDist=path.join(scope,`./dist/${content.paramEditor.name}.umd.min.js`);
              if(fs.existsSync(paramEditorDist)){
                componentContent[content.paramEditor.name]= Buffer.from(fs.readFileSync(paramEditorDist)).toString();
              }
            }

            //自定义组件编辑器
            if (content.editor) {
              vueMap[content.editor.name] = path.join(scope, content.editor.path);
              let editorDist=path.join(scope,`./dist/${content.editor.name}.umd.min.js`);
              if(fs.existsSync(editorDist)){
                componentContent[content.editor.name]= Buffer.from(fs.readFileSync(editorDist)).toString();
              }
              let compoCssPath = path.join(scope,`./dist/${name}.css`);
              if(fs.existsSync(compoCssPath)){
                compoCss.push(Buffer.from(fs.readFileSync(compoCssPath)).toString())
              }
            }
  
          })
      }
  
  
      //项目级组件
      if (fs.existsSync(context.componentPath)) {
        const files = await readDir(context.componentPath);
        files
          //读取每一个package.json
          .filter(f => f.lastIndexOf('package.json') !== -1)
          //读取组件和编辑器
          .forEach(f => {
            try {
              // .map(f => f.replace(path.sep + 'package.json', ''))
              let rePath = f.replace(path.sep + 'package.json', '');
  
              const contentStr = fs.readFileSync(f).toString();
              const content = JSON.parse(contentStr);
  
              const paths = f.split(path.sep);
              // const scope=content.name;
              const name = camelcase(paths[paths.length - 2]);
  
              const filepath = path.relative(path.dirname(context.componentFile), rePath);
  
              vueMap[name] = filepath;
              let distPath=path.join(rePath,`./dist/${name}.umd.min.js`);
              if(fs.existsSync(distPath)){
                componentContent[name]= Buffer.from(fs.readFileSync(distPath)).toString();
              }

              let compoCssPath = path.join(repath,`./dist/${name}.css`);
             
              if(fs.existsSync(compoCssPath)){
             
                compoCss.push(Buffer.from(fs.readFileSync(compoCssPath)).toString())
              }
              //参数编辑器
              if (content.paramEditor) {
                vueMap[content.paramEditor.name] = path.join(filepath, content.paramEditor.path);
                let paramEditorDist=path.join(rePath,`./dist/${content.paramEditor.name}.umd.min.js`);
                if(fs.existsSync(paramEditorDist)){
                  componentContent[content.paramEditor.name]= Buffer.from(fs.readFileSync(paramEditorDist)).toString();
                }
              }
  
              //自定义组件编辑器
              if (content.editor) {
                vueMap[content.editor.name] = path.join(filepath, content.editor.path);

                let editorDist=path.join(rePath,`./dist/${content.editor.name}.umd.min.js`);
                if(fs.existsSync(editorDist)){
                  componentContent[content.editor.name]= Buffer.from(fs.readFileSync(editorDist)).toString();
                }

                let compoCssPath = path.join(rePath,`./dist/${content.editor.name}.css`);
                
                if(fs.existsSync(compoCssPath)){
                  compoCss.push(Buffer.from(fs.readFileSync(compoCssPath)).toString())
                }


              }
            } catch (e) { }
          });
  
      }
  
      const vueFiles = Object.keys(vueMap).map(n => {
        return {
          name: n,
          path: `${vueMap[n]}`
        }
      });
  
      //pipe
      let pipeMap = {};
      let pipeList = [];
      const pipePath = this.pipePath;
      if (fs.existsSync(pipePath)) {
        const pipes = await readDir(pipePath);
        pipeList = pipes
          .filter(f => f.lastIndexOf('package.json') !== -1)
          // .map(f => f.replace(path.sep + 'package.json', ''))
          // .sort()
  
          .map(f => {
  
            let repath = f.replace(path.sep + 'package.json', '');
            let contentStr = fs.readFileSync(f).toString();
            let content = JSON.parse(contentStr);
            let name = content.docs.name;
            let nameArr = name.split('.');
            name = nameArr[nameArr.length - 1];
            pipeMap[name] = true;
            let distPath=path.join(repath,`./dist/${name}.umd.min.js`);
            if(fs.existsSync(distPath)){
              pipeContent[name]=Buffer.from(fs.readFileSync(distPath)).toString();
            }
            return {
              name: name,
              path: path.relative(path.dirname(context.componentFile), repath)
            }
          })
  
      }
  
      const platformPipePath = path.join(context.projectPath, configJson.runtime.platformPipe);
      if (fs.existsSync(platformPipePath)) {
        const pipes = await readDir(platformPipePath);
        pipes
          .filter(f => f.lastIndexOf('package.json') !== -1)
  
          .forEach(f => {
            let repath = f.replace(path.sep + 'package.json', '');
            let contentStr = fs.readFileSync(f).toString();
            let content = JSON.parse(contentStr);
            let name = content.docs.name;
            let nameArr = name.split('.');
            name = nameArr[nameArr.length - 1];
            if (!pipeMap[name]) {
              let distPath=path.join(repath,`./dist/${name}.umd.min.js`);
              if(fs.existsSync(distPath)){
                pipeContent[name]=Buffer.from(fs.readFileSync(distPath)).toString();
              }
              pipeList.push({
                name: name,
                path: content.name
              })
            }
  
          })
      }
  
  
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
  
      await util.writeFile(context.componentFile, content);
      
      platform.sendSuccessResult(req,{
        pipe:pipeContent,
        component:componentContent,
        css:compoCss.join('')
      });

    } catch (error) {
      
    }
   
  }
  init(platform) {
    const projectPath = this.projectPath;
    const context = this;
    return async function (req) {
      try {
        // 先备份一次vue.config.js
        const vueConfigPath = path.join(projectPath, 'vue.config.js');
        const vueConfigBackup = fs.readFileSync(vueConfigPath, {
          encoding: 'utf8'
        });

        try {


          const absProjectPath = path.resolve(projectPath);


          //组件列表
          let vueMap = {};


          //平台级组件
          const platformComponentPath = path.join(context.projectPath, configJson.runtime.platformComponent);
          if (fs.existsSync(platformComponentPath)) {
            const components = await readDir(platformComponentPath);
            components
              .filter(f => f.lastIndexOf('package.json') !== -1)

              .forEach(f => {

                const contentStr = fs.readFileSync(f).toString();
                const content = JSON.parse(contentStr);

                const paths = f.split(path.sep);
                const scope = content.name;
                const name = camelcase(paths[paths.length - 2]);

                vueMap[name] = scope;

                //参数编辑器
                if (content.paramEditor) {
                  vueMap[content.paramEditor.name] = path.join(scope, content.paramEditor.path);
                }
                //自定义组件编辑器
                if (content.editor) {
                  vueMap[content.editor.name] = path.join(scope, content.editor.path);
                }

              })
          }


          //项目级组件
          if (fs.existsSync(context.componentPath)) {
            const files = await readDir(context.componentPath);
            files
              //读取每一个package.json
              .filter(f => f.lastIndexOf('package.json') !== -1)
              //读取组件和编辑器
              .forEach(f => {
                try {
                  // .map(f => f.replace(path.sep + 'package.json', ''))
                  let rePath = f.replace(path.sep + 'package.json', '');

                  const contentStr = fs.readFileSync(f).toString();
                  const content = JSON.parse(contentStr);

                  const paths = f.split(path.sep);
                  // const scope=content.name;
                  const name = camelcase(paths[paths.length - 2]);

                  const filepath = path.relative(path.dirname(context.componentFile), rePath);

                  vueMap[name] = filepath;

                  //参数编辑器
                  if (content.paramEditor) {
                    vueMap[content.paramEditor.name] = path.join(filepath, content.paramEditor.path);
                  }

                  //自定义组件编辑器
                  if (content.editor) {
                    vueMap[content.editor.name] = path.join(filepath, content.editor.path);
                  }
                } catch (e) { }
              });

          }

          const vueFiles = Object.keys(vueMap).map(n => {
            return {
              name: n,
              path: `${vueMap[n]}`
            }
          });

          //pipe
          let pipeMap = {};
          let pipeList = [];
          const pipePath = this.pipePath;

          if (fs.existsSync(pipePath)) {
            const pipes = await readDir(pipePath);
            pipeList = pipes
              .filter(f => f.lastIndexOf('package.json') !== -1)
              // .map(f => f.replace(path.sep + 'package.json', ''))
              // .sort()

              .map(f => {

                let repath = f.replace(path.sep + 'package.json', '');
                let contentStr = fs.readFileSync(f).toString();
                let content = JSON.parse(contentStr);
                let name = content.docs.name;
                let nameArr = name.split('.');
                name = nameArr[nameArr.length - 1];
                pipeMap[name] = true;

                return {
                  name: name,
                  path: path.relative(path.dirname(context.componentFile), repath)
                }
              })

          }

          const platformPipePath = path.join(context.projectPath, configJson.runtime.platformPipe);
          if (fs.existsSync(platformPipePath)) {
            const pipes = await readDir(platformPipePath);
            pipes
              .filter(f => f.lastIndexOf('package.json') !== -1)

              .forEach(f => {
                let contentStr = fs.readFileSync(f).toString();
                let content = JSON.parse(contentStr);
                let name = content.docs.name;
                let nameArr = name.split('.');
                name = nameArr[nameArr.length - 1];
                if (!pipeMap[name]) {
                  pipeList.push({
                    name: name,
                    path: content.name
                  })
                }

              })
          }


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

          await util.writeFile(context.componentFile, content);

          //删除package-lock.josn
          // try {
          //   fs.unlinkSync(path.resolve(absProjectPath, 'package-lock.json'));
          // } catch (e) {
          //   console.log(e.message);
          // }


          //重新安装一次依赖
          if (!context.isInit) {
            await execCmd(`${config.module.preview.script.init}`, absProjectPath);

          }

          //npm run style  生成样式
          //覆盖一下，生成独立css的，方便所见即所得
          fs.writeFileSync(vueConfigPath, `
          module.exports = {
              baseUrl: './',
              devServer: {
                port: 7007
              },
              productionSourceMap: false,
              filenameHashing: false,
              css: {
                loaderOptions: {
                  sass: {
                    // 向全局sass样式传入共享的全局变量
                    data: '@import "./element-variables.scss";'
                  }
                }
              }
          }
        `)
          //打包样式
          await execCmd(config.module.preview.script.style, absProjectPath);

          // npm run script 生成脚本
          //再覆盖一下，生成组件内css的，方便样式配置可以
          fs.writeFileSync(vueConfigPath, `
          module.exports = {
              baseUrl: './',
              devServer: {
                port: 7007
              },
              productionSourceMap: false,
              filenameHashing: false,
              css: {
                  modules: false,
                  extract: false,
                  sourceMap: false,
                  loaderOptions: {
                    sass: {
                      // 向全局sass样式传入共享的全局变量
                      data: '@import "./element-variables.scss";'
                    }
                  }
              }
          }
        `)
          //打包组件
          await execCmd(config.module.preview.script.script, absProjectPath);


          platform.sendSuccessResult(req, JSON.stringify({
            content: {
              result: true,
            }
          }));

        } catch (e) {
          platform.sendErrorResult(req, e);
        }

        fs.writeFileSync(vueConfigPath, vueConfigBackup);
      } catch (e) {
        platform.sendErrorResult(req, e);
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

        const css = html
          .match(/<link[^>]+>/g)
          .filter(l => l.indexOf('.css') !== -1 && l.indexOf('=//') === -1 && l.indexOf('http') === -1)
          .map(e => e.match(/href=([^\s]+)/)).filter(e => !!e).map(e => e[1]);


        const content = Array.from(new Set(css)).map(f => fs.readFileSync(path.resolve(path.join(config.runtime.dist, f)).toString()));

        platform.sendSuccessResult(req, `<style>${content.join('')}</style>`);
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  }

  runtimeWidget(platform) {
    const projectPath = this.projectPath;
    const context=this;
    return function (req) {

      try {
        console.log("3333333")
        if (req.data && req.data.type === 'component') {
          console.log(req);

          context.initComponent(platform,req)
        } else {
          let _path = path.resolve(path.join(projectPath, config.module.preview.result));
          const js = Buffer.from(fs.readFileSync(_path)).toString();

          platform.sendSuccessResult(req, js);
        }


      } catch (e) {
        // console.error(e)
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

    Object.keys(consumption).map(c => router.get(c, preview[consumption[c]]()));

    return router;
  },
  Preview: Preview
};
