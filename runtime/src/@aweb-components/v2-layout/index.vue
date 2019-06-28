<template>
  <!-- 布局容器 -->
  <div class="V2Container" ref="wrap">
    <!-- model来自widget -->
    <template v-for="(lyt,index) of layout_c">
      <el-row
        class="V2ContainerBlock"
        :style="ctnStyle(index)"
        :key="index"
        v-if="!model.direction || model.direction=='row'"
        :class="blockClass(index,model)"
      >
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </el-row>
      <el-col
        class="V2ContainerBlock"
        :span="parseInt(layout(index))"
        :key="index"
        :class="blockClass(index,model)"
        v-else
        style="height:100%;"
      >
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </el-col>
    </template>
  </div>
</template>
<script>
export default {
  name: "v2-layout-colctn",

  data() {
    return {};
  },
  methods: {
    $selectedClass() {
      return {
        selectedContainer: true
      };
    },
    blockClass() {
      return (index, parent) => {
        let c = {};
        //令Empty以外的元素具备border，需要注意borderbox的影响
        if (parent && parent.children[index] && !parent.children[index].layout) {
          c.borderBox = true;
          c.dashBorder = true;
        }
        return c
      }
    },
    layout(index) {
      !this.model.direction && (this.model.direction = "row");
      if (this.model.direction == "col") {
        // 列布局/横向布局，返回span
        return this.layout_c instanceof Array
          ? Math.round((this.layout_c[index] * 24) / 100)
          : "2";
      } else {
        // 行布局/纵向布局，返回百分比
        return this.layout_c instanceof Array
          ? this.layout_c[index] + "%"
          : "50%";
      }
    }
  },
  computed: {
    layout_c() {
      if (this.model.layout) {
        if (typeof this.model.layout === "string") {
          return JSON.parse(this.model.layout);
        } else {
          return this.model.layout;
        }
      } else {
        return [50, 50];
      }
    },
    component(index) {
      return index => {
        let item = this.model.children[index];
        if (item === undefined) {
          this.model.children[index] = null;
        }

        if(item && item.__type && item.__type==="loop") return "v2loop";

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
    ctnStyle(index){
      return index=>{
          if(this.model.defStyle){
          console.log()
          return this.model.defStyle;
        }else{
          return {'height':this.layout(index),width:'100%'}
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>

</style>
