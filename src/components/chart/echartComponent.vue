<template>
  <div class="echartCpt" :style="model.style" :class="wrapClass">
  </div>
</template>
<script>
import echarts from "echarts";
import { widget } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
export default {
  mixins: [widget,edit],
  data(){
      return {
          chart:null,
      }
  },
  updated() {
      console.log( this.chart)
  },
  mounted() {
    this.chart = echarts.init(this.$el);
    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(this.model.data.option);
    console.log('cpt mounted',this.chart)
  }
};
</script>