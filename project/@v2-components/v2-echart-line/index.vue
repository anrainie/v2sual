<template>
  <div class="echartCpt" :class="widgetClass" :style="model.commonStyle"></div>
</template>
<script>

import echarts from "echarts";
  export default {
    name: 'v2-echart-line',

    data(){
      return {
          chart:null,
      }
    },
    mounted() {
      this.chart = echarts.init(this.$el);
         console.log( this.$el)
       console.log( this.model)
      // 使用刚指定的配置项和数据显示图表。
      let fakeData = {
                    xAxis: {
                      type: "category",
                      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                    },
                    yAxis: {
                      type: "value"
                    },
                    series: [
                      {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line"
                      }
                    ]
                  }
      this.chart.setOption(fakeData);
      console.log('cpt mounted',this.chart)
    }
  }
</script>
<style lang="scss" scoped>
.echartCpt{
  height: 400px;
}
</style>
