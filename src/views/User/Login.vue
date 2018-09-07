<template>
<div class="ai-view-login-main">
    <Login @change="onSwitchTab">
      <Tab key="1" tab="账户密码登录">
        <FormItem fieldDecoratorId="username" :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Username!' }]}">
          <a-input placeholder="Username" size="large">
            <Icon slot="prefix" type="user" />
          </a-input>
        </FormItem>
        <FormItem fieldDecoratorId="password" :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your Password!' }]}">
          <a-input placeholder="Password" size="large">
            <Icon slot="prefix" type="lock" />
          </a-input>
        </FormItem>
      </Tab>
      <Tab key="2" tab="手机号登录">
        <FormItem fieldDecoratorId="mobile" :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your mobile!' }]}">
          <a-input placeholder="Mobile/number" size="large">
            <Icon slot="prefix" type="mobile" />
          </a-input>
        </FormItem>
        <FormItem fieldDecoratorId="captcha" :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your captcha!' }]}">
          <a-row :gutter="8">
            <a-col :span="16">
              <a-input placeholder="Captcha/number" size="large">
                <Icon slot="prefix" type="scan" />
              </a-input>
            </a-col>
            <a-col :span="8">
              <Button size="large" class="getCaptcha">
               获取验证码
              </Button>
            </a-col>
          </a-row>
        </FormItem>
      </Tab>
      <div>
        <Checkbox :checked="autoLogin" @change="onSwithAutoLogin">
          自动登录
        </Checkbox>
        <a style="float:right;" href="#">忘记密码</a>
      </div>
      <Submit :loading="submitting">登录</Submit>
      <div class="other">
        其他登录方式
        <Icon class="icon" type="alipay-circle" />
        <Icon class="icon" type="taobao-circle" />
        <Icon class="icon" type="weibo-circle" />
        <a class="register" href="#">
              注册账户
            </a>
      </div>
    </Login>
</div>
</template>

<script>
import Login from "@/components/Login";
import { Form, Input, Icon, Checkbox, Row, Col, Button } from "ant-design-vue";
const { Tab, Submit } = Login;

export default {
  data: () => ({
    submitting: false,
    autoLogin: false,
    form: {}
  }),
  components: {
    Login,
    Tab,
    Submit,
    Form,
    FormItem: Form.Item,
    "a-input": Input,
    Icon,
    Checkbox,
    "a-row": Row,
    "a-col": Col,
    Button
  },
  methods: {
    onSwithAutoLogin(e) {
      this.autoLogin = e.target.checked;
    },
    onSwitchTab(key) {
      console.log(key);
    },
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style lang="less">
@import url("./login.less");
</style>