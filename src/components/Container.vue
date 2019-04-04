<template>
  <!-- 布局容器 -->
  <div ref="container">
    <!-- model来自widget -->
    <template v-for="(item,index) of model.children">
      <el-col :span="layout(index,item)" :key="index" v-if="model.direction=='col'">
        <component
          @click.native="select=item.id"
          :class="{selected:select==item.id}"
          :is="item.component.name"
          :wid="item.wid"
        ></component>
      </el-col>
      <el-row :style="{height:layout(index,item)}" :key="index" v-else>
        <component
          @click.native="select=item.id"
          :class="{selected:select==item.id}"
          :is="item.component.name"
          :wid="item.wid"
        ></component>
      </el-row>
    </template>
  </div>
</template>
<script>
import { widget, composite } from "../assets/js/v2-view.js";
import { edit } from "../assets/js/edit.js";
export default {
  name: "v2Container",
  mixins: [widget, composite, edit]
};
</script>