<template>
  <a-layout-sider v-model="collapsed" width="256" :class="`ai-sider-menu sider ${fixSiderbar?'fixSiderbar':'',settings.navTheme==='light'?'light':'dark'}`" :theme="settings.navTheme">
    <div class="logo" key="logo" id="logo">
      <router-link to="/">
        <img :src="logo" alt="logo" />
        <h1>Ant Design Pro</h1>
      </router-link>
    </div>
    <a-base-menu :collapsed="collapsed" :theme="settings.navTheme" :layout="settings.layout" styles="padding: '16px 0'; width: '100%'"/>
  </a-layout-sider>
</template>

<script>
import { Layout } from "ant-design-vue";
import ABaseMenu from "@/components/SiderMenu/BaseMenu";
import { mapGetters } from "vuex";
export default {
  props: {
    collapsed: {
      default: false,
      type: Boolean
    },
    fixSiderbar: {
      default: false,
      type: Boolean
    },
    logo: { type: String }
  },
  computed: {
    ...mapGetters({
      settings: "global/settings"
    })
  },
  components: {
    ALayoutSider: Layout.Sider,
    ABaseMenu
  }
};
</script>
