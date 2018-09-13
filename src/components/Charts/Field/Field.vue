<template>
    <div class="field">
        <span>{{label}}</span>
        <span>{{value}}</span>
    </div>
</template>

<script>
    export default {
        props: ["label", "value"]
    };
</script>
<style lang="less">
    @import url("./index.less");
</style>