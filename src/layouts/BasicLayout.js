import './BasicLayout.less'
import { Layout, Icon } from "ant-design-vue";
import SiderMenu from "@/components/SiderMenu/index.js";
const BasicLayout = {
    data: () => ({
        collapsed: false
    }),
    methods: {
        formatter(data, parentPath = '', parentAuthority, parentName) {
            return data.map(item => {
                let locale = 'menu';
                if (parentName && item.name) {
                    locale = `${parentName}.${item.name}`;
                } else if (item.name) {
                    locale = `menu.${item.name}`;
                } else if (parentName) {
                    locale = parentName;
                }
                const result = {
                    ...item,
                    locale,
                    authority: item.authority || parentAuthority,
                };

                if (item.children) {
                    const menus = this.formatter(item.children, `${parentPath}${item.path}/`, item.authority, locale);
                    // Reduce memory usage
                    result.menus = menus;
                }
                delete result.children;
                return result;
            });
        },
        getMenuData() {
            const { options: { routes } } = this.$router;
            return this.formatter(routes);
        }
    },
    mounted() {
    },
    render() {
        const { collapsed } = this;
        const menuData = this.getMenuData();
        return (
            <Layout class="ai-basic-layout-container">
                <SiderMenu collapsed={collapsed} menuData={menuData}/>
                <Layout>
                    <Layout.Header>
                        <Icon
                            class="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={() => this.collapsed = !collapsed}
                        />
                    </Layout.Header>
                    <Layout.Content>
                        <router-view />
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout