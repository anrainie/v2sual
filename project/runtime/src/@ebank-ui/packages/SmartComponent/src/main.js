var imgOptions = {
  props: ["data"],
  render: function(createElement) {
    return createElement("div", [
      createElement("p", "图片组件"),
      createElement("img", {
        attrs: {
          src: this.data.url,
          height: 300,
          weight: 400
        }
      })
    ]);
  }
};

//视频组件设置
var videoOptions = {
  props: ["data"],
  render: function(createElement) {
    return createElement("div", [
      createElement("p", "视频组件"),
      createElement("video", {
        attrs: {
          src: this.data.url,
          controls: "controls",
          autoplay: "autoplay"
        }
      })
    ]);
  }
};

//文本组件设置
var textOptions = {
  props: ["data"],
  render: function(createElement) {
    return createElement("div", [
      createElement("p", "文本组件"),
      createElement("p", this.data.content)
    ]);
  }
};

// Vue.component("smart-component", {
export default {
  //设置为函数化组件
  functional: true,
  name: 'SmartComponent',
  render: function(createElement, context) {
    function get() {
      var data = context.props.data;

      console.log("smart-component/type:" + data.type);
      //判断是哪一种类型的组件
      switch (data.type) {
        case "img":
          return imgOptions;
        case "video":
          return videoOptions;
        case "text":
          return textOptions;
        default:
          console.log("data 类型不合法：" + data.type);
      }
    }

    return createElement(
      get(),
      {
        props: {
          data: context.props.data
        }
      },
      context.children
    );
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}

// var page = new Vue({
//   el: "#page",
//   data: {
//     data: {}
//   },
//   methods: {
//     change: function(type) {
//       console.log("输入类型：" + type);
//       switch (type) {
//         case "img":
//           this.data = {
//             type: "img",
//             url:
//               "http://pic-bucket.ws.126.net/photo/0001/2019-02-07/E7D8PON900AO0001NOS.jpg"
//           };
//           break;
//         case "video":
//           this.data = {
//             type: "video",
//             url:
//               "http://wxapp.cp31.ott.cibntv.net/6773887A7F94A71DF718E212C/03002002005B836E73A0C5708529E09C1952A1-1FCF-4289-875D-AEE23D77530D.mp4?ccode=0517&duration=393&expire=18000&psid=bbd36054f9dd2b21efc4121e320f05a0&ups_client_netip=65600b48&ups_ts=1549519607&ups_userid=21780671&utid=eWrCEmi2cFsCAWoLI41wnWhW&vid=XMzc5OTM0OTAyMA&vkey=A1b479ba34ca90bcc61e3d6c3b2da5a8e&iv=1&sp="
//           };
//           break;
//         case "text":
//           this.data = {
//             type: "text",
//             content:
//               "《流浪地球》中的科学：太阳何时吞并地球？科学家已经给出时间表"
//           };
//           break;
//         default:
//           console.log("data 类型不合法：" + type);
//       }
//     }
//   },
//   created: function() {
//     //默认为图片组件
//     this.change("img");
//   }
// });












// export default {
//   name: 'EbShortcut',
//   // props: {
//   //   str: {
//   //     type: string,
//   //     default: ''
//   //   },
//   //   objStyle: {
//   //     type: Object,
//   //     default() {
//   //       return {}
//   //     }
//   //   }
//   //   },
//   //   arr: {
//   //     type: Array,
//   //     default() {
//   //       return []
//   //     }
//   //   }
//   // },
//   props: ['id', 'user', 'path', 'icon', 'name', 'size'],
//   data() {
//     return {
//       stl: {
//         color: 'blue',
//         fontSize: '50px',
//       }
//     }
//   },
//   methods: {
//     clickEv(e) {
//       // this.$emit('click', e)

//       // demoProps: {
//       //   id: 'demoId',
//       //   user: 'Messi',
//       //   path: '/index'
//       // }

//       // alert(this.$attrs.id);
//       alert('点击');

//       console.log(this.$attrs);
//       console.log(e);
//     }
//   },
//   render() {
//     // let $slots = ctx.slots()
//     // let {style} = ctx.props

//     console.log(this)

//     // debugger

//     return (
//       <div class={['eb-shortcut', `eb-shortcut--${this.size}`]} onClick={this.clickEv} style={this.stl}>
//         <div class={['eb-shortcut__icon', this.icon ? this.icon : 'el-icon-setting']}></div>
//         <div class={['eb-shortcut__name']}>{this.name ? this.name : '快捷键'}</div>
//       </div>
//     )
//   }
// }

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

