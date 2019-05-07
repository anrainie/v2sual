<template>
  <div :style="flexStyle" class="av-form-input">
     <label
        :class="model.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
        :style="labelStyle"
      >{{model.label}}</label>
     <div class="form-input-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
    <el-input
      ref="aInput"
      v-model="model.value"
      :placeholder="model.placeholder"
      :clearable="model.clearable"
    ></el-input>
     </div>
  </div>
</template>

<script>

export default {
  name: "av-form-input",

  mounted() {
    console.log('input',this.model)
  },
  computed: {
      model() {
        return (
          this.$store.getters.model(this.wid) || {}
        );
      },
    labelStyle(){
       return {width:this.model.labelWitdh,...this.model.style.label}
    }
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
.av-form-label {
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
