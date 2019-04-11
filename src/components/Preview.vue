<template>
  <div class="preview">
    <v2Container v-model="rootId"></v2Container>
  </div>
</template>
<script>
//开启预览模式，该模式下edit.js失效
import { canvas } from "../assets/js/v2-view.js";
import { previewTool } from "../assets/js/tools.js";

export default {
  mixins: [canvas],
  created() {
    setTimeout(() => {
      console.log("data", window.data);
      this.$store.commit("init", { structure: window.data });
      this.$router.push("/preview");
    }, 500);
  },
  mounted() {
    this.$store.commit("setActiveTool", previewTool);
  },
  methods: {
    preview() {}
  },
  data() {
    return {
    };
  }
};
</script>
<style>
.preview {
  margin: 0;
  padding: 0 5px;
  box-sizing: border-box;
  border: 1px solid #000;
  width: 100%;
  height: 100%;
}
</style>
