<template>
  <div :style="iWarpStyle"  :class="widgetClass" >
    <i ref="_op_componentIcon_icon" :class="model.icon?model.icon:'fa fa-user-o'" :style="model.style.iStyle"></i>
  </div>
</template>

<script>

  export default {
    name: 'v2-component-icon',

    data(){
      return {
       
      }
    },
    computed:{
      iWarpStyle(){
    
          return {...this.model.style.iWarpStyle,...(this.model.commonStyle||{})}
        
      }
    },
    mounted() {
     
    }
  }
</script>
<style lang="scss" scoped>
.echartCpt{
  height: 400px;
}
</style>
