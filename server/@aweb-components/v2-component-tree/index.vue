<template>
 
    <div :class="widgetClass" :style="{...(model.style && model.style.treeWarpStyle),...model.commonStyle}">
      <el-tree :data="model.configs||[]" :props="model.defaultProps"  ref="_op_componentTree_tree"
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
    return {
    
    };
  },
  computed: {
    extraClass() {
      return this.error ? "echart-error" : "echart-normal";
    }
  },
  watch: {

  },
  methods: {

  },
  mounted() {}
};
</script>

<style lang="scss" scoped>

</style>





