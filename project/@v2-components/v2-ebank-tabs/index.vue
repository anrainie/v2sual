<template>
  <div class="eb-tabs tabs-handlebar">
    <el-button-group :class="[model.btnsType === 'text' ? 'is-divide' : '', ...widgetClass]" v-if="model.hasBtns">
      <el-button
        v-for="(item, index) in btns"
        :key="index"
        :type="model.btnsType"
        :icon="item.icon"
        :ref="`_op_ebankTabs_btn_${index}`"
        >
          {{item.text}}
        </el-button>
    </el-button-group>

    <!-- :style="model.commonStyle" -->
    <!-- :class="widgetClass" -->
    <!-- @tab-click="handleClick" -->
    <el-tabs
      v-model="model.active"
      :type="model.tabsType"
    >
      <!-- NOTE: tabs 的激活项与 tab-pane 的 name 属性关联 -->
      <!-- 为了与切换容器结合使用,这里用 tabs 项的索引值作为 name 的值,注意要转化为 String 类型,否则 tabs 的激活状态无法响应 -->
      <el-tab-pane
        v-for="(item,index) in tabs"
        :label="item.text"
        :name="String(index)"
        :key="index"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "v2-ebank-tabs",

  computed: {
    tabs() {
      let tabs = [
        {text: '标签页1'},
        {text: '标签页2'}
      ];

      return this.model.tabs && this.model.tabs.length ? this.model.tabs : tabs;
    },
    btns() {
      let btns = [
        {
          text: '按钮一',
          icon: 'el-icon-s-help'
        },
        {
          text: '按钮二',
          icon: 'el-icon-setting'
        }
      ];

      return this.model.btns && this.model.btns.length ? this.model.btns : btns;
    },
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    //   console.log(this.model.active);
    // }
  }
};
</script>

<style lang="scss">
.eb-tabs {
  position: relative;

  .el-tabs__nav {
    margin-left: 15px;
  }
  .el-tabs__header {
    margin-bottom: 5px;
  }

  .el-button-group {
    position: absolute;
    right: 15px;
    z-index: 2;
  }
  .is-divide {
    .el-button:not(:last-child) {
      &::after {
        content: "";
        display: inline-block;
        margin: 0 8px;
        width: 5px;
        height: 12px;
        vertical-align: middle;
        background: #455ecb;
        transform: scale(0.2, 1); // 对上面的宽度进行缩放,解决1像素显示不一致
      }
    }
  }
}
</style>
