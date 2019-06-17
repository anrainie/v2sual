<template>
  <div  class="v2-form-ctt v2-form-input" :class="model.layoutClass"> 
     <label
        :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
        :style="labelStyle"
      >
      <span class="must-input" v-if="model.isRequired">*</span>
      {{model.label}}</label>
     <div class="form-input-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
      <el-input
      v-if="!model.autoComplete"
      v-model="model.value"
      ref="_op_formInput_input"
      :placeholder="model.placeholder"
      :clearable="model.clearable"
      :disabled="model.disabled"
    ></el-input>

      <el-autocomplete
      v-if="model.autoComplete"
       v-model="model.value"
      ref="_op_formInput_input"
      :placeholder="model.placeholder"
      :clearable="model.clearable"
      :disabled="model.disabled"
      :fetch-suggestions="querySearch"
    ></el-autocomplete>


     </div>
  </div>
</template>

<script>

export default {
  name: "v2-form-input",


  mounted() {
    // console.log('inputRef',this.$refs._op_formInput_input.$refs.input)

  },
  methods: {
     querySearch(queryString, cb) {
        let suggestion = (this.model && this.model.suggestion)||[];
        let results = queryString ? suggestion.filter(item => item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0) : suggestion;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
    $ArrowRight() {
      return true;
    },
    $ArrowLeft() {
      return true;
    }
  },
    watch:{
      "model.style.borderStyle":{
        immediate:true,
        handler:function(val){    
    
        // this.$refs && this.$refs._op_formInput_input && (this.$refs._op_formInput_input.$refs.input.style={...this.model.style.borderStyle,...this.model.style.fontStyle});
        //   //  val && val['border-color'] && this.$refs._op_formInput_input.$el.style.setProperty('bor',val['border-color'])
        }
      },
      "model.style.fontStyle":{
        immediate:true,       
        handler:function(val){
        
        //   this.$refs && this.$refs._op_formInput_input && (this.$refs._op_formInput_input.$refs.input.style={...this.model.style.borderStyle,...this.model.style.fontStyle});

        }
      }  

  }
};
</script>

<style lang="less">

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

  .el-autocomplete{
    width: 100%;
  }

}
</style>
