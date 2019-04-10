const preview = {
  mounted() {
    //拦截按键
    let el = $(this.$el);
    let x = [];
    el.off(".keymap")
      .on("keydown.keymap", (e) => {
        console.log(e.shiftKey, e.keyCode, e.key, e.which);
        //TODO 暂时不知道从哪里取事件，暂时先不动
        if (x[0] == null)
          x[0] = e;
        console.log(x[0].key)
        if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
          let event = $.Event('keydown');
          event.keyCode = 9;
          event.key = 'Tab'
          event.which = 9
          switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
              event.shiftKey = false;
              setTimeout(() => {
                el.trigger(event);
                el.blur();
              }, 50);

              return false;
            case 'ArrowLeft':
            case 'ArrowUp':
              event.shiftKey = true;
              el.trigger(event);
              return false;
            default:
              return true;
          }
        }

        return true;
      });

  }
}


const edit = {}


// export default window.preview ? preview : edit;
export default preview;
