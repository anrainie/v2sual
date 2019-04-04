/**
 * 编辑器相关方法
 */
export const edit = {
  methods: {
    save() {

    }
  },
  mounted() {
    let el = this.$refs.wrap.$el || this.$refs.wrap;
    $(el).click(() => {
      this.store.commit('select', this.wid);
    });
    console.log(el)
  },
  isSelected(wid) {
    // this.store.
  },
}
