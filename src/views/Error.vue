<template>
  <div class="error">
    <h1>This is an about page error</h1>
    <Button type="primary">Primary</Button>

    <Icon type="line-chart" />
  </div>
</template>

<script>
  import {
    Button,
    Icon
  } from 'ant-design-vue';
  export default {
    components: {
      Button,
      Icon
    }
  }
</script>
<style lang="less">
@import url('../assets/less/bundle.less');
</style>


