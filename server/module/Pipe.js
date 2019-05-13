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
                        input: docs.params.map(p => {
                            return {
                                type: 'value',
                                value: p.defaultValue,
                                desp: p.desp,
                                name: p.name,
                            }
                        }),
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