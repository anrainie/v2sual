export default {
  name: 'EbShortcut',
  // props: {
  //   str: {
  //     type: string,
  //     default: ''
  //   },
  //   objStyle: {
  //     type: Object,
  //     default() {
  //       return {}
  //     }
  //   }
  //   },
  //   arr: {
  //     type: Array,
  //     default() {
  //       return []
  //     }
  //   }
  // },
  props: ['route', 'icon', 'iconPosition', 'name', 'size'],
  data() {
    return {}
  },
  computed: {
    isImg() {
      let imgRE = /\.(gif|jpg|jpeg|bmp|png)/

      return imgRE.test(this.icon)
    }
  },
  methods: {
    // 这里可以接收父组件传递的props参数,然后在子组件中处理事件
    // 也可以将事件 emit 给父组件处理
    openPage() {
      // this.$emit('openPage')

      console.log("子组件事件: ", this.name)
      console.log("页面路由: ", this.route)

      this.open(this.route)

      // this.open({
      //   status: !0,
      //   title: "我的账户",
      //   path: "spa/myAccount",
      //   page: "spa/myAccount",
      //   type: "BLANK",
      //   params: { param: "一个参数" }
      // });

      // alert('child msg');

      // let msg = this.size

      // // alert(this.$attrs.id);
      // alert(msg);

      // console.log(this.$props);
      // console.log(e);
    }
  },
  render() {
    // let $slots = ctx.slots()
    // let {style} = ctx.props

    console.log(this)

    // debugger

    return (
      <div class={['eb-shortcut', `eb-shortcut--${this.size}`]} onClick={this.openPage}>
        {
          this.isImg ?
          <div class={['eb-shortcut__icon', 'eb-shortcut__icon-img', `eb-shortcut__icon--${this.iconPosition}`]}><img src={this.icon} /></div> :
          <div class={['eb-shortcut__icon', 'eb-shortcut__icon-icon', `eb-shortcut__icon--${this.iconPosition}`, this.icon ? this.icon : 'el-icon-setting']}></div>
        }
        <div class={['eb-shortcut__name']}>{this.name ? this.name : '快捷键'}</div>
      </div>
    )
  }
}

// =============================================================================

// <div class={['eb-shortcut', `eb-shortcut--${this.$attrs.size}`]} onClick={this.clickEv} style={this.stl}>
//   <div class={['eb-shortcut__icon', this.$attrs.icon ? this.$attrs.icon : 'el-icon-setting']}></div>
//   <div class={['eb-shortcut__name']}>{this.$attrs.name ? this.$attrs.name : '快捷键'}</div>
// </div>

// render (h, ctx) {
//   return (
//     <div
//       // normal attributes or prefix with on props.
//       id="foo"
//       propsOnCustomEvent={this.customEventHandler}
//       // DOM properties are prefixed with `domProps`
//       domPropsInnerHTML="bar"
//       // event listeners are prefixed with `on` or `nativeOn`
//       onClick={this.clickHandler}
//       nativeOnClick={this.nativeClickHandler}
//       // other special top-level properties
//       class={{ foo: true, bar: false }}
//       style={{ color: 'red', fontSize: '14px' }}
//       key="key"
//       ref="ref"
//       // assign the `ref` is used on elements/components with v-for
//       refInFor
//       slot="slot">
//     </div>
//   )
// }

// =============================================================================

// const ButtonCounter = {
//   functional: false,
//   name: "button-counter",
//   props: ["count"],
//   methods: {
//     onClick() {
//       this.$emit("change", this.count + 1);
//     }
//   },
//   render() {
//     return (
//       <button onClick={this.onClick}>You clicked me {this.count} times.</button>
//     );
//   }
// };

// export default {
//   functional: false,
//   name: "EbDemo",
//   data() {
//     return {
//       count: 0
//     };
//   },
//   methods: {
//     onChange(val) {
//       this.count = val;
//     }
//   },
//   render() {
//     const { count, onChange } = this;
//     return (
//       <div>
//         <ButtonCounter
//           style={{ marginTop: "10px" }}
//           count={count}
//           type="button"
//           onChange={onChange}
//         />
//         <ButtonCounter
//           style={{ marginTop: "10px" }}
//           count={count}
//           type="button"
//           domPropsInnerHTML={`hello ${this.count}.`}
//           onChange={onChange}
//         />
//       </div>
//     );
//   }
// };

