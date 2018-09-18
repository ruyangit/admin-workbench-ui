<template>
    <a-page-header-wrapper
    :loading="false"
    :content="pageHeaderContent"
    :extraContent="extraContent"
    >workplace</a-page-header-wrapper>
</template>

<script>
    import { Avatar } from "ant-design-vue";
    import PageHeaderWrapper from "@/components/PageHeaderWrapper";
    export default {
        components:{
            APageHeaderWrapper: PageHeaderWrapper,
            AAvatar: Avatar
        },
        computed:{
            pageHeaderContent(){
                return (
                    <div class="pageHeaderContent">
                        <div class="avatar">
                            <a-avatar size="large" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                        </div>
                        <div class="content">
                            <div class="contentTitle">早安 , RuYang ，祝你开心每一天！</div>
                            <div>研发，大数据产品中心</div>
                        </div>
                    </div>
                )
            },
            extraContent(){
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
                )
            }
        }
    }
</script>
<style lang="less">
@import url("./Workplace.less");
</style>