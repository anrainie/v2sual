<template>
  <!-- 布局容器 -->
  <div class="V2Container" ref="wrap" :style="model.style" >
    <!-- model来自widget -->
    <template v-for="(lyt,index) of layout_c">
      <el-col
        class="V2ContainerBlock"
        :span="parseInt(layout(index))"
        :key="index"
        style="height:100%;"
        v-if="!model.direction || model.direction=='col'"
      >
        <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component>
      </el-col>
      <el-row
        class="V2ContainerBlock"
        :style="{height:parseInt(layout(index)),width:'100%',}"
        :key="index"
        v-else
      >
       <component :is="component(index)" :wid="wigetId(index)" :index="index" :pid="wid"></component> 
      </el-row>
    </template>
  </div>
</template>
<script>
import {avMixin} from '../av.js'

  export default {
    name: 'av-layout-rowctn',
    mixins:avMixin,
    data(){
       return {
    
       }
    },
    mounted(){

    },
    methods: {
    $selectedClass() {
      return {
        selectedContainer: true
      };
    },
    layout(index) {
      console.log("layout", this.model);
      !this.model.direction && (this.model.direction = "col");
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
    },
      model() {

        return (this.$store.getters.model(this.wid) || {});
       
      }
  }
  }
</script>
<style lang="less" scoped>
.V2Container,
.V2ContainerBlock{
  min-height: 30px;
}
</style>
