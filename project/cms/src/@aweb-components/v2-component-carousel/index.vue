<template>
 <el-row :class="model.layoutClass">
  <el-carousel 
    :trigger="model.trigger"
    :autoplay="model.autoplay"
    :indicator-position="model.indicator"
    :arrow="model.arrow"
    :interval="parseInt(model.interval)"
    :type="model.type"
    :direction="model.direction"
    :height="model.height"
  >
      <el-carousel-item v-for="(item,index) in model.list" :key="index">
        <img :src="item.src" :alt="item.alt" :title="item.title" :height="item.height" :width="item.width">
      </el-carousel-item>
    </el-carousel>
</el-row>
</template>
<script>

  export default {
    name: 'v2-component-carousel',

    data(){
      return {
      }
    },
    watch:{
    }
  }
</script>
<style lang="scss" scoped>

</style>
