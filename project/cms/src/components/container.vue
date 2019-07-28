<template>
  <!-- 展示时的布局容器 -->
  <div class="V2Container" ref="wrap" :style="wrapStyle" :class="widgetClass">
    <slot></slot>
  </div>
</template>
<script>
import { widget } from "../utils/v2-view.js";
export default {
  name: "v2container",
  mixins: [widget],
  data() {
    return {};
  },
  methods: {},
  computed: {
    wigetId(index) {
      return index => {
        let item = this.model.children[index];
        if (item) {
          return item.id;
        }
        return this.wid + "-" + index;
      };
    },
    wrapStyle() {
 
       return this.model && {  ...(this.model.style && this.model.style.divCtn), ...this.model.commonStyle};
      // return this.model && { ...this.model.style };
    }
  }
};
</script>
<style lang="scss" scoped>
.V2Container,
.V2ContainerBlock {
  min-height: 30px;
  height: 100%;
}
</style>
