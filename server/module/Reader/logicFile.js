const UglifyJS = require('uglify-es-web');
const esprima = require("esprima");
const escodegen = require("escodegen");
let str = `R._fun_(1,str,{"a":"b"},[1,2],R.add(1,R.add(2,2)))`,
  // 函数ast
  res = esprima.parseScript(str),
  // 函数入参
  funarg = res.body[0].expression.arguments,
  // 函数入参模板
  Literal = funarg[0],
  Identifier = funarg[1],
  ObjectExpression = funarg[2],
  ArrayExpression = funarg[3],
  CallExpression = funarg[4];


/**
 * 将json转换成script
 * @param {String} htmlStr 
 */
let json2script = function (json,path) {
  let content = JSON.parse(json),
    data = content.dataBasket.data,
    structure = content.structure,
    logic = content.logic,
    porpStr,structureIndex=[],i,importList,
    template, finalStr,
    self = this,
    transfer = self.toCode(logic),
    dataStr = self.createData(data);

  let tempArr = [structure];
  let isCustom = path.indexOf(`\\_customWidget\\`)!== -1;

  while(i = tempArr.pop()){
    structureIndex.push(i);
    if(i.children){
      for(let k in i.children){
        if(i.children[k])tempArr.push(i.children[k]);
      }
    }
  }
  importList = createImport(structureIndex);
  porpStr = self.createProp(data);
  transfer = self.bindData(logic, content.dataBasket.mapping);


  // transfer数据初始化
  if (!transfer.pollList) transfer.pollList = [];

  if (transfer) {
    finalStr = `<script>
            ${isCustom?`import {root,cpt,widget} from '@/utils/v2-view';`:`import {root} from '@/utils/v2-view';`}
            ${importList.length?importList.map(item=>`import ${item.desp} from '${item.path}'`).join(";"):''}
            export default{
                data(){
                    return{
                        "CONTENT":{structure:${JSON.stringify(structure)}},
                        ${dataStr.join(",\n")}
                    }
                },
                props:{
                  ${porpStr.join(",\n")}
                },
                ${isCustom?`mixins:[root,cpt,widget],`:`mixins:[root],`}
                ${importList.length?`components:{${importList.map(item=>`${item.desp}`)}},`:''}
                methods:{${self.methodsToCode(transfer.methods)}},
                watch:{${self.methodsToCode(transfer.watch)}},
                beforeCreate(){
                    let ctx = this;
                    ${transfer.beforeCreate ? transfer.beforeCreate.code : ''}
                },
                created(){
                    let ctx = this;
                    ${transfer.pollList.length !== 0 ? `
                    ctx.poll_runnableList.push(${transfer.pollList.map(item => {
          return `{
                            run:${item.code},
                            freq:${item.freq}
                        }`
        })})
                    `: ``}
                    
                    ${transfer.created ? transfer.created.code : ''}
                },
                beforeMount(){
                    let ctx = this;
                    ${transfer.beforeMount ? transfer.beforeMount.code : ''}
                },
                mounted(){
                    let ctx = this;
                    ${transfer.mounted ? transfer.mounted.code : ''}
                    ${transfer.pollList.length === 0 ? '' : 'ctx.__resume();'}
                },
                beforeUpdate(){
                    let ctx = this;
                    ${transfer.beforeUpdate ? transfer.beforeUpdate.code : ''}
                },
                updated(){
                    let ctx = this;
                    ${transfer.beforeUpdate ? transfer.beforeUpdate.code : ''}
                },
                beforeDestroy(){ 
                    let ctx = this;
                        ${transfer.beforeDestroy ? transfer.beforeDestroy.code : ''}
                },
                destroyed(){
                    let ctx = this;
                        ${transfer.destroyed ? transfer.destroyed.code : ''}
                },
                pause(){/**页面切出**/},
                resume(){/**页面切入**/},

            };
        </script>`
  } else {
    template = `export default{data(){return{}},methods:{},watch:{}}`
    finalStr = `<script>import {root} from '@/utils/v2-view';${template}</script>`
  }
  return finalStr;
}
// 将方法转换成对应代码
let methodsToCode = function (obj) {
  let arr = [],
    i;
  for (i in obj) {
    arr.push(
      `${obj[i].name}(widget,item){
                let ctx = this;
                ${obj[i].code}
            }, `
    )
  }
  return arr.join("");
}
// 生成import
let createImport = function(structureIndex){
  let item;
  let list=[];
  for(item of structureIndex){
    if(item.cptpath){
      list.push({
        name: item.component,
        path: item.cptpath.replace(/\\/g,"/").replace("/src","@"),
        desp: toCamel(item.component)
      })
    }
  }
  return list;
}
// 转驼峰
let toCamel = function (str) {
  return str.replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}
// 绑定datas
let bindData = function (logic, mapping) {
  let arr = [],
    i;
  
  for (i in mapping) {
    mapping[i].map(item => {
      if(item.type === 'loop' && item.modelValue !== "__loopTarget"){
        arr.push(`ctx.$store.commit("registerBind",{ dataStr:"${item.dataValue}", wid:${item.id}, modelKey:"${item.modelValue}" });`);
      }else{
        arr.push(`ctx.$store.commit("registerBind",{ vueObj:this, data:this.${item.dataValue}, dataStr:"${item.dataValue}", wid:${item.id}, modelKey:"${item.modelValue}" });`);
      }
    });
  };
  if (logic.created)
    logic.created.code = logic.created.code.replace("/**data**/", `/**bind**/${arr.join("\n")}/**bind over**/`);
  return logic;
};

// 生成data
let createData = function (data) {
  let i, arr = [];
  for (i in data) {
    arr.push(`${i}:${data[i] === "" ? '""' : data[i]}`);
  }
  return arr;
};

// 生成index
let __buildIndex = (v, pool) => {
  if (v) {
    pool[v.id] = v;
    if (v.children) {
      for (let i of v.children)
        this.__buildIndex(i, pool);
    }
  }
}
// 生成props
let createProp = (data) => {
  let i, arr = [];
  for (i in data) {
    arr.push(`${i}:{default:()=>{return ${data[i] === "" ? '""' : data[i]}}}`);
  }
  return arr;
};

// 转换代码
let toCode = function (logic) {
  let self = this,
    i, k, obj, res, arr = [],
    outRes = [], outCode;

  for (i in logic) {
    arr = [];
    switch (i) {
      case "methods":
        for (k in logic.methods) {
          obj = logic.methods[k];
          arr = obj.labelObj.view.map(item => {
            res = item.name;
            return `const ${res} = await ${self.transViewCode(item.value[0])}`;
          });
          outRes = obj.labelObj.output.map(item => {
            if (item.key !== "" && item.value !== "")
              return `${item.value} = ${item.key};`;
          });
          if (arr.length || outRes.length) {
            outCode = `
            ${(obj.upCode&&obj.upCode.length!==0)?obj.upCode.join("\n"):''}
                    /*overview*/
                        (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                    /*overview over*/
                    ${(obj.downCode&&obj.downCode.length!==0)?obj.downCode.join("\n"):''}
                    `;
          } else {
            outCode = "";
          }
          obj.code = outCode;
        }

        break;
      case "watch":
        for (k in logic.watch) {
          obj = logic.watch[k];
          arr = obj.labelObj.view.map(item => {
            res = item.name;
            return `const ${res} = await ${self.transViewCode(item.value[0])}`;
          });
          outRes = obj.labelObj.output.map(item => {
            if (item.key !== "" && item.value !== "")
              return `${item.value} = ${item.key};`;
          });
          if (arr.length || outRes.length) {
            outCode = `
                /*overview*/
                    (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                /*overview over*/
                `;
          } else {
            outCode = "";
          }
          obj.code = outCode;
        }
        break;
      case "created":
        obj = logic[i]
        if (obj.labelObj) {
          arr = obj.labelObj.view.map(item => {
            res = item.name;
            return `const ${res} = await ${self.transViewCode(item.value[0])}`;
          });
          outRes = obj.labelObj.output.map(item => {
            if (item.key !== "" && item.value !== "")
              return `${item.value} = ${item.key};`;
          });
        };
        if (arr.length || outRes.length) {
          outCode = `
                    /**data**/
                /*overview*/
                    (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                /*overview over*/
                `;
        } else {
          outCode = "/**data**/";
        }
        obj.code = outCode;
        break;
      case "pollList":
        obj = logic[i];
        obj = self.transToPoll(obj);
        break;
      // 周期函数
      default:
        obj = logic[i]
        if (obj.labelObj) {
          arr = obj.labelObj.view.map(item => {
            res = item.name;
            return `const ${res} = await ${self.transViewCode(item.value[0])}`;
          });
          outRes = obj.labelObj.output.map(item => {
            if (item.key !== "" && item.value !== "")
              return `${item.value} = ${item.key};`;
          });
        }
        if (arr.length || outRes.length) {
          outCode = `
                    /*overview*/
                        (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                    /*overview over*/
                    `;
        } else {
          outCode = "";
        }
        obj.code = outCode;
        break;
    }
  }
  return logic;
}
// 转换轮询
let transToPoll = function (pollList) {
  let self = this,
    arr, outRes, outCode, res;

  return pollList.map(pollItem => {
    arr = pollItem.labelObj.view.map(item => {
      res = item.name;
      return `\f \f \f const ${res} = await ${self.transViewCode(item.value[0])}`;
    });
    outRes = pollItem.labelObj.output.map(item => {
      if (item.key !== "" && item.value !== "") return `\f \f \f ${item.value} = ${item.key};`;
    });
    if (arr.length || outRes.length) {
      outCode = `async()=>{\n${arr.join("\n")}\n${outRes.join("\n")}\n}`;
    } else {
      outCode = "";
    }
    pollItem.code = outCode;
    return pollItem;
  });
};
// 转换预览代码-1
let transViewCode = function (api) {
  let self = this;
  const json = JSON.parse(JSON.stringify(api));
  const frontName = json.option.frontName;
  const name = json.option.name;
  const children = json.children;
  // 特例--map
  if (name === "map") {
    let mapTempalte = `${children[0].option.value}.map((e,index)=>${
      children[1].option.value
      });`;
    return mapTempalte;
    // 特例--diy
  } else if (name === "diy") {
    let mapTempalte = `${children[0].option.value};`;
    return mapTempalte;
    // 特例--excel
  } else if (name === "pipe.getExcelData") {
    let mapTempalte = `${name}(${children[0].option.value},\`(e,index)=>${
      children[1].option.value
      }\`);`;
    return mapTempalte;
  }

  return escodegen.generate(this.transToFun(children, frontName, name));
}

// 转换预览代码-2
let transToFun = function (jsoninput, jsonfrontName, jsonname) {
  let temp = [],
    self = this,
    nRes = JSON.parse(JSON.stringify(res));

  // 根据json项转换
  jsoninput.map(item => {
    temp.push(self.childrenSpli(item));
  });
  // 设置函数参数
  nRes.body[0].expression.arguments = temp;
  // 设置前置名
  if (jsonfrontName) {
    nRes.body[0].expression.callee.property = {
      name: jsonname,
      type: "Identifier"
    };
    nRes.body[0].expression.callee.object = {
      name: jsonfrontName,
      type: "Identifier"
    };
  } else {
    nRes.body[0].expression.callee = {
      name: jsonname,
      type: "Identifier"
    };
  }
  return nRes;
}

// 转换预览代码-3 处理参数
let childrenSpli = function (item) {
  let chilTemp,
    chilClone,
    chilname,
    self = this;

  if (item.children) {
    chilname = item.option.name;
    chilClone = JSON.parse(JSON.stringify(CallExpression));
    chilClone.arguments = item.children.map(item =>
      self.childrenSpli(item)
    );
    chilClone.callee.property.name = chilname;
    return chilClone;
  } else {
    return this.transItem(item);
  }
}

// 转换预览代码-4 处理参数
let transItem = function (item) {
  let temp,
    option = item.option;

  switch (option.type) {
    case "Value":
      temp = JSON.parse(JSON.stringify(Identifier));
      temp.name = option.value;
      return temp;
      break;
    default:
      temp = JSON.parse(JSON.stringify(Literal));
      temp.raw = option.value;
      temp.value = option.value;
      return temp;
      break;
  }
};

// ======================================================================================================================
exports.json2script = json2script;
exports.toCode = toCode;
exports.transViewCode = transViewCode;
exports.transToFun = transToFun;
exports.childrenSpli = childrenSpli;
exports.transItem = transItem;
exports.methodsToCode = methodsToCode;
exports.createData = createData;
exports.bindData = bindData;
exports.transToPoll = transToPoll;
exports.__buildIndex = __buildIndex;
exports.createProp = createProp;
exports.toCamel = toCamel;
