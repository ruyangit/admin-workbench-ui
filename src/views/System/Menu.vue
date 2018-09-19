<template>
    <a-page-header-wrapper
    :loading="false"
    >
    menu
    
    </a-page-header-wrapper>
</template>

<script>
import { Avatar, Row, Col, Card, List } from "ant-design-vue";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
export default {
    data:()=>({
        activitiesLoading:true,
        projectLoading:false
    }),
  components: {
    APageHeaderWrapper: PageHeaderWrapper,
    AAvatar: Avatar,
    ARow: Row,
    ACol: Col,
    ACard: Card,
    ACardGrid: Card.Grid,
    ACardMeta: Card.Meta,
    AList: List
  },
  computed: {
  }
};
</script>
<style lang="less">
</style>