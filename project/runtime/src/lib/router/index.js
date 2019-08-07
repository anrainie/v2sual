
import Router from 'vue-router'
import Vue from 'vue'
import _import from '../util/_import_production';
import empty from '../components/empty.vue'

Vue.use(Router);
let router =new Router({
    routes: []
  })



let routes=router.options.routes;

let menuRoutes=[];

function filterAsyncRouter(asyncRouterMap) {

    const accessedRouters = asyncRouterMap.map(route => {
      
      if(!route.component){
        route.component=empty;
      }
      
      if(typeof route.component === 'string') {
        route.component=_import(route.component)
  
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      }
      return  route;
    })
  
    return accessedRouters;
  }
  
export  function getMenuRoutes(){
  return menuRoutes;
}
export function addMenuToRoutes(data){
  let menuRoute = filterAsyncRouter(data);
  menuRoutes.push(...menuRoute);
  routes[0].children.push(...data)
  router.addRoutes(routes);
}



export function addTabsRoutes(obj){
  routes[0].children.push(obj)
  router.addRoutes(routes);

}


export function addMainRoutes(obj){
   routes.push(obj)
   router.addRoutes(routes);
}
export default {
  router,getMenuRoutes,addMenuToRoutes,addTabsRoutes,addMainRoutes
}