<template>
  <div :style="chartCtnStyle">
    <div :class="widgetClass" class="chart-content" style="width:100%;height:100%;" ref="_op_componentEchart_chart"></div>
    <div class="chart-tips" v-if="error">
      <p>本组件使用echart配置</p>
      <hr />
      <p>操作步骤:</p>
      <li>
        1、访问
        <a target="_blank" href="https://echarts.baidu.com/">echarts官网</a>
      </li>
      <li>2、编辑需要的样式，复制其配置单</li>
      <li>3、创建一个“数据篮子”，并填入复制好的配置</li>
      <li>4、将数据篮子的名称填入本组件：参数->配置单</li>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "v2-component-echart",

  data() {
    return {
      chart: null,
      error: false
    };
  },
  computed: {
    extraClass() {
      return this.error ? "echart-error" : "echart-normal";
    },
    chartCtnStyle() {
      let x = {
        ...(this.model.commonStyle || {})
      };
      x.height = (x.height != "" && x.height) || "400px";
      x.width = (x.width != "" && x.width) || "400px";
      this.chart&&this.chart.resize&&this.chart.resize();
      return x;
    }
  },
  watch: {
    "model.configs": {
      handler(val) {
        this.configChanged(val);
      }
    }
  },
  methods: {
    configChanged(val) {
      this.chart = echarts.init(this.$refs._op_componentEchart_chart);
      try {
        if (val && val.constructor == String) {
          let __temp;
          this.chart.setOption(eval("__temp=" + val));
        } else {
          this.chart.setOption(val || {});
        }
        this.chart.resize();
        this.error = false;
      } catch (e) {
        this.error = true;
        console.error("echart配置单格式错误", val);
        console.error(e);
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.chart-content {
  position: relative;
  width: 100%;
  height: 100%;
}
.chart-tips {
  position: absolute;
  padding: 10px;
  top: 160px;
  left: 20px;
  border: 1px solid #ccc;
  box-shadow: 1px 2px 6px #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: none;
}
.chart-content:hover {
  color: blue;
}
.chart-content:hover + .chart-tips {
  display: block !important;
}
.chart-tips:hover {
  display: block !important;
}
</style>




