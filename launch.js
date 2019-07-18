//引入依赖
const {
    exec,
    execSync
} = require('child_process');
const kill = require('kill-port')
const path = require('path');


//工具

//执行代码
const execCmd = function (cmd, cwd) {
    return new Promise((res, rej) => {
        const process = exec(cmd, {
            encoding: "utf8",
            cwd: cwd || './'
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

//杀死端口进程
const killProcessByPort = (ports) => {
    return new Promise(callback => {
        if (ports && ports.length) {
            Promise.all(ports
                .map(port => new Promise(r =>
                    kill(port, 'tcp')
                        .then(r)
                        .catch(r))))
                .then(callback);
        } else {
            callback();
        }
    })
}

//业务代码
const config = getConfig();

if (config && config.projects && config.projects.length) {
    config.projects.map(p => {
        //启动v2sual
        const params = {
            sh: config.serverHost,
            sp: config.serverPort,
            id: p.clientId,
            name: p.clientName,
            ch: p.clientHost,
            cp: p.clientPort,
            ocp: p.outerClientPort || p.clientPort,
            base: p.base,
            pipe: p.pipe,
            socket: p.socketPath,
            pp: p.publicPort,
            preview: p.preview,
        };


        //杀死占用端口
        killProcessByPort(p.previewLocalPorts)
            .then(r => {
                const cmd = `node ./server/server.js ` + Object.keys(params).filter(k => !!params[k]).map(key => `${key}=${params[key]}`).join(' ');

                console.log(cmd);

                //execCmd(cmd);

                //启动预览和假数据
                if (p.script && p.script.length) {
                    p.script.forEach(s => execCmd(s, p.base));
                }
            }).catch(e => console.log(e));


    });
}