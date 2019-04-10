import store from './store.js'

export const canvas = {
  store,
}

/**
 * 控件的性质
 */
export const widget = {
  model: {
    prop: 'wid',
    event: 'change'
  },

  /**
   * wid：widget ID,是控件实例的唯一标识
   * index：children数组index
   * pid: parent ID
   */
  props: ["wid", "index", "pid"],
  /**
   * 注入store
   */
  methods: {
    LOG: console.log,
    ERR: console.error,
  },
  computed: {
    // model() {
    //   let model = store.state.UIData.structureIndex[this.wid] || {};
    //   // //TODO
    //   return model;
    // },
    model() {
      return this.$store.getters.model(this.wid) || {};
    },
    parentId() {

      return this.pid || (this.pid = this.$store.getters.parentId(this.wid));
    },
    parent() {
      return this.$store.getters.model(this.parentId);
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
    /**
     * 布局函数
     * @param {索引} index 
     */
    layout(index) {
      if (this.model.direction == 'col') {
        //列布局/横向布局，返回span
        return this.model.layout instanceof Array ? Math.round(this.model.layout[index] * 24 / 100) : '2'
      } else {
        //行布局/纵向布局，返回百分比
        return this.model.layout instanceof Array ? this.model.layout[index] + '%' : '50%'
      }
    },
  },
}
