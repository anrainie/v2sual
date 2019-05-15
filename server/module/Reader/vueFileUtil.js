/**
 * 用于读写vue文件的工具
 * vue文件的读写特殊性在于：
 * 1、有中间文件def
 * 2、创建vue时，def可能还不存在
 * 3、保存vue时，先生成def，然后通过def来构建vue
 */
const fs = require('fs')
const parseUtil = require('./parseUtil');

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
    fs.writeFile(path, parseUtil.json2html(JSON.stringify(content)), function (err) {
      if (err) rej(err);
      else res();
    });
  })
};


const TEMPLATE = `{"structure":{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"row":{"position":"","top":"","right":"","bottom":"","left":"","margin":"","border":"","padding":""},"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","href":"av-layout-colctn","component":"av-layout-colctn","widget":{"belongTo":"aui","icon":"iconfont icon-password","type":"layout","href":"av-layout-colctn","author":"zhanghaixian@agree.com.cn","version":510000,"accept":"","name":"横向布局","option":[{"name":"direction","desp":"排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"layout","desp":"栅格","hidden":false,"defaultValue":[50,50],"type":"string_input"}],"css":{"style":[{"desp":"栅格","cssAttrs":"position margin padding border top left right bottom","name":"row"},{"desp":"子容器","cssAttrs":"top right bottom left width height min-width max-width min-height max-height position overflow margin padding","name":"divCtn"}]},"style":{},"main":"index.vue"},"children":[null,{"component":"av-layout-colctn","href":"av-layout-colctn","layout":[50,50],"direction":"row","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"radio":{"margin":"","border-width":"","border-radius":"","padding":"","height":"","width":""},"font":{"padding-left":"","font-size":"","color":""}},"label":"标题","titleMode":"row","value":"","options":[{"active":"true","text":"文本","disabled":false,"border":false,"label":""},{"active":true,"text":"文本","disabled":false,"border":false,"label":""}],"href":"av-form-radio","component":"av-form-radio","widget":{"belongTo":"aui","icon":"iconfont icon-password","type":"form","href":"av-form-radio","author":"fengjiarong@agree.com.cn","version":510000,"accept":"foundationRowCtn divCtn","name":"单选框","option":[{"name":"label","desp":"标题","defaultValue":"标题","type":"string_input"},{"name":"titleMode","desp":"标题排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"value","desp":"选中的值","defaultValue":0,"type":"string_input"},{"name":"options","desp":"配置项","defaultValue":"","type":"array","appendNumber":1,"attrInEachElement":[{"name":"text","desp":"文本","defaultValue":"文本","type":"string_input"},{"name":"disabled","desp":"是否禁用","defaultValue":false,"type":"boolean"},{"name":"border","desp":"是否带边框","defaultValue":false,"type":"boolean"},{"name":"label","desp":"对应值","defaultValue":false,"type":"string_input"}],"append":[{}]}],"css":{"style":[{"desp":"标题","cssAttrs":"font-size color font-weight","name":"label"},{"desp":"单选框","cssAttrs":"width height border-width border-radius padding margin","name":"radio"},{"desp":"选项文字","cssAttrs":"font-size  color padding-left","name":"font"}]},"main":"index.vue"},"children":[null,null],"id":1557761115858,"pid":1557760827010,"direction":"row"},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"row","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"href":"av-form-input","component":"av-form-input","widget":{"belongTo":"aui","icon":"iconfont icon-password","type":"form","href":"av-form-input","author":"fengjiarong@agree.com.cn","version":510000,"accept":"foundationRowCtn divCtn","name":"输入框","option":[{"name":"label","desp":"标题","defaultValue":"标题","type":"string_input"},{"name":"titleMode","desp":"标题排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"labelWitdh","desp":"标题宽度","defaultValue":"80px","type":"string_input"},{"name":"placeholder","desp":"placeholder","defaultValue":"请选择","type":"string_input"},{"name":"value","desp":"值","defaultValue":"","type":"string_input"},{"name":"clearable","desp":"是否可清空","defaultValue":false,"type":"boolean"}],"css":{"style":[{"desp":"标题","cssAttrs":"font-size color font-weight","name":"label"},{"desp":"检验边框","cssAttrs":"border-color","name":"borderStyle"},{"desp":"检验文字","cssAttrs":"color","name":"fontStyle"}]},"main":"index.vue"},"children":[],"id":1557760827010,"pid":1557729515923}],"id":1557761115858,"pid":1557729515923}],"id":1557729515923,"pid":"root"}]}}`
