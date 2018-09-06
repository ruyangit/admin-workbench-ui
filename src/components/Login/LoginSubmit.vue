<template>
    <a-form-item>
      <a-button type='primary' htmlType='submit'>
        Submit
      </a-button>
    </a-form-item>
</template>

<script>
import { Button, Form } from "ant-design-vue";
export default {
  name: "ai-login-submit",
  components:{
      Button,
      Form
  }
};
</script>