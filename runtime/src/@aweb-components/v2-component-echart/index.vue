<template>
  <div :class="model.layoutClass" :style="warpStyle"></div>
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
    computed:{
      warpStyle(){
        
        if(this.model.style && this.model.style.chartWarpStyle){
              !this.model.style.chartWarpStyle.width && (this.model.style.chartWarpStyle.width = "300px");
              !this.model.style.chartWarpStyle.height && (this.model.style.chartWarpStyle.height = "300px");
      
             return this.model.style.chartWarpStyle;
        }else{
             return {'width':'300px','height':'300px'}
        }
         
      }
    },
    watch:{
      'model.configs':{
        handler(val){    
          this.chart = echarts.init(this.$el);
          this.chart.setOption(val);
        }
      }
    },
    mounted() {}

  }
</script>

