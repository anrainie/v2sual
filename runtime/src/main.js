
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import '../element-variables.scss'
 import '../theme/index.css'
 
window.Vue=Vue;

import $ from "jquery"


import router from './router'

import './utils/global.js'
import './promission.js'

Vue.config.productionTip = false
// global.systemjs = systemjs;

import store from './store'

//全局混入通用app接口
import mixin from '@/utils/app.js'

window.$ = $;

Vue.mixin(mixin);


Vue.use(ElementUI)

sessionStorage.setItem('user', JSON.stringify({'user':'test'}));

router.beforeEach((to, from, next) => {



  // if (to.path == '/main') {
  //   sessionStorage.removeItem('user');
  // }
  // let user = JSON.parse(sessionStorage.getItem('user'));

  // if (!user && to.path != '/main') {
  //   next({
  //     path: '/main'
  //   })
  // } else {
      next()
  //   }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')