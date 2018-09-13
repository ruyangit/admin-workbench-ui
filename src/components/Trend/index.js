import './index.less';
import { Icon } from "ant-design-vue";
import classNames from 'classnames';
export default {
    props: {
        colorful: { default: true },
        reverseColor: { default: false },
        flag: { default: '' }
    },
    computed: {
        cls() {
            return classNames('trendItem', {
                ['trendItemGrey']: !this.colorful,
                ['reverseColor']: !this.reverseColor && !this.colorful,
            })
        }
    },
    render() {
        const { flag, cls } = this
        return (
            <div class={cls}>
                <span class='value'>{this.$slots.default}</span>
                {flag && (
                    <span class={flag}>
                        <Icon type={`caret-${flag}`} />
                    </span>
                )}
            </div>
        )
    }
}
