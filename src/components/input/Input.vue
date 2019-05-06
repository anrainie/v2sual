<template>
  <div :style="model.style" ref="wrap" :class="wrapClass">
 <div  class="av-form-input">
     <label
        :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
        :style="{width:model.data.labelWitdh}"
      >{{model.data.label}}</label>
     <div class="form-input-ctn" :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}">
    <el-input
      v-model="model.data.value"
      :placeholder="model.data.placeholder"
      :clearable="model.data.clearable"
    ></el-input>
    <div>哈哈哈：{{JSON.stringify(model.cssObj)}}</div>
     </div>
  </div>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit} from "../../assets/js/edit.js";
export default {
  name: "v2Input",
  mixins: [widget,edit],
  mounted(){
    console.log('input',this.model)
  },

  watch:{
    model:{
       handler(newName, oldName) {
         debugger;
          console.log('obj',newName);
       },
        immediate: true,
        deep: true
    }
  }

};
</script>
