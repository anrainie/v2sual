const path = require("path");
const fs = require("fs");
const util = require("../../util/Util");
const downLoad = require("./downLoad");
const Router = require("koa-router");
// const Result = require('../../util/Result');
const { Preview } = require("../Preview");
const config = require("../../config/config.json");

const net = require('net');

// 检测端口是否被占用
function portIsOccupied(port) {
  return new Promise((resolve) => {
    // 创建服务并监听该端口
    var server = net.createServer().listen(port)

    server.on('listening', function () { // 执行这块代码说明端口未被占用
      server.close() // 关闭服务
      resolve(false);
      //  console.log('The port【' + port + '】 is available.') // 控制台输出信息
    })

    server.on('error', function (err) {
      if (err.code === 'EADDRINUSE') { // 端口已经被使用

        resolve(true);
      }
    })
  })
}

// 执行
// portIsOccupied(1987)
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

        let { name, serverPort, desp, port,mockPort} = req.data;
        let hasPort,hasMorkPort,hasServerPort
        
        try{
           hasPort=await portIsOccupied(port);
           hasMorkPort=await portIsOccupied(mockPort);
           hasServerPort=await portIsOccupied(serverPort);
        }catch(e){

        }
      
        let msg=[];
        if(hasPort) msg.push('前端端口已经占用，请修改！') ;
        if(hasMorkPort) msg.push('假数据端口已经占用，请修改！') ;
        if(hasServerPort) msg.push('后台端口已经占用，请修改！') ;
        //  let hasUsePort= isAvailablePort.some(item=>!item);
         if(msg.length){

            platform.sendErrorResult(req, msg.join('\n'));
            return;
         }


        let dest = path.resolve(process.cwd(), `./project/${name}`);
        let packageJsonPath = path.resolve(process.cwd(), './package.json');
        if (!fs.existsSync(dest)) {
          await downLoad({ ...req.data, dest });
          if (fs.existsSync(packageJsonPath)) {
            let content = await util.readFile(packageJsonPath);
            content = JSON.parse(content.toString());
            !content.scripts && (content.scripts = {})
            content.scripts[name] = `node  ./server/server.js sh=http://localhost sp=7003 id=${name} name=${desp} ch=http://localhost cp=${serverPort} ocp=${serverPort} base=./project/${name} pipe=../pipe  preview=http://localhost:${port}`;
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

      const preview = new Preview(dest, path.join(dest, config.runtime.component), path.join(dest, config.runtime.componentFile), true);
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
