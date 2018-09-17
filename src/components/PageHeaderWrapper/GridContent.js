import './GridContent.less'
const GridContent = {
    props: ["contentWidth"],
    render() {
        const { contentWidth, $slots } = this.props;
        const children = $slots.default;
        let className = `main`;
        if (contentWidth === 'Fixed') {
            className = `main wide`;
        }
        return <div class={className}>{children}</div>;
    }
}
export default GridContent