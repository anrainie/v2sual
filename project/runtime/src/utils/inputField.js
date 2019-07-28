const preview = {
  methods: {
    __widgetBlur(){
      for(let item in this.$refs){
        if(item.startsWith("_op_")){
          this.$refs[item].blur && this.$refs[item].blur();
          this.model.autoComplete && this.$refs[item].close();//输入框el-autocomplete失焦
        }
      }
    },
    __getInputFields() {
      return Array.prototype.map.call($(':input'), function (elem,index) {
        return {
          elem,
          index: $(elem).attr('tabindex') || index|| Infinity
        };
      }).sort((a, b) => a.index - b.index).map(e => e.elem);
    },
    $ArrowRight(e) {
      return this.$focusNext(e);
    },
    $ArrowDown(e) {
      return this.$focusNext(e);
    },
    $Enter(e) {
      return this.$focusNext(e);
    },
    $ArrowLeft(e) {
      return this.$focusPrev(e);
    },
    $ArrowUp(e) {
      return this.$focusPrev(e);
    },
    $Tab(e) {
      return this.$focusNext(e);
    },
    $focusNext(e) {
      this.__widgetBlur();
      let inputFields = this.__getInputFields();
      let index = $.inArray(e.target, inputFields);
      let nextIndex = index === inputFields.length-1? 0 : index+1;
      let target = $(inputFields[nextIndex]);
      if(target[0].disabled){
        target = $(inputFields[nextIndex + 1])
      }
      target.focus();
      return false;
    },
    $focusPrev(e) {
      this.__widgetBlur();
      let inputFields = this.__getInputFields();
      let index = $.inArray(e.target, inputFields);
      let lastIndex = index === 0? inputFields.length-1 : index-1;
      let target =  $(inputFields[lastIndex]);
      if(target[0].disabled){
        target = $(inputFields[lastIndex - 1])
      }
      target.focus();
      return false;
    },
    handleKeyDown(e) {
      if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
        let before = this.model[e.key + ":before"];
        let after = this.model[e.key + ":after"];
        let invoker = this['$' + e.key];
        if (invoker) {
          let beforeResult = before ? before(this, e) : true;
          let b = beforeResult;
          if (!(beforeResult instanceof Promise)) {
            b = new Promise(res => {
              res(beforeResult);
            });
          }
          b.then(result => {
            if (result) {
              return invoker(e, result);
            }
          }).then(afterResult => {
            if (after) {
              if (afterResult instanceof Promise) {
                afterResult.then(r => {
                  after(this, r);
                });
              } else {
                after(this, afterResult);
              }
            }
          });
          if(e.key == 'Tab') return false;
          return true;
        }
        return true;
      }
    }
  },
  mounted() {
    //拦截按键
    let el = $(this.$el);
    let x = [];
    el.off(".keymap")
      .on("keydown.keymap", (e) => {
        // console.log(e.key, e.keyCode)
        return this.handleKeyDown(e);

      });

  }
}







export default preview;
// export default preview;
