<template>
  <div :class="model.layoutClass"></div>
</template>
<script>

import echarts from "echarts";
  export default {
    name: 'v2-component-echart',

    data(){
      return {
          chart:null,
      }
    },
    mounted() {

      this.chart = echarts.init(this.$el);
      this.chart.setOption(this.model.config);
    }
  }
</script>
<style lang="less" scoped>
.echartCpt{
  height: 400px;
}
</style>
