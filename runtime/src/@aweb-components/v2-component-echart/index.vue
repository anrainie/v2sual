<template>
  <div :class="model.layoutClass" ref="_op_componentEchart_chart" :style="warpStyle"></div>
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
          this.configChanged(val);
        }
      }
    },
    methods:{
      configChanged(val){
        this.chart = echarts.init(this.$el);
           try{
              if(val&&val.constructor==String){
                let __temp;
                 this.chart.setOption(eval('__temp='+val));
              }else{
                this.chart.setOption(val);
              }
            }catch(e){
              console.error('echart配置单格式错误',val);
              console.error(e);
            }
      }
    },
    mounted() {}

  }
</script>

