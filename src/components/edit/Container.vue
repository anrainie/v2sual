<template>
  <!-- 布局容器 -->
  <div class="V2Container" ref="wrap" :style="model.style" :class="wrapClass">
    <!-- model来自widget -->
    <template v-for="(item,index) of model.children">
      <el-col :span="layout(index,item)" :key="item.id" v-if="model.direction=='col'">
        <component
          :is="item.component"
          :wid="item.id"
        ></component>
      </el-col>
      <el-row :style="{height:layout(index,item)}" :key="item.id" v-else>
        <component
          :is="item.component"
          v-model="item.id"
        ></component>
      </el-row>
    </template> 
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
export default {
  name: "v2Container",
  mixins: [widget, composite, edit],
  mounted() {
    window.container = this;
  }
};
</script>