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
          <Form onSubmit={this.handleSubmit}>
            <Tabs
              animated={false}
              onChange={this.onSwitchTab}
              defaultActiveKey={this.defaultActiveKey}
            >
              <Tabs.TabPane key="1" tab="账户密码登录">
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      { required: true, message: "Please input your Username!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="admin/user"
                      size="large"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      type="password"
                      placeholder="000000"
                      size="large"
                    />
                  )}
                </Form.Item>
              </Tabs.TabPane>
              <Tabs.TabPane key="2" tab="手机号登录">
                <Form.Item>
                  {getFieldDecorator("mobile", {
                    rules: [
                      { required: true, message: "Please input your Mobile!" }
                    ]
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="mobile"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="138000000"
                      size="large"
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Row gutter={8}>
                    <Col span={16}>
                      {getFieldDecorator("captcha", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Captcha!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type="scan"
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder="0000"
                          size="large"
                        />
                      )}
                    </Col>
                    <Col span={8}>
                      <Button size="large" class="getCaptcha">
                        获取验证码
                      </Button>
                    </Col>
                  </Row>
                </Form.Item>
              </Tabs.TabPane>
            </Tabs>
            <div>
              <Checkbox
                checked={this.autoLogin}
                onChange={this.onSwithAutoLogin}
              >
                自动登录
              </Checkbox>
              <a style="float:right;" href="#">
                忘记密码
              </a>
            </div>
            <Form.Item>
              <Button
                size="large"
                class="submit"
                type="primary"
                htmlType="submit"
              >
                登录
              </Button>
            </Form.Item>
            <div class="other">
              其他登录方式
              <Icon class="icon" type="alipay-circle" />
              <Icon class="icon" type="taobao-circle" />
              <Icon class="icon" type="weibo-circle" />
              <a class="register" href="#">
                注册账户
              </a>
            </div>
          </Form>
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