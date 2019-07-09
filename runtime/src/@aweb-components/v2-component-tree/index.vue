<template>
  <div>
    <div :class="[model.layoutClass]" :style="model.style && model.style.treeWarpStyle">
      <el-tree :data="model.value||[]" :props="model.defaultProps"  ref="_op_componentTree_tree"
      :show-checkbox="model.showCheckbox"
      :node-key="model.nodeKey||null"
      :default-expanded-keys="model.defExpanded||[]"
      :default-checked-keys="model.defChecked||[]"
      ></el-tree>
    </div>
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

<style>
.chart-content {
  position: relative;
}
.chart-tips {
  position: absolute;
  padding: 10px;
  top: 160px;
  left: 20px;
  border: 1px solid #ccc;
  box-shadow: 1px 2px 6px #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: none;
}
.chart-content:hover{
  color: blue;
}
.chart-content:hover +.chart-tips {
  display: block !important;
}
.chart-tips:hover{
  display: block !important;
}
</style>




