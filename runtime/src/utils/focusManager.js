/**
 * 管理focus/blur
 * 
 */
/**
 * 必选非空规则，如果必选项没有完成，则焦点不能跳出
 * 
 */
let requiredNotEmptyRule = ({
  mgr,
  widget
}) => {
  return new Promise((res, rej) => {
    //如果当前组件为必填组件，则不跳转
    if (widget && widget.model && widget.model.isRequired) {
      res();
      return;
    }

    //找到所有的输入域
    let inputFields = $(':input', mgr.host.$el)
    if (inputFields) {
      for (let inputField of inputFields) {
        let model = mgr.findWidgetModel(inputField);
        if (model && model.isRequired && model.value == null || model.value == "") {
          rej({
            message: `必填项未填写`,
            inputField,
            model,
            handle: () => {
              if (!result.state$$result.inputField)
                $(result.inputField).focus();
            }
          })
          return;
        }
      }
    }
    res();
  })
}
export default class FocusManager {
  constructor(host) {
    this.host = host;
    this.timeout = -1;
    this.widgetRegistry = {};
    this.reset();
  }
  dispose() {
    $('input', widget.$el).off('blur.focusManager');
    $('input', widget.$el).off('focus.focusManager');
  }
  unbind(widget, eventType) {
    let inputFields = $(':input', widget.$el);
    inputFields.off(`${eventType}.focusManager`)
  }
  unregist(widget) {
    delete this.widgetRegistry[widget.wid]
    let inputFields = $(':input', widget.$el);
    inputFields.off('blur.focusManager')
    inputFields.off('focus.focusManager')
  }
  regist(widget) {
    this.widgetRegistry[widget.wid] = widget;
    let inputFields = $(':input', widget.$el);
    inputFields.on('blur.focusManager', event => {
      self.valid('blur', {
        widget,
        target: e.currentTarget,
        event,
      })
    })
    inputFields.on('focus.focusManager', e => {
      self.valid('focus', {
        widget,
        target: e.currentTarget,
        event,
      })
    })
  }
  /**
   * 找到最接近的Form的验证规则 
   * @param {*} dom 
   */
  focusRules(dom) {
    // dom = dom.$el || $(dom);
    // //找到最接近的组件
    // let wid = dom.closest('.v2widget')[0].id;
    // let model = this.host.$store.getters.model(wid);
    // //找到最接近的验证规则
    // let parent = this.host.$store.getters.parent(wid);
    // while (!(parent && parent.rules)) {
    //   parent = this.host.$store.getters.parent(parent.id);
    // }
    // if (parent && parent.rules) {
    //   return parent.rules;
    // }
    //TODO 暂时只使用非空规则
    return [requiredNotEmptyRule];
  }
  blurRules(dom) {
    return [];
  }
  findWidgetModel(dom) {
    dom = dom.$el || $(dom);
    //找到最接近的组件
    let wid = dom.closest('.v2widget')[0].id;
    let model = this.host.$store.getters.model(wid);
    model || console.log('找不到组件', dom);
    return model;
  }
  valid(eventType, {
    widget,
    target,
    callback,
    event
  }) {
    let self = this;

    let ruleKey = `${eventType}Rules`
    //focus时，需要确定是否需要确定能否聚焦
    //然后执行callback
    let rules = this[ruleKey](target);
    //TODO 加入组件规则
    if (widget.model && widget.model[ruleKey] && widget.model[ruleKey].constructor == Array) {
      rules = [...rules, ...widget.model[ruleKey]]
    }
    let rulePromise = [];
    for (let rule of rules) {
      if (rule && rule.constructor == Function) {
        r = rule({
          mgr: self,
          widget,
          target,
          event,
        });
        r && r.constructor == Promise && rulerulePromise.push(r);
      }
    }
    Promise.all(rulePromise).then(values => {
      //成功后调用成功处理
      callback instanceof Function && callback(values);
    }).catch(reason => {
      //出错时调用错误处理
      reason && reason.handle && reason.handle(self);
    })
  }
}
