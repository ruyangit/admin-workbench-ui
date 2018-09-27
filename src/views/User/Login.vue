<template>
<div class="ai-login-main">
  <div class="ai-login">
    <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
      <a-tabs :animated="false" :defaultActiveKey="activeKey" @change="onSwitchTab">
        <a-tab-pane key="1" tab="账户密码登录">
          <a-form-item
            fieldDecoratorId="username"
            :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入用户名!' }]}"
            >
            <a-input placeholder="用户名" size="large">
              <a-icon type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item
          fieldDecoratorId="password"
          :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入密码!' }]}"
          >
            <a-input type="password" placeholder="密码" size="large">
              <a-icon type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane key="2" tab="手机号登录">
          <a-form-item
          fieldDecoratorId="mobile"
          :fieldDecoratorOptions="{rules: [
            { required: true, message: '请输入手机号！' },
            { pattern: /^1\d{10}$/, message: '手机号格式错误！' },
          ]}"
          >
            <a-input placeholder="手机号" size="large">
              <a-icon type="mobile" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-row :gutter="8">
              <a-col :span="16">
                <a-form-item 
                  fieldDecoratorId="captcha"
                  :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入验证码!' }]}"
                  >
                <a-input placeholder="验证码" size="large">
                  <a-icon type="scan" style="color:rgba(0,0,0,.25)" />
                </a-input>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-send-captcha-button v-model="start" @click="send" :second="120" class="getCaptcha" storageKey="SendCaptchaStorageLoginKey" size="large" />
              </a-col>
            </a-row>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
      <div>
        <a-checkbox :checked="autoLogin" @change="onSwithAutoLogin">
          自动登录
        </a-checkbox>
        <a style="float:right;" href="#"> 忘记密码 </a>
      </div>
      <a-form-item>
        <a-button size="large" class="submit" type="primary" htmlType="submit">
          登录
        </a-button>
      </a-form-item>
      <div class="other">
        其他登录方式
        <a-icon class="icon" type="alipay-circle" />
        <a-icon class="icon" type="taobao-circle" />
        <a-icon class="icon" type="weibo-circle" />
        <router-link to="/user/register" class="register">注册账户</router-link>
      </div>
    </a-form>
  </div>
</div>
</template>

<script>
import {
  Form,
  Tabs,
  Input,
  Icon,
  Checkbox,
  Row,
  Col,
  Button,
  message
} from "ant-design-vue";
import SendCaptchaButton from "@/components/SendCaptchaButton";
import { mapGetters } from "vuex";
export default {
  name: "ai-login",
  data: () => ({
    activeKey: "2",
    active: [],
    submitting: false,
    autoLogin: false,
    start: false
  }),
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    AButton: Button,
    ACheckbox: Checkbox,
    AInput: Input,
    AIcon: Icon,
    ARow: Row,
    ACol: Col,
    ASendCaptchaButton: SendCaptchaButton
  },
  methods: {
    onSwithAutoLogin(e) {
      this.autoLogin = e.target.checked;
    },
    onSwitchTab(key) {
      this.active = [];
      if (key === "1") {
        this.active.push("username");
        this.active.push("password");
      } else {
        this.active.push("mobile");
        this.active.push("captcha");
      }
    },
    handleSubmit(e) {
      this.form.validateFields(
        this.active,
        {
          force: true
        },
        (err, values) => {
          if (!err) {
            // console.log("Received values of form: ", values);
            this.$router.push({path:'/'})
          }
        }
      );
    },
    send() {
      new Promise((resolve, reject) => {
        this.form.validateFields(["mobile"], {}, (err, values) => {
          if (err) {
            reject(err);
          } else {
            message.loading("Action in progress..", 0);
            setTimeout(() => {
              this.start = true;
              message.destroy();
              message.success("This is a message of success code [ 4569 ]", 10);
            }, 1000);
          }
        });
      });
    }
  },
  mounted() {
    this.onSwitchTab();
  }
};
</script>

<style lang="less">
@import url("./login.less");
</style>