<template>
  <!-- <el-row > -->
    <el-card :class="widgetClass"  :style="model.commonStyle">
      <div slot="header" class="clearfix" :style="model.style.cardHeader">
        <span>{{model.cardName}}</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          v-show="model.oprName"
        >{{model.oprName}}</el-button>
      </div>
      <div>卡片内容</div>
      <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
    </el-card>


  <!-- </el-row> -->
</template>
<script>
export default {
  name: "v2-component-card",

  data() {
    return {

    };
  },
  watch: {

  }
};
</script>
<style lang="scss" scoped>
</style>
