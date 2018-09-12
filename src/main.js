import Vue from 'vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import { sync } from 'vuex-router-sync'
import { LocaleProvider } from "ant-design-vue";
import zh_CN from "./locales/zh_CN";
import en_US from "./locales/en_US";

Vue.config.productionTip = false

Vue.use(VueI18n)

const locale = 'zh_CN';

const messages = {
  "zh_CN": zh_CN,
  "en_US": en_US,
}

const i18n = new VueI18n({
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
      <LocaleProvider locale={messages[this.locale]} >
        <div class="screen-xl"><router-view /></div>
      </LocaleProvider>
    )
  }
}).$mount('#app')
