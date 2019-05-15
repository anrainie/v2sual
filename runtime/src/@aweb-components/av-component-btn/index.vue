<template>
 <el-row>
 
  <el-button :type="model.btnType" :plain="shapMap['plain']" :circle="shapMap['circle']" :round="shapMap['round']" :loading="model.loading" :disabled="model.disabled" @click="model.func" >{{model.btnName}}</el-button>
  
</el-row>
</template>
<script>

  export default {
    name: 'av-component-btn',

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
             newshape[val] =true; 
            this.shapMap =newshape;
         }
       }  
  
    }
  }
</script>
<style lang="less" scoped>

</style>
