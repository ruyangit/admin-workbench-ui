import './UserLayout.less'
import logo from '@/assets/logo.png';
const UserLayout = {
  props: {
    logo: { default: logo, types: String }
  },
  render() {
    return (
      <div class="ai-user-layout-container">
        <div class="content">
          <div class="top">
            <div class="header">
              <img alt="logo" class="logo" src={this.logo} />
              <span class="title">
                Ant Design
              </span>
            </div>
            <div class="desc">
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