import './index.less'
import { Badge, Popover, Icon, Spin, Tabs } from "ant-design-vue";
import classNames from "classnames";
import List from './NoticeList';
const { TabPane } = Tabs
const NoticeIcon = {
    props: ["className", "count", "bell", "locale", "loading"],
    methods: {
        classNames,
        onClear(e) {
            // console.log(e);
            this.$emit('clear',e);
        },
        onTabChange(e) {
            this.$emit('tabChange', e);
        },
        onPopupVisibleChange(e) {
            this.$emit('popupVisibleChange', e);
        },
        onItemClick(item, tabProps) {
            console.log(item);
            this.$emit('itemClick', item, tabProps);
        },
        getNotificationBox() {
            const { $slots, locale = {
                emptyText: '暂无数据',
                clear: '清空',
            }, loading = false } = this;
            const children = $slots.default;
            if (!children) {
                return null;
            }
            const panes = children.map(child => {
                const { list, title, emptyText, emptyImage = 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg' } = child.data.attrs
                const tab = list && list.length > 0 ? `${title} (${list.length})` : title
                return (
                    <TabPane tab={tab} key={title}>
                        <List
                            data={list}
                            onClick={item => this.onItemClick(item, child.data.attrs)}
                            onClear={() => this.onClear(title)}
                            title={title}
                            locale={locale}
                            emptyText={emptyText}
                            emptyImage={emptyImage}
                        />
                    </TabPane>
                )
            })
            return (
                <Spin spinning={loading} delay={0}>
                    <Tabs class="tabs" onChange={this.onTabChange}>
                        {panes}
                    </Tabs>
                </Spin>
            )
        }
    },
    render() {
        const { className, bell, count, onPopupVisibleChange } = this
        const noticeButtonClass = classNames(className, 'noticeButton');
        const NoticeBellIcon = bell || <Icon type="bell" class="icon" />;
        const trigger = (
            <span class={noticeButtonClass}>
                <Badge count={count} style={{ boxShadow: 'none' }} class="badge">
                    {NoticeBellIcon}
                </Badge>
            </span>
        );
        const notificationBox = this.getNotificationBox();
        if (!notificationBox) {
            return trigger;
        }
        return (
            <Popover
                placement="bottomRight"
                content={notificationBox}
                overlayClassName="ai-notice-popover"
                trigger="click"
                arrowPointAtCenter={true}
                // popupAlign={popupAlign}
                onVisibleChange={onPopupVisibleChange}
            >
                {trigger}
            </Popover>
        )
    }
}

NoticeIcon.Tab = TabPane

export default NoticeIcon