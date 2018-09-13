import Vue from 'vue'
import store from './store'
import router from './router'
import Vuei18n from 'vue-i18n'
import { sync } from 'vuex-router-sync'
// import { LocaleProvider } from "ant-design-vue";
import zh_CN from "./locales/zh_CN";
import en_US from "./locales/en_US";

Vue.config.productionTip = false

Vue.use(Vuei18n)

const locale = 'zh_CN';

const messages = {
  "zh_CN": zh_CN,
  "en_US": en_US,
}

const i18n = new Vuei18n({
  locale,  // 语言标识
  messages
})

sync(store, router)

new Vue({
  router,
  store,
  i18n,
  data: () => ({
    locale
  }),
  render() {
    return (
      // <LocaleProvider locale={messages[this.locale]} >
      <router-view />
      // </LocaleProvider>
    )
  }
}).$mount('#app')
