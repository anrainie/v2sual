<template>
  <!-- 空组件，没有独立的wid，其wid == pid -->
  <div class="V2Empty" :class="emptyClass"></div>
</template>
<script>
import { widget } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
let mixins = [widget, edit];
export default {
  mixins,
  computed: {
    emptyClass() {
      let s = {};
      if (
        this.$store.state.activeTool &&
        this.$store.state.activeTool.type == "create"
      ) {
        s["dropable"] = true;
      } else {
        s["selectabled"] = true;
      }
      return s;
    }
  },
  methods: {
    $canAddChild() {
      return true;
    },
  }
};
</script>
<style>
.V2Empty {
  width: 100%;
  height: 100%;
}
</style>