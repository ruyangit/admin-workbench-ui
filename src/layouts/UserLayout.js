import './UserLayout.less'
import logo from '@/assets/logo.png';
const UserLayout = {
  props: {
    prefix: { default: 'ai-user-layout', types: String },
    logo: { default: logo, types: String }
  },
  render() {
    return (
      <div class={`${this.prefix}-container`}>
        <div class={`${this.prefix}-content`}>
          <div class={`${this.prefix}-top`}>
            <div class={`${this.prefix}-header`}>
            <img alt="logo" class={`${this.prefix}-logo`} src={this.logo} />
              <span class={`${this.prefix}-title`}>
                Ant Design
              </span>
            </div>
            <div class={`${this.prefix}-desc`}>
              Ant Design 是西湖区最具影响力的 Web 设计规范
            </div>
          </div>
          <router-view/>
        </div>
      </div>
    )
  }
}
export default UserLayout