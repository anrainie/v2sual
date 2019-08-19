

import  {router} from '@v2-lib/vue.spa.plugin'
import Layout from '@/views/Layout'
import Login from "@/views/Login"
import noFound from "@/views/404"
import Main from "@/views/main/main"

let mainRouter = [{
  path: "/",
  component: Layout,
  redirect: 'main',
  children:[
    {
      path: "/main",
      name: 'main',
      component: Main,
      meta: {
        title: "首页",
        icon: "el-icon-goods"
      },
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
}, {
  path: "/login",
  component: Login,
},
{
  path: '*',
  redirect: '/404',
  component: noFound,
  hidden: true
}
];

//addroutes 没有更新options 需要手动添加
let routes=router.options.routes;

if(!routes.length){
  routes.push(...mainRouter)
  router.addRoutes(routes);
}

export default router;
