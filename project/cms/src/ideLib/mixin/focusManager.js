import RuleRegistry from "./focusRules";

/**
 * 管理focus/blur
 * 
 */
export default class FocusManager {
  constructor(host) {
    this.host = host;
    this.timeout = -1;
    this.widgetRegistry = {};

  }
  dispose() {
    $('input', this.host.$el).not(":button").off('blur.focusManager');
    $('input', this.host.$el).not(":button").off('focus.focusManager');
  }
  unbind(widget, eventType) {
    let inputFields = $(':input', widget.$el).not(":button");
    inputFields.off(`${eventType}.focusManager`)
  }
  unregist(widget) {
    delete this.widgetRegistry[widget.wid]
    let inputFields = $(':input', widget.$el).not(":button");
    inputFields.off('blur.focusManager')
    inputFields.off('focus.focusManager')
  }
  regist(widget) {
    let self = this;
    this.widgetRegistry[widget.wid] = widget;
    let inputFields = $(':input', widget.$el).not(":button");
    inputFields.on('blur.focusManager', event => {
      self.valid('blur', {
        widget,
        target: event.currentTarget,
        event,
      })
    })
    inputFields.on('focus.focusManager', event => {
      self.valid('focus', {
        widget,
        target: event.currentTarget,
        event,
      })
    })
  }
  /**
   * 找到最接近的Form的验证规则 
   * @param {*} dom 
   */
  focusRules(dom) {
    dom = dom.$el || $(dom);
    //找到最接近的组件
    let wid = dom.closest('.V2Widget')[0].id;
    let model = this.host.$store.getters.model(wid);
    //找到最接近的验证规则
    // let parent = this.host.$store.getters.parent(wid);
    // while (!(parent && parent.rules)) {
    //   parent = this.host.$store.getters.parent(parent.id);
    // }
    // if (parent && parent.rules) {
    //   return parent.rules;
    // }
    let form = this.findForm(model);
    if (!form)
      return [];
    //TODO 暂时只使用非空规则
    return form.rules;
  }
  findForm(model = {}) {
    if (model.form)
      return model.form
    let parent = this.host.$store.getters.parent(model.id);
    if (parent == null)
      return this.host.$store.getters.model('root');
    while (!(parent && parent.rules)) {
      parent = this.host.$store.getters.parent(parent.id);
      if (parent == null) break;
    }
    if (parent && parent.rules) {
      return model.form = parent;
    }
    return model.form = this.host.$store.getters.model('root');
  }
  blurRules(dom) {
    return [];
  }
  findWidgetModel(dom) {
    dom = dom.$el || $(dom);
    //建立缓存
    if (dom.model)
      return dom.model;
    //找到最接近的组件
    let wid = dom.closest('.V2Widget')[0].id;
    let model = this.host.$store.getters.model(wid);
    model || console.log('找不到组件', dom);
    return dom = model;
  }
  valid(eventType, {
    widget,
    target,
    callback,
    event
  }) {
    let self = this;

    //focusRules|blurRules
    let ruleKey = `${eventType}Rules`
    if (!this[ruleKey]) return;
    //focus时，需要确定是否需要确定能否聚焦
    //然后执行callback
    let rules = this[ruleKey](target);
    //TODO 加入组件规则
    if (widget.model && widget.model[ruleKey] && widget.model[ruleKey].constructor == Array) {
      rules = [...rules, ...widget.model[ruleKey]]
    }
    let rulePromise = [];

    let formModel = self.findForm(widget.model);
    let form = self.host.$store.getters.vueInstance(formModel.id);
    if (rules)
      for (let rule of rules) {
        if (!rule) continue;
        if (rule.active == false) continue;
        //兼容不同版本的格式
        rule = rule.rules || rule.rule || rule;
        if (rule.constructor == String) {
          rule = RuleRegistry[rule];
        }
        if (rule && rule.constructor == Function) {
          let r = rule({
            mgr: self,
            form,
            widget,
            target,
            event,
          });
          r && r.constructor == Promise && rulePromise.push(r);
        }
      }
    Promise.all(rulePromise).then(values => {
      //成功后调用成功处理
      callback instanceof Function && callback(values);
    }).catch(reason => {
      //出错时调用错误处理
      if (reason && reason.handle)
        reason.handle(self);
    })
  }
}
