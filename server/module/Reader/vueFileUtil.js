/**
 * 用于读写vue文件的工具
 * vue文件的读写特殊性在于：
 * 1、有中间文件def
 * 2、创建vue时，def可能还不存在
 * 3、保存vue时，先生成def，然后通过def来构建vue
 */
const fs = require('fs')
const parseUtil = require('./parseUtil');
const logicFile = require('./logicFile');

module.exports = {
  read: (path) => new Promise((res, rej) => {
    //针对vue文件，读取同名.def文件
    let defPath = path + '.def'
    let p;
    if (fs.existsSync(defPath)) {
      //存在则读取def
      fs.readFile(defPath, 'utf8', function (err, data) {
        if (err)
          rej(err)
        res(data);
      });
    } else {
      //不存在则读取template
      res(TEMPLATE);
    }
  }),
  write: (path, content) => new Promise((res, rej) => {
    //针对vue文件，读取同名.def文件
    let defPath = path + '.def'
    fs.writeFile(defPath, JSON.stringify(content), function (err) {
      if (err) rej(err);
      else res();
    });
    //将template写入vue文件中
    fs.writeFile(path, parseUtil.json2html(JSON.stringify(content)) + logicFile.json2script(JSON.stringify(content)), function (err) {
      if (err) rej(err);
      else res();
    });
  })
};


const TEMPLATE =`{
  "structure":{
      "id":"root","component":"v2Container",
      "direction":"row",
      "layout":[50,50],
      "style":{"width":"100%","height":"100%"},"data":{},
      "children":[]
      
  },
  "logic":{},
  "dataBaskect":{}

}`