const path = require('path');
const config = require('./config.json');


let serverHost,
  serverPort,
  clientId,
  clientName,
  clientHost,
  clientPort,
  outerClientPort,
  _base,
  _pipe,
  _component,
  socketPath,
  publickPort,
  preview;
process.argv.forEach((p, index) => {
  let c;
  if ((c = p.indexOf('=')) != -1) {
    let cmd = p.substr(0, c);
    let val = p.substr(c + 1);
    switch (cmd) {
      case 'sh':
        serverHost = val;
        break;
      case 'sp':
        serverPort = val;
        break;
      case "id":
        clientId = val;
        break;
      case "name":
        clientName = val;
        break;
      case "ch":
        clientHost = val;
        break;
      case 'cp':
        clientPort = val;
        break;
      case 'ocp':
        outerClientPort = val;
        break;
      case 'base':
        _base = val;
        break;
      case 'pipe':
        _pipe = val;
        break;
      case 'component':
        _component=val;
        break;
      case 'socket':
        socketPath = val;
        break;
      case 'pp':
        publickPort = val;
      case 'preview':
        preview = val;
    }
  }
});

//runtime
const base = path.resolve(process.cwd(), _base || config.runtime.base);
const component = path.resolve(base, _component||config.runtime.component);
const componentFile = path.resolve(base, config.runtime.componentFile);
const pipe = path.resolve(base, _pipe || config.runtime.pipe);
const platformPipe = path.resolve(base,  config.runtime.platformPipe);

const datadict = path.resolve(base, config.runtime.datadict);
const page = path.resolve(base, config.runtime.page);
const customWidget = path.resolve(base, config.runtime.customWidget);
const dist = path.resolve(base, config.runtime.dist);
const homepage = path.resolve(dist, config.runtime.homepage);

console.log('base', base);


//根据部署环境，指定连接主机
const webide = {
  host: serverHost || config.webide.host, //WebIDE 对外主机 localhost
  port: serverPort || config.webide.port, //WebIDE 对外端口 
  clientHost: clientHost || config.webide.clientHost, //V2sual 对外主机
  clientPort: outerClientPort || clientPort || config.webide.clientPort, //V2sual 对外端口
  path: socketPath || config.webide.path, //Socket.io 在 Ngnix 映射
  publicPort: publickPort || config.webide.publicPort //公网的socket 的 port

};

const server = {
  ...config.server,
  id: clientId || config.server.id,
  name: clientName || clientId || config.server.name||config.server.id,
  port: clientPort || config.server.port,
  preview: preview || config.webide.preview//预览地址
}


module.exports = {
  ...config,

  server,

  webide,

  runtime: {

    ...config.runtime,

    base,
    component,
    componentFile,
    pipe,
    datadict,
    page,
    customWidget,
    dist,
    homepage,
    platformPipe
  },

  static: config.static.map(s => {
    return {
      router: s.router,
      dir: path.resolve(path.join(base, s.dir))
    }
  })
};
