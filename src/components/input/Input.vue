<template>
  <div :style="model.style">
    <el-input v-model="model.data"></el-input>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
export default {
  name: "v2Input",
  mixins: [widget],
  mounted(){
      this.LOG('input',this.model,this.wid);
  },
};
</script>
