const router = require('koa-router')()
const Util = require('../Util');
const fs = require('fs');
const path = require('path');
const entryPath = './runtime';


module.exports = {
  'widget'(platform) {
    return async (req) => {
      try {
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

        platform.sendSuccessResult(req, menu);
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  },
  'dict'(platform) {
    return async (req) => {
      try {
        let target = `${entryPath}/src/datadict`;
        let dir = await Util.readdir(target);
        let ret = {};
        for (let i = -1, item; item = dir[++i];) {
          let subFile = `${target}/${item}`;
          let statItem = await Util.stat(subFile)
          if (statItem.isFile() && path.extname(subFile) === '.json') {
            let dictData = await Util.readFile(subFile);
            dictData = JSON.parse(dictData);

            ret = { ...ret, ...dictData };;
          }
        }

        platform.sendSuccessResult(req, ret);
      } catch (e) {
        platform.sendErrorResult(req, e);
      }


    }
  }
}