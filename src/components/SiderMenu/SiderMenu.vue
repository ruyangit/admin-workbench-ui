<template>
    <a-layout-sider v-model="collapsed" width="256" :class="`ai-sider-menu sider ${fixSiderbar?'fixSiderbar':'',light?'light':''}`">
         <div class="logo" key="logo" id="logo">
          <!-- <router-link > -->
            <img :src="logo" alt="logo" />
            <h1>Ant Design Pro</h1>
          <!-- </router-link> -->

        </div>
        <a-base-menu :collapsed="collapsed" :menuData="menuData"/>
    </a-layout-sider>
</template>

<script>
import { Layout } from "ant-design-vue";
import ABaseMenu from "@/components/SiderMenu/BaseMenu";
import logo from "@/assets/logo.png";
export default {
  data: () => ({
    logo: logo
  }),
  props: {
    collapsed: { default: false, type: Boolean },
    fixSiderbar: { default: false, type: Boolean },
    light: { default: false, type: Boolean },
    menuData: { default: [], type: Array }
  },
  components: {
    ALayoutSider: Layout.Sider,
    ABaseMenu
  },
  methods: {
    getFlatMenuKeys(menuData) {
      let keys = [];
      menuData.forEach(item => {
        if (item.menus) {
          keys = keys.concat(getFlatMenuKeys(item.menus));
        }
        keys.push(item.path);
      });
      return keys;
    }
  },
  mounted() {
    // console.log(this.menuData);
    // console.log(this.getFlatMenuKeys(this.menuData));
  }
};
</script>
