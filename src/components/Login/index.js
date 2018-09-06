import './index.less'

import AiLogin from './Login'
import AiLoginTab from './LoginTab'
import AiLoginItem from './LoginItem'
import AiLoginSubmit from './LoginSubmit'

AiLogin.Tab = AiLoginTab
AiLogin.Item = AiLoginItem
AiLogin.Submit = AiLoginSubmit

export default AiLogin
export {
    AiLogin,
    AiLoginTab,
    AiLoginItem,
    AiLoginSubmit
}