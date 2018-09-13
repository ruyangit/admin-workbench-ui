import './GridContent.less'
export default {
  props: ['contentWidth'],
  computed: {
    cls() {
      let className = `main`;
      if (this.contentWidth === 'Fixed') {
        className = `main wide`;
      }
      return className;
    }
  },
  render() {
    return (
      <div class={this.cls}>{this.$slots.default}</div>
    )
  }
}