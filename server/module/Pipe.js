const readDir = require('recursive-readdir');
const fs = require('fs');
const nodejsPath = require('path');
const config = require('../config/config.base');

const trans2absolute = p => {
  try {
    return nodejsPath.join(config.runtime.base, p.replace(/\\/g,nodejsPath.sep));
  } catch (e) {
    p;
    return '';
  }
};

class Pipe {
  constructor(platform, path) {
    this.platform = platform;

    this.path = path;
  }

  list() {
    const {
      path,
      platform
    } = this;
    return async (req) => {
      try {
        const nodeModelPipePath = trans2absolute(`node_modules${nodejsPath.sep}@v2-pipe`);
        let files = await readDir(path);

        let res = [{
          desp: "数据源",
          name:"dataSource",
          item: []
        },
        {
          desp: "自定义",
          item: [{
            name: "diy",
            desp: "自定义代码",
            mode: "custom",
            input: [{
              type: "Value",
              value: "this.value1"
            },
            {
              type: "Value",
              value: "this.value2"
            }
            ]
          }]
        },
        {
          desp: "比较运算",
          name: "comparison",
          item: []
        },
        {
          desp: "数字运算",
          name: "number",
          item: []
        },
        {
          desp: "逻辑运算",
          name: "logic",
          item: []
        },
        {
          desp: '动画',
          name: "animate",
          item: []
        },
        {
          desp: "字符串",
          name: "string",
          item: []
        },
        {
          desp: "接口",
          name: "api",
          item: []
        },
        {
          desp: "复合数据源",
          name: "compositeSource",
          item:[]
        }

        ]
        if(fs.existsSync(nodeModelPipePath)){
          files = files.concat(await readDir(nodeModelPipePath));
        }
        //文件列表
        const pipeList = files.filter(f => f.lastIndexOf('package.json') !== -1);

        //分组排序
        const pipeConfig = pipeList.map(p => {
          const buffer = fs.readFileSync(p);
          const str = Buffer.from(buffer).toString();
          const content = JSON.parse(str);
          const docs = content.docs;
          let obj = {
            name: docs.name,
            desp: docs.desp,
            icon: docs.icon,
            label: docs.label,
            frontName: "",
            mode: docs.labelType,
            input: docs.params && docs.params.map(item => {
              return {
                type: "Value",
                value: item.defaultValue
              }
            }) || [{
              type: 'Value',
              value: ''
            }]
          };
          switch (docs.category) {
            case "dataSource":
              res[0].item.push(obj);
              break;
            case "comparison":
              res[2].item.push(obj);
              break;
            case "number":
              res[3].item.push(obj);
              break;
            case "logic":
              res[4].item.push(obj);
              break;
            case 'animate':
              res[5].item.push(obj);
              break;
            case "string":
              res[6].item.push(obj);
              break;
            case "api":
              res[7].item.push(obj);
              break;
              case "compositeSource":
                res[8].item.push(obj);
                break;
            default:
              break;
          }
          // return {
          //     category: content.category,
          //     desp: docs.desp,
          //     name: docs.name,
          //     label:"AFA",
          //     frontName:"",
          //     mode:"front",
          //     input: docs.params,
          //     output: {
          //         desp: docs.returnValue.desp,
          //         name: docs.returnValue.name
          //     }
          // }
        });

        platform.sendSuccessResult(req, res);
        //Result.success(ctx, vueFiles);
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  }
  save() {
    const {
      path,
      platform
    } = this;
    return async (req) => {
      try {
        let index = req.data.index;
        let packageJson = JSON.parse(req.data.package);
        let filePath = nodejsPath.join(config.runtime.pipe, req.data.dirName);
        let docs = packageJson.docs;
        if (docs.params) {
          docs.params = docs.params.map(item => {
            delete item.show;
            return item;
          });
        };
        if(docs.returnValue){
          delete docs.returnValue.show;
        }
        fs.writeFileSync(nodejsPath.join(filePath, 'index.js'), req.data.index);
        fs.writeFileSync(nodejsPath.join(filePath, 'package.json'), JSON.stringify(packageJson));
        platform.sendSuccessResult(req, { status: true });
      } catch (e) {
        platform.sendErrorResult(req, { status: false, error: e });
      }
    }
  }
  create() {
    const {
      path,
      platform
    } = this;
    return async (req) => {
      let data = req.data;
      let dirPath = nodejsPath.join(config.runtime.pipe, data.pipeName);
      const indexTemplate = `export default()=>{
        return ''
      }`;
      const packageTemplate = `{
        "name": "@v2-pipe/${data.pipeName}",
        "main": "index.js",
        "docs": {
            "desp": "${data.pipeDesp}",
            "name":  "${data.pipeName}",
            "icon": "",
            "category": "api",
            "label": "",
            "labelType": "front",
            "belongTo": "function",
            "hasReturn": false,
            "returnValue": {
                "name": "",
                "desp": "",
                "details": "",
                "type": "string",
                "defaultValue": ""
            },
            "params": []
        },
        "category": "自定义",
        "description": "",
        "version": "6.0.0"
    }`;
      try {
        if (fs.existsSync(dirPath)) {
          platform.sendErrorResult(req, "同名管道文件已存在");
        } else {
          fs.mkdirSync(dirPath);
          fs.writeFileSync(nodejsPath.join(dirPath,".npmrc"),`registry=https://npm.awebide.com`)
          fs.writeFileSync(nodejsPath.join(dirPath,"index.js"),indexTemplate);
          fs.writeFileSync(nodejsPath.join(dirPath,"package.json"),packageTemplate);
        }
        platform.sendSuccessResult(req, { status: true });
      } catch (e) {
        platform.sendErrorResult(req, { status: false, error: e });
      }
    }
  }
}

module.exports = {
  consume(platform, consumption, path) {
    const pipe = new Pipe(platform, path);
    Object.keys(consumption).map(c => platform.on(c, pipe[consumption[c]]()));
  }
};
