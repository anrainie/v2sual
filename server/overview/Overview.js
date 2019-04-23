const readDir = require('recursive-readdir');
const fs = require('fs');
const path = require('path');

const Result = require('../Result/Result');

class Overview {
    constructor(projectPath, pipePath) {
        this.pipePath = pipePath;
        this.projectPath = projectPath;
    }


    /**
   *  @public
   *  @desp 拷贝管道到RunTime
   *  @type GET
   *  @url /list
   */
    init() {

        const pipePath = this.pipePath;
        const projectPath = this.projectPath;

        return async (ctx, next) => {
            const files = await readDir(pipePath);

            try {
                
                const result = files.map(f => fs.writeFileSync(projectPath, fs.readFileSync(f)));

                Result.success(ctx, { result })
            } catch (e) {
                Result.error(ctx, e);
            }
        }
    }
}


export default Overview;