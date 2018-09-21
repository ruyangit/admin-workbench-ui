import './index.less';
import ThemeColor from './ThemeColor';
import BlockChecbox from './BlockChecbox';
import { Drawer, Modal, Divider, message } from "ant-design-vue";
import { mapGetters } from "vuex";
const Body = {
    props:['title'],
    render: function render() {
        var h = arguments[0];
        const { $slots,title } = this
        return h('div', { style: { marginBottom: 24 } }, [h('h3', { 'class': 'title' }, title), $slots['default']])
    }
}
const SettingDrawer = {
    // data: () => ({
    //     primaryColor: "#42b983",
    //     blockChecbox: "sidemenu"
    // }),
    props: ["collapse"],
    computed: {
        ...mapGetters({
            settings: "global/settings",
        }),
    },
    methods: {
        changeSetting(key,value) {
            const nextState = this.settings;
            nextState[key] = value;

            if (key === 'layout') {
                nextState.contentWidth = value === 'topmenu' ? 'Fixed' : 'Fluid';
            } 
            // else if (key === 'fixedHeader' && !value) {
            //     nextState.autoHideHeader = false;
            // }
            // console.log(this.settings);
            // console.log(nextState);

            // this.$store.commit('global/UpdateDefaultSettings', this.s)
            // this.$store.commit('global/UpdateDefaultSettings', nextState)
            // console.log(key);
            // console.log(value);
            // message.loading("正在编译主题！", 3);

            this.$store.dispatch('global/defaultSettings',true)
        },
        togglerContent() {
            this.$parent.collapse = !this.collapse
        }

    },
    render() {
        const { collapse } = this
        const { primaryColor, layout, navTheme } = this.settings
        return (
            <Drawer
               
                title="我是一个抽屉"
                placement="right"
                closable={false}
                onClose={this.togglerContent}
                visible={collapse}
                width={300}
            >
                <div  class="setting-drawer content">
                <Body title={this.$t('app.setting.pagestyle')}>
                    <BlockChecbox
                        list={[
                            {
                                key: 'dark',
                                url: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                                title: this.$t('app.setting.pagestyle.dark'),
                            },
                            {
                                key: 'light',
                                url: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                                title: this.$t('app.setting.pagestyle.light'),
                            },
                        ]}
                        value={navTheme}
                        onChange={e=>{this.changeSetting('navTheme',e)}}
                    />
                </Body>
                <Divider />
                <ThemeColor
                    title={this.$t('app.setting.themecolor')}
                    value={primaryColor}
                    onChange={e=>{this.changeSetting('primaryColor',e)}}
                />

                <Divider />

                <Body title={this.$t('app.setting.navigationmode')}>
                    <BlockChecbox
                        list={[
                            {
                                key: 'sidemenu',
                                url: 'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                                title: this.$t('app.setting.sidemenu'),
                            },
                            {
                                key: 'topmenu',
                                url: 'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                                title: this.$t('app.setting.topmenu'),
                                style: {paddingLeft: '18px'}
                            },
                        ]}
                        value={layout}
                        onChange={e=>{this.changeSetting('layout',e)}}
                    />
                </Body>

                <Divider />
                <p>其它设置</p>
                </div>
            </Drawer>
        )
    }
}
export default SettingDrawer