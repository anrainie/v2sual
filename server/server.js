//config
const config = require('./config/config.base');


// Dependences
const Koa = require('koa')
const staticRouter = require('./util/static-router');
const koaBody = require('koa-body')
const cors = require('koa-cors')


//WEB IDE 模块
const Platform = require('./module/ide/platform');
const platform = new Platform({
  ip: config.webide.host,
  port: config.webide.port
});

//server
const app = new Koa();
// 跨域
app.use(cors());
// parser
app.use(koaBody());

//导航
require('./module/Navigator').consume(platform, config.module.navigator.consumption);

//文件处理模块
require('./module/Reader/fileUtil').consume(platform, config.module.reader.consumption);

// 页面流、逻辑概览、管道
require('./module/PageFlow').consume(platform, config.module.pageFlow.consumption);

// 页面
require('./module/Editor').consume(platform, config.module.page.consumption);

// 预览
require('./module/Preview').consume(platform, config.module.preview.consumption, config.runtime.base);

//数据源代理
require('./module/dataSource')(app, config.dataSource);

//预览静态路由(静态代理要在数据代理之后)
app.use(staticRouter(config.static));


// 测试表格数据
const tableRouter = require('./module/test/table').router(config.module.test.table.http);
app.use(tableRouter.routes());

//异常处理
app.on("error", (err, ctx) => console.log(new Date(), ":", err));

//启动
app.listen(config.server.port, () => console.log(`项目启动：http://localhost:${config.server.port}}`));