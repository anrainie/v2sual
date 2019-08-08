
import mixin from './mixin'
import components from './components'
import axios from 'axios';
import  util from './util'
import  routers from './router'

const install = function(Vue,opts={}) {

  if(opts.mixin){
     Vue.mixin(mixins);
  }
  // Vue.use(Router);

  Vue.prototype.$axios=axios;
  for(let i in components){
   Vue.component(components[i].name,components[i])
  }

};

export const mixins=mixin;
export const {_import, _import_dev,_require }=util;
export const { router,getMenuRoutes,addMenuToRoutes,addTabsRoutes,addMainRoutes}=routers

export default {
    install,
    ...util,
    ...components,
    ...routers,
    mixins
  };
  