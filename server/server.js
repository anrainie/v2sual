/**
 *  AWEB Node.js Static Server
 *  version:6.0.0
 *  author:lijiancheng@agree.com.cn
 *  date:2018/12/21
 *
 *  */

// Remote Server Path
// const SERVER_PATH = 'http://localhost:8081/QinM/'

// Local Server Path
// const LOCAL_PATH = '../WebContent'
// const WELCOME_PAGE_PATH = '/module/index/index/index.html'
const PORT = '3000';
const TARGET_PORT = 8080;
const TARGET_IP = 'localhost';

// Fake Data
// const FAKE_DATA = require('./fakeData')
const path = require('path');
const RUNTIME_PATH = path.resolve(__dirname, '../runtime/');
const STATIC_PATH = path.resolve(__dirname, '../static/');
const PAGE_PATH = 'src/views';

// Dependences
const Koa = require('koa')
const serve = require('koa-static')
const staticRouter = require('./Static/static-router')
const proxyPass = require('@junyiz/koa-proxy-pass')
const router = require('koa-router')()
const koaBody = require('koa-body')
const httpRequest = require('request')
const fs = require('fs.promised')
const cors = require('koa-cors')


// router.get('/v1/preview/style', preview.style());
//router.get('/v1/preview/static/*', RouterStatic(path.resolve(path.join(RUNTIME_PATH, './dist/'))))


//连接WEBIDE中台
const Platform = require('./ide/platform');
const platform = new Platform({
  ip: TARGET_IP,
  port: TARGET_PORT
});




const external = require('./external/external');

//const main = serve(LOCAL_PATH)

// router.get('/', async (ctx, next) => {
//   ctx.response.type = 'html'
//   ctx.response.body = await fs.readFile(LOCAL_PATH + WELCOME_PAGE_PATH, 'utf8')
// });

// 页面操作内容

const Page = require('./page/Page');
const page = new Page(path.resolve(path.join(RUNTIME_PATH, PAGE_PATH)));

platform.socket.on('getPageList',req=>{

});

router.get('/v1/page/list', page.list());
router.get('/v1/page/content', page.content());

// 方法
router.get('/v1/page/script', page.script());

// 测试表格数据
const Table = require('./DictTest/table');
router.get('/v1/dictTest/table', Table.getOption);

router.get('/v1/dictTest/tableOp', Table.tableOpera);


// 预览


const Preview = require('./preview/Preview');
const preview = new Preview(RUNTIME_PATH, STATIC_PATH);
router.get('/v1/preview/init', preview.init());

platform.socket.on('getVueEditorStyles',preview.style(platform));

// app
const app = new Koa();
app.use(cors());

// parser
app.use(koaBody());

// setting routers
// app.use(main)

app.use(router.routes());

app.use(external.routes());

//预览静态路由
app.use(staticRouter([
  {
    router: '/v1/static/',     //dir:static resource directory
    dir: path.resolve(path.join(RUNTIME_PATH, './dist'))   //router:router
  }
]))

//异常处理
app.on("error", (err, ctx) => {//捕获异常记录错误日志
  console.log(new Date(), ":", err);
});

app.listen(PORT, function () {
  console.log(`项目启动：http://localhost:${PORT}}`);
});
