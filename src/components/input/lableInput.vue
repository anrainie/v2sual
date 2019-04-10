<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" style="display: flex">
    <label class="labelInput-label">{{model.label}}:</label>
    <el-input
      v-model="model.data"
      style="flex:1"
      @keyup.native="even"
      :placeholder="model.placeholder"
      @focus="focusEven"
      :index="model.index"
      ref="input"
    ></el-input>
  </div>
</template>

<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
import inputField from "../../assets/js/inputField.js";

export default {
  name: "v2LableInput",
  mixins: [widget, inputField, edit],
  mounted() {
    // let inputArr = this.$store.state.inputEl.inputArr;
    // inputArr.push(this.$refs.input.$el.childNodes[1]);
    // this.$store.commit("setInputEl",inputArr)
  },
  computed: {
    even() {
      if (this.model.keyupEven) {
        return this.model.keyupEven;
      } else {
        return function() {};
      }
    },
    focusEven() {
      if (this.model.focusEven) {
        return this.model.focusEven;
      } else {
        return function() {};
      }
    }
  },
  methods: {}
};
</script>

<style>
.labelInput-label {
  padding: 0 10px;
  line-height: 40px;
}
</style>
