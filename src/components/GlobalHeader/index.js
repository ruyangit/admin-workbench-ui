import './index.less'
import RightContent from './RightContent'
import { Icon, Spin } from "ant-design-vue";
import { mapGetters } from "vuex";
const GlobalHeader = {
    props:['theme','layout'],
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
        const { spinning, collapsed, onCollapsed, theme,layout } = this
        return (
            <div class="header-index">
                <Icon
                    class="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={onCollapsed}
                />
                <Spin spinning={spinning}></Spin>
                <RightContent theme={theme} layout={layout}/>
            </div>
        )
    }
}
export default GlobalHeader