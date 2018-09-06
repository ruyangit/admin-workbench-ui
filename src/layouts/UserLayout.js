import './UserLayout.less'
import logo from '@/assets/logo.png';
const UserLayout = {
  props: {
    prefix: { default: 'ai-user-layout', types: String },
    logo: { default: logo, types: String }
  },
  render() {
    const { prefix, logo } = this.$props
    return (
      <div class={`${prefix}-container`}>
        <div class={`${prefix}-content`}>
          <div class={`${prefix}-top`}>
            <div class={`${prefix}-header`}>
              <img alt="logo" class={`${prefix}-logo`} src={logo} />
              <span class={`${prefix}-title`}>
                Ant Design
              </span>
            </div>
            <div class={`${prefix}-desc`}>
              Ant Design 是西湖区最具影响力的 Web 设计规范
            </div>
          </div>
          <router-view />
        </div>
      </div>
    )
  }
}
export default UserLayout