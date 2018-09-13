import './BasicLayout.less'
import { Layout, Icon, Spin } from "ant-design-vue";
import SiderMenu from "@/components/SiderMenu/index.js";
import { mapGetters } from "vuex";
const BasicLayout = {
    data: () => ({
        collapsed: false,
        // spinning: false,
    }),
    props: ['fixedHeader'],
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
    computed: {
        ...mapGetters({
            spinning: "global/getBasicLayoutSpinning"
        }),
        getContentStyle() {
            return {
                margin: '24px 24px 0',
                paddingTop: this.fixedHeader ? 64 : 0,
            }
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.$store.commit('global/UpdateBasicLayoutSpinning', true)
        this.$nextTick(() => {
            next();
        })
    },
    render() {
        const { collapsed, getContentStyle, spinning } = this;
        const menuData = this.getMenuData();
        return (
            <Layout class="ai-basic-layout-container">
                <SiderMenu collapsed={collapsed} menuData={menuData} />
                <Layout>
                    <Layout.Header>
                        <Icon
                            class="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={() => this.collapsed = !collapsed}
                        />
                    </Layout.Header>
                    <Layout.Content style={getContentStyle}>
                        <Spin spinning={spinning}>
                            <router-view />
                        </Spin>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout