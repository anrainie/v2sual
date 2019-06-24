import store from './store.js'
import FocusManager from './focusManager'

function deepGet(model, keys) {
  if (keys == null || model == null)
    return null;
  let c;
  if ((c = keys.indexOf('.')) != -1) {
    let k = keys.substr(0, c);
    if (model[k] != null) {
      return deepGet(model[k], keys.substr(c + 1));
    }
    return null;
  } else {
    return model[keys];
  }
}
const RESERVED_WORDS = {
  '$item': {},
  '$key': {},
};

export const cpt = {
  props: ['parentStore'],
  mounted() {
    this.$parent.$store.commit('regist.vue', {
      wid: this.wid,
      vue: this
    });
  }
}

export const root = {
  data() {
    return {
      poll_runnableList: [],
      poll_timer: -1,
      poll_count: 1,
      //页面参数
      ...(this.$parent && this.$parent.params) || (this.$route && Object.keys(this.$route.query).length && this.$route.query) || {},

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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      let toComp = vm.$router.getMatchedComponents(to)[1] ? vm.$router.getMatchedComponents(to)[1] : vm.$router.getMatchedComponents(to)[0];
      toComp.resume && toComp.resume.call(vm);
      vm.__resume();

    })
  },
  beforeRouteLeave(to, from, next) {
    let fromCom = this.$router.getMatchedComponents(from)[1] ? this.$router.getMatchedComponents(from)[1] : this.$router.getMatchedComponents(from)[0];

    fromCom.pause && fromCom.pause.call(this);
    this.__pause();
    next();
  },
  beforeCreate() {
    this.$store = new store();
    this.focusManager = new FocusManager(this);

  },
  created() {
    this.$store.commit('init', this.CONTENT)
    this.$store.state.root = this;

  },
  beforeDestroy() {
    this.focusManager && this.focusManager.dispose();
  },
  beforeMount() {
    if (this.$route && this.$route.query) {
      for (let key in this.$route.query) {
        this[key] = this.$route.query[key];
      }
    }
  },
  mounted() {
    //找到所有的作用域
    // $(':input',this.$el)
    // let option = this.$store.state.binder[this.wid];
    // if (option && option.data && option.vueObj) {
    //   this.$store.commit('bind', option);
    // }
    //重新赋值页面参数
    let pageParams = (this.$parent && this.$parent.params) || (this.$route && Object.keys(this.$route.query).length && this.$route.query || {});
    if (Object.keys(pageParams).length) {
      for (let item in pageParams) {
        this[item] = pageParams[item];
      }
    }
    window.ROOT = this;
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
  props: {
    "wid": {},
    "index": {},
    "pid": {},
    "readonly": {},
    "cpttype": {},
    $item: {},
    $key: {},
  },
  /**
   * 注入store
   */
  methods: {
    LOG: console.log,
    ERR: console.error,
  },
  created() {

  },
  updated() {},
  mounted() {
    this.$store.commit('regist.vue', {
      wid: this.wid,
      vue: this
    });

    let wid = this.wid,
      option,
      options = this.$store.state.binderTable[wid];

    //特殊处理循环组件
    if (this.cpttype == 'loopItem') {
      options = this.$store.state.binderTable[this.pid];
      let content;
      let parentModel = this.$store.getters.model(this.pid);
      content = JSON.parse(JSON.stringify(parentModel));
      content.id = this.wid;
      content.pid = this.pid;
      content.__type = 'loopItem';
      /**
       * 应对特殊需求
       * Loop组件、动态组件等等需要业务数据来确定结构
       * 而$store.structure初始化时，尚未获取业务数据，structureIndex会缺少记录
       * 所以，在组件加载时，冗余注册一次
       *  
       */
      this.$store.commit('regist.index', {
        id: this.wid,
        content,
      });

      //特殊处理，强制触发computed
      this._computedWatchers['model'].dirty = true;
      this.$forceUpdate();

      //处理循环数据绑定
      if (options) {
        for (option of options) {
          if (option.data == null && !option.vueObj) {
            if (option.dataStr) {
              let data, vueObj;
              if (RESERVED_WORDS[option.dataStr.split('.')[0]]) {
                data = deepGet(this, option.dataStr);
                vueObj = this;
              } else {
                vueObj = this.$store.state.root;
                data = deepGet(vueObj, option.dataStr);
              }
              // content[option.modelKey] = data;
              Vue.set(content, option.modelKey, data)
              this.$store.commit('bind', {
                ...option,
                wid: this.wid,
                data,
                vueObj,
              });
            }
          }
        }
      };

    }
    //处理普通数据绑定
    else if (options) {
      for (option of options) {
        if (option.data != null && option.vueObj)
          this.$store.commit('bind', option);
      }
    }

  },
  computed: {
    // model() {
    //   let model = store.state.UIData.structureIndex[this.wid] || {};
    //   // //TODO
    //   return model;
    // },
    model() {
      // try {
      //   let m = this.$store.getters.model(this.wid);
      //   if (m)
      //     return m;
      //   throw `找不到model${this.name}:${this.wid}`
      // } catch (e) {}
      return this.$store.getters.model(this.wid) || {};
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
  },
  beforeDestroy() {
    this.$store.commit("unbind", this.wid);
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
