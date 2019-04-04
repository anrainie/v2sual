import Vuex from 'Vuex'
const store = new Vuex.Store({
  state: {
    UIData: {
      //当前选中的目标，是一个数组
      selectTarget: [],
      //聚焦的目标，只能是一个对象
      focusTarget: null,
      //用于决定操作策略，比如同样是拖拽，创建Tool和移动Tool行为肯定是不一样的
      activeTool: null,
    }
  },
  mutations: {
    selet(state) {

    }
  }
})

export default store
