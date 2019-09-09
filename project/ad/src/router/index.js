

// import  {router} from '@v2-lib/vue.spa.plugin'
import Vue from "vue"
import vueRouter from "vue-router"
import Layout from '@/views/Layout'
import Login from "@/views/Login"
import noFound from "@/views/404"
import mobileLayout from "@/views/index"
import Home from "@/views/Home"
import Main from "@/views/shanghai_mobile/page2.vue"

let mainRouter = [
  
  {
  path: "/",
  // redirect:'/mobile',
  component: Layout,
  children:[
    {
      path: '/404',
      component: noFound,
      hidden: true,
      meta: {
        title: "404"
      }
    }
    
  ]
},{
  path: "/mobile",
  // redirect:'/main',
  component: mobileLayout,
  children:[
    {
      path: "/main",
      name: 'main',
      component:Main,
      meta: {
        title: "首页",
        icon: "el-icon-goods"
      }
    },
    {
      path: '/404',
      component: noFound,
      hidden: true,
      meta: {
        title: "404"
      }
    }
  ]
},{
  path: "/layout",
  component: Layout,
},
{
  path: '*',
  redirect: '/404',
  component: noFound,
  hidden: true
}
];

//addroutes 没有更新options 需要手动添加
// let routes=router.options.routes;

// if(!routes.length){
//   routes.push(...mainRouter)
//   router.addRoutes(routes);
// }

// export default router;
Vue.use(vueRouter);
let router =new vueRouter({
    routes: mainRouter
  })
window.router=router;

export default router;