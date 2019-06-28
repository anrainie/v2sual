import Vuex from 'vuex'
// import { ElSelect } from 'element-ui/types/select';




/**
 * watch有exp|Fn两种模式
 * exp仅支持 a.b.c这种形式
 * FN用于支持其他模式,比如a[b].c
 */
const generateWatch = (key, host) => {
  //single path
  if (key.indexOf('.') == -1) {
    if (key.indexOf('-') == -1) {
      return key.indexOf('[') == -1 ? key : eval(`()=>{
        try {
          return host.${key}
        } catch (e) {
          console.error(e)
          console.error(\`${key}属性不存在，不能绑定数据\`,host)
        }
      }`);
    }
    return () => {
      return host[key];
    }
  }
  // simple dot path
  if (key.indexOf('-') == -1) {
    return key.indexOf('[') == -1 ? key : eval(`()=>{
      try {
        return host.${key}
      } catch (e) {
        console.error(e)
        console.error(\`${key}属性不存在，不能绑定数据:\`,host)
      }
    }`);
  }

  // complex path
  let keys = key.split('.');
  let rk = []
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    rk.push((k.indexOf('-') == -1) ? `.${k}` : `['${k}']`);
  }
  let newKey = rk.join('');
  return eval(`() => {
            try {
              return host${newKey};
            } catch (e) {
              console.error(e)
              console.error(\`${host.wid}:${newKey}属性不存在，不能绑定数据\`)
            }
          }`);
}
const MAPPING = arr => {
  if (arr instanceof Array)
    return arr.map(e => {
      return (e.indexOf('-') == -1) ? `.${e}` : `['${e}']`;
    }).join('');
  return (arr.indexOf('-') == -1) ? `.${arr}` : `['${arr}']`;
}
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
        //vue索引
        vueIndex: {},
      },
      //结构
      structure: {

      },
      binder: {},
      binderTable: {},

      // //组件
      // components: {

      // },
    },
    getters: {
      vueInstance: ({
        UIData
      }) => wid => {
        return UIData.vueIndex[wid];
      },
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
      indexOf: (state, getters) => (p, wid) => {
        if (p != null) {
          if (!p.children) {
            p = this.getters.model(p);
          }
          if (p.children) {
            for (let i = 0; i < p.children.length; i++) {
              let id = p.children[i] ? p.children[i].id : (p.id + '-' + i);
              if (id == wid) {
                return i;
              }
            }
          }
        }
        return -1;
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
      editor(state, editor) {
        state.UIData.editor = editor;
      },
      save(state) {
        state.UIData.editor && state.UIData.editor.save && state.UIData.editor.save(state.structure);
      },
      /**
       * 必须在挂载之前调用
       */
      registerBind(state, option) {
        let self = this,
          wid = option.wid;
        try {
          //注册需要绑定的数据，这些数据将会在v2-view.js中的widget
          if (state.binderTable[wid]) {
            state.binderTable[wid].push(option);
          } else {
            state.binderTable[wid] = [option];
          }

        } catch (e) {
          console.error(e);
        }
      },
      bind(state, {
        vueObj,
        data, //用于初始化
        dataStr,
        wid,
        modelKey,
        // rootVue,
      }) {
        // if (!rootVue)
        //   rootVue = state.root;
        let self = this;
        let model = self.getters.model(wid);
        if (!model) {
          console.error(`can not found model ${wid}`)
          return;
        }

        let widgetVue = self.getters.vueInstance(wid);
        if (!widgetVue) {
          console.error(`can not found widget ${wid}`)
          return;
        }

        /**
         * modelKey可能是这种格式 a.b-1.c-1
         * dataStr也可能是这种格式A.B-1.C-1
         * 对应的代码应当是 
         * vueObj.$watch('a['B-1']['C-1']', v => {
          Vue.set(model.a['b-1'],'c-d',v)
          widgetVue.$forceUpdate();
        });
         */


        let dataWatch, dataLast, dataPre, dataKeys;
        if (model.__type == 'loopItem' && dataStr.startsWith('$item')) {
          //处理循环类型
          let loopKey = model.__loopKey;
          let index = widgetVue.index;
          dataKeys = dataStr.substr(5);

          dataWatch = generateWatch(`${loopKey}[${index}]${dataKeys}`, vueObj);

          dataKeys = dataKeys.substr(1).split('.');
          dataLast = dataKeys.pop();
          dataPre = `.${loopKey}`;
          if (dataLast.length > 0) {
            dataPre += `[${index}]`;
          } else {
            dataLast = index;
          }
          // vueObj${dataPre}[${index}],dataKeys
        } else {
          //普通类型
          dataKeys = dataStr.split('.');
          dataWatch = generateWatch(dataStr, vueObj);
          dataLast = dataKeys.pop();
          dataPre = MAPPING(dataKeys);
        }
        let modelWatch = generateWatch('model.' + modelKey, widgetVue);

        let modelKeys = modelKey.split(".");
        let modelLast = modelKeys.pop();
        let modelPre = MAPPING(modelKeys);

        let vueBind = vueObj.$watch(dataWatch, v => {
          Vue.set(modelKeys.length ? eval(`model${modelPre}`) : model, modelLast, v);
          widgetVue.$forceUpdate();
          // console.log(dataStr, 'changed', model);
        });

        let commentBind = widgetVue.$watch(modelWatch, v => {
          if (model.__type == 'loopItem' && dataStr.startsWith('$item')) {
            Vue.set(eval(`vueObj${dataPre}`), dataLast, v)
          } else
            Vue.set(dataKeys.length ? eval(`vueObj${dataPre}`) : vueObj, dataLast, v)
          vueObj.$forceUpdate();
          console.log(modelKey, 'changed');
        })

        // console.log('widget', widgetVue)
        console.log('widgetVue bind:', widgetVue, modelWatch,`vueObj${dataPre}`,dataLast)



        if (state.binder[wid]) {
          state.binder[wid].push(vueBind, commentBind);
        } else {
          state.binder[wid] = [vueBind, commentBind]
        }

        try {
          Vue.set(modelKeys.length ? eval(`model${modelPre}`) : model, modelLast, data);
        } catch (e) {
          console.error(e);
          console.error('invalid model', `model${modelPre}`, model);
        }
        //如果是表单类的组件的value值，清空绑定的变量
        // if (vueObj != rootVue && modelKey === 'value') {
        //   vueObj.model[modelKey] = "";
        // }
      },
      unbind(state, wid) {
        if (state.binder[wid]) {
          state.binder[wid].map(item => {
            item()
          });
        }
      },
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
      "regist.vue"({
        UIData
      }, {
        wid,
        vue
      }) {
        UIData.vueIndex = UIData.vueIndex || {};
        UIData.vueIndex[wid] = vue;
      },
      /**
       * 注册索引
       * @param {索引} index 
       * @param {*} v 
       */
      'regist.index'({
        UIData
      }, {
        id,
        content
      }) {
        UIData.structureIndex = UIData.structureIndex || {};
        // Vue.set(UIData.structureIndex, id, content);
        UIData.structureIndex[id] = content;
      },
      /**
       * 设置当前激活的工具
       * @param {*} state 
       * @param {*} tool 
       */
      setActiveTool(state, tool) {
        console.log('setActiveTool', tool);
        if (state.activeTool != tool) {
          state.activeTool && state.activeTool.dispose && state.activeTool.dispose();
          console.log('setActiveTool success');
          state.activeTool = tool;
        }
      },
      "delete.select"(state) {
        let s = this.getters.firstSelection;
        if (s) {
          let p = this.getters.parent(s, true);
          if (p && p.children) {
            for (let i = 0, len = p.children.length; i < len; i++) {
              let c = p.children[i]
              if (c && c.id == s) {
                this.commit("$remove.child", {
                  parent: p,
                  index: i,
                });
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
        else {
          //如果找不到下一个目标，则选中父节点
          let pid = this.getters.parentId(
            this.getters.firstSelection, true
          );
          if (pid)
            this.commit("select", pid);
        }
      },
      "select.next"(state) {
        let b = this.getters.getNextBrother(
          this.getters.firstSelection
        );
        if (b != null) this.commit("select", b.id);
        else {
          //如果找不到下一个目标，则选中父节点
          let pid = this.getters.parentId(
            this.getters.firstSelection, true
          );
          if (pid)
            this.commit("select", pid);
        }
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
          state.UIData.selectTarget = [state.structure.id];
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
      }

    }
  })
}
