<script>
import { Tabs, Form } from "ant-design-vue";
import { getOptionProps, getAttrs } from "ant-design-vue/lib/_util/props-util";
const { TabPane } = Tabs;

export default {
  name: "ai-login",
  props: {
    defaultActiveKey: { default: "1", type: String },
  },
  methods: {
    onSwitch(e) {
      this.$emit("change", e);
    }
  },
  render() {
    const { $slots } = this;
    const props = getOptionProps(this);
    const children = $slots.default;
    const tabChildren = [];
    const otherChildren = [];
    children.map(child => {
      if (!child) return;
      if (child.data && child.data.typeName === "LoginTab") {
        tabChildren.push(h(TabPane, child.data, child.children));
      } else {
        otherChildren.push(child);
      }
    });

    function handleSubmit(e) {
      e.preventDefault();
      // const { form } = data.attrs;
      // console.log(data.form);
      // data.form.validateFields((err, values) => {
      //   if (!err) {
      //     console.log("Received values of form: ", values);
      //   }
      // });
      // data.on.submit(e);
    }
    return (
      <div class="ai-login">
        <Form onSubmit={handleSubmit} autoFormCreate={form => {}}>
          {tabChildren.length ? (
            <div>
              <Tabs
                animated={false}
                onChange={this.onSwitch}
                defaultActiveKey={this.defaultActiveKey}
              >
                {tabChildren}
              </Tabs>
              {otherChildren}
            </div>
          ) : (
            [...children]
          )}
        </Form>
      </div>
    );
  }
};
</script>