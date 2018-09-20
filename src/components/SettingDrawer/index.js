import './index.less';
import ThemeColor from './ThemeColor';
import BlockChecbox from './BlockChecbox';
import { Drawer, Modal, Divider, message } from "ant-design-vue";

const Body = {
    props:['title'],
    render: function render() {
        var h = arguments[0];
        const { $slots,title } = this
        return h('div', { style: { marginBottom: 24 } }, [h('h3', { 'class': 'title' }, title), $slots['default']])
    }
}
const SettingDrawer = {
    data: () => ({
        primaryColor: "#42b983",
        blockChecbox: "sidemenu"
    }),
    props: ["collapse", "navTheme", "layout"],
    methods: {
        changeSetting(e) {
            console.log(e);
            // message.loading("正在编译主题！", 3);
        },
        onColorInput(e) {
            this.primaryColor = e;
        },
        onBlockInput(e) {
            this.blockChecbox = e;
        },
        togglerContent() {
            this.$parent.collapse = !this.collapse
        }

    },
    render() {
        const { collapse, primaryColor,blockChecbox } = this
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
                <p>整体风格设置</p>
                <Divider />
                <ThemeColor
                    title={this.$t('app.setting.themecolor')}
                    value={primaryColor}
                    onColorInput={this.onColorInput}
                    onChange={this.changeSetting}
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
                        value={blockChecbox}
                        onBlockInput={this.onBlockInput}
                        onChange={this.changeSetting}
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