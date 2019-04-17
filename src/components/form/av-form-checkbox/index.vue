<template>
  <div :style="model.style" :class="wrapClass" class="v2CheckBox">
    <label>{{model.data.label}}</label>
    <el-checkbox-group v-model="model.data.checkList">
    <el-checkbox v-for="item in model.data.options" :label="item" :key="item">{{item}}</el-checkbox>
  </el-checkbox-group>
  </div>
</template>
<script>
import { widget, composite } from "../../../assets/js/v2-view.js";
import { edit } from "../../../assets/js/edit.js";
import inputField from "../../../assets/js/inputField";
export default {
  name: "v2CheckBox",
  mixins: [widget, inputField, edit],
  data(){
    return{
      checkList:[]
    }
  },
  methods: {
    $Enter() {
      this.model.data.checked = !this.model.data.checked;
      return false;
    }
  },
  mounted() {
  }
};
</script>

<style lang="less">
.checkBox{
  display: flex;

  >label{
    padding: 0 10px;
  }
}


</style>

