
import Vue from 'vue'
import App from './App'

import router from './router'
import './utils/global.js'
import './promission.js'

Vue.config.productionTip = false

import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


import './@aweb-components/aweb.components';



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
