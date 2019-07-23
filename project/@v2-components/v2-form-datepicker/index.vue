<template>
  <div class="v2-form-ctt v2-form-datePicker" :class="widgetClass" :style="model.commonStyle">
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div
      class="form-datePicker-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >


      <el-date-picker
        ref="_op_formDatePicker_picker"
        v-model="model.value"
        :type="model.type"
        :placeholder="model.placeholder"
        :align="model.align"
        :picker-options="pickerOptions"
        :disabled="model.disabled"
        :clearable="model.clearable"
        :format="model.format" 
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :value-format="model.valueFormat"
      ></el-date-picker>
    </div>
  </div>
</template>
<script>

export default {
  name: "v2-form-datepicker",

  mounted() {},
  data() {
    return {
  
    };
  },
  computed: {
    pickerOptions() {
      if (this.model.type === "daterange") {
        return {
          shortcuts: [
            {
              text: "最近一周",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近一个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit("pick", [start, end]);
              }
            },
            {
              text: "最近三个月",
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit("pick", [start, end]);
              }
            }
          ]
        };
      } else {
        return {
          shortcuts: [
            {
              text: "今天",
              onClick(picker) {
                picker.$emit("pick", new Date());
              }
            },
            {
              text: "昨天",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit("pick", date);
              }
            },
            {
              text: "一周前",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", date);
              }
            }
          ]
        };
      }
    },
  },
  methods: {}
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
.form-datePicker-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  .el-date-editor.el-input, 
  .el-date-editor.el-input__inner{
    width: 100%;
  }
}
</style>
