<template>
    <a-page-header-wrapper title="查询表格">
    <a-card :bordered="false">
          <div class="tableList">
            <div class="tableListForm">
                <a-form v-show="!expandForm" layout="inline" >
                    <a-row :gutter="{ md: 8, lg: 24, xl: 48 }">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="用户"
                          fieldDecoratorId="username"
                        >
                          <a-input placeholder="请输入" />
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="性别"
                          fieldDecoratorId="gender"
                        >
                            <a-select placeholder="请选择" style="width:100%">
                            <a-option value="male">male</a-option>
                            <a-option value="female">female</a-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <span class="submitButtons">
                        <a-button type="primary" htmlType="submit">
                            查询
                        </a-button>
                        <a-button :style="{ marginLeft: '8px' }" >
                            重置
                        </a-button>
                        <a :style="{ marginLeft: '8px' }" @click="toggleForm">
                            展开 <a-icon type="down" />
                        </a>
                        </span>
                    </a-col>
                    </a-row>
                </a-form>
                <a-form v-show="expandForm" layout="inline" >
                    <a-row :gutter="{ md: 8, lg: 24, xl: 48 }">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="用户"
                          fieldDecoratorId="username"
                        >
                          <a-input placeholder="请输入" />
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="性别"
                          fieldDecoratorId="gender"
                        >
                            <a-select placeholder="请选择" style="width:100%">
                            <a-option value="male">male</a-option>
                            <a-option value="female">female</a-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="姓名"
                          fieldDecoratorId="name"
                        >
                          <a-input placeholder="请输入" />
                        </a-form-item>
                    </a-col>
                    </a-row>
                    <a-row :gutter="{ md: 8, lg: 24, xl: 48 }">
                    <a-col :md="8" :sm="24">
                        <a-form-item label="时间"
                        fieldDecoratorId="registered"
                        >
                        <a-range-picker style="width:100%"/>
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="邮箱"
                        fieldDecoratorId="email"
                        >
                        <a-input placeholder="请输入" />
                        </a-form-item>
                    </a-col>
                    <a-col :md="8" :sm="24">
                        <a-form-item label="国籍"
                        fieldDecoratorId="nat"
                        >
                        <a-input placeholder="请输入" />
                        </a-form-item>
                    </a-col>
                    </a-row>
                    <div style="overflow: hidden">
                        <div :style="{ float: 'right', marginBottom: '24px' }">
                            <a-button type="primary" htmlType="submit">
                            查询
                        </a-button>
                        <a-button :style="{ marginLeft: '8px' }" >
                            重置
                        </a-button>
                            <a :style="{ marginLeft: '8px' }" @click="toggleForm">
                           收起 <a-icon type="up" />
                            </a>
                        </div>
                    </div>
                </a-form>
            </div>
            <div class="tableListOperator">
              <a-button icon="plus" type="primary" >
                新建
              </a-button>
              <span v-show="selectedRowKeys.length>0">
                <a-button>批量操作</a-button>
                <!-- <a-dropdown overlay={menu}>
                  <a-button>
                    更多操作 <icon type="down" />
                  </a-button>
                </a-dropdown> -->
              </span>
            </div>
            <!-- <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            /> -->
            <a-table 
                :columns="columns"
                :rowKey="record => record.login.uuid"
                :dataSource="users.data"
                :pagination="users.pagination"
                :loading="loading"
                @change="handleTableChange"
            >
                <!-- :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" -->
                <template slot="login" slot-scope="login">
                {{login.username}}
                </template>
                <template slot="name" slot-scope="name">
                {{name.first}} {{name.last}}
                </template>
                <template slot="registered" slot-scope="registered">
                {{registered.date}} ({{registered.age}})
                </template>
                <template slot="expandedRowRender" slot-scope="record" style="margin: 0">
                  <p :style="[sya,syb]">
                    <a-avatar :src="record.picture.large" shape="square" :size="128"/>
                  </p>
                  <p :style="[sya]">
                    Personal
                  </p>
                  <a-row>
                    <a-col :span="6">
                      <a-description-item title="Name" :content="record.name.first+' '+record.name.last"/>
                    </a-col>
                    <a-col :span="6">
                      <a-description-item title="Account" :content="record.login.username"/>
                    </a-col>
                    <a-col :span="6">
                      <a-description-item title="City" :content="record.location.city"/>
                    </a-col>
                    <a-col :span="6">
                      <a-description-item title="Postcode" :content="record.location.postcode"/>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="6">
                      <a-description-item title="Country" :content="record.nat"/>
                    </a-col>
                    <a-col :span="6">
                      <a-description-item title="Birthday" :content="record.dob.date+' ('+record.dob.age+')'"/>
                    </a-col>
                    <a-col :span="12">
                      <a-description-item title="Timezone" :content="record.location.timezone.description"/>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="12">
                    </a-col>
                    <a-col :span="12">
                    </a-col>
                  </a-row>
                  <a-divider/>
                  <p :style="[sya]">
                    Contacts
                  </p>
                  <a-row>
                    <a-col :span="6">
                      <a-description-item title="Email" :content="record.email"/>
                    </a-col>
                    <a-col :span="6">
                      <a-description-item title="Cell" :content="record.cell"/>
                    </a-col>
                    <a-col :span="6">
                      <a-description-item title="Phone" :content="record.phone"/>
                    </a-col>
                    <a-col :span="6">
                      <a-description-item title="Coordinates" :content="record.location.coordinates.latitude+' '+record.location.coordinates.longitude"/>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="12">
                      <a-description-item title="Registered" :content="record.registered.date+' ('+record.registered.age+')'"/>
                    </a-col>
                  </a-row>
                </template>
                <template slot="action" slot-scope="text, record">
                <a href="javascript:;">查看</a>
                <a-divider type="vertical" />
                <a href="javascript:;">配置</a>
                </template>
            </a-table>
          </div>
    </a-card>
    
    </a-page-header-wrapper>
</template>

<script>
import {
  Avatar,
  Row,
  Col,
  Card,
  List,
  Button,
  Form,
  Icon,
  Table,
  Divider,
  Dropdown,
  Input,
  Select,
  DatePicker
} from "ant-design-vue";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import DescriptionItem from "@/components/DescriptionItem";
const columns = [
  {
    title: "用户名",
    dataIndex: "login",
    sorter: true,
    width: "12%",
    scopedSlots: { customRender: "login" }
  },
  {
    title: "姓名",
    dataIndex: "name",
    sorter: true,
    width: "15%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "性别",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" }
    ],
  },
  {
    title: "邮箱",
    dataIndex: "email"
  },
  {
    title: "国籍",
    dataIndex: "nat",
  },
  {
    title: "Registered",
    dataIndex: "registered",
    scopedSlots: { customRender: "registered" }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  }
];
import { mapGetters } from "vuex";
export default {
  data: () => ({
    expandForm: false,
    selectedRowKeys:[],
    columns,
    sya: {
      fontSize: '16px',
      color: 'rgba(0,0,0,0.85)',
      lineHeight: '24px',
      display: 'block',
      marginBottom: '16px',
    },
    syb: {
      marginBottom: '24px'
    }
  }),
  async asyncData({ store, route }, config = { results: 15 }) {
    await store.dispatch("frontend/openapi/getUsers", {
      ...config,
      path: route.path
    });
  },
  computed: {
    ...mapGetters({
      loading: "frontend/openapi/loading",
      users: "frontend/openapi/getUsers"
    })
  },
  components: {
    APageHeaderWrapper: PageHeaderWrapper,
    AAvatar: Avatar,
    ARow: Row,
    ACol: Col,
    ACard: Card,
    ACardGrid: Card.Grid,
    ACardMeta: Card.Meta,
    AList: List,
    AButton: Button,
    AForm: Form,
    AFormItem: Form.Item,
    AIcon: Icon,
    ATable: Table,
    ADescriptionItem: DescriptionItem,
    ADivider: Divider,
    ADropdown: Dropdown,
    AInput: Input,
    ASelect: Select,
    AOption: Select.Option,
    ARangePicker: DatePicker.RangePicker,
  },
  methods: {
    toggleForm() {
      this.expandForm = !this.expandForm;
    },
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys
    },
    handleTableChange(pagination, filters, sorter) {
      const pager = { ...this.users.pagination };
      pager.current = pagination.current;
      this.users.pagination = pager;
      this.$options.asyncData(
        { store: this.$store, route: this.$route },
        {
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters
        }
      );
    }
  },
  mounted() {
    this.$options.asyncData(
      { store: this.$store, route: this.$route },
      { results: 15 }
    );
  }
};
</script>
<style lang="less">
@import url("assets/tableList.less");
</style>