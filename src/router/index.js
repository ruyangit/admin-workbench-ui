import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import UserLayout from '@/layouts/UserLayout'
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'

Vue.use(Router)

const router = new Router({
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
          component: BlankLayout,
          children: [
            { path: '/dashboard/analysis', name: 'analysis', component: () => import('@/views/Dashboard/Analysis') },
            // { path: '/dashboard/monitor', name: 'monitor', component: () => import('@/views/Dashboard/Analysis') },
            { path: '/dashboard/workplace', name: 'workplace', component: () => import('@/views/Dashboard/Workplace') },
          ]
        },
        // {
        //   path: '/form',
        //   name: 'form',
        //   icon: 'form',
        //   component: BlankLayout,
        //   children: [
        //     { path: '/form/basic-form', name: 'basicform', component: () => import('@/views/Dashboard/Analysis') },
        //     {
        //       path: '/form/step-form',
        //       name: 'stepform',
        //       component: BlankLayout,
        //       hideChildrenInMenu: true,
        //       children: [
        //         {
        //           path: '/form/step-form/info',
        //           name: 'info',
        //           component: () => import('@/views/Dashboard/Analysis'),
        //         },
        //       ]
        //     },
        //     { path: '/form/advanced-form', name: 'advancedform', component: () => import('@/views/Dashboard/Analysis') },
        //   ]
        // },
        // {
        //   path: '/list',
        //   icon: 'table',
        //   name: 'list',
        //   component: BlankLayout,
        //   children: [
        //     {
        //       path: '/list/search',
        //       name: 'searchlist',
        //       component: BlankLayout,
        //       children: [
        //         {
        //           path: '/list/search/articles',
        //           name: 'articles',
        //         },
        //         {
        //           path: '/list/search/projects',
        //           name: 'projects',
        //         },
        //         {
        //           path: '/list/search/applications',
        //           name: 'applications',
        //         },
        //       ]
        //     }
        //   ]
        // },
        // {
        //   path: '/profile',
        //   icon: 'profile',
        //   name: 'profile',
        // },
        {
          path: '/system',
          name: 'system',
          component: BlankLayout,
          children: [
            {
              path: '/system/setting',
              name: 'setting',
              component: BlankLayout,
              children: [
                {
                  path: '/system/setting/menu',
                  name: 'menu',
                  component: () => import('@/views/System/Menu')
                },
                {
                  path: '/system/setting/module',
                  name: 'module',
                  component: () => import('@/views/System/Role')
                },
                {
                  path: '/system/setting/config',
                  name: 'config',
                  component: () => import('@/views/System/Role')
                },
                {
                  path: '/system/setting/dict',
                  name: 'dict',
                  component: () => import('@/views/System/Role')
                },
                {
                  path: '/system/setting/area',
                  name: 'area',
                  component: () => import('@/views/System/Role')
                },
              ]
            },
            {
              path: '/system/role',
              name: 'role',
              component: () => import('@/views/System/Role')
            },
            {
              path: '/system/admin',
              name: 'admin',
              component: () => import('@/views/System/Role')
            }
          ]
        },
      ]
    },

  ]
})

router.afterEach(() => {
  store.commit('global/UpdateBasicLayoutSpinning', false);
});

export default router
