import Vue from 'vue'
import Router from 'vue-router'

import UserLayout from '@/layouts/UserLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      component: UserLayout,
      children: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: () => import('@/views/User/Login') },
      ],
    },
    
  ]
})
