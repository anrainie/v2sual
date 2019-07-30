<template>
  <!-- 顺序布局容器编辑器 -->
  <div
    class="V2Container"
    ref="wrap"
    style="overflow-y: auto;overflow-x:visible;"
  >
    <!-- model来自widget -->
    <template v-for="(lyt,index) of layout_c">
      <div :key="index">
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {},
    computed: {
    model() {
      return this.$store.getters.model(this.wid) || {};
    },
    widgetId(index) {
      return index => {
        if (this.model.children) {
          let item = this.model.children[index];
          if (item) {
            return item.id;
          }
        }
        return this.wid + "-" + index;
      };
    },
    component(index) {
      return index => {
        if (!this.model.children) {
          return "v2Empty";
        }
        let item = this.model.children[index];
        if (item === undefined) {
          this.model.children
            ? (this.model.children[index] = null)
            : (this.model.children = []);
        }
        //循环组件优先处理
        if (item && item.__type && item.__type === "loop") return "v2loop";
        //自定义组件处理
        if (item && item.cptpath) return "v2custom";

        if (item) return item.component;
        return "v2Empty";
      };
    },
    layout_c() {
      if (this.model.layout) {
        if (typeof this.model.layout === "string") {
          return JSON.parse(this.model.layout);
        } else {
          return this.model.layout;
        }
      } else {
        return [100];
      }
    }
  },
  mounted() {

    console.log('xy',this.model)
  }
};
</script>

<style>
</style>
