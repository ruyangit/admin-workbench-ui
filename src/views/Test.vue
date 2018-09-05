<template>
  <div class="test">
<div>
    <h4 style="margin-bottom: 16px">Presets:</h4>
    <div>
      <a-tag color="pink">pink</a-tag>
      <a-tag color="red">red</a-tag>
      <a-tag color="orange">orange</a-tag>
      <a-tag color="green">green</a-tag>
      <a-tag color="cyan">cyan</a-tag>
      <a-tag color="blue">blue</a-tag>
      <a-tag color="purple">purple</a-tag>
    </div>
    <h4 style="margin: '16px 0'">Custom:</h4>
    <div>
      <a-tag color="#f50">#f50</a-tag>
      <a-tag color="#2db7f5">#2db7f5</a-tag>
      <a-tag color="#87d068">#87d068</a-tag>
      <a-tag color="#108ee9">#108ee9</a-tag>
    </div>
  </div>
  <a-button>Abutton</a-button>
  </div>
</template>

<script>
  import {
    Tag,
    Button
  } from 'ant-design-vue';
  export default {
    components: {
      'a-tag':Tag,
      'a-button':Button
    }
  }
</script>

