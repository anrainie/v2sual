<template>
  <div :class="['eb-shortcut', 'eb-shortcut' + model.size]" @click="openPage(model.route)">
      <div v-if="isImg" :class="['eb-shortcut__icon', 'eb-shortcut__icon-img', 'eb-shortcut__icon--' + model.iconPosition]">
        <img img :src="model.icon">
      </div>
      <div v-else :class="['eb-shortcut__icon', 'eb-shortcut__icon-icon', 'eb-shortcut__icon--' + model.iconPosition, model.icon ? model.icon : 'el-icon-setting']"></div>
      <div class="eb-shortcut__name">{{model.name ? model.name : '快捷键'}}</div>
  </div>
</template>

<script>
export default {
  name: 'v2-ebank-shortcut',
  data() {
    return {
    }
  },
  computed: {
    // shortcutProps() {
    //   return {
    //     icon: this.model.icon,
    //     name: this.model.name,
    //     path: this.model.path,
    //     size: this.model.size
    //   }
    // },
  },
  methods: {
    openPage(route) {
      // this.$emit('openPage')
      // console.log("子组件事件: ", this.name)
      // console.log("页面路由: ", this.route)
      // alert('点击')
      // console.log('this ===>')
      console.log(route)

      this.open(route)

      // this.open(
      //   {
      //     page: "spa/index",
      //     path: "/index", // 页面 hash
      //     type: "BLANK",
      //     status: !0,
      //     params: { param: "一个参数" }
      //   }
      // )
    }
  },
  // render() {
  //   // let $slots = ctx.slots()
  //   // let {style} = ctx.props
  //   // console.log(this)

  //   return (
  //     // <div class="comp-ctn">
  //     //   <h1>{this.model.name}</h1>
  //     //   <h1>{this.model.icon}</h1>
  //     // </div>

  //     <div class={['eb-shortcut', `eb-shortcut--${this.size}`]} onClick={this.openPage}>
  //       {
  //         this.isImg ?
  //         <div class={['eb-shortcut__icon', 'eb-shortcut__icon-img', `eb-shortcut__icon--${this.iconPosition}`]}><img src={this.icon} /></div> :
  //         <div class={['eb-shortcut__icon', 'eb-shortcut__icon-icon', `eb-shortcut__icon--${this.iconPosition}`, this.icon ? this.icon : 'el-icon-setting']}></div>
  //       }
  //       <div class={['eb-shortcut__name']}>{this.name ? this.name : '快捷键'}</div>
  //     </div>
  //   )
  // }
}
</script>

<style lang="scss">
.eb-shortcut {
  margin: 10px;
  min-width: 50px;
  max-width: 200px;
  text-align: center;
  cursor: pointer;

  .eb-shortcut__icon-icon {
    color: #455ecb;
    font-size: 20px;
    // line-height: 30px;
  }
  .eb-shortcut__icon-img {
    height: 20px;

    img{
      width: 20px;
    }
  }
  .eb-shortcut__icon {
    &.eb-shortcut__icon--left {
      float: left;
    }
    &.eb-shortcut__icon--right {
      float: right;
    }
  }
  .eb-shortcut__name {
    line-height: 20px;
    font-size: 12px;
    color: #333;
  }
  .eb-shortcut-normal {
    // 
  }
  .eb-shortcut-small {
    // 
  }
}

.eb-shortcut-mini {
  // 
}
</style>
