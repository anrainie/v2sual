<template>
  <el-divider
    ref="_op_componentDivider_divider"
    :direction="model.direction"
    :content-position="model.contentPosition"
  >
    <i v-if="model.iconClass&&model.iconPosition==='left'" :class="model.iconClass"></i>
    {{model.content}}
    <i v-if="model.iconClass&&model.iconPosition==='right'" :class="model.iconClass"></i>
  </el-divider>
  <!-- <span style="color: #f00">{{model.content}}</span> -->
</template>

<script>
export default {
  name: 'v2-component-divider',
  data() {
    return {
      // contenPosition: 'center',
      // direction: 'horizontal'
    }
  },
  watch: {
    // 'model.contenPosition': {
    //   immediate: true,
    //   handler: function(val) {
    //     console.log(val)
    //     this.contenPosition = val
    //   }
    // },
    // 'model.direction': {
    //   immediate: true,
    //   handler: function(val) {
    //     console.log(val)
    //     this.direction = val
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>

