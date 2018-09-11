<script>
import { Menu, Icon } from "ant-design-vue";
// Conversion router to menu.
export default {
  data() {
    return {
      flatMenuKeys: this.getFlatMenuKeys(this.menuData)
    };
  },
  props: {
    collapsed: { default: false, type: Boolean },
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
    getFlatMenuKeys(menus) {
      let keys = [];
      menus.forEach(item => {
        if (item.menus) {
          keys = keys.concat(this.getFlatMenuKeys(item.menus));
        }
        keys.push(item.path);
      });
      return keys;
    },
    getNavMenuItems(menusData, parent) {
      if (!menusData) {
        return [];
      }
      return menusData
        .filter(item => item.name && !item.hideInMenu)
        .map(item => {
          // make dom
          const ItemDom = this.getSubMenuOrItem(item, parent);
          return this.checkPermissionItem(item.authority, ItemDom);
        })
        .filter(item => item);
    },
    getSubMenuOrItem(item) {
      // doc: add hideChildrenInMenu 隐藏菜单
      if (
        item.menus &&
        !item.hideChildrenInMenu &&
        item.menus.some(menu => menu.name)
      ) {
        //   const name = formatMessage({ id: item.locale });
        const name = "哈哈";
        return (
          <a-sub-menu
            title={
              item.icon ? (
                <span>
                  icon
                  <span>{name}</span>
                </span>
              ) : (
                name
              )
            }
            key={item.path}
          >
            {this.getNavMenuItems(item.children)}
          </a-sub-menu>
        );
      }
      return (
        <a-menu-item key={item.path}>{this.getMenuItemPath(item)}</a-menu-item>
      );
    },
    getMenuItemPath(item) {
      return "getMenuItemPath";
      // const name = formatMessage({ id: item.locale });
      // const itemPath = this.conversionPath(item.path);
      // const icon = getIcon(item.icon);
      // const { target } = item;
      // // Is it a http link
      // if (/^https?:\/\//.test(itemPath)) {
      //     return (
      //         <a href={itemPath} target={target}>
      //         {icon}
      //         <span>{name}</span>
      //         </a>
      //     );
      // }
      // return <span>test</span>
      // const { location, isMobile, onCollapse } = this.props;
      // return (
      // <Link
      //     to={itemPath}
      //     target={target}
      //     replace={itemPath === location.pathname}
      //     onClick={
      //     isMobile
      //         ? () => {
      //             onCollapse(true);
      //         }
      //         : undefined
      //     }
      // >
      //     {icon}
      //     <span>{name}</span>
      // </Link>
      // );
    },
    checkPermissionItem(authority, ItemDom) {
      return ItemDom;
    },
    conversionPath(path) {
      if (path && path.indexOf("http") === 0) {
        return path;
      }
      return `/${path || ""}`.replace(/\/+/g, "/");
    }
  },
  mounted() {
    // console.log(this.menuData);
    // console.log(this.flatMenuKeys);
  },
  render() {
    return (
      <a-menu key="Menu" mode="inline" theme="dark" {...this.props}>
        {this.getNavMenuItems(this.menuData)}
      </a-menu>
    );
  }
};
</script>