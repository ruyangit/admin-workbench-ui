import './index.less'
import { Tooltip } from "ant-design-vue";
export default {
    props: {
        target: { type: Number },
        color: {
            default: 'rgb(19, 194, 194)'
        },
        strokeWidth: { type: Number },
        percent: { type: Number },
    },
    components: {
        ATooltip: Tooltip
    },
    render() {
        const { target, color, percent, strokeWidth } = this
        return (
            <div class="miniProgress">
                <a-tooltip title={`目标值 ${target}%`}>
                    <div class='target' style={{ left: target + 'px' ? `${target}%` : null }}>
                        <span style={{ backgroundColor: color || null }} />
                        <span style={{ backgroundColor: color || null }} />
                    </div>
                </a-tooltip>
                <div class='progressWrap'>
                    <div
                        class='progress'
                        style={{
                            backgroundColor: color || null,
                            width: percent ? `${percent}%` : null,
                            height: strokeWidth + 'px' || null,
                        }}
                    />
                </div>
            </div>
        )
    }
}