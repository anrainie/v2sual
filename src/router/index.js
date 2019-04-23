import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor'
import Flow from '@/components/Flow'
import Preview from '@/components/Preview'
import PageFlow from '@/components/PageFlow';
import Overview from '@/components/Overview';
import Ov from '@/components/Test/ov';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }, {
      path: '/pageflow',
      name: 'PageFlow',
      component: PageFlow
    },
    {
      path:'/Flow',
      name:'Flow',
      component:Flow
    },
    {
      path:'/Overview',
      name:'Overview',
      component:Overview
    },
    {
      path:'/Ov',
      name:'Ov',
      component:Ov
    }
  ]
})
