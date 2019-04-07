import store from './store.js'

export const canvas = {
  store,
}

/**
 * 控件的性质
 */
export const widget = {
  data() {
    return {
      parent: null,
    }
  },
  model: {
    prop: 'wid',
    event: 'change'
  },
  /**
   * wid：widget ID,是控件实例的唯一标识
   */
  props: ["wid"],
  /**
   * 注入store
   */
  methods: {
    LOG: console.log,
    ERR: console.error,
  },
  computed: {
    model() {
      let model = store.state.UIData.structureIndex[this.wid] || {};
      //TODO
      return model;
    },
    wrapClass() {
      return {}
    },
  }
}
/**
 * 容器的性质，必须先mix widget
 */
export const composite = {
  computed: {},
  methods: {
    $canAddChild() {
      return true;
    },
    addChild(factory) {
      this.model.children.push(factory());
    },
    /**
     * 布局函数
     * @param {索引} index 
     */
    layout(index) {
      if (this.model.direction == 'col') {
        //列布局/横向布局，返回span
        return this.model.layout instanceof Array ? Math.round(this.model.layout[index] * 12 / 100) : '2'
      } else {
        //行布局/纵向布局，返回百分比
        return this.model.layout instanceof Array ? this.model.layout[index] + '%' : '50%'
      }
    },
    addChild({
      wid,
      factory,
    }) {
      store.commit('addChild', {});
    }
  },
}
