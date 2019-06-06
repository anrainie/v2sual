import store from './store.js'
import FocusManager from './focusManager'

export const root = {
  computed: {
    rootId() {
      return this.$store.state.structure ? this.$store.state.structure.id : null;
    },
  },
  beforeCreate() {
     this.$store = new store();
    this.focusManager = new FocusManager(this);
  },
  beforeDestroy(){
    this.focusManager&&this.focusManager.dispose();
  },
  beforeMount() {
    console.log(1..toString().repeat(100));
    this.$store.commit('init', this.CONTENT)
    this.$store.state.root=this;
  },
  mounted() {
    //找到所有的作用域
    // $(':input',this.$el)
    window.A = this;
  }
}

export const complexWidget = {

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
  props: ["wid", "index", "pid", "readonly"],
  /**
   * 注入store
   */
  methods: {
    LOG: console.log,
    ERR: console.error,
  },
  mounted() {
    this.$store.commit('regist.vue', {
      wid: this.wid,
      vue: this
    });
  },
  computed: {
    // model() {
    //   let model = store.state.UIData.structureIndex[this.wid] || {};
    //   // //TODO
    //   return model;
    // },
    model() {
      try {
        let m = this.$store.getters.model(this.wid);
        if (m)
          return m;
        throw `找不到model${this.name}:${this.wid}`
      } catch (e) {}
    },
    parentId() {
      return this.pid || (this.pid = this.$store.getters.parentId(this.wid));
    },
    labelStyle() {
    
      this.model.style = this.model.style || {};
      return {
        width: this.model.labelWitdh,
        ...this.model.style.label
      };
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
