const readDir = require('recursive-readdir');
const fs = require('fs');


class Pipe {
    constructor(platform, path) {
        this.platform = platform;

        this.path = path;
    }

    list() {
        const { path, platform } = this;
        return async (req) => {
            try {
                const files = await readDir(path);
                let res = [
                    {
                        desp: "数据源",
                        item: []
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

                    return {
                        category: content.category,
                        desp: docs.desp,
                        name: docs.name,
                        label:"AFA",
                        frontName:"",
                        mode:"front",
                        input: docs.params,
                        output: {
                            desp: docs.returnValue.desp,
                            name: docs.returnValue.name
                        }
                    }
                });

                platform.sendSuccessResult(req, pipeConfig);
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