const router = require('koa-router')()
const Util = require('./Util');
const fs = require('fs');
const path = require('path');
const entryPath = './runtime';

class SocketListener {
  observe(platform) {
    this.platform = platform;
    this.init();
  }

  init() {
    this.platform.socket.on('widget', async req => {
      let target = `${entryPath}/src/@aweb-components`;
      let dir = await Util.readdir(target);
      let menu = [];
      for (let i = -1, item; item = dir[++i];) {
        let subDir = `${target}/${item}`;
        let packageJsonPath = `${subDir}/package.json`;
        let statItem = await Util.stat(subDir)
        if (statItem.isDirectory() && fs.existsSync(packageJsonPath)) {
          let packageJsonData = await Util.readFile(packageJsonPath);
          packageJsonData = JSON.parse(packageJsonData);
          let docs = packageJsonData.docs;
          if (docs) {
            docs.main = packageJsonData.main;
            menu = [...menu, docs]
          }
        }
      }
      this.platform.sendSuccessResult(req, menu)
    });

    this.platform.socket.on('dict', async req => {
      let target = `${entryPath}/src/datadict`;
      let dir = await Util.readdir(target);
      let ret = {};
      for (let i = -1, item; item = dir[++i];) {
        let subFile = `${target}/${item}`;
        let statItem = await Util.stat(subFile)
        if (statItem.isFile() && path.extname(subFile) === '.json') {
          let dictData = await Util.readFile(subFile);
          dictData = JSON.parse(dictData);
          ret = {
            ...ret,
            ...dictData
          };
        }
      }
      this.platform.sendSuccessResult(req, ret)
    });
    this.platform.socket.on('previewPath',async res=>{
          console.log('res',res);
      this.platform.socket.emit('preview-page',{});
    });
   
  }

}

module.exports = SocketListener
