import './BasicLayout.less'
import { Layout } from "ant-design-vue";
import pathToRegexp from 'path-to-regexp';
import SiderMenu from "@/components/SiderMenu";
import Header from './Header';
import Footer from './Footer';
import eventBus from '@/utils/eventBus.js'
import logo from "@/assets/logo.png";
import { mapGetters } from "vuex";
const BasicLayout = {
    data: () => ({
        layout: 'topmenu',
        logo
    }),
    methods: {

        matchParamsPath(pathname) {
            const pathKey = Object.keys(this.breadcrumbNameMap).find(key =>
                pathToRegexp(key).test(pathname)
            );
            return this.breadcrumbNameMap[pathKey];
        },

        getPageTitle(pathname) {
            const currRouterData = this.matchParamsPath(pathname);
            if (!currRouterData) {
                return 'Ant Design Pro';
            }
            const message = this.$t(currRouterData.locale || currRouterData.name)
            return `${message} - Ant Design Pro`;
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
            collapsed: "global/getChangeLayoutCollapsed",
            settings: "global/settings",
            breadcrumbNameMap: "global/nav/getBreadcrumbNameMap",
        }),
        getContentStyle() {
            return {
                margin: '24px 24px 0',
                paddingTop: this.settings.fixedHeader ? 64 : 0,
            }
        },
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // 通过 `vm` 访问组件实例
            document.title = vm.getPageTitle(to.path)
        })
    },
    beforeRouteUpdate(to, from, next) {
        this.$store.commit('global/UpdateBasicLayoutSpinning', true)
        document.title = this.getPageTitle(to.path)
        this.$nextTick(() => {
            next();
        })
    },
    mounted() {
        this.$store.dispatch('global/nav/getMenuNav');

        this.onResizeCollapsed()

        window.onresize = () => {
            // 通过捕获系统的onresize事件触发我们需要执行的事件
            this.onResizeCollapsed()
        }
    },
    render() {
        const { collapsed, getContentStyle, logo } = this;
        const { layout } = this.settings;
        const isTop = layout === 'topmenu';
        const isMobile = false;
        return (
            <Layout class="ai-basic-layout-container">
                {isTop && !isMobile ? null : (
                    <SiderMenu collapsed={collapsed} logo={logo}/>
                )}

                <Layout>
                    <Header logo={logo}/>
                    <Layout.Content style={getContentStyle}>
                        <router-view />
                    </Layout.Content>
                    <Footer />
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout