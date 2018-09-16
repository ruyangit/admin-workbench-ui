import './index.less'
import { Badge, Popover, Icon, Spin, Tabs } from "ant-design-vue";
import classNames from "classnames";
const { TabPane } = Tabs
const NoticeIcon = {
    props: ["className","count","bell","popupAlign"],
    methods:{
        classNames
    },
    render(){
        const {className,bell,count,popupAlign} =  this
        const noticeButtonClass = classNames(className, 'noticeButton');
        const NoticeBellIcon = bell || <Icon type="bell" class="icon"/>;
        const trigger = (
            <span class={noticeButtonClass}>
                <Badge count={count} style={{ boxShadow: 'none' }} class="badge">
                {NoticeBellIcon}
                </Badge>
            </span>
        );
        // const notificationBox = this.getNotificationBox();
        const notificationBox = null;
        // console.log(!!notificationBox);
        if (!!notificationBox) {
            return trigger;
        }
        return (
            <Popover
                placement="bottomRight"
                content="alfjasjflaksjfls"
                // content={notificationBox}
                // popupClassName={styles.popover}
                trigger="click"
                // arrowPointAtCenter
                popupAlign={popupAlign}
                // onVisibleChange={onPopupVisibleChange}
                // {...popoverProps}
            >
                {trigger}
            </Popover>
        )
    }
}

export default NoticeIcon