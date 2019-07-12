//引入依赖
const {
    exec
} = require('child_process');
const path = require('path');


//工具

//执行代码
const execCmd = function (cmd, cwd) {
    return new Promise((res, rej) => {
        const process = exec(cmd, {
            encoding: "utf8",
            cwd
        }, async (error, stdout, stderr) => {
            error ? rej(error) : res({
                error,
                stdout,
                stderr
            })
        });
        process.stderr.on('data', data => console.log(data));
        process.stdout.on('data', data => console.log(data));
        process.stdout.on('close', data => {
            console.log(data);
            res(data);
        });
    });
};

//获取配置
const getConfig = () => {

    let params = {
        config: './config/config.project.json'
    };

    process.argv.filter(e => e.startsWith('--')).forEach(e => {
        const f = e.replace(/^--/, '');
        const parts = f.split('=');
        params[params[0]] = parts.slice(1).join('=');
        if (parts.length && parts[0]) {
            params[parts[0]] = parts.slice(1).join('=')
        }
    });

    return require(params.config);
};







//业务代码
const cwd = path.resolve('./');
const config = getConfig();

if (config && config.projects && config.projects.length) {
    config.projects.map(p => {
        const params = {
            sh: config.serverHost,
            sp: config.serverPort,
            id: p.clientId,
            name: p.clientName,
            ch: p.clientHost,
            cp: p.clientPort,
            base: p.base,
            pipe: p.pipe,
            socket: p.socketPath,
            pp: p.publicPort
        };
        const cmd=`node ./server/server.js ` + Object.keys(params).filter(k => !!params[k]).map(key => `${key}=${params[key]}`).join(' ');

        // console.log(cmd);

        execCmd(cmd);
    });
}

// execCmd('npm run anra', cwd);
// execCmd('npm run toxhq', cwd);