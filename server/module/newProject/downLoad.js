 
 const path=require('path')
 const fs=require('fs')
 const util =require("../../util/Util");

 const NPM_URL='https://npm.awebide.com';
 const projectScope=`${NPM_URL}/-/projectModules/`;
 const WEBIDE_TGZ=`${NPM_URL}/@aweb-template/AWEBIDE-support/download/@aweb-template/AWEBIDE-support-__version__.tgz`;
 const VUE_SPA_TGZ=`${NPM_URL}/@aweb-template/vue-spa/download/@aweb-template/vue-spa-__version__.tgz`;
  const TGZ=`${NPM_URL}/__scope/download/__scope-__version__.tgz`;

const downLoad=async(urlPath,dest,_target)=>{
    let vueData=await util.urlLib(urlPath);
    let cliPath=path.resolve(dest,'./__cli');
    await util.uncompress(vueData,path.resolve(dest,cliPath))
    await util.copyDir(path.resolve(cliPath,'./package'),path.resolve(dest,_target));
    await util.rimraf(cliPath);
}

/**
    
 */
const init=async(opt={})=>{
    try{
        let {dest,layout,theme,port,mockPort,serverPort,name}=opt;
        let content= await util.$get(projectScope);
        content=JSON.parse(content.toString());
        let vueSpaScope=content.templates.filter(item=>item.name==='@aweb-template/vue-spa');
        let supportScope=content.templates.filter(item=>item.name==='@aweb-template/AWEBIDE-support');

        if(dest){
            //npmrc
            await util.writeFile(path.join(dest,'./.npmrc'),`registry=${NPM_URL}`);

            //下载vue-spa
            if(vueSpaScope.length){
                let version= vueSpaScope[0].version;
                let spa_path=VUE_SPA_TGZ.replace('__version__',version);
                await downLoad(spa_path,dest,'./');
                console.log('成功下载vue-spa');
            }

           //修改package.json 管道和组件,port
           let packageJsonPath=path.resolve(dest,'./package.json'),packageData={};
           if(fs.existsSync(packageJsonPath)){
               packageData=await util.readFile(packageJsonPath);
               packageData=JSON.parse(packageData.toString());

               let deps=[...content.v2Components,...content.v2Pipes];
               for(let i=-1,item;item=deps[++i];){
                   let map={};
                   map[`${item.name}`]=`^${item.version}`
                   packageData.dependencies={...packageData.dependencies,...map}
                   !packageData.scripts &&  (packageData.scripts={})
                   packageData.scripts.serve=`vue-cli-service serve --publicPath=./ --sockPort=${port} --sockPath=/sockjs-node --port=${port} --mockPort=${mockPort}`;
                   packageData.scripts.preview=`vue-cli-service serve --publicPath=/${name}/ --sockPort=443 --sockPath=/${name}/sockjs-node --port=${port} --mockPort=${mockPort}`;
                   packageData.scripts.mock=`node ./server.js --port=${mockPort}`;
                   packageData.scripts.mockPreview=`node ./server.js --port=${mockPort} --prefix=/${name}`;
                   packageData.scripts.component=`vue build -t lib -d v2sual ./src/@aweb-components/aweb.components.js`;
               }
           }
        
            //下载webide基础项目
            if(supportScope.length){
                let version= supportScope[0].version;
                let webide_path=WEBIDE_TGZ.replace('__version__',version);
                 await downLoad(webide_path,dest,'./');
                console.log('成功下载WEBIDE基础项目');
            }
        
           

            if(theme){
                let themeScope=content.v2Theme.filter(item=>item.name===theme);
                if(themeScope.length){
                    let theme_path=TGZ.replace('__version__',themeScope[0].version).replace(/__scope/g,theme);
                    await downLoad(theme_path,dest,'./');
                     console.log('成功下载主题');
                }
               
            }

            if(layout){
                let layoutScope=content.v2Layout.filter(item=>item.name===layout);
                if(layoutScope.length){
                    let theme_path=TGZ.replace('__version__',layoutScope[0].version).replace(/__scope/g,layout);
                    await downLoad(theme_path,dest,'./src/views');
                    console.log('成功下载布局');
                }
               
            }

            await util.writeFile(packageJsonPath,JSON.stringify(packageData,null,6));
        }
       


        
    }catch(error){
        util.rimraf(opt.dest);
        throw error;
    }
}

module.exports = init;
