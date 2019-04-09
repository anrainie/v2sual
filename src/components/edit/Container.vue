<template>
  <!-- 布局容器 -->
  <div class="V2Container" ref="wrap" :style="model.style" :class="wrapClass">
    <!-- model来自widget -->
    <template v-for="(lyt,index) of model.layout">
      <el-col
        class="V2ContainerBlock"
        :class="blockClass(index)"
        :span="layout(index)"
        :key="index"
        style="height:100%;"
        v-if="model.direction=='col'"
      >
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </el-col>
      <el-row
        class="V2ContainerBlock"
        :class="blockClass(index)"
        :style="{height:layout(index),width:'100%',}"
        :key="index"
        v-else
      >
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </el-row>
    </template>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";

let mixins = [widget, composite, edit];

export default {
  name: "v2Container",
  mixins,
  mounted() {
    window.c = this;
    console.log("wid", this.wid, this.model);
  },
  methods: {
    $selectedClass() {
      return {
        selectedContainer: true
      };
    }
  },
  computed: {
    component(index) {
      return index => {
        let item = this.model.children[index];
        if (item === undefined) {
          this.model.children[index] = null;
        }
        if (item) return item.component;
        return "v2Empty";
      };
    },
    wigetId(index) {
      return index => {
        let item = this.model.children[index];
        if (item) {
          return item.id;
        }
        return this.wid + "-" + index;
      };
    },
    blockClass(index) {
      return index => {
        //在组件内部定制样式，根据当前的activeTool来切换
        let s = {};
        //没有children的block才会变色
        if (this.model.children[index]) {
          if (
            this.$store.state.activeTool &&
            this.$store.state.activeTool.type == "create"
          ) {
            s["transparent"] = true;
          }
        }
        // this.LOG("blockClass", s);
        return s;
      };
    }
  }
};
</script>
<style>
</style>