/**
 * 负责三个功能：
 * 1、绑定组件内部的控件的事件
 * 2、维护组件生命周期自定义钩子
 * 3、focus管理
 */
export default {
  beforeCreate() {

  },
  beforeMount() {},
  mounted() {
    //遍历注册的组件
    // {
    //   "__op_aaaa_select":{
    //     'click':['asdasdasd','asdasd']
    //   }
    // }
    let self = this;
    let events = this.model.events;
    for (let ref in events) {
      let dom = this.$refs[ref];
      if (dom) {
        let devents = events[ref];
        for (let eventType in devents) {
          let logics = devents[eventType];
          if (logics) {
            logics == logics.constructor == String ? [logics] : logics;

            dom.$on(eventType, e => {
              for (let logic of logics) {
                let method = self.$store.state.editor[logic];
                arguments = arguments || [];
                method && method({
                  context: this,
                }, ...arguments);
              }
            });
          }
        }
      }
    }
  }
}
