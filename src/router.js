import Vue from 'vue'
import Router from 'vue-router'

import UserLayout from '@/layouts/UserLayout'
import BasicLayout from '@/layouts/BasicLayout'

Vue.use(Router)

export default new Router({
  routes: [
    // user
    {
      path: '/user',
      component: UserLayout,
      children: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: () => import('@/views/User/Login') },
        { path: '/user/register', component: () => import('@/views/User/Register') },
      ],
    },
    // app
    {
      path: '/',
      component: BasicLayout,
      children: [
        // dashboard
        { path: '/', redirect: '/dashboard/analysis' },
        {
          path: '/dashboard', name: 'dashboard', children: [
            { path: '/dashboard/analysis', name: 'analysis', component: () => import('@/views/Dashboard/Analysis') },
          ]
        }
      ]
    },

  ]
})
