<template>

   <el-tabs v-model="model.active" 
     :class="widgetClass" 
     :style="model.commonStyle"
    :type="model.type"
    :tab-position="model.tabPosition"
   >
    <el-tab-pane v-for="(item,index) in model.list" :label="item.label" :name="item.name"  :key="index"></el-tab-pane>
  </el-tabs>

</template>
<script>
  export default {
    name: 'v2-component-tabs',
    data(){
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>
