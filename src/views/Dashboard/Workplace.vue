<template>
    <a-page-header-wrapper
    :loading="false"
    :content="pageHeaderContent"
    :extraContent="extraContent"
    >
    <a-row :gutter="24">
        <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card
              class="projectList"
              style="margin-bottom:24px"
              title="进行中的项目"
              :bordered="false"
              :loading="projectLoading"
              :bodyStyle="{padding:'0px'}"
            >
            <div slot="extra"><router-link to="/">全部项目</router-link></div>
            <a-card-grid class="projectGrid" v-for="(item,index) in 8" :key="index">
                <a-card :bodyStyle="{padding:'0px'}" :bordered="false">
                    <a-card-meta>
                        <div slot="title" class="cardTitle">
                            <a-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"/>
                        </div>
                        <div slot="description">description</div>
                    </a-card-meta>
                    <div class="projectItemContent">
                        <router-link to="/">{item.member || ''}</router-link>
                        <!-- <span v-if="item.updatedAt" class="datetime"> -->
                            <!-- {moment(item.updatedAt).fromNow()} -->123
                        <!-- </span> -->
                    </div>
                </a-card>
             </a-card-grid>
            </a-card>
            <a-card
              :bodyStyle="{padding:'0px'}"
              :bordered="false"
              class="activeCard"
              title="动态"
              :loading="activitiesLoading"
            >
              <a-list :loading="activitiesLoading" size="large">
                <div class="activitiesList">{this.renderActivities()}</div>
              </a-list>
            </a-card>
        </a-col>
        <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
            <a-card
              :bodyStyle="{paddingTop: '12px', paddingBottom: '12px'}"
              :bordered="false"
              title="团队"
              :loading="projectLoading"
              style="margin-bottom:24px"
            >
              <div class="members">
                <a-row :gutter="48">
                    <a-col :span="12" v-for="(item,index) in 5" :key="index">
                      <router-link to="/">
                        <a-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"/>
                        <span class="member">团队{{item}}中二团和谐</span>
                      </router-link>
                    </a-col>
                </a-row>
              </div>
            </a-card>
            <a-card
              :bodyStyle="{paddingTop: '12px', paddingBottom: '12px'}"
              :bordered="false"
              title="指数"
              :loading="projectLoading"
            >
              <div class="members">
                <a-row :gutter="48">
                    <a-col :span="12" v-for="(item,index) in 8" :key="index">
                      <router-link to="/">
                        <a-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"/>
                        <span class="member">指数{{item}}中二团和谐</span>
                      </router-link>
                    </a-col>
                </a-row>
              </div>
            </a-card>
        </a-col>
    </a-row>
    
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
    pageHeaderContent() {
      return (
        <div class="pageHeaderContent">
          <div class="avatar">
            <a-avatar
              size="large"
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
          </div>
          <div class="content">
            <div class="contentTitle">早安 , RuYang ，祝你开心每一天！</div>
            <div>研发，大数据产品中心</div>
          </div>
        </div>
      );
    },
    extraContent() {
      return (
        <div class="extraContent">
          <div class="statItem">
            <p>项目数</p>
            <p>56</p>
          </div>
          <div class="statItem">
            <p>团队内排名</p>
            <p>
              8<span> / 24</span>
            </p>
          </div>
          <div class="statItem">
            <p>项目访问</p>
            <p>2,223</p>
          </div>
        </div>
      );
    }
  }
};
</script>
<style lang="less">
@import url("./Workplace.less");
</style>