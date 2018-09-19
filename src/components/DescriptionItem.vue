<template>
     <div class="descItem">
      <p>
        {{title}}
      </p>
      <template v-if="content">{{content}}</template>
      <slot name="content" v-else></slot>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String|Number|null
  }
};
</script>

<style lang="less">
.descItem {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 7px;
  color: rgba(0, 0, 0, 0.65);
  p {
    margin-right: 8px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>