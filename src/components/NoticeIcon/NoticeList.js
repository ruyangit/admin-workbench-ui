import './NoticeList.less'
import { List, Avatar } from "ant-design-vue";
import classNames from 'classnames';
export default {
    props: ['data', 'title', 'locale', 'emptyText', 'emptyImage', 'showClear'],
    methods: {
        onClear() {
            this.$emit('clear');
        },
        onClick(e){
            this.$emit('click',e);
        }
    },
    render() {
        const { data = [], title, locale, emptyText, emptyImage, showClear = true ,onClear} = this
        if (data.length === 0) {
            return (
                <div class="ai-notice notFound">
                    {emptyImage ? <img src={emptyImage} alt="not found" /> : null}
                    <div>{emptyText || locale.emptyText}</div>
                </div>
            );
        }
        return (
            <div class="ai-notice">
                <List class="list">
                    {data.map((item, i) => {
                        const itemCls = classNames('item', {
                            ['read']: item.read,
                        });
                        // eslint-disable-next-line no-nested-ternary
                        const leftIcon = item.avatar ? (
                        typeof item.avatar === 'string' ? (
                            <Avatar class="avatar" src={item.avatar} />
                        ) : (
                            item.avatar
                        )
                        ) : null;
                            
                        return (
                            <List.Item class={itemCls} rowKey={item.key || i} onClick={() => this.onClick(item)}>
                                <List.Item.Meta
                                    class="meta"
                                    avatar={<span class="iconElement">{leftIcon}</span>}
                                    title={
                                    <div class="title">
                                        {item.title}
                                        <div class="extra">{item.extra}</div>
                                    </div>
                                    }
                                    description={
                                    <div>
                                        <div class="description" title={item.description}>
                                        {item.description}
                                        </div>
                                        <div class="datetime">{item.datetime}</div>
                                    </div>
                                    }
                                />
                            </List.Item>
                        )

                    })}
                </List>
                {showClear ? (
                    <div class="clear" onClick={onClear}>
                        {locale.clear}
                        {title}
                    </div>
                ) : null}
            </div>
        )
    }
}