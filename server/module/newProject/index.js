const path = require("path");
const fs = require("fs");
const util = require("../../util/Util");
const downLoad = require("./downLoad");
const Router = require("koa-router");
// const Result = require('../../util/Result');
 const {Preview} = require("../Preview");
 const config=require("../../config/config.json");

const {
  exec
} = require('child_process');
let project = {
  'getThemeLayout'(platform) {
    return async (req) => {
      try {
        let content = await util.$get(`https://npm.awebide.com/-/projectModules/`);
        content = JSON.parse(content.toString());
        let theme = content.v2Theme.map((item) => {
          let name = item.name;
          return {
            name: name,
            desp: item.description || name
          }
        });

        let layout = content.v2Layout.map((item) => {
          let name = item.name;

          return {
            name: name,
            desp: item.description || name
          }
        });
        let ret = {
          theme: theme,
          layout: layout
        }
        platform.sendSuccessResult(req, ret);



      } catch (e) {
        platform.sendErrorResult(req, e);
        console.log(e);
      };
    }

  },
  'newProject'(platform) {
    return async (req) => {

      try {

        let { name, serverPort, desp, port } = req.data;
        let dest = path.resolve(process.cwd(), `./project/${name}`);
        let packageJsonPath = path.resolve(process.cwd(), './package.json');
        if (!fs.existsSync(dest)) {
          await downLoad({ ...req.data, dest });
          if (fs.existsSync(packageJsonPath)) {
            let content = await util.readFile(packageJsonPath);
            content = JSON.parse(content.toString());
            !content.scripts && (content.scripts = {})
            content.scripts[name] = `node  ./server/server.js sh=http://localhost sp=7003 id=${name} name=${desp} ch=http://localhost cp=${serverPort} ocp=${serverPort} base=./project/${name}  preview=http://localhost:${port}`;
            await util.writeFile(packageJsonPath, JSON.stringify(content, null, 6));

          }
          platform.sendSuccessResult(req, '下载成功');

        } else {
          // platform.send({callbackId:'/project/addSuccess'},{status:false,msg:'项目名已经存在'})
          platform.sendErrorResult(req, '项目名已经存在');
        }


      } catch (e) {
        // util.rimraf(projectPath);
        console.log(e);
        platform.sendErrorResult(req, e);

      }
    }
  },
  'install'(platform) {
    return async (req) => {

      let dest = path.resolve(process.cwd(), `./project/${req.data.name}`);
      
      await util.execCmd(`${config.module.preview.script.init} --registry=https://npm.awebide.com`, dest);

      const preview = new Preview(dest,path.join(dest,config.runtime.component),path.join(dest,config.runtime.componentFile));
      preview.init(platform)(req);

      // let installProecess = exec('npm install --registry=https://npm.awebide.com', { encoding: "utf8", cwd: dest }, function (error, stdout, stderr) {
      //   if (error) {
      //     platform.sendErrorResult(req, error);

      //   } else {
      //     platform.sendSuccessResult(req, '安装成功!');
      //   }


      // })
      // installProecess.stderr.on('data', data => {

      //   console.log(data)


      // });

      // installProecess.stdout.on('data', data => {
      //   console.log(data)


      // });
    }
  }
}



module.exports = {
  consume(platform, consumption) {
    Object.keys(consumption).map(c => {
      platform.socket.on(c, project[consumption[c]](platform))
    });
  },
  router(http) {
    const router = Router();
    Object.keys(http).map(c => {
      router.get(c, project[http[c]])
    });
    return router;
  }
}
