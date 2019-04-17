<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" style="display: flex" class="av-form-input">
    <label class="labelInput-label">{{model.data.label}}:</label>
    <el-input
      v-model="model.data.value"
      style="flex:1"
      :placeholder="model.data.placeholder"
      @focus="focusEven"
    ></el-input>
  </div>
</template>

<script>
import { widget, composite } from "../../../assets/js/v2-view.js";
import { edit } from "../../../assets/js/edit.js";
import inputField from "../../../assets/js/inputField.js";

export default {
  name: "av-form-input",
  mixins: [widget, inputField, edit],
  mounted() {
  },
  computed: {
    focusEven() {

    }
  },
  methods: {
    $ArrowRight() {
      return true;
    },
    $ArrowLeft() {
      return true;
    }
  }
};
</script>

<style>
.labelInput-label {
  padding: 0 10px;
  line-height: 40px;
}
</style>
