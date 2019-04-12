import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor'
import Preview from '@/components/Preview'
import PageFlow from '@/components/PageFlow';

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
    }
  ]
});
