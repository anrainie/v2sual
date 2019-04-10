import Vuex from 'vuex'
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

const __findParent = (targetId, parent) => {
  if (targetId == parent.Id) return -1;
  if (parent.children)
    for (let i of parent.children) {
      let p;
      if (i.id == targetId) {
        return parent.id;
      } else if ((p = __findParent(targetId, i)) != null) {
        console.log(p)
        return p;
      }
    }
  return null;
}

const store = new Vuex.Store({
  state: {
    //编辑模式开关
    editMode: true,
    //用于决定操作策略，比如同样是拖拽，创建Tool和移动Tool行为肯定是不一样的，编辑态和非编辑态肯定也不一样
    activeTool: null,
    UIData: {
      //当前选中的目标，是一个数组,通过select方法设置
      selectTarget: null,
      //聚焦的目标，只能是一个对象
      focusTarget: null,
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
  getters: {
    getNextBrother: (state, getters) => (wid) => {
      let pid = getters.parentId(wid, true);
      if (pid == null) return;
      let p = getters.model(pid);
      if (p == null || !p.children) return;
      let index = -1;
      for (let i = 0; i < p.children.length; i++) {
        let c = p.children[i];
        if (c.id == wid) {
          index = i;
          break;
        }
      }
      if (index == -1) return null;
      return p.children[index + 1];
    },
    getPrevBrother: (state, getters) => (wid) => {
      let pid = getters.parentId(wid, true);
      if (pid == null) return;
      let p = getters.model(pid);
      if (p == null || !p.children) return;
      let index = -1;
      for (let i = 0; i < p.children.length; i++) {
        let c = p.children[i];
        if (c.id == wid) {
          index = i;
          break;
        }
      }
      if (index == -1) return null;
      return p.children[index - 1];
    },
    model: ({
      UIData
    }) => (wid) => {
      if (wid == null) return null;
      let model = UIData.structureIndex[wid];
      if (!model)
        throw `invalid widget id: ${wid}`;
      return model;
    },
    firstSelection: (state) => {
      return state.UIData.selectTarget ? state.UIData.selectTarget[0] : {};
    },
    parentId: (state, getters) => (wid, force) => {
      let m = getters.model(wid);
      if (!m) return null;
      if (m.pid == null && force) {
        //model没有注册pid的情况，在structure中遍历查找
        let p = __findParent(wid, state.structure);
        if (p != wid) {
          m.pid = p;
        } else
          return null;
      }
      return m.pid;
    },
    isSelected: (state) => (wid) => {
      let s = state.UIData.selectTarget;
      if (s) {
        for (let v of s) {
          if (v == wid)
            return true;
        }
      }
      return false;
    },
  },
  actions: {
    /**
     * 委托给activeTool来找到上一个\下一个聚焦对象，因为在不同的模式下，聚焦的策略可能有所不同
     * @param {*} context 
     */
    "focus.next"(context) {
      let tool = context.state.activeTool;
      tool && tool.$focusPrev && tool.$focusNext(context);
    },
    "focus.prev"(context) {
      let tool = context.state.activeTool;
      tool && tool.$focusPrev && tool.$focusPrev(context);
    },
    "focus"(context, wid) {
      let model = context.getters.model(wid);
      let before = null,
        after = null;
      e = {
        context,
        target: wid,
        source: context.state.focusTarget,
        stop: false,
      }
      if (model.before) {
        before = model.before(e);
      }
      if (!before || !before.then) {
        before = new Promise();
      }
      return before.then((res, rej) => {
        if (e.stop) {
          rej();
        } else {
          context.state.focusTarget = wid;
        }
        return;
      }).then(() => {
        if (model.after) {
          let p = model.after(e);
          if (p && p.then)
            return p;
        }
      });
    },
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
    buildIndex({
      structure,
      UIData
    }) {
      if (structure) {
        //清空原始索引
        UIData.structureIndex = {};
        __buildIndex(structure, UIData.structureIndex);
      }
    },
    /**
     * 注册索引
     * @param {索引} index 
     * @param {*} v 
     */
    registIndex({
      UIData
    }, {
      id,
      content
    }) {
      UIData.structureIndex = UIData.structureIndex || {};
      UIData.structureIndex[id] = content;
    },
    /**
     * 设置当前激活的工具
     * @param {*} state 
     * @param {*} tool 
     */
    setActiveTool(state, tool) {
      console.log('setActiveTool', tool);
      state.activeTool = tool;
    },
    "select.firstChild"(state) {
      let m = this.getters.model(state.UIData.selectTarget[0]);
      if (m && m.children && m.children.length > 0)
        this.commit('select', m.children[0].id);
    },
    "select.parent"(state) {
      let pid = this.getters.parentId(state.UIData.selectTarget[0], true);
      console.log('id', pid, state.UIData.selectTarget)
      if (pid == null)
        return;
      this.commit('select', pid);
    },
    /**
     * 
     * @param {*} state 
     * @param {选中目标Id或者Array} target 
     * @param {是否为多选模式} append 
     */
    select(state, target, append = false) {
      if (target == null) {
        state.UIData.selectTarget = [];
        return;
      }
      if (target.constructor == Array) {
        if (append) {
          state.UIData.selectTarget = state.UIData.selectTarget || [];
          state.UIData.selectTarget = state.UIData.selectTarget.concat(target);
        } else {
          state.UIData.selectTarget = target;
        }
      } else {
        if (append) {
          state.UIData.selectTarget = state.UIData.selectTarget || [];
          state.UIData.selectTarget.splice(0, 0, target);
        } else
          state.UIData.selectTarget = [target];
      }
    },
  }
})

export default store
