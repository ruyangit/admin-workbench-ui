<template>
  <div class='miniChart' :style="{style: height+'px'}">
    <div class='chartContent' >
        <div style="width:100%" :id="container" ></div>
    </div>
  </div>
</template>

<script>
import PropTypes from "ant-design-vue/es/_util/vue-types";
import moment from "moment";
import { initDefaultProps } from "ant-design-vue/es/_util/props-util";
const G2 = require("@antv/g2/lib/core");
require("@antv/g2/lib/geom/interval");
const MniBarProps = {
  container: PropTypes.string,
  height: PropTypes.number,
  forceFit: PropTypes.bool,
  color: PropTypes.string,
  data: PropTypes.array
};
const beginDay = new Date().getTime();
const visitData = [];
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
      "YYYY-MM-DD"
    ),
    y: fakeY[i]
  });
}
export default {
  data: () => ({
    chart: Object
  }),
  props: initDefaultProps(MniBarProps, {
    forceFit: true,
    color: "#1890FF",
    height: 46,
    container: 'container_'+new Date().getTime(),
  }),
  methods: {
    createChart() {
      const scale = {
        x: {
          type: "cat"
        },
        y: {
          min: 0
        }
      };
      const padding = [36, 5, 30, 5];
      const chartHeight = this.height + 54;
      this.chart = new G2.Chart({
        container: this.container,
        forceFit: this.forceFit,
        height: chartHeight,
        padding: padding
      });
      this.chart.source(visitData);
      this.chart.scale(scale);
      this.chart.axis(false);
      this.chart.tooltip(true, { showTitle: false, crosshairs: false });
      this.chart
        .interval()
        .position("x*y")
        .color(this.color)
        .tooltip("x*y", (x, y) => ({
          name: x,
          value: y
        }));
      this.chart.render();
    }
  },
  mounted() {
    this.createChart();
    // 注：window.onresize只能在项目内触发1次
  },
  computed:{
  },
  updated(){
    console.log(1);
    if(!this.chart){
      this.createChart();
    }
  }
};
</script>