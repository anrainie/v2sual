<template>
  <div>
    <div
      :class="widgetClass"
      class="chart-content"
      style="width:400px;height:400px"
      ref="_op_componentEchart_chart"
      :style="chartCtnStyle"
    ></div>
  </div>
</template>
<script>
import echarts from "echarts";
const itemData = require('./dataPreview.json');

export default {
  name: "v2-vda-chart",

  data() {
    return {
      chart: null,
      error: false,
      currentData:{},
      vdaData:{}
    };
  },
  computed: {
    extraClass() {
      return this.error ? "echart-error" : "echart-normal";
    },
    chartCtnStyle(){
        let x = {
          ...(this.model.commonStyle||{})
        };
        x.height = (x.height != "" && x.height) || '400px';
        x.width = (x.width != "" && x.width) || '400px';
        return x;
    }
  },
  watch: {
    "model.configs": {
      handler(option) {
          if(this.currentData){
           this.analyzeLineChart();
           this.updateChart();
          }
        
      },
      deep:true
    },
    "model.configs.url":(url)=>{

      // window.pipe.vda.data(url).then(res => {
          //const fakeData =res.content;//真数据
          const fakeData =itemData.content;//假数据
           this.currentData = fakeData;
           this.analyzeLineChart();
           this.updateChart();
        // });
    }
  },
  methods: {
    updateChart() {

      if (this.chart) {
          this.chart.setOption(this.vdaData);
        } else {
          this.chart = echarts.init(this.$refs._op_componentEchart_chart);
debugger;
          this.chart.setOption(this.vdaData);
        }
    },
    analyzeLineChart(){
          let data = this.currentData.data;
          let fields =this.currentData.fields;
          let option = this.model.configs;
          let echartsOption = {
            legend: option.countUp
              ? [option.countLegend]
              : option.legendName,
            xAxis: Array.from(new Set(data.map(e => e[option.x]))),
            yAxis: {}
		        };
		  debugger;
         let  yAxis=echartsOption.yAxis;
      
          data.forEach(e => {
            if (option.countUp) {
              yAxis[e[option.x]] = yAxis[e[option.x]] || 0;

              yAxis[e[option.x]] += e[option.y];
            } else {
              yAxis[e[option.legend]] = yAxis[e[option.legend]] || {};

              yAxis[e[option.legend]][e[option.x]] = e[option.y];
            }
          });

          let seriesData = [];
          echartsOption.xAxis.forEach(x => seriesData.push(yAxis[x] || 0));
         
          let vData= {
            title: {
              text: option.title||"折线图堆叠"
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              data: echartsOption.legend, //["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
              show:option.showLegend
            },
            grid: {
              top:'20px'
        
            },
            toolbox: {
            
            },
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: echartsOption.xAxis,
              name:option.xTitle,
              show:option.showXAxis

            },
            yAxis: {
              type: "value",
               name:option.yTitle,
               show:option.showYAxis
            },
            series: option.countUp?[{
              name:echartsOption.legend[0],
              type:option.type,
              barWidth: '40%',
              data:echartsOption.xAxis.map(x => yAxis[x] || 0),
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(205, 209, 194)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(254, 254, 254)'
                    }, {
                        offset: 1,
                        color: 'rgb(84, 71, 62)'
                    }])
                },
            }]:
            echartsOption.legend.map(l => {
                const legend = yAxis[l] || {};
                return {
                  name: l,
                  type: option.type,
                  data: echartsOption.xAxis.map(x => legend[x] || 0)
                };
              })
          };

         this.vdaData = vData;
   
        }
  },
  mounted() {
      if(this.model.configs && this.model.configs.url){
          // window.pipe.vda.data(url).then(res => {
          //const fakeData =res.content;//真数据
           const fakeData =itemData.content;//假数据
           this.currentData = fakeData;
           this.analyzeLineChart();
           this.updateChart();
          // });
      }else{
           const fakeData =itemData.content;//假数据
           this.currentData = fakeData;
           this.analyzeLineChart();
           this.updateChart();
      }
  }
};
</script>

<style lang="scss" scoped>
.chart-content {
  position: relative;
}
.chart-tips {
  position: absolute;
  padding: 10px;
  top: 160px;
  left: 20px;
  border: 1px solid #ccc;
  box-shadow: 1px 2px 6px #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: none;
}
.chart-content:hover {
  color: blue;
}
.chart-content:hover + .chart-tips {
  display: block !important;
}
.chart-tips:hover {
  display: block !important;
}
</style>




