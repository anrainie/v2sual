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
let json2script = function (json) {
  let content = JSON.parse(json),
    data = content.dataBasket.data,
    structure = content.structure,
    logic = content.logic,porpStr,
    template, finalStr,
    self = this,
    transfer = self.toCode(logic),

    dataStr = self.createData(data);
    porpStr = self.createProp(data);
  transfer = self.bindData(logic, content.dataBasket.mapping);

  // transfer数据初始化
  if (!transfer.pollList) transfer.pollList = [];

  if (transfer) {
    finalStr = `<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:${JSON.stringify(structure)}},
                    }
                },
                props:{
                  ${porpStr.join(",\n")}
                },
                mixins:[root],
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
                    /**unBind**/ctx.$store.commit("unbind",this)/**unBind over**/
                        ${transfer.beforeDestroy ? transfer.beforeDestroy.code : ''}
                },
                destroyed(){
                    let ctx = this;
                        ${transfer.destroyed ? transfer.destroyed.code : ''}
                }
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

// 绑定datas
let bindData = function (logic, mapping) {
  let arr = [],
    i;
  for (i in mapping) {
    mapping[i].map(item => {
      arr.push(`this.$store.commit("bind",{ vueObj:this, data:this.${item.dataValue}, dataStr:"${item.dataValue}", wid:${item.id}, modelKey:"${item.modelValue}" });`);
    });
  };
  if (logic.mounted)
    logic.mounted.code = logic.mounted.code.replace("/**data**/", `/**bind**/${arr.join("\n")}/**bind over**/`);
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
         this. __buildIndex(i, pool);
      }
    }
  }
// 生成props
let createProp=(data)=>{
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
    outRes, outCode;

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
          if (arr.length||outRes.length) {
            outCode = `
                    /**overview ${k}**/
                        (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                    /**overview over**/
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
          if (arr.length||outRes.length) {
            outCode = `
                /**overview ${k}**/
                    (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                /**overview over**/
                `;
          } else {
            outCode = "";
          }
          obj.code = outCode;
        }
        break;
      case "mounted":
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
        if (arr.length||outRes.length) {
          outCode = `
                    /**data**/
                /**overview ${i}**/
                    (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                /**overview over**/
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
        if (arr.length||outRes.length) {
          outCode = `
                    /**overview ${i}**/
                        (async()=>{${arr.join("\n")}\n${outRes.join("\n")}})();
                    /**overview over**/
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
    arr, outRes, outCode,res;

  return pollList.map(pollItem => {
    arr = pollItem.labelObj.view.map(item => {
      res = item.name;
      return `\f \f \f const ${res} = await ${self.transViewCode(item.value[0])}`;
    });
    outRes = pollItem.labelObj.output.map(item => {
      if (item.key !== "" && item.value !== "") return `\f \f \f ${item.value} = ${item.key};`;
    });
    if (arr.length||outRes.length) {
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
    arr,
    tempv2,
    value,
    option = item.option,
    self = this;

  value = option.value;
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
}

// 修改def json内容
let changeDef = function (content, logicOptions) {
  let logic = content.logic.content,
    structure = content.structure,
    name,
    code,
    type,
    data = content.dataBasket.data,
    ast, astContent, methods,
    watch, str, tempAst, hook,
    dataAst, dataAstContent, dataTar,
    beforeCreate, defini;

  // ast = UglifyJS.parse(logic);
  // astContent = ast.body[0].exported_value.properties;

  // // 添加绑定数据
  // beforeCreate = ast.body[0].exported_value.properties.map(item => {
  //     if (item.key && item.key.name === "mounted") {
  //         return bindData(item, content.structure);
  //     } else {
  //         return item;
  //     }
  // });
  // ast.body[0].exported_value.properties = beforeCreate;
  // if (logicOptions) {
  //     name = logicOptions.name,
  //         code = logicOptions.code,
  //         type = logicOptions.type,
  //         tempAst = UglifyJS.parse(`data={${code}}`);
  //     defini = tempAst.body[0].body.right.properties[0].value.body[0];
  //     if (defini && defini.definitions && defini.definitions[0].name.name === "ctx") tempAst.body[0].body.right.properties[0].value.body[0].end.comments_after = [];
  //     switch (type) {
  //         case "hook":
  //             hook = astContent.map(item => {
  //                 if (item.key && item.key.name === name) {
  //                     return tempAst.body[0].body.right.properties[0];
  //                 } else {
  //                     return item;
  //                 }
  //             });
  //             ast.body[0].exported_value.properties = hook;
  //             break;
  //         case "watch":
  //             watch = astContent.filter(item => item.key && item.key === "watch")[0];
  //             watch.value.properties = watch.value.properties.map(item => {
  //                 if (item.key.name === name) {
  //                     return tempAst.body[0].body.right.properties[0];
  //                 } else {
  //                     return item;
  //                 }
  //             });
  //             break;
  //         default:
  //             methods = astContent.filter(item => item.key && item.key === "methods")[0];
  //             methods.value.properties = methods.value.properties.map((item, index) => {
  //                 if (item.key.name === name) {
  //                     return tempAst.body[0].body.right.properties[0];
  //                 } else {
  //                     return item;
  //                 }
  //             });
  //             break;
  //     };
  // } else {

  // }
  // // 处理data
  // data.CONTENT = {};
  // dataAst = UglifyJS.parse("data=" + JSON.stringify(data));
  // dataTar = ast.body[0].exported_value.properties.filter(item => item.key && item.key.name === "data")[0];
  // dataAstContent = dataAst.body[0].body.right.properties;
  // dataTar.value.body[0].value.properties = dataAstContent.map(item => {
  //     let ast;
  //     if (item.key === "CONTENT") {
  //         ast = UglifyJS.parse("data=" + JSON.stringify({ "structure": structure }));
  //     } else if (data[item.key] === '') {
  //         ast = UglifyJS.parse("data=''");
  //     } else {
  //         ast = UglifyJS.parse("data=" + data[item.key]);
  //     }
  //     ast = ast.body[0].body.right;
  //     item.value = ast
  //     return item
  // });


  // str = ast.print_to_string({ beautify: true, comments: true });

  // content.logic.content = str;
  return content;
}

//======================================================================================================================
exports.json2script = json2script;
exports.changeDef = changeDef;
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
