

const path = require("path");
const fs = require("fs");
const {spawn} = require("child_process");
const rimraf = require("rimraf");


module.exports={

    //  mkdir(path){
        
    //     return new Promise((resolve,reject)=>{
                
    //             mkdirp(path,function(err){
    //                     if (err) {
    //                       reject(err)
    //                     }else{
    //                       resolve(true);
    //                     }
    //             });
    //     })
    // }
    rename(src,dest){
        
        return new Promise((resolve,reject)=>{
                
            fs.rename(src,dest, function(err){
                if (err) {
                    reject(err)
                  }else{
                    resolve(true);
                  }
            })
        })
    },
  
    rimraf(path){
        return new Promise((resolve, reject) => {
            rimraf(path,  (err)=>{
                if (err) {
                    reject(err)
                  }else{
                    resolve(true);
                  }
            })
        });
    },

    spawn(path,command){
        return new Promise((resolve,reject)=>{
            const child = spawn(command, [], {
                shell: true,
                cwd: path,
                stdio: 'inherit'
            });
          //  child.stdout.pipe(process.stdout);

            child.on('close', async function (code)  {

                if(code!==0){
                    reject(`子进程${command}错误`);
                }
                try{
                    resolve();
                }catch(err){
                    Log.error('子进程退出，代码：', err.message || err);
                }
             

            })
            

        })
    },
     writeFile (file, data) {
      

        return new Promise(async (resolve, reject) => {

            try{
                let dir=path.dirname(file);
          
         
                if(!fs.existsSync(dir)){
                    await this.mkdir(dir);
                }
                
                fs.writeFile(file, data,'utf8', (err) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });

            }catch(e){
                Log.error('writeFile', e.message);
            }
            
        });
    },

    
    
    readdir(file){
        return new Promise((resolve, reject) => {
            fs.readdir(file, (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });

     
        
    },

    // copyFile(src,dest){
    //     return new Promise((resolve,reject)=>{
    //         copy(src, dest,function(err){
    //             if(err){
    //                 reject(err)
    //             }
    //             resolve();
    //         })
    //     })
    // },

   

    stat(file) {
        return new Promise((resolve, reject) => {
            fs.stat(file, (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },


    readFile(file) {
  
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf8', (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },

     getUID () {
        var sId = "",
            i = 24;
        for (; i--;) {
            sId += Math.floor(Math.random() * 16.0).toString(16).toUpperCase();
            if (i == 4) {
                sId += "-";
            }
        }
        return sId;
    }

}