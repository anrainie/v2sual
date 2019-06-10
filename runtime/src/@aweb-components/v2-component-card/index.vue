<template>
  <el-row :class="model.layoutClass">
    <el-card>
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

    <!-- <el-button
      ref="_op_componentBtn_btn"
      :style="model.style && model.style.btnStyle"
      :type="model.btnType"
      :plain="shapMap['plain']"
      :circle="shapMap['circle']"
      :round="shapMap['round']"
      :loading="model.loading"
      :disabled="model.disabled"
    >{{model.btnName}}</el-button> -->
  </el-row>
</template>
<script>
export default {
  name: "v2-component-card",

  data() {
    return {
      // shapMap: {
      //   plain: false,
      //   circle: false,
      //   round: false
      // }
    };
  },
  watch: {
    // "model.shape": {
    //   immediate: true,
    //   handler: function(val) {
    //     let newshape = {
    //       plain: false,
    //       circle: false,
    //       round: false
    //     };
    //     newshape[val] = true;
    //     this.shapMap = newshape;
    //   }
    // }
  }
};
</script>
<style lang="less" scoped>
</style>
