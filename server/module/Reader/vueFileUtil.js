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


const TEMPLATE = `{
    "structure": {
      "id": "root",
      "component": "v2Container",
      "direction": "row",
      "layout": [100],
      "style": {
        "width": "100%",
        "height": "100%"
      },
      "data": {},
      "children": [{
        "data": {
          "direction": "col",
          "layout": "[50,50]"
        },
        "belongTo": "aui",
        "icon": "iconfont icon-password",
        "type": "layout",
        "href": "av-layout-colctn",
        "author": "zhanghaixian@agree.com.cn",
        "version": 510000,
        "accept": "",
        "name": "横向布局",
        "option": [{
          "name": "direction",
          "desp": "排列方式",
          "defaultValue": "col",
          "type": "string_select",
          "valueArray": ["row", "col"],
          "despArray": ["横排", "竖排"]
        }, {
          "name": "layout",
          "desp": "栅格",
          "hidden": false,
          "defaultValue": [50, 50],
          "type": "tags_input"
        }],
        "css": {
          "style": [{
            "desp": "栅格",
            "cssAttrs": "position margin padding border top left right bottom",
            "name": "row"
          }, {
            "desp": "子容器",
            "cssAttrs": "top right bottom left width height min-width max-width min-height max-height position overflow margin padding",
            "name": "divCtn"
          }]
        },
        "style": {},
        "main": "index.vue",
        "children": [null, null],
        "component": "V2AuiComponent",
        "id": 31792419,
        "pid": "root",
        "layout": [50, 50],
        "direction": "row"
      }]
    }
  }`