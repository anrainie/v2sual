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
const TEMPLATE = require('./vue.temp.json');
const AD_TEMPLATE = require('./ad_vue.temp.json');
const nodejsPath=require('path');
const configBase = require('../../config/config.base');
const ideType = configBase.server.type;
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
      console.log('ideType',ideType);

      if(ideType ==='ad'){
        res(JSON.stringify(AD_TEMPLATE));
      }else{
        res(JSON.stringify(TEMPLATE));
      }
     

    }
  }),
  write: (path, content) => new Promise((res, rej) => {
    //针对vue文件，读取同名.def文件
    let defPath = path + '.def'
    let text = JSON.stringify(content);
    fs.writeFile(defPath, text, function (err) {
      if (err) rej(err);
      else res();
    });
    //将template写入vue文件中
    fs.writeFile(path, parseUtil.json2html(text) + "\n" 
    + logicFile.json2script(text,path) + "\n"
    + parseUtil.json2scss(text),
    function (err) {
        if (err) rej(err);
        else res();
      });
  }),
  createFile: ({
    path,
    name,
    props,
  }) => {
    let template = ideType ==='ad'?AD_TEMPLATE:TEMPLATE;
    if (props) {
      template = {
        ...template,
        ...props,

        //修改时间的时间戳
        timestamp:new Date().getTime()
      }
    }
    return new Promise((res, rej) => {
      let realPath = nodejsPath.join(path , name);
      let defPath = realPath + '.def'
      fs.writeFile(defPath, JSON.stringify(template), function (err) {
        if (err) rej(err);
      });
      fs.writeFile(realPath, `<tempalte></tempalte>
      <script></script>
      <style></style>`, {
        flag: 'wx+'
      }, (err) => {
        if (err) {
          rej(err);
        }
        res({
          path: realPath
        });
      });
    });
  },
};
