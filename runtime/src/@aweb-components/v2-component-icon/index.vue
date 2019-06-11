<template>
  <div  :class="model.layoutClass" :style="{'width':'40px','height':'40px',...model.style.iWarpStyle}"><i :class="model.icon?model.icon:'fa fa-user-o'" :style="model.style.iStyle"></i></div>
</template>
<script>

  export default {
    name: 'v2-component-icon',

    data(){
      return {
       
      }
    },
    computed:{
    },
    mounted() {
     
    }
  }
</script>
<style lang="less" scoped>
.echartCpt{
  height: 400px;
}
</style>
