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
    $focusNext(e) {
      let inputFields = this.__getInputFields();
      let index = $.inArray(e.target, inputFields);
      $(inputFields[index + 1]).focus();
      return false;
    },
    $focusPrev(e) {
      let inputFields = this.__getInputFields();
      let index = $.inArray(e.target, inputFields);
      $(inputFields[index - 1]).focus();
      return false;
    }
  },
  mounted() {
    //拦截按键
    let el = $(this.$el);
    let x = [];
    el.off(".keymap")
      .on("keydown.keymap", (e) => {
        // console.log(x[0].key)
        let inputFields, index;
        if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
          let before = this.model[e.key + ":before"];
          let after = this.model[e.key + ":after"];
          let invoker;
          switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
              invoker = this.$focusNext;
              break;
            case 'ArrowLeft':
            case 'ArrowUp':
              invoker = this.$focusPrev;
              break;
          }
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

        return true;
      });

  }
}


const edit = {
  mounted() {

  }
}





export default window.preview ? preview : edit;
// export default preview;
