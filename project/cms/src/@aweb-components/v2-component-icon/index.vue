<template>
  <div :class="model.layoutClass" :style="iWarpStyle">
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
        if(this.model.style && this.model.style.iWarpStyle){
          
          !this.model.style.iWarpStyle.width && (this.model.style.iWarpStyle.width = "40px");
          !this.model.style.iWarpStyle.height && (this.model.style.iWarpStyle.height = "40px");
          return this.model.style.iWarpStyle;

        }else{
          return {'width':'40px','height':'40px'}
        }
        
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
