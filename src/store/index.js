import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    frontend: {
      namespaced: true,
      modules: {

      }
    },
    global: {
      namespaced: true,
      ...global,
    }
  }
})
