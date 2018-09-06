import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render() {
    return (
      <router-view />
    )
  }
}).$mount('#app')
