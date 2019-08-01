const Koa = require("koa");
const Router = require("koa-router");
const KoaBody = require("koa-body");
KoaBody({ multipart: true });
const Mock = require("mockjs");
// const app = new Koa()
const router = new Router();
const shell = require("shelljs");

const { execFile } = require("child_process");

const app = new Koa();

const fs = require("fs");
const path = require("path");
// const Server = require('socket.io');
// const io = new Server();

// const server = require('http').createServer(app.callback());

// const io = require('socket.io')(server);

// io.on('connection', (socket) => {

// 	socket.emit('preview', {

// 		message: 'sdsdddds'
// 	  });
// });

// var http = require('http');
// var https = require('https');

let Users = [];

for (let i = 0; i < 66; i++) {
  Users.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock("@county(true)"),
      "age|18-60": 1,
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1)
    })
  );
}

//获取用户列表
router.get("/-/user/list", ctx => {
  let { name } = ctx.request.query;

  let mockUsers = Users.filter(user => {
    if (name && user.name.indexOf(name) == -1) return false;
    return true;
  });
  ctx.body = {
    users: mockUsers
  };
});

//获取用户列表（分页）
router.get("/-/user/listpage", ctx => {
  let { page, name } = ctx.request.query;

  let mockUsers = Users.filter(user => {
    if (name && user.name.indexOf(name) == -1) return false;
    return true;
  });
  let total = mockUsers.length;
  mockUsers = mockUsers.filter(
    (u, index) => index < 20 * page && index >= 20 * (page - 1)
  );
  ctx.body = {
    total: total,
    users: mockUsers
  };
});

//删除用户
router.get("/-/user/remove", ctx => {
  let { id } = ctx.request.query;

  Users = Users.filter(u => u.id !== id);
  ctx.body = {
    code: 200,
    msg: "删除成功"
  };
});

//编辑用户
router.get("/-/user/edit", ctx => {
  let { id, name, addr, age, birth, sex } = ctx.request.query;

  Users.some(u => {
    if (u.id === id) {
      u.name = name;
      u.addr = addr;
      u.age = age;
      u.birth = birth;
      u.sex = sex;
      return true;
    }
  });

  ctx.body = {
    code: 200,
    msg: "编辑成功"
  };
});

//新增用户
router.get("/-/user/add", ctx => {
  let { name, addr, age, birth, sex } = ctx.request.query;

  Users.push({
    name: name,
    addr: addr,
    age: age,
    birth: birth,
    sex: sex
  });
  ctx.body = {
    code: 200,
    msg: "新增成功"
  };
});
//路由列表
const routerList = [
  {
    path: "index",
    name: "index",
    component: "spa/index",
    meta: {
      title: "首页",
      icon: "el-icon-goods"
    }
  },
  {
    path: "queryTransaction",
    name: "queryTransaction",
    component: "spa/queryTransaction",
    meta: {
      title: "交易查询",
      icon: "el-icon-goods"
    }
  },
  {
    path: "pwdManager",
    name: "pwdManager",
    component: "spa/pwdManager",
    meta: {
      title: "密码管理",
      icon: "el-icon-goods"
    }
  }
];

router.get("/-/router/get", function(ctx) {
  ctx.body = { router: routerList };
});

router.post("/login", function(ctx) {
  ctx.body = {
    name: "admin",
    avatar: "./img/user.png"
  };
});

router.get("/-/gitlog/get", function(ctx) {
  let _cmd = `git log --pretty=format:"%h - %an, %ar : %s"`;
  //let t = `git log  --pretty=format:'{"commit": "%h","author": "%an","date": "%ad","message": "%s"}'`

  ctx.body = {
    gitlog: new Promise((resolve, reject) => {
      shell.exec(_cmd, (code, stdout, stderr) => {
        console.log(stdout);
        if (code) {
          reject(stderr);
        } else {
          resolve(JSON.parse(stdout)[0]);
        }
      });
    })
  };
});

router.get("/-/getMainList", function(ctx) {
  var mainList = {
    result: [
      {
        name: "AWEB 社区",
        href: "https://www.awebide.com/"
      },
      {
        name: "AWEB 开发者中心",
        href: "https://docs.awebide.com"
      },
      {
        name: "资源市场",
        href: "https://market.awebide.com"
      },
      {
        name: "桌面示例",
        href: "https://pc.awebide.com"
      },
      {
        name: "监控示例",
        href: "https://monitor.awebide.com"
      },
      {
        name: "移动示例",
        href: "https://mobile.awebide.com"
      }
    ]
  };
  ctx.body = mainList;
});

router.get("/-/theme/change", ctx => {
  let { theme, oldTheme } = ctx.request.query;
  let themeLib = path.resolve(__dirname, "../server/module/themes");
  let themeScss = path.resolve(__dirname, "./element-variables.scss");
  let projectThemeLib = path.resolve(__dirname, "./theme");
  let sthemePath = path.join(themeLib, theme, "style.css");
  let sthemeTarget = path.join(projectThemeLib, "index.css");

  console.log("newTheme", theme);
  console.log("oldTheme", oldTheme);
  if (fs.existsSync(themeScss)) {
    console.log(themeScss);
    let varStr = fs.readFileSync(themeScss).toString();

    varStr = varStr.replace(
      `$--color-primary: ${oldTheme} !default;`,
      `$--color-primary: ${theme} !default;`
    );

    fs.writeFileSync(themeScss, varStr);

    const child = execFile(
      "npm run",
      ["theme"],
      {
        shell: true,
        cwd: __dirname
      },
      (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        console.log(stdout);
        ctx.body = {
          status: true,
          msg: "更换主题成功"
        };
      }
    );
  }
});
router.post("/-/upload", async (ctx, next) => {
  const file = ctx.request.files.file; // 上传的文件在ctx.request.files.file
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // 修改文件的名称
  var myDate = new Date();
  var newFilename = myDate.getTime() + "." + file.name.split(".")[1];
  var targetPath = path.join(__dirname, "./dist/static/") + `/${newFilename}`;
  //创建可写流
  const upStream = fs.createWriteStream(targetPath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  //返回保存的路径
  return (ctx.body = { code: 200, status: true });
});
//若删掉代理，预览时候不能获取数据
require("../../server/module/dataSource")(
  app,
  require("../../server/config/config.json").dataSource
);

//parser
app.use(KoaBody({ multipart: true }));

app.use(router.routes());

app.use(router.allowedMethods());

app.use(require("koa-static")(__dirname + "/public"));
//start server
// var options = {
// 	key: fs.readFileSync('./ssl/server.key'), //ssl文件路径
// 	cert: fs.readFileSync('./ssl/server.pem') //ssl文件路径
// };

// http.createServer(app.callback()).listen(80);
// https.createServer(options, app.callback()).listen(443);

app.listen(7008, () => {
  console.error(`服务器启动成功：7008`);
});

// server.listen(7008,()=>{
// 	console.log('服务器启动成功：7008')
// });
