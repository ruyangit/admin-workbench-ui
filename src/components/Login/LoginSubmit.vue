<script>
import { Button, Form } from "ant-design-vue";
export default {
  name: "ai-login-submit",
  functional: true,
  render(h, { children, data }) {
    return (
      <Form.Item>
        <Button size="large" class="submit" type="primary" htmlType="submit" {...data}>
          {children}
        </Button>
      </Form.Item>
    );
  }
};
</script>