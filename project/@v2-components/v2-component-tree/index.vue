<template>
  <div
    :class="widgetClass"
    :style="model.commonStyle"
  >
    <el-tree
      :data="myconfig"
      :props="model.defaultProps"
      ref="_op_componentTree_tree"
      :show-checkbox="model.showCheckbox"
      :node-key="model.nodeKey||null"
      :default-expanded-keys="model.defExpanded||[]"
      :default-checked-keys="model.defChecked||[]"
    ></el-tree>
  </div>
</template>
<script>
export default {
  name: "v2-component-tree",

  data() {
    return {};
  },
  computed: {
    myconfig() {
      if (this.model.configs && this.model.configs.constructor == Array) {
        return this.model.configs;
      }
      return [];
    },
    extraClass() {
      return this.error ? "echart-error" : "echart-normal";
    }
  },
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>





