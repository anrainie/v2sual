const preview = {
  methods: {
    __getInputFields() {
      return Array.prototype.map.call($(':input'), function (elem) {
        return {
          elem,
          index: $(elem).attr('tabindex') || Infinity
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
      this.blur&&this.blur();
      let inputFields = this.__getInputFields();
      let index = $.inArray(e.target, inputFields);
      let target = inputFields[index + 1] ? $(inputFields[index + 1]) : $(inputFields[0])
      target.focus();
      return false;
    },
    $focusPrev(e) {
      this.blur&&this.blur();
      let inputFields = this.__getInputFields();
      let index = $.inArray(e.target, inputFields);
      $(inputFields[index - 1]).focus();
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
          return true;
        }
      }
    }
  },
  mounted() {
    //拦截按键
    let el = $(this.$el);
    let x = [];
    el.off(".keymap")
      .on("keydown.keymap", (e) => {
        console.log(e.key, e.keyCode)
        return this.handleKeyDown(e);

      });

  }
}







export default preview;
// export default preview;
