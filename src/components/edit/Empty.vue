<template>
  <!-- 空组件-->
  <div class="V2Empty" :class="{...wrapClass,...emptyClass}"></div>
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
    $addChild(m) {
      console.log(m);
      this.$set(this.parent.children, this.index, m);
    },
    $getFactory(e) {
      let result = JSON.parse(JSON.stringify(e));
      result.id = new Date().valueOf();
      result.pid = this.parentId;
      this.$store.commit("registIndex", {
        id: result.id,
        content: result
      });
      return result;
    }
  }
};
</script>
<style>
.V2Empty {
  width: 100%;
  height: 100%;
}
</style>