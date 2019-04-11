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
      if (!i) continue;
      if (i.id == targetId) {
        return parent;
      } else if ((p = __findParent(targetId, i)) != null) {
        return p;
      }
    }
  return null;
}

export default () => {
  return new Vuex.Store({
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
          let id = c ? c.id : (pid + '-' + i);
          if (id == wid) {
            index = i;
            break;
          }
        }
        if (index == -1) return null;
        let nextIndex = index + 1;
        let r = p.children[nextIndex];
        if (r === null)
          r = {
            id: (pid + '-' + nextIndex)
          };
        return r;
      },
      getPrevBrother: (state, getters) => (wid) => {
        let pid = getters.parentId(wid, true);
        if (pid == null) return;
        let p = getters.model(pid);
        if (p == null || !p.children) return;
        let index = -1;
        for (let i = 0; i < p.children.length; i++) {
          let c = p.children[i];
          let id = c ? c.id : (pid + '-' + i);
          if (id == wid) {
            index = i;
            break;
          }
        }
        if (index == -1) return null;
        let nextIndex = index - 1;
        let r = p.children[nextIndex];
        if (r === null)
          r = {
            id: (pid + '-' + nextIndex)
          };
        return r;
      },
      model: ({
        UIData
      }) => (wid) => {
        if (wid == null) return null;
        let model = UIData.structureIndex[wid];
        if (!model)
          // throw `invalid widget id: ${wid}`;
          return null;
        return model;
      },
      firstSelection: (state) => {
        return state.UIData.selectTarget ? state.UIData.selectTarget[0] : {};
      },
      parent: (state, getters) => (wid, force) => {
        let m = getters.model(wid);
        if (!m) return null;
        if (m.pid == null && force) {
          //model没有注册pid的情况，在structure中遍历查找
          let p = __findParent(wid, state.structure);
          if (p && p != wid) {
            m.pid = p.id;
            return p;
          } else
            return null;
        }
        return getters.model(m.pid);
      },
      parentId: (state, getters) => (wid, force) => {
        let m = getters.model(wid);
        if (!m) return null;
        if (m.pid == null && force) {
          //model没有注册pid的情况，在structure中遍历查找
          let p = __findParent(wid, state.structure);
          if (p && p.id != wid) {
            m.pid = p.id;
          } else
            return null;
        }
        return m.pid;
      },
      isSelectedParent: (state, getters) => (pid) => {
        if (!state.UIData.selectTarget)
          return true;
        let s = state.UIData.selectTarget[0];
        if (s == null) return true;
        return getters.isParent(pid, s);
      },
      isParent: (state, getters) => (pid, wid) => {
        if (pid == state.structure.id)
          return true;
        let p = getters.parent(wid, true);
        if (p) {
          if (p.id == pid) {
            return true;
          } else
            return getters.isParent(pid, p.id);
        }
        return false;
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
      "delete.select"(state) {
        let s = this.getters.firstSelection;
        if (s) {
          let p = this.getters.parent(s, true);
          if (p && p.children) {
            for (let i = 0, len = p.children.length; i < len; i++) {
              let c = p.children[i]
              if (c && c.id == s) {
                p.children.splice(i, 1, null);
                return;
              }
            }
          }
        }
      },
      "select.prev"() {
        let b = this.getters.getPrevBrother(
          this.getters.firstSelection
        );
        if (b != null) this.commit("select", b.id);
      },
      "select.next"(state) {
        let b = this.getters.getNextBrother(
          this.getters.firstSelection
        );
        if (b != null) this.commit("select", b.id);
      },
      "select.firstChild"(state) {
        let m = this.getters.model(state.UIData.selectTarget[0]);
        if (m && m.children && m.children.length > 0) {
          this.commit('select', m.children[0] ? m.children[0].id : (m.id + '-0'));
        } else if (m.layout && m.layout.length > 0) {
          this.commit('select', m.id + '-0');
        }
      },
      "select.parent"(state) {
        let pid = this.getters.parentId(state.UIData.selectTarget[0], true);
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
}
