<template>
  <div :style="flexStyle"  class="av-form-slider">
     <label
        :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
        :style="{width:model.data.labelWitdh}"
      >{{model.data.label}}</label>
      <div class="form-slider-ctn" :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}">
    <el-slider
      v-model="model.data.value"
      :show-tooltip="model.data.tooltip"
      :disabled="model.data.disabled"
      :step="parseInt(model.data.step)"
      :show-stops="model.data.stops"
      :show-input="model.data.input"
      change="change"
    >
    </el-slider>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'av-form-slider',
    props: {
      model: Object
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      flexStyle(){
        let self = this;
        if(self.model.data.titleMode==='col'){
          return $.extend({}, self.model.data.style, {display:"flex"})
        }else if(self.model.data.titleMode==='row'){
          return self.model.data.style;
        }
      },
      change(){

      }
    },
  }
</script>
<style>
.form-label-col {
  float: left;
}
.av-form-label {
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

