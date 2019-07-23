<template>
  <div  :class="widgetClass" :style="{...(model.style && model.style.iWarpStyle)}">
    <el-steps
      :active="parseInt(model.active)"
      :direction="model.direction"
      :process-status="model.processStatus"
      :finish-status="model.finishStatus"
      :align-center="model.alignCenter"
      :simple="model.simple"
    >
      <el-step
        v-for="(item,index) in model.list"
        :key="index"
        :description="item.description"
        :icon="item.icon"
        :title="item.title"
      ></el-step>
    </el-steps>
  </div>
</template>

<script>

  export default {
    name: 'v2-component-steps',

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
<style lang="scss" scoped>

</style>
