<template>
 
    <i ref="_op_componentIcon_icon" :class="[model.icon?model.icon:'fa fa-user-o',...widgetClass]" :style="iStyle"></i>

</template>

<script>

  export default {
    name: 'v2-component-icon',

    data(){
      return {
       
      }
    },
    computed:{
      iStyle(){
    
          return {...this.model.style.iStyle,...(this.model.commonStyle||{})}
        
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
