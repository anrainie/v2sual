<template>
 <el-row :class="model.layoutClass" :style="model.style && model.style.btnWrapStyle">
 
  <el-button ref="_op_componentBtn_btn" :style="model.style && model.style.btnStyle" :type="model.theme && model.theme.btnType" :plain="shapMap['plain']" :circle="shapMap['circle']" :round="shapMap['round']" :loading="model.loading" :disabled="model.disabled" :size="model.theme && model.theme.size">{{model.btnName}}</el-button>
  
</el-row>
</template>
<script>

  export default {
    name: 'v2-component-btn',

    data(){
      return {
         
      shapMap:{
             plain:false,
             circle:false,
             round:false
          }
      }
    },
    watch:{
       "model.shape":{
         immediate:true,
         handler:function(val){
           let newshape={ 
             plain:false,
             circle:false,
             round:false
             };
            val!=="def" && (newshape[val] =true)
            this.shapMap =newshape;
         }
       }  
  
    }
  }
</script>
<style lang="less" scoped>

</style>
