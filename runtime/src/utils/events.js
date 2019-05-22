const EVENTS = {
  'el-input-number': {
        'change':{},
  }
}
export default {
  beforeCreate() {},
  beforeMount() {},
  mounted() {
    this.model;

    let events = this.model.events;
    for (let ref in events) {
      let dom = this.$refs[ref];
      if (dom) {
        let devents = events[ref];
        for (let de in devents) {
           this.$refs[ref].$on(de);
        }
      }
    }
  }
}
