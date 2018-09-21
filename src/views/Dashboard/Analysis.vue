<template>
  <a-grid-content>
    <a-row :gutter="24">
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <a-chart-card :loading="loading" contentHeight="46px" :total="yuan(158829)" :title="$t('app.analysis.total-sales')">
          <a-tooltip placement="top" slot="action">
            <span slot="title">
                <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <a-field slot="footer" :label="$t('app.analysis.day-sales')" :value="yuan(6093)" />
          <a-trend flag="up" :style="{marginRight: '16px'}">
            {{$t('app.analysis.week')}}
            <span class="trendText">12%</span>
          </a-trend>
          <a-trend flag="down">
            {{$t('app.analysis.day')}}
            <span class="trendText">11%</span>
          </a-trend>
        </a-chart-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <a-chart-card :loading="loading" contentHeight="46px" :total="numeral(36784).format('0,0')" :title="$t('app.analysis.visits')">
          <a-tooltip placement="top" slot="action">
            <span slot="title">
                <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <a-field slot="footer" :label="$t('app.analysis.day-visits')" :value="numeral(6678).format('0,0')" />
          <!-- <a-mini-area color="#975FE4" /> -->
          <a-trend flag="up" :style="{marginRight: '16px'}">
            {{$t('app.analysis.week')}}
            <span class="trendText">6%</span>
          </a-trend>
          <a-trend flag="down">
            {{$t('app.analysis.day')}}
            <span class="trendText">2%</span>
          </a-trend>
        </a-chart-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <a-chart-card :loading="loading" contentHeight="46px" :total="numeral(6560).format('0,0')" :title="$t('app.analysis.payments')">
          <a-tooltip placement="top" slot="action">
            <span slot="title">
                <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <!-- <a-mini-bar /> -->
          <a-mini-progress :percent="55" :strokeWidth="8" :target="80" color="#975FE4" />
          <a-field slot="footer" :label="$t('app.analysis.conversion-rate')" value="30%" />
        </a-chart-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <a-chart-card :loading="loading" contentHeight="46px" total="78%" :title="$t('app.analysis.operational-effect')">
          <a-tooltip placement="top" slot="action">
            <span slot="title">
                <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <a-mini-progress :percent="30" :strokeWidth="8" :target="80" color="#13C2C2" />
          <div :style="{whiteSpace:'nowrap',overflow:'hidden'}" slot="footer">
            <!-- <a-trend flag="up" :style="{marginRight: '16px'}">
              {{$t('app.analysis.week')}}<span class="trendText">12%</span>
            </a-trend> -->
            <a-trend flag="up">
              {{$t('app.analysis.day')}}<span class="trendText">28%</span>
            </a-trend>
          </div>
        </a-chart-card>
      </a-col>
    </a-row>
    <a-card :loading="loading" :bordered="false" :bodyStyle="{padding:'0px'}">
        <div class="salesCard">
          <a-tabs size="large" :tabBarStyle="{marginBottom: '24px',paddingLeft:'16px'}">
            <div slot="tabBarExtraContent" class="salesExtraWrap">
              <div class="salesExtra">
                <a >
                  {{$t('app.analysis.all-day')}}
                </a>
                <a class="currentDate">
                  {{$t('app.analysis.all-week')}}
                </a>
                <a >
                  {{$t('app.analysis.all-month')}}
                </a>
                <a >
                  {{$t('app.analysis.all-year')}}
                </a>
              </div>
              <a-range-picker style="width:256px;"/>
            </div>
            <a-tab-pane key="sales" :tab="$t('app.analysis.sales')">
                <a-row>
                  <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                      <div class="salesBar">
                        <!-- <h4>活动实时交易情况</h4> -->
                            <a-row>
                              <a-col :md="6" :sm="12" :xs="24">
                                <a-number-info
                                  subTitle="今日交易总额"
                                  suffix="万元"
                                  :total="numeral(12233).format('0,0')" 
                                />
                              </a-col>
                              <a-col :md="6" :sm="12" :xs="24">
                                <a-number-info subTitle="销售目标完成率" total="92%" />
                              </a-col>
                              <a-col :md="6" :sm="12" :xs="24">
                                <!-- <NumberInfo subTitle="活动剩余时间" total={<CountDown target={targetTime} />} /> -->
                                <a-number-info subTitle="活动剩余时间" total="01:04:53"/>
                              </a-col>
                              <a-col :md="6" :sm="12" :xs="24">
                                <a-number-info subTitle="每秒交易总额"
                                  suffix="元"
                                  :total="numeral(21234).format('0,0')"/>
                              </a-col>
                            </a-row>
                            <div class="mapChart">
                              <a-tooltip title="等待后期实现">
                                <img
                                  src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                                  alt="map"
                                />
                              </a-tooltip>
                            </div>
                      </div>
                  </a-col>
                  <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                    <div class="salesRank">
                        <h4 class="rankingTitle">
                          {{$t('app.analysis.sales-ranking')}}
                        </h4>
                        <ul class="rankingList">
                          <li v-for="(item,i) in 10" :key="i">
                            <span class="rankingItemNumber " :class="{'active':i<3}">
                              {{i + 1}}
                            </span>
                            <span class="rankingItemTitle">
                              中国 🇨🇳 加油 ⛽️ ⛽ ️⛽️
                            </span>
                            <span class="rankingItemValue">
                              0,0
                            </span>
                          </li>
                        </ul>
                    </div>
                  </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane key="visits" :tab="$t('app.analysis.visits')">
              
            </a-tab-pane>
          </a-tabs>
        </div>
    </a-card>
    <!-- <a-row :gutter="24">8</a-row> -->
  </a-grid-content>
</template>

<script>
import {
  Card,
  Row,
  Col,
  Tooltip,
  Icon,
  Tabs,
  DatePicker
} from "ant-design-vue";
import GridContent from "@/components/PageHeaderWrapper/GridContent";
import Trend from "@/components/Trend";
import NumberInfo from "@/components/NumberInfo";
import {
  ChartCard,
  Field,
  yuan,
  MiniProgress

  // MiniBar,
  // MiniArea
} from "@/components/Charts";
import numeral from "numeral";
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

export default {
  data: () => ({
    loading: false
  }),
  components: {
    AGridContent: GridContent,
    ACard: Card,
    ARow: Row,
    ACol: Col,
    AChartCard: ChartCard,
    AField: Field,
    ATooltip: Tooltip,
    AIcon: Icon,
    ATrend: Trend,
    AMiniProgress: MiniProgress,
    // AMiniBar: MiniBar,
    // AMiniArea: MiniArea,
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    ARangePicker: DatePicker.RangePicker,
    ANumberInfo: NumberInfo
  },
  methods: {
    yuan,
    numeral
  }
};
</script>
<style lang="less">
@import url("./Analysis.less");
</style>
