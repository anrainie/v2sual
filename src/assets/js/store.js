import 'es6-promise/auto'
import Vuex from 'vuex'
import Vue from 'Vue'

Vue.use(Vuex)
/**
 * 扁平化结构树，构建索引
 * @param {*} v 
 * @param {*} pool 
 */
const __buildIndex = (v, pool) => {
  if (v) {
    pool[v.id] = v;
    if (v.children) {
      for (let i of v.children)
        __buildIndex(i, pool);
    }
  }
}

const store = new Vuex.Store({
  state: {
    //编辑模式开关
    editMode: true,
    UIData: {
      //当前选中的目标，是一个数组
      selectTarget: null,
      //聚焦的目标，只能是一个对象
      focusTarget: null,
      //用于决定操作策略，比如同样是拖拽，创建Tool和移动Tool行为肯定是不一样的
      activeTool: null,
      //结构索引
      structureIndex: {

      },
    },
    //结构
    structure: {

    },
    // //组件
    // components: {

    // },
  },
  mutations: {
    /**
     * 初始化画布
     * @param {*} state 
     * @param {Object} param1 
     */
    init(state, {
      //   components,
      structure,
      editMode = true
    }) {
      state.structure = structure || state.structure;
      state.editMode = editMode == null ? true : editMode;
      this.commit('buildIndex');
    },
    /**
     * 构建索引
     * @param {*} state 
     */
    buildIndex(state) {
      if (state.structure) {
        //清空原始索引
        state.UIData.structureIndex = {};
        __buildIndex(state.structure, state.UIData.structureIndex);
      }
    },
    /**
     * 
     * @param {stroe状态} state 
     * @param {选中目标Id或者Array} target 
     * @param {是否为附加模式} append 
     */
    select(state, target, append = false) {
      if (target instanceof String) {
        if (append) {
          state.UIData.selectTarget = state.UIData.selectTarget || [];
          state.UIData.selectTarget.push(target);
        } else
          state.UIData.selectTarget = [target];
      } else if (target instanceof Array) {
        if (append) {
          state.UIData.selectTarget = state.UIData.selectTarget || [];
          state.UIData.selectTarget = state.UIData.selectTarget.concat(target);
        } else {
          state.UIData.selectTarget = target;
        }
      }
    },
  }
})

export default store
