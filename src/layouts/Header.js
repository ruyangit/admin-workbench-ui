import './Header.less'
import { Layout } from "ant-design-vue";
import GlobalHeader from '@/components/GlobalHeader';
import TopNavHeader from '@/components/TopNavHeader';
import { mapGetters } from "vuex";
const { Header } = Layout;
const HeaderView = {
    props: ['menuData', 'logo'],
    computed: {
        ...mapGetters({
            settings: "global/settings"
        })
    },
    render() {
        const { menuData, logo } = this
        const { layout, navTheme, fixedHeader } = this.settings;
        const isTop = layout === 'topmenu';
        const isMobile = false;
        return (
            <Header style={{ padding: 0 }} class={fixedHeader ? 'fixedHeader' : ''}>
                {isTop && !isMobile ? (
                    <TopNavHeader
                        theme={navTheme}
                        layout={layout}
                        mode="horizontal"
                        menuData={menuData}
                        logo={logo}
                    />
                ) : (
                        <GlobalHeader theme={navTheme} layout={layout}/>
                    )}
            </Header>
        );
    }
}
export default HeaderView;
