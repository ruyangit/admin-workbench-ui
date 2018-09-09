<script>
import {
  Form,
  Tabs,
  Input,
  Icon,
  Checkbox,
  Row,
  Col,
  Button
} from "ant-design-vue";

const AiLogin = {
  data: () => ({
    defaultActiveKey: "1",
    submitting: false,
    autoLogin: false
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
  },
  render() {
    const { getFieldDecorator } = this.form;
    return (
      <div class="ai-view-login-main">
        <div class="ai-login">
          <a-form onSubmit={this.handleSubmit}>
            <a-tabs
              animated={false}
              onChange={this.onSwitchTab}
              defaultActiveKey={this.defaultActiveKey}
            >
              <a-tab-pane key="1" tab="账户密码登录">
                <a-form-item>
                  {getFieldDecorator("username", {
                    rules: [
                      { required: true, message: "Please input your Username!" }
                    ]
                  })(
                    <a-input
                      prefix={
                        <a-icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="admin/user"
                      size="large"
                    />
                  )}
                </a-form-item>
                <a-form-item>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <a-input
                      prefix={
                        <a-icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="000000"
                      size="large"
                    />
                  )}
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane key="2" tab="手机号登录">
                <a-form-item>
                  {getFieldDecorator("mobile", {
                    rules: [
                      { required: true, message: "Please input your Mobile!" }
                    ]
                  })(
                    <a-input
                      prefix={
                        <a-icon
                          type="mobile"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="138000000"
                      size="large"
                    />
                  )}
                </a-form-item>
                <a-form-item>
                  <a-row gutter={8}>
                    <a-col span={16}>
                      {getFieldDecorator("captcha", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Captcha!"
                          }
                        ]
                      })(
                        <a-input
                          prefix={
                            <a-icon
                              type="scan"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder="0000"
                          size="large"
                        />
                      )}
                    </a-col>
                    <a-col span={8}>
                      <a-button size="large" class="getCaptcha">
                        获取验证码
                      </a-button>
                    </a-col>
                  </a-row>
                </a-form-item>
              </a-tab-pane>
            </a-tabs>
            <div>
              <a-checkbox
                checked={this.autoLogin}
                onChange={this.onSwithAutoLogin}
              >
                自动登录
              </a-checkbox>
              <a style="float:right;" href="#">
                忘记密码
              </a>
            </div>
            <a-form-item>
              <a-button
                size="large"
                class="submit"
                type="primary"
                htmlType="submit"
              >
                登录
              </a-button>
            </a-form-item>
            <div class="other">
              其他登录方式
              <a-icon class="icon" type="alipay-circle" />
              <a-icon class="icon" type="taobao-circle" />
              <a-icon class="icon" type="weibo-circle" />
              <a class="register" href="#">
                注册账户
              </a>
            </div>
          </a-form>
        </div>
      </div>
    );
  }
};

export default Form.create()(AiLogin);
</script>

<style lang="less">
@import url("./login.less");
</style>