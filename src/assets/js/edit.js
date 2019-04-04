/**
 * 编辑器相关方法
 */
export const edit = {
  mounted() {
    let c = this.$refs.container;
    if (c) {
      $(c.$el ? c.$el : c).click(() => {
        this.store.$emit('select', this.wid);
      })
    }
  }
}
