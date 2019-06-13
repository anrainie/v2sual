<template>
  <div :style="flexStyle"  class="v2-form-slider" :class="model.layoutClass">
     <label
        :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
        :style="labelStyle"
      >
      <span class="must-input" v-if="model.isRequired">*</span>
      {{model.label}}</label>
      <div class="form-slider-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
    <el-slider
      ref="_op_formSlider_slider"
      v-model="model.value"
      :show-tooltip="model.tooltip"
      :disabled="model.disabled"
      :step="parseInt(model.step)"
      :show-stops="model.stops"
      :show-input="model.input"
      change="change"
    >
    </el-slider>
    </div>
  </div>
</template>
<script>


  export default {
    name: 'v2-form-slider',
   
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      flexStyle(){
        let self = this;
        if(self.model.titleMode==='col'){
          return $.extend({}, self.model.style, {display:"flex"})
        }else if(self.model.titleMode==='row'){
          return self.model.style;
        }
      },
      change(){

      }
    },
    computed:{
    }
  }
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
.form-slider-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>

