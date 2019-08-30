<template>
  <!-- ide 组件事件钩子好像只能在组件根目录上 -->
  <div class="tabs-handlebar" ref="_op_componentTabs_tabs">
    <el-button-group :class="widgetClass">
      <!-- <el-button type="text" icon="el-icon-s-help">搜索</el-button>
      <el-button type="text" icon="el-icon-s-help">搜索</el-button> -->
      <el-button
        v-for="(item, index) in btns"
        :key="index"
        :type="item.type"
        :icon="item.icon"
        :ref="`_op_componentTabs_btn_${index}`"
        >
        <!-- v-on="clickListeners" -->
        <!-- @click="btnEv(item.text)" -->
          {{item.text}}
        </el-button>
    </el-button-group>
    <el-tabs
      v-model="model.active"
      :class="widgetClass"
      :style="model.commonStyle"
      :type="model.type"
      :tab-position="model.tabPosition"
    >
      <el-tab-pane
        v-for="(item,index) in model.list"
        :label="item.label"
        :name="item.name"
        :key="index"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "v2-component-tabs",

  data() {
    return {
      btns: [
        {
          text: '按钮一',
          icon: 'el-icon-s-help',
          type: 'text',
          fn: '',
          param: []
        },
        {
          text: '按钮二',
          icon: 'el-icon-setting',
          type: 'text',
          fn: '',
          param: []
        }
      ]
    };
  },
  computed: {
    clickListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          click: function (event) {
            // alert('click')
            console.log('%c click event from tabsComp...', 'color: #0ff')
            console.log(this.$parent)

            // var f = new Function('x', 'y', 'return x+y'); 
            // f( 3, 4 )

            // this.$parent.fatherMethod()
            vm.$emit('click', event.target.value)
            // debugger
          }
        }
      )
    }
  },
  methods: {
    btnEv(arg) {
      alert(arg)
      console.log('%c click event from tabsComp...', 'color: #0ff')
      console.log('this.$parent')
      console.log(this.$parent.btnEv_1)
      console.log('this.$root')
      console.log(this.$root.btnEv_1)
    }
  },
};
</script>
<style lang="scss" scoped>
.tabs-handlebar {
  position: relative;

  .el-button-group {
    position: absolute;
    right: 15px;
    z-index: 2;

    .el-button:not(:last-child) {
      &::after {
        content: "";
        display: inline-block;
        margin: 0 8px;
        width: 3px;
        height: 12px;
        vertical-align: middle;
        background: #455ecb;
        transform: scale(0.5, 1); // 对上面的宽度进行缩放,解决1像素显示不一致
      }
    }
  }
}
</style>
