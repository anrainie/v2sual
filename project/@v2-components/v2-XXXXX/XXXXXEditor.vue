<template>
  <div>
    <!-- <template v-for="(lyt,index) of childComps">
      <component
        :is="component(index)"
        :key="index"
        :wid="widgetId(index)"
        :index="index"
        :pid="model.id"
      ></component>
    </template> -->
    <component :is="component(0)" :wid="widgetId(0)" :index="0" :pid="model.id"></component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "0"
    };
  },
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
    childComps() {
      !this.model.children && (this.model.children = []);

      return this.model.children;
    }
  },
  methods: {}
};
</script>
<style lang="scss">

</style>

