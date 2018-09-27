import './index.less'
import RightContent from '@/components/GlobalHeader/RightContent';
import BaseMenu from '@/components/SiderMenu/BaseMenu';
const TopNavHeader = {
    props: ['logo','theme','contentWidth','layout'],
    computed: {
        maxWidth(){
            return (this.contentWidth === 'Fixed' ? 1200 : window.innerWidth) - 330 - 165 - 4 - 36
        }
    },
    render(){
        const { maxWidth, logo, theme = 'dark', contentWidth = 'Fixed', layout} = this;
        return (
            <div class="top-nav-header">
                <div class={`head ${theme === 'light' ? 'light' : ''}`}>
                    <div class={`main ${contentWidth === 'Fixed' ? 'wide' : ''}`}>
                        <div class='left'>
                            <div class='logo'>
                                <router-link to="/">
                                    <img src={logo} alt="logo" />
                                    <h1>Ant Design Pro</h1>
                                </router-link>
                            </div>
                            <div
                            style={{
                                maxWidth,
                            }}
                            >
                            <BaseMenu theme={theme} layout={layout} mode="horizontal" styles="border: 'none'; height: 64px" />
                            </div>
                        </div>
                        <RightContent theme={theme} layout={layout}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default TopNavHeader