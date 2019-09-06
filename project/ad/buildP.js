const path = require('path');
const fs = require("fs");

//获取配置
const getConfig = () => {

    let params = {};
    process.argv.filter(e => e.startsWith('--')).forEach(e => {
      const f = e.replace(/^--/, '');
      const parts = f.split('=');
      params[params[0]] = parts.slice(1).join('=');
      if (parts.length && parts[0]) {
        params[parts[0]] = parts.slice(1).join('=')
      }
    });
    return params;
  };


  console.log(getConfig())

const componentName = getConfig().name;


const {
    exec
} = require('child_process');
const camelcase = require('camelcase');
const readdir = (file) => {
    return new Promise((resolve, reject) => {
        fs.readdir(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}


const readFile = (file) => {

    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const exe = (src, target, name) => {
    console.log(src)
    console.log(target)
    console.log(name);
    exec(`vue build -t lib  -d ${target} -n ${name} ${src}`, {
        shell: true,
        maxBuffer: 1024*1024, 
        cwd: __dirname
    }, (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });
}


const packagePipe = async (tPath, dir) => {

    
        let packageJsonPath = path.join(tPath, `${componentName}/package.json`);
        if (fs.existsSync(packageJsonPath)) {
            let content = await readFile(packageJsonPath);

            content = JSON.parse(content.toString());
            if (content.docs) {
                let name = content.docs.name;
                let nameArr = name.split('.');
                name = nameArr[nameArr.length - 1];
                let src = `${tPath}/${name}/${content.main}`;

                let target = `${tPath}/${name}/dist/`;
                exe(src, target, `${name}`);


            }


        }
    
}

(async () => {


    let tPipePath = "./pipe";//项目级管道
    let mPipePath = "../pipe";//平台级管道
    let endPipePath ="";

 
    let distpPath1=path.join(tPipePath,componentName);
    let distpPath2=path.join(mPipePath,componentName);

    if(fs.existsSync(distpPath1)){
        console.log('项目级管道')
        endPipePath = tPipePath;
    }else if(fs.existsSync(distpPath2)){
        console.log('平台级管道')
        endPipePath = mPipePath;
    }
    
    let dir = await readdir(endPipePath);
    await packagePipe(endPipePath, dir);

})()