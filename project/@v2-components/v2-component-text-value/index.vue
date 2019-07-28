<template>
  <div :class="widgetClass" :style="model.commonStyle">
      <div class="v2-text-value-item" :class="model.direction">
        
        <i :style="model.style && model.style.value" v-if="model.type==='icon'" :class="model.value" ></i>
        <span :style="model.style && model.style.value" v-else >{{model.value}}</span>
      
        <p :style="model.style && model.style.title">{{model.title}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "v2-component-text-value",

  data() {
    return {
 
    };
  },
  watch: {
 
  }
};
</script>
<style lang="scss">

.v2-text-value-item{
  text-align: center;
  // background-color:#eee;
  >i{
  display: inline-block;
  vertical-align: middle;
  }

}
.text-value-col{
   display: flex;
  flex-direction: column;
  i,span{
       flex:1
  }
  p{
    flex:1
  }
}
.text-value-row{
   display: flex;
   flex-direction: row;
  i,span{
    flex:1
  }
  p{
    flex:1
  }
}

</style>
