<template>
    <a-page-header-wrapper
    :loading="false"
    :tabList="tabList"
    tabActiveKey="articles"
    :tabChange="tabChange"
    >
    menu
    
    </a-page-header-wrapper>
</template>

<script>
import { Avatar, Row, Col, Card, List } from "ant-design-vue";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
export default {
  data: () => ({
    activitiesLoading: true,
    projectLoading: false,
    tabList: [
      {
        key: "articles",
        tab: "菜单列表"
      },
      {
        key: "application",
        tab: "应用列表"
      }
    ]
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
  methods:{
      tabChange(e){
          console.log(e);
      }
  }
};
</script>
<style lang="less">
</style>