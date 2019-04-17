<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="av-form-select">
    <label class="select-label">{{model.data.label}}</label>
    <el-select v-model="model.data.value" :placeholder="model.data.placeholder">
      <el-option v-for="item in model.data.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import { widget, composite } from "../../../assets/js/v2-view.js";
import { edit } from "../../../assets/js/edit.js";
export default {
  name: "av-form-select",
  mixins: [widget, edit],
  data() {
    return {
    };
  },
  mounted() {}
};
</script>

<style>
.select {
  display: flex;
}
.select .el-select {
  padding-left: 10px;
}
.select-label {
  padding: 0 10px;
}
</style>
