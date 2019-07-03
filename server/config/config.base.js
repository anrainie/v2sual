const path = require('path');
const config = require('./config.json');

//runtime
const base = path.resolve(process.cwd(), config.runtime.base);
const component = path.resolve(base, config.runtime.component);
const componentFile = path.resolve(base, config.runtime.componentFile);
const pipe = path.resolve(base, config.runtime.pipe);
const datadict = path.resolve(base, config.runtime.datadict);
const page = path.resolve(base, config.runtime.page);
const customWidget = path.resolve(base, config.runtime.customWidget);
const dist = path.resolve(base, config.runtime.dist);
const homepage = path.resolve(dist, config.runtime.homepage);


const processDir = process.cwd();

let serverHost, serverPort, clientPort, clientId, clientHost;
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
      case 'cp':
        clientPort = val;
        break;
      case "id":
        clientId = val;
        break;
      case "ch":
        clientHost = val;
        break;
    }
    console.log(`${cmd}: ${val}`);
  }
});

//根据部署环境，指定连接主机
const hosts = config.webide.condition
  .filter(c => processDir.indexOf(c.pathInclude) !== -1);
const webide = (hosts && hosts.length ? hosts[0] : null) || {
  host: serverHost || config.webide.host, //WebIDE 对外主机 localhost
  port: serverPort || config.webide.port, //WebIDE 对外端口 
  clientHost: clientHost || config.webide.clientHost, //V2sual 对外主机
  clientPort: clientPort || config.webide.clientPort, //V2sual 对外端口
  path: config.webide.path, //Socket.io 在 Ngnix 映射
  publicPort: config.webide.publicPort //公网的socket 的 port
};

const server = {
  ...config.server,
  id: clientId || config.server.id,
  port: clientPort || config.server.port
}

// console.log(webide);

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
    homepage
  },

  static: config.static.map(s => {
    return {
      router: s.router,
      dir: path.resolve(path.join(base, s.dir))
    }
  })
};
