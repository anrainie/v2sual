<template>
  <div :style="flexStyle" class="av-form-cascader">
    <div v-if="model.data.titleMode==='row'">
        <label class="av-form-cascader-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-cascader-label">{{model.data.label}}</label>
    <el-cascader
      :options="model.data.options"
      :trigger="model.data.trigger"
      v-model="model.data.value"
      @change="handleChange"
      :placeholder="model.data.placeholder"
      :filterable="model.data.filterable"
    >
    </el-cascader>
  </div>
</template>
<script>
  export default {
    name: 'av-form-cascader',
    props: {
      model: Object
    },
    mounted () {
    },
    data () {
      return {}
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
      handleChange () {

      }
    },
  }
</script>
