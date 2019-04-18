<template>
  <div :style="model.data.style" ref="wrap" :class="wrapClass" class="av-form-datePicker">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-datePicker-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-datePicker-label">{{model.data.label}}</label>
    <el-date-picker
      v-model="model.data.value"
      type="date"
      :placeholder="model.data.placeholder"
      :align="model.data.align"
      :picker-options="pickerOptions"
      :disabled="model.data.disabled"
      :clearable="model.data.clearable"
    >
    </el-date-picker>
  </div>
</template>
<script>

  export default {
    name: 'av-form-datePicker',
    props: {
      model: Object
    },
    mounted () {
    },
    data () {
      return {
        pickerOptions:{
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
      }
    },
    methods: {},
  }
</script>
