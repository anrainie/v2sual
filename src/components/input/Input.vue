<template>
  <div :style="model.style" ref="wrap" :class="wrapClass">
    <el-input v-model="model.data"></el-input>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit} from "../../assets/js/edit.js";
export default {
  name: "v2Input",
  mixins: [widget,edit],
  mounted(){
  },
};
</script>
