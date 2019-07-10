<template>
  <div class="v2-form-ctt v2-form-checkbox" :class="model.layoutClass" >
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div
      class="form-checkbox-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
      <el-checkbox-group v-model="checkList" ref="_op_formCheckbox_group">
        <el-checkbox  
         ref="_op_formCheckbox_checkbox"
        v-for="(item,index) in model.options" 
        :label="item.label" 
        :key="index" 
        :disabled="item.disabled"
        >{{item.text}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>

export default {
  name: "v2-form-checkbox",

  data() {
    return {
      options: ["备选项"],
      checkList: []
    };
  },
  methods: {
    $Enter() {
      this.model.checked = !this.model.checked;
      return false;
    },
  },
  watch:{
     checkList(val){
       this.model.value = val;
     }
  },
  computed: {
  },
  mounted() {
    console.log('mo',this.model)
  }
};
</script>

<style lang="scss">
.form-label-col {
  float: left;
}
.v2-form-label {
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  line-height: 40px;
  padding-right: 12px;
  box-sizing: border-box;
}
.form-checkbox-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  .el-checkbox__label{
    line-height: 40px;
  }
}
</style>

