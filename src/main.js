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
import v2LableInput from "./components/input/lableInput.vue";
import v2Title from "./components/input/title.vue";
import v2Combo from "./components/input/Combo.vue";
import v2Switch from "./components/input/Switch.vue";
import v2Checkbox from "./components/input/Checkbox.vue";
import empty from "./components/edit/Empty.vue";
import LayoutControl from "./components/control/LayoutControl.vue";
import ComplexWidget from "./components/ComplexWidget.vue";

Vue.component('v2Container',v2Container);
Vue.component('v2Input',v2Input);
Vue.component('v2Empty',empty);
Vue.component('v2Title',v2Title);
Vue.component('v2LableInput',v2LableInput);
Vue.component('LayoutControl',LayoutControl);
Vue.component('v2ComplextWidget',ComplexWidget);
Vue.component('v2Combo',v2Combo);
Vue.component('v2Switch',v2Switch);
Vue.component('v2Checkbox',v2Checkbox);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
