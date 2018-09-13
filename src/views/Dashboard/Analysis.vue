<template>
<a-grid-content>
  <a-row :gutter="24">
    <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
      <a-chart-card
        :loading="loading"
        contentHeight="46px"
        :total="yuan(158829)"
        :title="$t('app.analysis.total-sales')"
      >
        <a-tooltip placement="top" slot="action">
          <span slot="title">
              <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
        </a-tooltip>
        <a-field slot="footer" :label="$t('app.analysis.day-sales')" :value="yuan(158829)" />
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
      <a-chart-card
        :loading="loading"
        contentHeight="46px"
        :total="numeral(8846).format('0,0')"
        :title="$t('app.analysis.visits')"
      >
        <a-tooltip placement="top" slot="action">
          <span slot="title">
              <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
        </a-tooltip>
        <a-field slot="footer" :label="$t('app.analysis.day-visits')" :value="numeral(8846).format('0,0')" />
        day-visits
      </a-chart-card>
    </a-col>
    <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
      <a-chart-card
        :loading="loading"
        contentHeight="46px"
        :total="numeral(6560).format('0,0')"
        :title="$t('app.analysis.payments')"
      >
        <a-tooltip placement="top" slot="action">
          <span slot="title">
              <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
        </a-tooltip>
        <a-field slot="footer" :label="$t('app.analysis.conversion-rate')" value="60%"/>
        conversion-rate
      </a-chart-card>
    </a-col>
    <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
      <a-chart-card
        :loading="loading"
        contentHeight="46px"
        total="78%"
        :title="$t('app.analysis.operational-effect')"
      >
        <a-tooltip placement="top" slot="action">
          <span slot="title">
              <span v-html="$t('app.analysis.introduce')"></span>
            </span>
            <a-icon type="info-circle-o" />
        </a-tooltip>
        
        day-visits
        <div :style="{whiteSpace:'nowrap',overflow:'hidden'}" slot="footer">
            <a-trend flag="up" :style="{marginRight: '16px'}">
              {{$t('app.analysis.week')}}
              <span class="trendText">12%</span>
            </a-trend>
            <a-trend flag="down">
              {{$t('app.analysis.day')}}
              <span class="trendText">11%</span>
            </a-trend>
        </div>
      </a-chart-card>
    </a-col>
  </a-row>
</a-grid-content>
</template>

<script>
import { Card, Row, Col, Tooltip, Icon } from "ant-design-vue";
import GridContent from "@/components/PageWrapper/GridContent";
import Trend from "@/components/Trend";
import { ChartCard, Field, yuan } from "@/components/Charts";
import numeral from "numeral";
// echarts相关
// let echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/line");

export default {
  data: () => ({
    loading:false
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
    ATrend: Trend
  },
  methods: {
    yuan,
    numeral
  },
  mounted(){
    
  }
};
</script>