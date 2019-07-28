<template>
  <div class="echartCpt" :class="widgetClass" :style="model.commonStyle"></div>
</template>
<script>

import echarts from "echarts";
// import registerTheme from "../../dependence/Echarts-3.0/js/themes.js"


  export default {
    name: 'v2-echart-bar',

    data(){
      return {
          chart:null,
      }
    },
   watch: {
    "model": {
      deep:true,
      handler(val) {

        this.configChanged(val);
      }
    }
  },
  methods:{
    configChanged(val){
     
        console.log('chart',val);
         if(!this.chart){
          this.chart = echarts.init(this.$el,this.model.chartTheme,{width:'auto'});
          this.chart.showLoading();
         }

        let configs={
           'title':val.title,
           'legend':val.legend,
           'xAxis': val.xAxis,
           'yAxis':val.yAxis,
           'series':val.series,
           'tooltip':val.tooltip,
           'toolbox':val.toolbox
        }
       this.chart.setOption(configs);
       this.chart.resize();
       this.chart.hideLoading();
    }
  },
  mounted() {
    
    // registerTheme(echarts);

    this.setChart();
      // this.chart = echarts.init(this.$el,this.model.chartTheme,{width:'auto'});
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
     
  
    }
  }
</script>
<style lang="scss" scoped>
.echartCpt{
  height: 400px;
}
</style>
