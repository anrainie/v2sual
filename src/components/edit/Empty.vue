<template>
  <!-- 空组件-->
  <div class="V2Empty" :class="{...wrapClass,...emptyClass}"></div>
</template>
<script>
import { widget } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
import { createTool } from "../../assets/js/tools.js";
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
        s["V2Dropable"] = true;
      }
      return s;
    }
  },
  mounted() {
    //注册自身
    this.$store.commit("regist.index", {
      id: this.wid,
      content: {
        id: this.wid,
        pid: this.pid,
        type: "Empty"
      }
    });
    let self = this;
    $(this.$el).droppable({
      activeClass:'V2DropableHover',
      drop(event, ui) {
        //helper是拖拽时的虚影助手
        if (self.model && self.model.pid == "helper") {
          return;
        }
        console.log("drop", event, self);
        if (self.$store.state.activeTool == createTool) {
          createTool.$selected(self, event);
        }
      }
    });

    $(this.$el).attr("tableIndex", Infinity);
  },
  methods: {
    $ticket() {
      return ["table"];
    },
    $canAddChild(m, e) {
      return true;
    },
    $addChild(m) {
      this.$set(this.parent.children, this.index, m);
    },
    $getFactory(e) {
      let result = JSON.parse(JSON.stringify(e));
      result.id = new Date().valueOf();
      result.pid = this.parentId;
      this.$store.commit("regist.index", {
        id: result.id,
        content: result
      });
      return result;
    }
  }
};
</script>
<style>
</style>