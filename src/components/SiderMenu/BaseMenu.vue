<script>
import { Menu, Icon, Spin } from "ant-design-vue";
import { mapGetters } from "vuex";
// Conversion router to menu.
export default {
  props: {
    collapsed: { default: false, type: Boolean },
    theme: { default: "dark", type: String },
    layout: { type: String },
    mode: { default: "inline", type: String },
    styles: { type: String }
  },
  computed: {
    ...mapGetters({
        loading: "global/nav/loading",
        menuData: "global/nav/getMenuData",
    }),
    },
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
    AMenuDivider: Menu.Divider,
    AMenuItemGroup: Menu.ItemGroup,
    AIcon: Icon
  },
  methods: {
    getIcon(icon) {
      if (typeof icon === "string" && icon.indexOf("http") === 0) {
        return <img src={icon} alt="icon" class="icon" />;
      }
      if (typeof icon === "string") {
        return <a-icon type={icon} />;
      }
      // if(!icon){
      //   return <a-icon type='profile' />;
      // }
      return icon;
    },
    getNavMenuItems(menusData, parent) {

      // console.log(menusData)
      if (!menusData) {
        return [];
      }
      return menusData.map(item => {
        if (item.name) {
          return this.getSubMenuOrItem(item, parent);
        }
        if (item.menus) {
          return this.getNavMenuItems(item.menus, parent);
        }
      });
    },
    getSubMenuOrItem(item) {
      // doc: add hideChildrenInMenu 隐藏菜单
      if (
        item.menus &&
        item.menus.some(menu => menu.name)
      ) {
        const name = this.$t(item.locale);
        return (
          <a-sub-menu
            title={
              item.icon ? (
                <span>
                  {this.getIcon(item.icon)}
                  <span>{name}</span>
                </span>
              ) : (
                name
              )
            }
            key={item.path}
          >
            {this.getNavMenuItems(item.menus)}
          </a-sub-menu>
        );
      }
      return (
        <a-menu-item key={item.path}>{this.getMenuItemPath(item)}</a-menu-item>
      );
    },
    getMenuItemPath(item) {
      const name = this.$t(item.locale);
      const itemPath = this.conversionPath(item.path);
      const icon = this.getIcon(item.icon);
      // // Is it a http link
      if (/^https?:\/\//.test(itemPath)) {
        return (
          <a href={itemPath}>
            {icon}
            <span>{name}</span>
          </a>
        );
      }
      return (
        <router-link to={itemPath}>
          {icon}
          <span>{name}</span>
        </router-link>
      );
    },
    conversionPath(path) {
      if (path && path.indexOf("http") === 0) {
        return path;
      }
      return `/${path || ""}`.replace(/\/+/g, "/");
    },
    urlToList(url) {
      const urllist = url.split("/").filter(i => i);
      return urllist.map(
        (urlItem, index) => `/${urllist.slice(0, index + 1).join("/")}`
      );
    },
    getOpenKeys(path) {
      const openKeys = this.urlToList(path);
      if (this.layout === "topmenu") {
        return null
      }
      return openKeys.filter(item => item !== path);
    }
  },
  render() {
    const { path } = this.$route;
    const openKeys = this.getOpenKeys(path);
    return (
      <Spin spinning={this.loading} class="baseMenuLoadding">
      <a-menu
        defaultOpenKeys={openKeys}
        selectedKeys={[path]}
        key="Menu"
        mode={this.mode}
        theme={this.theme}
        collapsed={this.collapsed}
        style={this.styles}
      >
        
        {this.getNavMenuItems(this.menuData)}
      </a-menu>
      </Spin>
    );
  }
};
</script>