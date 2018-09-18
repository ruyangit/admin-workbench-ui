<script>
import { Menu, Icon } from "ant-design-vue";
// Conversion router to menu.
export default {
  props: {
    collapsed: { default: false, type: Boolean },
    theme: { default: "dark", type: String },
    mode: { default: "inline", type: String },
    menuData: { default: [], type: Array }
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
      if (!menusData) {
        return [];
      }
      return menusData.map(item => {
        if (item.name && !item.hideInMenu) {
          const ItemDom = this.getSubMenuOrItem(item, parent);
          return this.checkPermissionItem(item.authority, ItemDom);
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
        !item.hideChildrenInMenu &&
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
    checkPermissionItem(authority, ItemDom) {
      return ItemDom;
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
      return openKeys.filter(item => item !== path);
    }
  },
  render() {
    const { path } = this.$route;
    const openKeys = this.getOpenKeys(path);
    return (
      <a-menu
        openKeys={openKeys}
        selectedKeys={[path]}
        key="Menu"
        mode={this.mode}
        theme={this.theme}
        collapsed={this.collapsed}
      >
        {this.getNavMenuItems(this.menuData)}
      </a-menu>
    );
  }
};
</script>