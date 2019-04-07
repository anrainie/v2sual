// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

import v2Container from "./components/edit/Container.vue";
import v2Input from "./components/input/Input.vue";
Vue.component('v2Container',v2Container);
Vue.component('v2Input',v2Input);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
