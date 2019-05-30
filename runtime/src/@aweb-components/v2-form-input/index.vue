<template>
  <div :style="flexStyle" class="v2-form-input" :class="model.layoutClass"> 
     <label
        :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
        :style="labelStyle"
      >{{model.label}}</label>
     <div class="form-input-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
    <el-input
      ref="__op_formInput_input"
      v-model="model.value"
      :placeholder="model.placeholder"
      :clearable="model.clearable"
       :disabled="model.disabled"
    ></el-input>
     </div>
  </div>
</template>

<script>

export default {
  name: "v2-form-input",

  mounted() {
    console.log('input',this.model)
  },
  methods: {
    flexStyle() {
      // let self = this;
      // if (self.model.data.titleMode === "col") {
      //   return $.extend({}, self.model.data.style, { display: "flex" });
      // } else if (self.model.data.titleMode === "row") {
      //   return self.model.data.style;
      // }
    },

    $ArrowRight() {
      return true;
    },
    $ArrowLeft() {
      return true;
    }
  },
  watch:{
    model:{
      handler(newVal){
         
        //  this.$refs.aInput.getElementsByTagName('input').style=
      },
      deep:true
    }
  }
};
</script>

<style>
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
.form-input-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
