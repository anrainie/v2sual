<template>
  <div class="echartCpt" :style="model.style"></div>
</template>
<script>

import echarts from "echarts";
  export default {
    name: 'av-echart-bar',

    data(){
      return {
          chart:null,
      }
    },
    computed:{
      model() {
        return (
          this.$store.getters.model(this.wid) || {}
        );
      }
    },
    mounted() {
      this.chart = echarts.init(this.$el);
      // 使用刚指定的配置项和数据显示图表。
      let fakeData = {
              tooltip: {},
              legend: {
                data: ["级别", "工资", "工作年限"]
              },
              xAxis: {
                data: [
                  "衬衫",
                  "羊毛衫",
                  "雪纺衫",
                  "裤子",
                  "高跟鞋",
                  "袜子"
                ]
              },
              yAxis: {},
              series: [
                {
                  name: "级别",
                  type: "bar",
                  data: [5, 20, 36, 10, 10, 20]
                },

                {
                  name: "工资",
                  type: "bar",
                  data: [15, 10, 16, 13, 11, 22]
                },

                {
                  name: "工作年限",
                  type: "bar",
                  data: [15, 10, 16, 13, 11, 22]
                }
              ]
        };
      this.chart.setOption(fakeData);
      console.log('cpt mounted',this.chart)
    }
  }
</script>
<style lang="less" scoped>
.echartCpt{
  height: 400px;
}
</style>
