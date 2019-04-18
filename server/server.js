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

// Fake Data
// const FAKE_DATA = require('./fakeData')
const path = require('path');
const RUNTIME_PATH = path.resolve(__dirname, '../runtime/');
const PAGE_PATH = 'src/views';

// Dependences
const Koa = require('koa');
const serve = require('koa-static');
const proxyPass = require('@junyiz/koa-proxy-pass');
const router = require('koa-router')();
const koaBody = require('koa-body');
const httpRequest = require('request');
const fs = require('fs.promised');
const cors = require('koa-cors');
const Util = require('./Util');

// const main = serve(LOCAL_PATH)

// router.get('/', async (ctx, next) => {
//   ctx.response.type = 'html'
//   ctx.response.body = await fs.readFile(LOCAL_PATH + WELCOME_PAGE_PATH, 'utf8')
// });

// 页面操作内容
const Page = require('./page/Page');
const page = new Page(path.resolve(path.join(RUNTIME_PATH, PAGE_PATH)));
router.get('/v1/page/list', page.list());
router.get('/v1/page/content', page.content());

// 方法
router.get('/v1/page/script', page.script());

// 测试表格数据
const Table = require('./DictTest/table');
router.get('/v1/dictTest/table', Table.getOption);

router.get('/v1/dictTest/tableOp', Table.tableOpera);
// router.get('/v1/page',async(ctx,next)=>{
//   debugger;
//   console.log('ht');
//   ctx.response.body='Hello';
// });

router.get('/v1/aweb/getWidget', async (ctx) => {
  let target = './runtime/src/@aweb-components';
  let dir = await Util.readdir(target);
  let menu = [];
  for (let i = -1, item; item = dir[++i];) {
    let subDir = `${target}/${item}`;
    let packageJsonPath = `${subDir}/package.json`;
    let statItem = await Util.stat(subDir);
    if (statItem.isDirectory() && fs.existsSync(packageJsonPath)) {
      let packageJsonData = await Util.readFile(packageJsonPath);
      packageJsonData = JSON.parse(packageJsonData);
      let docs = packageJsonData.docs;
      if (docs) {
        docs.target = path.resolve(subDir, packageJsonData.main);
        menu = [...menu, docs];
      }
    }
  }

  ctx.response.body = menu;
});

// mysql操作

const DB = require('./db/mysql-conn');
const db = new DB({
  database: 'aweb_social'
});

router.get('/db/select',
  db.select()
);

// app
const app = new Koa();
app.use(cors());

// parser
app.use(koaBody());

// setting routers
// app.use(main)

app.use(router.routes());

// 异常处理
app.on('error', (err, ctx) => { // 捕获异常记录错误日志
  console.log(new Date(), ':', err);
});

app.listen(PORT, function () {
  console.log(`项目启动：http://localhost:${PORT}}`);
});
