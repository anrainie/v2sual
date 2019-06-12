import store from './store.js'
import FocusManager from './focusManager'

export const root = {
  data() {
    return {
      poll_runnableList: [],
      poll_timer: -1,
      poll_count: 1,
    }
  },
  computed: {
    rootId() {
      return this.$store.state.structure ? this.$store.state.structure.id : null;
    },
  },
  methods: {
    __check(runnable) {
      let freq = runnable.freq;
      if (this.poll_count % freq === 0) {
        return true;
      } else {
        return false;
      }

    },
    __pause() {
      clearInterval(this.poll_timer);

    },
    __resume() {
      let self = this;

      if (self.poll_runnableList && self.poll_runnableList.length)
        self.poll_timer = setInterval(() => {
          for (let runnable of self.poll_runnableList) {
            if (self.__check(runnable)) {
              runnable.run();
            }
            self.poll_count++;
          }
        }, 100)
    }
  },
  beforeCreate() {
    this.$store = new store();
    this.focusManager = new FocusManager(this);

  },
  beforeDestroy() {
    this.focusManager && this.focusManager.dispose();
  },
  beforeMount() {
    this.$store.commit('init', this.CONTENT)
    this.$store.state.root = this;
    if (this.$route && this.$route.query) {
      for (let key in this.$route.query) {
        this[key] = this.$route.query[key];
      }
    }
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
