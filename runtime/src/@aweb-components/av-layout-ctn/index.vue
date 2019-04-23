<template>
  <!-- 布局容器 -->
  <div class="V2Container" ref="wrap" :style="model.style" >
    <!-- model来自widget -->
    <template v-for="(lyt,index) of layoutConfig">
      <el-col
        class="V2ContainerBlock"
        :span="layout(index)"
        :key="index"
        style="height:100%;"
        v-if="model.data.direction=='col'"
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

  export default {
    name: 'av-layout-ctn',
    props: {
      model: Object,
      wid:[String, Number]
    },
    data(){
       return {
         layoutConfig:[100]
       }
    },
    mounted(){
       console.log('ly',this);
          this.model.data &&( this.model.data.children=[]);
          let ctns =[];
      this.model.data && this.model.data.layout && this.model.data.layout.forEach(ele => {
          ctns.push(ele.ctn);
       });
       this.layoutConfig = ctns;
       console.log(this.layoutConfig);
    },
    methods: {
    $selectedClass() {
      return {
        selectedContainer: true
      };
    },
   layout(index) {
      if (this.model.data.direction == 'col') {
        //列布局/横向布局，返回span
        return this.layoutConfig instanceof Array ? Math.round(this.layoutConfig[index] * 24 / 100) : '2'
      } else {
        //行布局/纵向布局，返回百分比
        return this.layoutConfig instanceof Array ? this.layoutConfig[index] + '%' : '50%'
      }
    }
  },
  computed: {
    component(index) {
     
      return index => {
        let item = this.model.data.children && this.model.data.children[index];
        if (item === undefined) {
          this.model.data.children && (this.model.data.children[index] = null);
        }
        if (item) return item.component;
        return "v2Empty";
      };

    },
    wigetId(index) {
      return index => {
        let item =  this.model.data.children && this.model.data.children[index];
        if (item) {
          return item.id;
        }
        return this.wid + "-" + index;
      };
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
