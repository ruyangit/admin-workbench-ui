import './Header.less'
import { Layout, Icon, Spin } from "ant-design-vue";
import GlobalHeader from '@/components/GlobalHeader';
import { mapGetters } from "vuex";
const { Header } = Layout;
const HeaderView = {
    computed: {
        ...mapGetters({
            spinning: "global/getBasicLayoutSpinning",
            collapsed: "global/getChangeLayoutCollapsed"
        }),
    },
    methods: {
        onCollapsed() {
            this.$store.commit('global/UpdateChangeLayoutCollapsed', !this.collapsed)
        },
    },
    render() {
        const { spinning, collapsed, onCollapsed } = this
        return (
            <Header style={{ padding: 0 }}>
                <div class="header-index">
                    <Icon
                        class="trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={onCollapsed}
                    />
                    <Spin spinning={spinning}></Spin>
                    <GlobalHeader />
                </div>
            </Header>
        );
    }
}
export default HeaderView;
