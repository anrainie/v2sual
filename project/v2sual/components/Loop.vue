<template>
  <div :style="loopWrapStyle">
    <template v-for="(item,key) in loopTarget">
      <slot :_item="item" :_key="key" :_style="loopStyle"></slot>
    </template>
  </div>
</template>
<script>
import { widget } from "../mixin/v2-view.js";
import { debug } from "util";
/**
 * model模版:
 * {
 *  __type:'loop',
 *  component:String,//单个元素组件
 *  __loopTarget:Array|Object//循环对象
 *  __loopKey:FuncString//获取键值的表达式，键值会用于内部组件的ID
 * }
 */
export default {
  name: "v2loop",
  mixins: [widget],
  data() {
    return {};
  },
  created() {
    this.model.__loopKey = this.model.__loopTarget;
  },
  computed: {
    loopTarget() {
      return this.model.__loopTarget &&
        this.model.__loopTarget.constructor == Array
        ? this.model.__loopTarget
        : [];
    },
    // 单行容量为 1 时,不需要绑定额外的样式
    loopWrapStyle() {
      let capa = this.model.__capacity || 1;
      let wrapStyle = {
        "display": "flex",
        "flex-wrap": "wrap"
      }
      return capa > 1 ? wrapStyle : ''
    },
    loopStyle() {
      let capa = this.model.__capacity || 1;
      return {
        width: 100 / capa + "%",
        ...this.model.commonStyle || {}
      };
    }
  },
  mounted() {}
};
</script>
<style></style>

