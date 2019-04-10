<template>
  <!-- 布局容器 -->
  <div class="V2Container" ref="wrap" :style="model.style" :class="wrapClass">
    <!-- model来自widget -->
    <template v-for="(lyt,index) of model.layout">
      <el-col
        class="V2ContainerBlock"
        :span="layout(index)"
        :key="index"
        style="height:100%;"
        v-if="model.direction=='col'"
      >
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </el-col>
      <el-row
        class="V2ContainerBlock"
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
  }
};
</script>
<style>
</style>