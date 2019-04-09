/**
 * 该文件定义了编辑器的行为
 */
/**
 * 用于创建元素的Tool。
 * 用于拦截键盘、鼠标行为，可编辑节点状态，等等。
 * 使用方式store.setActiveTool($1);
 */
export const createTool = {
  //为了支持校验activeTool.type=='create'
  type: 'create',
  $wrapClass() {
    return {

    }
  },
  element: {

  },
  /**
   * 对象组装工厂，工厂需要完成两个行为，1、生成wid；2、调用$store.registIndex注册widget索引
   * @param {*} _self 
   */
  getFactory(_self) {
    let factory = _self.$getFactory || (e => {
      //默认行为，添加一个wid
      let result = JSON.parse(JSON.stringify(e));
      result.id = new Date().valueOf();

      _self.$store.commit('registIndex', {
        id: result.id,
        content: result
      });
      return result;
    });
    return factory;
  },
  /**
   * 1、点击后执行创建操作
   * 2、转换为selectionTool
   * 3、选中新添加的元素
   * @param {*} _self 
   * @param {*} event 
   */
  $selected(_self, event) {
    this.append(_self, event).then(e => {
      //切换Tool
      _self.$store.commit('setActiveTool', selectionTool);
      //选中
      _self.$store.commit('select', e.wid, event);
    });
  },
  append(_self, event) {
    //可能未来有异步请求，使用Promise处理
    let tool = this;
    return new Promise((res, rej) => {
      //校验可创建性
      if (_self.$canAddChild && _self.$canAddChild(tool.element)) {
        let m = tool.getFactory(_self)(tool.element);
        if (_self.$addChild) {
          _self.$addChild(m, event);
        } else {
          _self.$set(_self.model.children, _self.index, m);

        }
        res(m);
      } else {
        rej('非容器对象不能添加元素');
      }
    });
  }
}

/**
 * 用于创建元素的Tool。
 * 用于拦截键盘、鼠标行为，可编辑节点状态，等等。
 * 使用方式store.setActiveTool($1);
 */
export const selectionTool = {
  $wrapClass(_self) {
    let c = {};
    //选中状态
    if (_self.$selectedClass) {
      c = {
        ..._self.$selectedClass(),
      }
    } else {
      c.selected = _self.isSelected();
    }
    c.selectable = true;
    return c;
  },
  /**
   * 选中点击的节点
   * @param {*} _self 
   * @param {*} event 
   */
  $selected(_self, event) {
    _self.$store.commit('select', _self.wid, event);
  }
}

/**
 * 通用的编辑态方法集合
 */
export const edit = {
  methods: {
    save() {

    }
  },
  computed: {
    wrapClass() {
      let activeTool = this.$store.state.activeTool || selectionTool;
      return activeTool.$wrapClass(this);

    },
  },
  mounted() {
    $(this.$el).click(e => {
      this.selected(e);
      e.stopPropagation();
    });
  },
  methods: {
    /**
     * 选中行为被触发，会交给当前激活的Tool处理
     */
    selected(e) {
      let activeTool = this.$store.state.activeTool || selectionTool;
      return activeTool.$selected(this, e);
    },
    isSelected() {
      let s = this.$store.state.UIData.selectTarget;
      if (s) {
        for (let v of s) {
          if (v == this.wid)
            return true;
        }
      }
      return false;
    },
    $removeChild(index) {
      //   this.model.children.push(factory());
      this.model.children.splice(index, 1, null);
    }
  },
}
