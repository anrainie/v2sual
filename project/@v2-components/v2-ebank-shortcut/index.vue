<template>
  <!-- 'eb-shortcut' + model.size, -->
  <div
    :class="['eb-shortcut', {'eb-shortcut--eidit': model.funcBtn.showFuncBtn}]"
    @click="openPage"
    ref="_op_ebankShortcut_shortcut"
  >
    <div class="eb-shortcut__icon">
      <div
        :class="[isImg ? 'eb-shortcut__icon-img' : 'eb-shortcut__icon-icon ' + model.icon || 'el-icon-setting', 'eb-shortcut__icon--' + model.iconPosition]"
      >
        <img v-if="isImg" :src="model.icon" />
        <i
          v-if="model.funcIcon.showFuncIcon"
          :class="['eb-shortcut__icon-func', model.funcIcon.funcIconClass || 'el-icon-error']"
          ref="_op_ebankShortcut_funcIcon"
        ></i>
      </div>
    </div>

    <div class="eb-shortcut__bot">
      <div class="eb-shortcut__name">{{model.name ? model.name : '快捷键'}}</div>
      <el-button
        v-if="model.funcBtn.showFuncBtn"
        class="eb-shortcut__btn-func"
        size="mini"
        ref="_op_ebankShortcut_funcBtn"
      >{{model.funcBtn.funcBtnName || '添加'}}</el-button>
    </div>
  </div>
</template>

<script>
// insideRoute
// funcBtn
// funcIcon
export default {
  name: "v2-ebank-shortcut",

  computed: {
    isImg() {
      let imgRE = /\.(gif|jpg|jpeg|bmp|png)/;

      return imgRE.test(this.model.icon);
    }
  },
  methods: {
    openPage() {

      // console.log('this.model')
      // console.log(this.model)

      if (this.model.funcIcon.showFuncIcon || this.model.funcBtn.showFuncBtn) {
        console.log("处于编辑状态,不执行打开页面方法...");
        return;
      }

      if (!this.model.route || !this.model.insideRoute.useInsideRoute) {
        console.log("未配置路由或未开启内置的打开页面方法,不打开页面...");
        return;
      }

      // console.log('this.model.route')
      // console.log(this.model.route)

      this.open(this.model.route);
    }
  }
};
</script>

<style lang="scss">
.eb-shortcut {
  // margin: 10px;
  padding: 5px;
  min-width: 50px;
  max-width: 200px;
  text-align: center;
  cursor: pointer;

  .eb-shortcut__icon {
    .eb-shortcut__icon-icon {
      position: relative;
      font-size: 22px;
      color: #455ecb;
      // line-height: 30px;
    }
    .eb-shortcut__icon-img {
      position: relative;
      display: inline-block;
      height: 22px;

      img {
        width: 22px;
      }
    }
    .eb-shortcut__icon-func {
      position: absolute;
      top: -5px;
      right: -10px;
      color: #333;
    }
    .eb-shortcut__icon--left {
      float: left;
    }
    .eb-shortcut__icon--right {
      float: right;
    }
  }

  .eb-shortcut__bot {
    line-height: 22px;

    .eb-shortcut__name {
      font-size: 12px;
      color: #333;
    }

    .eb-shortcut__btn-func {
      display: none;
      padding: 3px 10px;
    }
  }

  &.eb-shortcut--eidit:hover {
    border-radius: 5px;
    background: #eee;

    .eb-shortcut__name {
      display: none;
    }
    .eb-shortcut__btn-func {
      display: inline-block;
    }
  }

  // .eb-shortcut-normal {
  //   //
  // }
  // .eb-shortcut-small {
  //   //
  // }
}

// .eb-shortcut-mini {
//   //
// }
</style>
