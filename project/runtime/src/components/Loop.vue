<template>
  <div style="display:flex; flex-wrap:wrap;">
    <div v-for="(item,key) in loopTarget" :style="loopStyle" :key="key">
      <slot :_item="item" :_key="key"></slot>
    </div>
  </div>
</template>
<script>
import { widget } from "@/utils/v2-view";
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
  name: "v2Loop",
  mixins: [widget],
  data() {
    return {};
  },
  created() {
    this.$store.commit('regist.vue', {
      wid: this.wid,
      vue: this
    });
    this.model.__loopKey = this.model.__loopTarget;
  },
  computed: {
    loopTarget() {
      return this.model.__loopTarget &&
        this.model.__loopTarget.constructor == Array
        ? this.model.__loopTarget
        : [];
    },
    loopStyle() {
      let capa = this.model.__capacity || 1;
      return {
        width: 100 / capa + "%"
      };
    }
  },
  mounted() {}
};
</script>
<style></style>

