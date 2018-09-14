<template>
    <div class="ai-register-main">
        <h3>注册</h3>
        <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
            <a-form-item fieldDecoratorId="email" :fieldDecoratorOptions="{rules: [
                                            { required: true, message: '请输入邮箱地址！' },
                                            { type: 'email',message: '邮箱地址格式错误！'}
                                            ]}">
                <a-input placeholder="邮箱" size="large" />
            </a-form-item>
            <a-popover placement="rightTop" :visible="visible">
                <div style="padding: 4px 0;width:240px;" slot="content">
                    <div v-show="passwordStatus==='ok'" class="success">强度：强</div>
                    <div v-show="passwordStatus==='pass'" class="warning">强度：中</div>
                    <div v-show="passwordStatus==='poor'" class="error">强度：太短</div>
                    <div :class="`progress-${passwordStatus}`">
                        <a-progress :status="passwordProgressStatus" class="progress" :strokeWidth="6" :percent="passwordProgressPercent" :showInfo="false" />
                    </div>
                    <div style="marginTop: 10">
                        请至少输入 6 个字符。请不要使用容易被猜到的密码。
                    </div>
                </div>
                <a-form-item :help="help" fieldDecoratorId="password" :fieldDecoratorOptions="{rules: [
                                            { validator: this.checkPassword }
                                            ]}">
                    <a-input type="password" placeholder="至少6位密码，区分大小写" size="large" />
                </a-form-item>
            </a-popover>
            <a-form-item fieldDecoratorId="confirm" :fieldDecoratorOptions="{rules: [
                                            { required: true, message: '请确认密码！', },
                                            { validator: this.checkConfirm, },
                                            ]}">
                <a-input type="password" placeholder="确认密码" size="large" />
            </a-form-item>
            <a-form-item fieldDecoratorId="mobile" :fieldDecoratorOptions="{rules: [
                                            { required: true, message: '请输入手机号！' },
                                            { pattern: /^1\d{10}$/, message: '手机号格式错误！' },
                                            ]}">
                <a-input placeholder="11位手机号" size="large">
                    <a-select slot="addonBefore" defaultValue="+86" style="width: 90px">
                        <a-select-option value="86">+86</a-select-option>
                        <a-select-option value="87">+87</a-select-option>
                    </a-select>
                </a-input>
            </a-form-item>
            <a-form-item fieldDecoratorId="captcha" :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入验证码!' }]}">
                <a-row :gutter="8">
                    <a-col :span="16">
                        <a-input placeholder="验证码" size="large"/>
                    </a-col>
                    <a-col :span="8">
                        <a-send-captcha-button v-model="start" @click="send" :second="120" class="getCaptcha"  storageKey="SendCaptchaStorageRegisterKey" size="large" />
                    </a-col>
                </a-row>
            </a-form-item>
            <a-form-item>
                <a-button size="large" class="submit" type="primary" htmlType="submit">
                登录
                </a-button>
                <router-link class="login" to="/user/login">使用已有账户登录</router-link>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import {
  Form,
  Input,
  Icon,
  Checkbox,
  Row,
  Col,
  Button,
  message,
  Popover,
  Progress,
  Select
} from "ant-design-vue";
import SendCaptchaButton from "@/components/SendCaptchaButton";
export default {
  name: "ai-register",
  data: () => ({
    visible: false,
    help: "",
    start: false,
    passwordStatus: "poor",
    passwordProgressPercent: 0,
    passwordProgressStatus: "active"
  }),
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AButton: Button,
    ACheckbox: Checkbox,
    AInput: Input,
    AInputGroup: Input.Group,
    AIcon: Icon,
    ARow: Row,
    ACol: Col,
    ASendCaptchaButton: SendCaptchaButton,
    APopover: Popover,
    AProgress: Progress,
    ASelect: Select,
    ASelectOption: Select.Option
  },
  methods: {
    checkPassword(rule, value, callback) {
      if (!value) {
        this.help = "请输入密码！";
        this.visible = !!value;
        callback("error");
      } else {
        this.passwordProgressPercent =
          value.length * 10 > 100 ? 100 : value.length * 10;
        if (value && value.length > 5) {
          this.passwordStatus = "pass";
          this.passwordProgressStatus = "active";
        }
        if (value && value.length > 9) {
          this.passwordStatus = "ok";
          this.passwordProgressStatus = "success";
        }
        if (value && value.length < 6) {
          this.passwordStatus = "poor";
          this.passwordProgressStatus = "exception";
        }
        this.help = "";
        if (!this.visible) {
          this.visible = !!value;
        }
        if (value.length < 6) {
          callback("error");
        } else {
          callback();
        }
      }
    },
    checkConfirm(rule, value, callback) {
      if (value && value !== this.form.getFieldValue("password")) {
        callback("两次输入的密码不匹配!");
      } else {
        callback();
      }
    },
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log("Received values of form: ", values);
          this.$router.push({path:'/'})
        }
      });
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
  }
};
</script>
<style lang="less">
@import url("./register.less");
</style>