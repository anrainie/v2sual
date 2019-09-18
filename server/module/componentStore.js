const path = require("path");
const fs = require("fs");

const Router = require("koa-router");
const Result = require('../util/Result');
const util=require('../util/Util');
const config = require('../config/config.base');
const {exec}=require('child_process')
// 执行
// portIsOccupied(1987)
let project = {
  getComponentList:async(ctx)=> {

    try {
       let projectPath=config.runtime.base;
       let pakcageJsonPath=path.join(projectPath,'./package.json');
       let dep={};
       let res=[];
       if(fs.existsSync(pakcageJsonPath)){
          let packageJsonData= await util.readFile(pakcageJsonPath);
          packageJsonData=JSON.parse(packageJsonData.toString());
          dep={...packageJsonData.dependencies,...packageJsonData.devDependencies}
       }

    //    let depData=Object.keys(dep);

       let pro=await util.$get("https://npm.awebide.com/-/projectModules/");
       pro=JSON.parse(pro);
       let v2Components=pro.v2Components;
       let v2Pipes=pro.v2Pipes;
       v2Components= v2Components.map(item=>{
            if(dep.hasOwnProperty(item.name)){
                item.installed=true;
            }else{
              item.installed=false;

            }
            item.rate=5;
            item.opting=false;
            return item;
       })
       v2Pipes= v2Pipes.map(item=>{
        if(dep.hasOwnProperty(item.name)){
            item.installed=true;
        }else{
          item.installed=false;

        }
        item.rate=5;
        item.opting=false;

        return item;
         })

       Result.success(ctx, [{
           title:'组件列表',
           data:v2Components
       },{
        title:'管道列表',
        data:v2Pipes
       }]);
    } catch (error) {
        Result.error(ctx, error)
    }

  },
  componentOpt:async(ctx)=>{
    try {
      let projectPath=config.runtime.base;
      let {name,opt}=ctx.query;
      if(name && opt){
         await new Promise((resolve, reject) => {
              exec(`npm ${opt} ${name} --registry=https://npm.awebide.com`, { cwd: projectPath }, function (error, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);
                  if (error) {
                      reject(error);
                  }

                  resolve();
              });
          });
        Result.success(ctx);
      }else{
        Result.error(ctx,`操作不正确！`);

      }


     } catch (error) {
         Result.error(ctx, error)
     }

  },
  imgList:async(ctx)=>{




    let list=[];
    let cursor=1;

    while(list.length<50){
      cursor++;
      let content=await util.$get(`${config.module.componentStore.server}/p/${cursor}/`);
      const t=(content.match(/srcSet="([^"]+)"/g)||[]).map(e=>e.replace(/srcSet="([^"]+)"/,'$1'));

      list=list.concat(t);
    }

    Result.success(ctx,list);

  }
}
module.exports = {
    consume(platform, consumption) {
      Object.keys(consumption).map(c => {
        platform.on(c, project[consumption[c]](platform))
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
