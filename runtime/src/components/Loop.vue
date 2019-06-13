<template>
  <div>
    <template v-for="($item,$key) in model.__loopTarget">
      <slot :key="$key"></slot>
    </template>
    <component
      :key="$key"
      :id="widgetId($item,$key)"
      :is="model.component"
      :wid="widgetId($item,$key)"
      :index="index"
      :pid="wid"
      :defaultModel="model"
    ></component>
  </div>
</template>
<script>
import { widget } from "@/utils/v2-view";
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
  mixins: widget,
  data() {
    return {};
  },
  computed: {
    widgetId($item, $key) {
      return () => {
        if (this.model.loopKey) {
          return eval(this.model.loopKey);
        }
        if ($item) {
          if ($item.id != null) return $item.id;
          if ($item.ID != null) return $item.ID;
          if ($item.ename != null) return $item.ename;
          if ($item.name != null) return $item.name;
        }
      };
    }
  },
  mounted() {}
};
</script>
<style></style>

