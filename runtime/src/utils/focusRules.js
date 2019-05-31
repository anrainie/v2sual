/**
 * Form级规则
 * 强制聚焦规则
 * 如果Form中必选项没有完成，则form中其他组件获取焦点时，会强制聚焦该必选项
 * 
 */
export const forceFocusRequiredRule = ({
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
              if (inputField)
                $(inputField).focus();
            }
          })
          return;
        }
      }
    }
    res();
  })
}
