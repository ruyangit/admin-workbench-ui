<template>
    <div class="fff">
      <!-- <Form @submit="onSubmit" :autoFormCreate="(form)=>{this.form = form}">
        {{defaultActiveKey}}
      </Form> -->
    </div>
</template>

<script>
import { Form } from "ant-design-vue";
export default {
  name: "ai-login",
  data: () => ({
    form: {}
  }),
  props: {
    className: '',
    defaultActiveKey: '',
    onTabChange: () => {},
    onSubmit: () => {},
  },
  components: {
    Form
  },
  methods: {
    // onSubmit() {
    //   // this.$emit("onSubmit", this.form);
    // },
    // onTabChange() {
    //   this.$emit("onTabChange",'dddddd');
    // }
  },
  mounted(){
    this.onTabChange(1)
  }
};
</script>