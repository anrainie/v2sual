import router from './router'
// import _import from '@/router/_import_production.js'
import _import from '@/router/_import_development.js'

import Layout from '@/views/Layout'
import Login from "@/views/Login"
import noFound from "@/views/404"
import Main from "@/views/main/main"

import { getRoutersList } from '@/api/api.js'
import { TabPane } from 'element-ui';

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
},
{
  path: '/404',
  name: '404',
  component: noFound,
  hidden: true
}
];
if (getRouter('router') && global.hasLogin) {
   saveRouter('router', '')
}

var dynRouter; //用来获取后台拿到的路由

router.beforeEach((to, from, next) => {



    // if (to.meta && to.meta.type === 'preview') {

    //   next({
    //     ...to,
    //     replace: true,
    //     fullPath:(to.fullPath.indexOf('IDE')!==-1) ? to.fullPath:to.fullPath + '?source=IDE'
    //   })
    // } 

    let wpath = window.location.hash.split('?')[0].replace('#/', '');

    if (localStorage.getItem('openWindow') && localStorage.getItem('openWindow') === wpath) {

      router.options.routes.push({
        path: '/' + wpath,
        component: _import(wpath),
        hidden: true
      });
      router.addRoutes(router.options.routes);
    }
    let urlParam = window.location.hash.split('?')[1];
    let routes = router.options.routes;

    if (wpath && urlParam && urlParam.indexOf('IDE') !== -1) {
       if (!routes.filter(r => r.type === 'preview').length) {
        console.log('预览页面路径', wpath);

        routes.push({
          path:'/',
          type: 'preview',
          component: Layout,
          replace: true,
          children: [{
            path: '/' + wpath,
            replace: true,
            component: _import(wpath),
            meta: {
              title: '预览',
              type: 'preview'
            }
          }]
        });
        console.log(router.options.routes);

        router.addRoutes(routes);
    
      }
    }

    if (!dynRouter) {
      
    
      router.options.routes.push(...mainRouter);
      router.addRoutes(router.options.routes);
      global.antRouter = router.options.routes;
      saveRouter('router', global.antRouter);
    
      if (sessionStorage.getItem('user')) {
        getRoutersList().then(res => {

          addDynRoute(res.data.router, wpath); //后台拿到路由

          if (wpath) {

            let cRoute = searchCurrentRouter(wpath);

            if (cRoute) {
              router.options.routes.push(cRoute);


              router.addRoutes(router.options.routes);
 
            }else{
              next('/404')
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

export function addDynRoute(data) {
  dynRouter = data;

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
function getAsyncRouter(asyncRouterMap) {

  const accessedRouters = asyncRouterMap.filter(route => {

    if (route.component && typeof route.component === 'string') {
      route.componentUrl = route.component;

      route.component = _import(route.component);


    }
    if (route.children && route.children.length) {
      route.children = getAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters
}
function searchCurrentRouter(path) {

  let paths = path.split('/'),
    cRoute, cRouteCopy;
  let result = "";
  let gRouter = getRouter('router');
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
  if (cRoute && cRouteCopy && cRouteCopy.length) {
    result = getAsyncRouter(cRouteCopy)[0];
    result.path = '/' + result.path;
  }

  return result;

}
