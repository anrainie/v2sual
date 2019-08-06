<template>
  <el-button
    :class="widgetClass"
    ref="_op_componentBtn_btn"
    :style="{...(model.style&&model.style.btnStyle),...model.commonStyle}"
    :type="model.theme && model.theme.btnType"
    :plain="shapMap['plain']"
    :circle="shapMap['circle']"
    :round="shapMap['round']"
    :loading="model.loading"
    :disabled="model.disabled"
    :size="model.theme && model.theme.size"
    :icon="model.leftIcon"
  >{{model.btnName}}<i v-if="model.rightIcon" class="el-icon--right" :class="model.rightIcon"></i></el-button>
</template>
<script>
export default {
  name: "v2-component-btn",
  data() {
    return {
      shapMap: {
        plain: false,
        circle: false,
        round: false
      }
    };
  },
  watch: {
    "model.shape": {
      immediate: true,
      handler: function(val) {
        let newshape = {
          plain: false,
          circle: false,
          round: false
        };
        val !== "def" && (newshape[val] = true);
        this.shapMap = newshape;
      }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
