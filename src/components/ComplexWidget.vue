<template>
  <v2Container v-model="rootId" class="preview"></v2Container>
</template>
<script>
//开启预览模式，该模式下edit.js失效
import { canvas, widget } from "../assets/js/v2-view.js";

export default {
  mixins: [canvas, widget],
  computed: {
    rootId() {
      return this.wid;
    }
  }
};
</script>
<style>
.preview {
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
