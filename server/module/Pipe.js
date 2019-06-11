const readDir = require('recursive-readdir');
const fs = require('fs');


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
        const files = await readDir(path);
        let res = [{
            desp: "数据源",
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
            item: []
          },
          {
            desp: "数字运算",
            item: []
          },
          {
            desp: "逻辑运算",
            item: []
          },
          {
            desp: "字符串",
            item: []
          },
          {
            desp: "接口",
            item: []
          }

        ]
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
            input: docs.params.map(item => {
              return {
                type: "Value",
                value: item.defaultValue
              }
            })
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
            case "string":
              res[5].item.push(obj);
              break;
            case "api":
              res[6].item.push(obj);
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
}

module.exports = {
  consume(platform, consumption, path) {
    const pipe = new Pipe(platform, path);
    Object.keys(consumption).map(c => platform.socket.on(c, pipe[consumption[c]]()));
  }
};
