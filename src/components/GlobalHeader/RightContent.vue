<template>
    <div class="ai-header-right">
        <a-tooltip title="使用文档" placement="bottom">
            <a target="_blank" href="javascript:;" class="action">
                <a-icon type="question-circle-o" />
            </a>
        </a-tooltip>
        <a-tooltip title="消息" placement="bottom">
            <a href="/" class="action">
                <a-icon type="bell" />
            </a>
        </a-tooltip>
        <a-tooltip :title="$t('navbar.lang')" placement="bottom">
            <a href="javascript:;" class="action" @click='changeLang'>
                <a-icon type="api" />
            </a>
        </a-tooltip>
        
        <a-dropdown >
            <span class="action account">
              <a-avatar
                size="small"
                class="avatar"
                src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
                alt="avatar"
              />
              <span class="name">Jack Ma</span>
            </span>

            <a-menu slot="overlay" class="menu">
                <a-menu-item key="userCenter">
                    <a-icon type="user"/>
                    {{$t('menu.account.center')}}
                </a-menu-item>
                <a-menu-item key="userinfo">
                    <a-icon type="setting"/>
                    {{$t('menu.account.settings')}}
                </a-menu-item>
                <a-menu-item key="triggerError">
                    <a-icon type="close-circle-o" />
                    {{$t('menu.account.trigger')}}
                </a-menu-item>
                
                <a-menu-divider/>
                <a-menu-item key="logout">
                    <a-icon type="logout"/>
                    退出登录
                </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-tooltip title="预览设置" placement="bottom">
            <a @click="()=>{this.visible=!this.visible}" href="javascript:;" class="action" :style="{marginRight: '12px'}">
                <a-icon type="ellipsis" />
            </a>
           </a-tooltip>
          <a-drawer
            title="我是一个抽屉"
            placement="right"
            :closable="false"
            @close="()=>{this.visible = false}"
            :visible="visible"
            >
            <p>设置一</p>
            <p>设置二</p>
            <p>设置三</p>
            </a-drawer>
    </div>
</template>

<script>
import { Tooltip, Icon, Dropdown, Menu, Avatar, Drawer } from "ant-design-vue";
export default {
  data: () => ({
    visible: false
  }),
  components: {
    ATooltip: Tooltip,
    AIcon: Icon,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    AMenuDivider: Menu.Divider,
    AAvatar: Avatar,
    ADrawer: Drawer
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === "en_US" ? "zh_CN" : "en_US";
    }
  }
};
</script>
