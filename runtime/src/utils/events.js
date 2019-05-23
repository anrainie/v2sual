/**
 * 负责三个功能：
 * 1、绑定组件内部的控件的事件
 * 2、维护组件生命周期自定义钩子
 * 3、focus管理
 */
export default {
  beforeCreate() {},
  beforeMount() {
    this.model.$beforeCreate && LOGIC.invoke(this.model.$beforeCreate, {
      context: this,
    });
  },
  mounted() {
    //遍历注册的组件
    let events = this.model.events;
    for (let ref in events) {
      let dom = this.$refs[ref];
      if (dom) {
        let devents = events[ref];
        for (let de in devents) {
          this.$refs[ref].$on(de, e => {
            LOGIC.invoke(devents[de], {
              context: this,
              events: e,
            });
          });
        }
      }
    }
  }
}
