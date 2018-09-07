<script>
export default {
  name: "ai-login-pane",
  functional: true,
  render(h, { children, data }) {
    return h('div', { typeName: "LoginTab", ...data }, children);
  }
};
</script>