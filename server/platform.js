const Koa = require('koa')
const config = require('./config/config.base');
const Platform = require('./module/ide/platform');
const platform = new Platform({
  ip: config.webide.host,
  port: config.webide.port
});

const app = new Koa();

//启动
app.listen(config.server.port, () => console.log(`项目启动：http://localhost:${config.server.port}}`));