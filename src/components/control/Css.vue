<template>
<div>
    <div class="aui-config-content">
      <!-- {{JSON.stringify(obj)}} -->
      <base-config
        v-if="showOption"
        class="aui-config-ctn "
        :arraySelector="arraySelector"
        :objSelector="objSelector"
        :array="arr"
        :obj="obj"
        :needMore="needMore"
      ></base-config>
    </div>
</div>

</template>

<script>
import util from "../../base/utils/bridge.js";

export default {
    data() {
    return {

      //model selector
      objSelector: "objectSlector",
      arraySelector: "array",

      //model display control
      spinShow: true,
      showOption: true
     }
    },

   computed: {
    arr(){
 
      return  this.model.widget ? util.turnCssConfigToArr(this.model.widget.css||{}):[]
    },
    obj() {
      return this.model;
    },
    wid() {

      return this.$store.getters.firstSelection;
    },
    model() {      
      return (
        this.$store.getters.model(this.$store.getters.firstSelection) || {}
      );
    }
    },
    methods:{
     needMore(index){     
       let  styleConfig = this.arrO.find(item => item.name==='style');
       styleConfig.attr[0].tabPanes[index].attr = util.getAllCssAttrConfig();

      // console.log(this.arrO);
      
     }
    },
    watch:{
      arr(){
         
      },
      obj:{
         handler(newName, oldName) {
        
       },
        immediate: true,
        deep: true
      }
      
    },
   mounted(){

   }
}
</script>

<style>

</style>
