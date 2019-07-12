// import 'babel-polyfill'   //如果需要兼容到IE9就打开


import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import '../theme/index.css'
import router from './router'
import './api/index.js';
import './utils/global.js'
import './promission.js'


Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.config.productionTip = false;


import store from './store'

//全局混入通用app接口
import mixin from '@/utils/app.js'

Vue.mixin(mixin);


Vue.use(ElementUI)


router.beforeEach((to, from, next) => {

  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));

  if (!user && to.path != '/login') {
    next({
      path: '/login'
    })
  } else {
      next()
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')