import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      component: () => import(/* webpackChunkName: "layout" */ './layouts/UserLayout'),
      children: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: () => import(/* webpackChunkName: "login" */ './views/User/Login') },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import(/* webpackChunkName: "login" */ './views/User/Login.vue')
    // },
    // {
    //   path: '/error',
    //   name: 'error',
    //   component: () => import(/* webpackChunkName: "error" */ './views/Error.vue')
    // },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: () => import(/* webpackChunkName: "test" */ './views/Test.vue')
    // }
  ]
})
