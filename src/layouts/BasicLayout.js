import './BasicLayout.less'
import { Layout, Icon, Spin } from "ant-design-vue";
import SiderMenu from "@/components/SiderMenu";
import GlobalHeader from "@/components/GlobalHeader";
import Footer from './Footer';
import { mapGetters } from "vuex";
const BasicLayout = {
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
        },
        onCollapsed() {
            this.$store.commit('global/UpdateChangeLayoutCollapsed', !this.collapsed)
        },
        onResizeCollapsed() {
            if (window.innerWidth <= 900) {
                this.$store.commit('global/UpdateChangeLayoutCollapsed', true)
            } else {
                this.$store.commit('global/UpdateChangeLayoutCollapsed', false)
            }
        }
    },
    computed: {
        ...mapGetters({
            spinning: "global/getBasicLayoutSpinning",
            collapsed: "global/getChangeLayoutCollapsed"
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
    mounted() {
        this.onResizeCollapsed()

        window.onresize = () => {
            // 通过捕获系统的onresize事件触发我们需要执行的事件
            this.onResizeCollapsed()
        }
    },
    render() {
        const { collapsed, onCollapsed, getContentStyle, spinning } = this;
        const menuData = this.getMenuData();
        return (
            <Layout class="ai-basic-layout-container">
                <SiderMenu collapsed={collapsed} menuData={menuData} />
                <Layout>
                    <Layout.Header>
                        <Icon
                            class="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={onCollapsed}
                        />
                        <Spin spinning={spinning}></Spin>
                        <GlobalHeader />
                    </Layout.Header>
                    <Layout.Content style={getContentStyle}>
                        <router-view />
                    </Layout.Content>
                    <Footer/>
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout