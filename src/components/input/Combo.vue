<template>
  <div :style="model.style" ref="wrap" :class="wrapClass">
    <span>{{model.data.name}}</span>
    <el-select
      v-model="model.data.value"
      :placeholder="model.data.placeholder"
    >
      <el-option
        v-for="item in model.data.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
import inputField from '../../assets/js/inputField';
export default {
  name: "v2Input",
  mixins: [widget,inputField, edit],
  mounted() {
    console.log('Combo init',this.wid,this.model);
  },
  methods: {
    trigger(e) {
        // console.log('e',e)
    //   this.handleKeyDown&&this.handleKeyDown(e);
    },
    $ArrowDown() {
      return true;
    },
    $ArrowUp() {
      return true;
    }
  }
};
</script>
