<template>
  <div :style="model.style" :class="wrapClass">
    <el-checkbox v-model="model.data.checked">{{model.data.text}}</el-checkbox>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
import inputField from "../../assets/js/inputField";
export default {
  name: "v2Input",
  mixins: [widget, inputField, edit],
  methods: {
    $Enter() {
      this.model.data.checked = !this.model.data.checked;
      return false;
    }
  },
  mounted() {
  }
};
</script>
