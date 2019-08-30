<template>
  <div>
    <div
      :class="widgetClass"
      class="chart-content"
      style="width:400px;height:400px"
      ref="_op_componentEchart_chart"
      :style="chartCtnStyle"
      v-loading="showLoading"
    ></div>
  </div>
</template>
<script>
import echarts from "echarts";


export default {
  name: "v2-vda-chart",

  data() {
    return {
      chart: null,
      showLoading: false
    };
  },

  watch: {
    "model.configs": {
      handler(val) {
        
        val && this.updateChart();
      }
    }
  },
  computed:{
    chartCtnStyle() {
      let x = {
        ...(this.model.commonStyle || {})
      };
      x.height = (x.height != "" && x.height) || "400px";
      x.width = (x.width != "" && x.width) || "400px";
      return x;
    }
  },
  methods: {
      updateChart(){ 
          this.showLoading =true;
          this.chart = echarts.init(this.$refs._op_componentEchart_chart);
          window.pipe.vda.panel(this.model.configs||"echarts-demo").then(res => {
            try {
              const panelConfig = JSON.parse(
                (res.data?res.data.content:res.content).data.visualConfPanelCharts[0].config
              );
              const componentConfig =
                panelConfig.componentInfo.option[0].componentInfo;

              const echartsOpt = componentConfig.option;
              const request = componentConfig.config.paramAjax;

              !this.chart && (this.chart = echarts.init(this.$refs._op_componentEchart_chart))

              window.pipe.vda.paramAjax(request).then(res => {
                const data =  (res.data?res.data.content:res.content)[request[0].requestid];
                const newOpt = { ...echartsOpt };

                componentConfig.config.dataSource.fields.forEach((xy, index) => {
                  switch (xy.parent) {
                    case "xAxisDragBox":
                      newOpt.xAxis.data = data.map(e => e[xy.ename]);
                      break;
                    case "yAxisDragBox":
                      newOpt.series.forEach(s => {
                        if (s.ename === xy.name) {
                          s.lineData = s.data = data.map(e => e[xy.ename]);
                        }
                      });
                      break;
                  }
                });
                this.showLoading =false;
                this.showEditButton = false;
            
                newOpt.backgroundColor = "transparent";

                this.chart.setOption(newOpt);
             
                console.log('success',newOpt)

              // loading.close();
                //加载组件数据
              });
            } catch (e) {
              console.log('error')
              
            }
          });
    }
  },
  mounted() {
     if(this.model.configs){
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




