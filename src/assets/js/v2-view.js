import store from 'store.js'
/**
 * 控件的性质
 */
export const widget = {
  /**
   * model:数据模型
   * config:视图配置
   */
  props: ["wid"],
  /**
   * 注入store
   */
  store,
  methods: {
    LOG: console.log,
    ERR: console.error,
  },
  computed: {
    model() {
      let model = store.state.components[this.wid] || {};
      //TODO
      return model;
    }
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
      if (this.direction == 'col') {
        //列布局/横向布局，返回span
        return model.layoutData instanceof Array ? model.layoutData[index] * 12 / 100 : '2'
      } else {
        //行布局/纵向布局，返回百分比
        return model.layoutData instanceof Array ? model.layoutData[index] + '%' : '50%'
      }
    }
  },
}
