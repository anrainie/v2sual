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
  beforeDestroy() {
    let editor = this.$store.state.editor;
    editor.focusManager.unregist(this);
  },
  mounted() {
    let self = this;
    try {
      /*
       根据model的events配置来注册监听
       该监听并不是js/jquery提供，而是vue提供的emit/on机制
       优势在于：
        1、可以适配各类vue UI库
        2、可以自定义事件
       缺点在于：
        对于UI库没有暴露的监听，需要自己在组件内部实现

        总的来说，较为灵活可控。
        格式如下所示
        events:{
          [__op_组件内可监听内容ID]:{
            [eventType]:[逻辑概览ID|简略代码]
          }
        }
       */
      let events = self.model.events;
      let editor = self.$store.state.root;
      //在焦点管理中注册当前组件，会为它绑定基本的监听
      editor.focusManager.regist(self);
      for (let ref in events) {
        //找到对应的vue对象或者el
        let dom = self.$refs[ref];
        if (dom) {
          let devents = events[ref];
          for (let eventType in devents) {
            let logics = devents[eventType];
            if (logics) {
              // 避免重复监听
              editor.focusManager.unbind(self, eventType);
              logics == logics.constructor == String ? [logics] : logics;
              //TODO dom可能是vue对象，也可能是一个dom元素，这里暂时只考虑vue对象
              dom.$on(eventType, event => {
                let args = arguments || [];
                let apply = () => {
                  for (let logic of logics) {
                    let method = editor[logic];
                    method && method(self, ...args);
                  }
                }
                //交由focusManager进行先验
                if (eventType == 'blur' || eventType == 'focus') {
                  editor.focusManager.valid(eventType, {
                    widget: self,
                    target: dom.$el||dom,
                    callback: apply,
                  });
                } else {
                  apply();
                }
              });
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
