/**
 *  AWEB Node.js Static Server
 *  version:6.0.0
 *  author:lijiancheng@agree.com.cn
 *  date:2018/12/21
 *
 *  */

// Remote Server Path
//const SERVER_PATH = 'http://localhost:8081/QinM/'

// Local Server Path
//const LOCAL_PATH = '../WebContent'
//const WELCOME_PAGE_PATH = '/module/index/index/index.html'
const PORT = '3000'

// Fake Data
//const FAKE_DATA = require('./fakeData')
const RUNTIME_PATH = './runtime/';
const PAGE_PATH = 'src/views/example';


// Dependences
const Koa = require('koa')
const serve = require('koa-static')
const proxyPass = require('@junyiz/koa-proxy-pass')
const router = require('koa-router')()
const koaBody = require('koa-body')
const httpRequest = require('request')
const fs = require('fs.promised')
const cors = require('koa-cors')
const path = require('path')

const Util = require('./util')
//const main = serve(LOCAL_PATH)

// router.get('/', async (ctx, next) => {
//   ctx.response.type = 'html'
//   ctx.response.body = await fs.readFile(LOCAL_PATH + WELCOME_PAGE_PATH, 'utf8')
// });


//页面操作内容
const Page = require('./page/Page');
const page = new Page(path.resolve(path.join(RUNTIME_PATH, PAGE_PATH)));
router.get('/v1/page/list', page.list());
router.get('/v1/page/content/:filepath', page.content());

// router.get('/v1/page',async(ctx,next)=>{
//   debugger;
//   console.log('ht');
//   ctx.response.body='Hello';
// });


router.get('/v1/aweb/getWidget', async (ctx) => {

  try {
    let componentsPath = '../runtime/src/components',
      menu = [];
    if (fs.existsSync(componentsPath)) {
      let dirContent = await Util.readdir(componentsPath);


      dirContent = dirContent.map((item) => {
        return `${componentsPath}/${item}`;
      })

      for (let i = -1, subDIr; subDIr = dirContent[++i];) {
        let packageJsonPath = path.join(subDIr, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
          let packageJsonData = await Util.readFile(packageJsonPath), href;

          packageJsonData = JSON.parse(packageJsonData.toString());

          let docs=packageJsonData.docs;
          if (docs) {
            menu = [...menu, {name:docs.name,href:docs.href}];
          }

        }

      }

    }
    ctx.response.body = menu;
  } catch (error) {
    console.log(error)
  }









})



// app
const app = new Koa()
app.use(cors())

// parser
app.use(koaBody())

// setting routers
//app.use(main)

app.use(router.routes())

app.listen(PORT, function () {
  console.log(`项目启动：https://localhost:${PORT}}`);
})

