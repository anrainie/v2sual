/**
 * 预览工具集
 */
export const previewTool = {
  $focusNext(context) {
    // context.state.UIData.focus
  },
  $focusPrev() {}
}

/**
 * 容器色块工具集
 */

export const containerTool = {
  $wrapClass() {
    return {

    }
  },
}


/**
 * 用于创建元素的Tool。
 * 用于拦截键盘、鼠标行为，可编辑节点状态，等等。
 * 使用方式store.setActiveTool($1);
 */

export const createTool = {
  //键盘事件分发
  dispatchKeyEvent(_self, e) {
    switch (e.key) {
      case 'Esc':
      case 'Escape':
        _self.$store.commit('setActiveTool', selectionTool);
        return false;
    }
    return true;
  },

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
      result.pid = _self.wid;

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
          _self.$addChild(m, {
            index: _self.index,
            event
          });
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
  dispatchKeyEvent(_self, e) {
    let b;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        if (e.ctrlKey) {
          _self.selectFirstChild();
        } else {
          _self.$store.commit("select.next");
        }
        return false;
      case "ArrowLeft":
      case "ArrowUp":
        if (e.ctrlKey) {
          _self.selectParent();
        } else {
          _self.$store.commit("select.prev");
        }
        return false;
      case 'Esc':
      case 'Escape':
        _self.$store.commit('select');
        return false;
      case 'Del':
      case 'Delete':
        _self.$store.commit("delete.select");
        return false;
    }
    if (e.ctrlKey) {
      switch (e.key) {
        case 's':
        case 'p':
          return false;
      }
    }
    return true;
  },
  $wrapClass(_self) {
    let c = {};
    //选中状态
    if (_self.$store.getters.isSelected(_self.wid))
      if (_self.$selectedClass) {
        c = {
          ..._self.$selectedClass(),
        }
      } else {
        c.selected = true;
      }
    // else if (!_self.$store.getters.isSelectedParent(_self.wid)) {
    //   c.unselected = true;
    // }
    return c;
  },
  /**
   * 选中点击的节点
   * @param {*} _self 
   * @param {*} event 
   */
  $selected(_self, event) {
    _self.$store.commit('select', _self.wid, event);
  },
  $getActions() {
    return [{

    }, {
      icon: 'el-icon-remove',
    }]
  },
}