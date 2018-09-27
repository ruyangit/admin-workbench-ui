import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'
import globalNav from './modules/global-nav'
import frontendOpenapi from './modules/frontend-openapi'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    frontend: {
      namespaced: true,
      modules: {
        openapi: frontendOpenapi
      }
    },
    global: {
      namespaced: true,
      ...global,
      modules: {
        nav: globalNav
      }
    }
  }
})
