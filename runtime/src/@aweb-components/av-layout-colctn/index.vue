<template>
  <!-- 布局容器 -->

  <div class="V2Container" ref="wrap" :style="model.style">
    <!-- model来自widget -->
    <template v-for="(lyt,index) of layout_c">
      <el-row
          class="V2ContainerBlock"
        :span="parseInt(layout(index))"
        :key="index"
        style="height:100%;"
        v-if="!model.direction || model.direction=='row'"
      >
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </el-row>
      <el-col
        class="V2ContainerBlock"
        :span="parseInt(layout(index))"
        :key="index"
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
  name: "av-layout-colctn",

  props: {
    model: Object,
    wid: [String, Number]
  },
  data() {
    return {
      //  layoutConfig:[100]
    };
  },
  mounted() {
    console.log("ly", this);
    //     this.model.data &&( this.model.data.children=[]);
    //     let ctns =[];
    // this.model.data && this.model.data.layout && this.model.data.layout.forEach(ele => {
    //     ctns.push(ele.ctn);
    //  });
    //  this.layoutConfig = ctns;

    // !this.model.layout && (this.model.layout=[50,50])
  },
  methods: {
    $selectedClass() {
      return {
        selectedContainer: true
      };
    },
    layout(index) {
      console.log("layout", this.model);
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
      if(this.model.layout){
        if (typeof this.model.layout === "string") {
          return JSON.parse(this.model.layout);
        }else{
          return this.model.layout;
        }
      }else{
        return [50,50];
      }

    },
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
    }
  }
};
</script>
<style lang="less" scoped>
.V2Container,
.V2ContainerBlock {
  min-height: 30px;
}
</style>
