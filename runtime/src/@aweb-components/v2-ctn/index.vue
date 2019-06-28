<template>
  <!-- 容器 -->
    <div class="V2Container v2-ctn" :style="ctnStyle">

        <div class="V2ContainerBlock"  :class="blockClass(0,model)">
      
            <component  class="aui-empty-ctn"  :is="component" :wid="wigetId" :pid="wid" ></component>
        </div>
    </div>
</template>
<script>
export default {
  name: "v2-ctn",

  data() {
    return {};
  },
   methods: {
    $selectedClass() {
      return {
        selectedContainer: true
      };
    }
  },
  computed: {
    component() {
     
         if (!this.model.children) {
          return "v2Empty";
        }
     
        let item = this.model.children && (this.model.children[0]||this.model.children[1]);
      
      
        if (item) return item.component;
        return "v2Empty";
     
    },
    wigetId() {

        let item = this.model.children && (this.model.children[0]||this.model.children[1]);
        if (item) {
          return item.id;
        }
        return this.wid + "-" + 0;
    
    },
   ctnStyle(){
  
     return {...this.model.style.divCtn,...this.model.defStyle, ...this.model.customStyle}
   }
  },
  mounted(){

    console.log('ctn',this.model);
  }
};
</script>
<style lang="less" scoped>
.V2Container,
.V2ContainerBlock{
  min-height: 30px;

}
.aui-empty-ctn{
 &::before{
   background: #f5d1a4;
 }
  
}
</style>
