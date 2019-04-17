// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import './base/styles/bundle.css';
import './base/styles/aui-iconfont.css';
import './assets/style/aui-editor.css';

import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import 'jquery-ui/ui/widgets/resizable'


Vue.prototype.apis = (url,params,type)=>{
  return new Promise((resolve)=>{
    axios[type||'get'](url,params).then(r=>{
  
      if(r.status){
        resolve(r.data);
      }else{
        throw r.data;
      }
    });
  }).catch(e=>{
    console.log(url,e);
  })
}
Vue.use(ElementUI)
Vue.config.productionTip = false

import v2Container from "./components/edit/Container.vue";
import v2Input from "./components/input/Input.vue";
import v2LableInput from "./components/input/lableInput.vue";
import v2Title from "./components/input/title.vue";
import v2Switch from "./components/input/V2Switch.vue";
import v2Table from "./components/input/Table.vue";
import empty from "./components/edit/Empty.vue";
import LayoutControl from "./components/control/LayoutControl.vue";
import Base from "./components/control/Base.vue";
import v2Combo from "./components/input/Combo.vue";
import v2Checkbox from "./components/input/Checkbox.vue";
import ComplexWidget from "./components/ComplexWidget.vue";
import echartComponent from "./components/chart/echartComponent.vue";

import V2AuiComponent from "./components/AUIComponent.vue";

Vue.component('v2Container', v2Container);
Vue.component('v2Input', v2Input);
Vue.component('v2Empty', empty);
Vue.component('v2Title', v2Title);
Vue.component('v2LableInput', v2LableInput);
Vue.component('LayoutControl', LayoutControl);
Vue.component('v2Switch', v2Switch);
Vue.component('Base', Base);
Vue.component('v2ComplextWidget', ComplexWidget);
Vue.component('v2Combo', v2Combo);
Vue.component('v2Checkbox', v2Checkbox);
Vue.component('v2Table', v2Table);
Vue.component('V2AuiComponent',V2AuiComponent);
Vue.component('echart-cpt', echartComponent);

Vue.directive('span', {})
Vue.directive('tooltip', {})
Vue.directive('draggable', function (el, binding, vnode) {
  $(el).draggable({
    helper: function (e, ui) {
      // return `<div style="position:fixed;border:1px solid black;padding:10px;">${binding.value.name}</div>`
      return vnode.context.createDragHelper(binding);
    },
    start(e, ui) {
      vnode.context.startCreateElement(binding.value);
    },
    stop() {
      vnode.context.finishCreateElement();
    }
  });
})


import bundle from './base/index';


Vue.use(bundle, {});


/* eslint-disable no-new */




new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
