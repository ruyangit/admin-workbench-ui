import './GridContent.less'
import { mapGetters } from "vuex";
const GridContent = {
    computed: {
        ...mapGetters({
            settings: "global/settings"
        })
    },
    render() {
        const {  $slots } = this;
        const { contentWidth } = this.settings;
        const children = $slots.default;
        let className = `main`;
        if (contentWidth === 'Fixed') {
            className = `main wide`;
        }
        return <div class={className}>{children}</div>;
    }
}
export default GridContent