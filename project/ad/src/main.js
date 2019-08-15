// import 'babel-polyfill'   //如果需要兼容到IE9就打开
import Vue from 'vue'
import App from './App'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ElementUI from 'element-ui'
import '../theme/index.css'
import './api/index.js';
import  router from './router'
import Lib from  './lib'
import ideLib from '@v2-lib/v2sual'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import $ from "jquery";


Vue.use(Lib)
Vue.use(ideLib)
Vue.use(ElementUI)
Vue.use(Vant);
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
window.Vue=Vue;
window.$ = $;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  NProgress.start();
  let hash=decodeURI(window.location.hash);

  let wpath = hash.split('?')[0].replace('#/', '');
  let routes= router.options.routes
  if (localStorage.getItem('openWindow') && localStorage.getItem('openWindow') === wpath) {
    routes.push({
      path: '/' + wpath,
      component: Lib._import(wpath),
      hidden: true
    });
    router.addRoutes(routes);
  }
  let urlParam =hash.split('?')[1];


  if (wpath && urlParam && urlParam.indexOf('IDE') !== -1) {
    // routes[0].children.push({
    //   path: '/'+wpath,
    //   replace: true,
    //   component: Lib._import(wpath),
    //   meta: {
    //     title: '预览',
    //     type: 'preview'
    //   }
    //    });
    // router.addRoutes(routes);

    if(to.path!=='/home'){
         next('/home')
    }
  }

  next();
  
   
})

router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')