import Vue from 'vue'
import Router from 'vue-router'

import UserLayout from '@/layouts/UserLayout'
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

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
          path: '/dashboard',
          name: 'dashboard',
          icon: 'dashboard',
          component: BlankLayout,
          children: [
            { path: '/dashboard/analysis', name: 'analysis', component: () => import('@/views/Dashboard/Analysis') },
            { path: '/dashboard/monitor', name: 'monitor', component: () => import('@/views/Dashboard/Analysis') },
            { path: '/dashboard/workplace', name: 'workplace', component: () => import('@/views/Dashboard/Analysis') },
          ]
        },
        {
          path: '/form',
          name: 'form',
          icon: 'form',
          component: BlankLayout,
          children: [
            { path: '/form/basic-form', name: 'basicform', component: () => import('@/views/Dashboard/Analysis') },
            {
              path: '/form/step-form',
              name: 'stepform',
              component: BlankLayout,
              hideChildrenInMenu: true,
              children: [
                {
                  path: '/form/step-form',
                  name: 'stepform',
                  redirect: '/form/step-form/info',
                },
                {
                  path: '/form/step-form/info',
                  name: 'info',
                  component: () => import('@/views/Dashboard/Analysis'),
                },
              ]
            },
            { path: '/form/advanced-form', name: 'advancedform', component: () => import('@/views/Dashboard/Analysis') },
          ]
        },
        {
          path: '/list',
          icon: 'table',
          name: 'list',
        },
        {
          path: '/profile',
          name: 'profile',
          icon: 'profile',
        }
      ]
    },

  ]
})
