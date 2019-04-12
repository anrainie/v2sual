<template>
  <div :style="model.style" :class="wrapClass">
    <el-table :data="model.data.value" style="width: 100%;height:100%;position:absolute;">
      <el-table-column
        v-for="(col,i) of columns"
        :key="col.key"
        :label="col.name"
        :prop="col.key"
        :width="col.width"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
import inputField from "../../assets/js/inputField";
export default {
  name: "v2Input",
  mixins: [widget, inputField, edit],
  methods: {},
  computed: {
    columns() {
      return this.model.data.columns;
    }
  },
  mounted() {}
};
</script>
