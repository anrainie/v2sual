import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import _import from '@/router/_import_production.js'
//import _import from '@/router/_import_development.js'

import Layout from '@/views/Layout'
import Login from "@/views/Login"
import noFound from "@/views/404"
import Main from "@/views/main/main"

import { getRoutersList } from '@/api/api.js'
import {caseRouter} from '@/api/case.js'

const caseList= process.env.NODE_ENV === 'production'?[]:caseRouter;

var mainRouter = [{
  path: "/",
  component: Layout,
  redirect: 'main',
  hidden: true,
  children: [
    {
      path: "/main",
      name: 'main',
      component: Main,
      meta: {
        title: "首页",
        icon: "el-icon-goods"
      }
    },{
      path: '/404',
      component: noFound,
      hidden: true,
      meta: {
        title: "404"
      }
    }
  ]

}, {
  path: "/login",
  component: Login,
  hidden: true
},
{
  path: '*',
  redirect: '/404',
  component: noFound,
  hidden: true
}
];


var dynRouter; //用来获取后台拿到的路由

var getMenu=function(list){
  var context = this;
    let menus = [],
        menuObj = {},
        menuParent = {},
        result = list||[];

    if(result.length){
      result.sort((a,b)=>{
        return parseInt(a.seq,10)-parseInt(b.seq,10);
      }).map(i=>{
        !i.pid&&(i.pid='');
        let p=menuObj[i.pid];
        if(!p){
          p=menuObj[i.pid]={
            id:i.pid,
            children:[]
          }
        }else{
          !p.children&&(p.children=[]);
        }
        let item=menuObj[i.id]||{
          id:i.id,
          //children:[]
        };
        item.pid=i.pid||"";
        item.name = i.id;
        item.path = i.id;
        item.component=i.value;
        item.meta ={title:i.name,icon:i.icon};
        menuObj[i.id]=item;
        p.children.push(item);
      });

      Object.keys(menuObj)
          .filter(e=>!menuObj[e].children)
          .map(e=>delete menuObj[e]);

      return menuObj[''].children;
    
    }
};

router.beforeEach((to, from, next) => {
  NProgress.start();
  let wpath = window.location.hash.split('?')[0].replace('#/', '');

  if (localStorage.getItem('openWindow') && localStorage.getItem('openWindow') === wpath) {

    router.options.routes.push({
      path: '/' + wpath,
      component: _import(wpath),
      hidden: true
    });
    router.addRoutes(router.options.routes);
  }

  if (!global.antRouter) {
    router.options.routes.push(...mainRouter);
    router.addRoutes(router.options.routes);

    global.antRouter = router.options.routes;

    saveRouter('router', global.antRouter);
    if (sessionStorage.getItem('user')) {

      getRoutersList().then(res => {

            if(res.status){
              var list = res&&res.content&&res.content.menus||[],
              menus = getMenu(list);                
              
              addDynRoute(menus,wpath);
              //addDynRoute(res.content.router, wpath); //后台拿到路由

              if (wpath) {

                let cRoute = searchCurrentRouter(wpath);

                if (cRoute) {
                  router.options.routes.push(cRoute);


                  router.addRoutes(router.options.routes);
                  //  router.replace({
                  //    path: '/' + wpath
                  //  });
                }
              }


            }


        next({
          ...to,
          replace: true
        })
  

      })
    } else {
      dynRouter = global.antRouter;

      next({
        ...to,
        replace: true
      })

    }
  } else {

    next()
  }

})

//当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

export function addDynRoute(data) {
  dynRouter = [...data,...caseList];


  let menuRoute = filterAsyncRouter(dynRouter),
    menuData = [];
  menuRoute.forEach((e) => {
    if (e.children && e.children.length) {
      menuData.push({
        path: e.path,
        component: Layout,
        isLeaf: true,
        isRedirect: true,
        meta: {
          title: e.meta && e.meta.title,
          icon: e.meta && e.meta.icon
        },
        children: [...e.children]
      })

    } else {
      menuData.push({
        path: '',
        component: Layout,
        isLeaf: true,
        meta: {
          title: e.meta && e.meta.title,
          icon: e.meta && e.meta.icon
        },
        children: [e]
      })
    }

  })


  global.menu = menuData;

  saveRouter('menu', menuData);

}


export function saveRouter(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}


export function getRouter(name) {
  if (window.localStorage.getItem(name) && window.localStorage.getItem(name) !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(name) || {});
  } else {
    return undefined;
  }

}

function filterAsyncRouter(asyncRouterMap) {

  const accessedRouters = asyncRouterMap.filter(route => {

    if (route.component && typeof route.component === 'string') {

      route.componentUrl = route.component;
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}

function searchCurrentRouter(path) {

  let paths = path.split('/'),
    cRoute, cRouteCopy;
  let result = "";
  if (paths.length > 1) {
    paths.forEach((ePath, idx) => {

      if (!idx) {
        cRoute = global.menu.filter((item) => (item.path === ePath));

        cRouteCopy = [...cRoute];

      } else if (cRoute[0] && cRoute[0].children && cRoute[0].children.length) {

        cRoute = cRoute[0].children.filter((item) => (item.path === ePath));


      }
    });

  } else {
    cRoute = true;
    cRouteCopy = global.menu.filter((item) => (item.children && item.children.length === 1 && item.children[0].path === path));
  }
  // if (cRoute && cRouteCopy && cRouteCopy.length) {
  //   result = getAsyncRouter(cRouteCopy)[0];
  //   result.path = '/' + result.path;
  // }
  if (cRoute && cRouteCopy && cRouteCopy.length) {
    if(cRoute.length ===1){
      cRoute = cRoute[0];
      result = {
        path: '',
        component: Layout,
        hidden: true,
        meta: {
            title: cRoute.meta && cRoute.meta.title
        },
        children: [{
            path: path,
            component:_import(cRoute.componentUrl),
            meta: {
                title: cRoute.meta && cRoute.meta.title,
                type: 'BLANK'
            }
        }]
    }
  }else if(cRoute === true){
    let childRoute = cRouteCopy[0].children[0];
    result = {
      path: '',
      component: Layout,
      hidden: true,
      meta: {
          title: childRoute.meta && childRoute.meta.title
      },
      children: [{
          path: '/'+childRoute.path,
          component:_import(childRoute.componentUrl),
          meta: {
              title: childRoute.meta && childRoute.meta.title,
              type: 'BLANK'
          }
      }]
  }
  }
}

  return result;

}
