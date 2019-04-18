<template>
  <div :style="flexStyle" class="av-form-input">
        <label  class="av-form-input-label">{{model.data.label}}</label>
    <el-input
      v-model="model.data.value"
      style="flex:1"
      :placeholder="model.data.placeholder"
    ></el-input>
  </div>
</template>

<script>

export default {
  name: "av-form-input",
  props: {
    model: Object
  },
  mounted() {
  },
  computed: {
   
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
    $ArrowRight() {
      return true;
    },
    $ArrowLeft() {
      return true;
    }
  }
};
</script>

<style>
.labelInput-label {
  padding: 0 10px;
  line-height: 40px;
}
</style>
