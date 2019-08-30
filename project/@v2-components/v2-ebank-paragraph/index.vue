<template>
  <div class="eb-paragraph">
    <!-- <h3 :class="[model.divider ? 'eb-paragraph__header--divider' : '', 'eb-paragraph__header']"> -->
    <h3 :class="headerClass">
      <p>
        {{model.header}}
      </p>
    </h3>
    <!-- <div :class="[model.indent ? 'eb-paragraph__ctt--indent' : '', 'eb-paragraph__ctt']"> -->
    <div :class="contentClass">
      <p class="" v-for="(item, index) in content" :key="index">
        {{item}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v2-ebank-paragraph',

  // props: ['divider', 'indent'],
  // props: {
  //   // type: {
  //   //   type: String,
  //   //   default: 'default'
  //   // },
  //   divider: {
  //     type: Boolean,
  //     // default: this.model.divider
  //   },
  //   indent: {
  //     type: Boolean,
  //     // default: this.model.indent
  //   },
  // },

  computed: {
    headerClass() {
      return this.model.divider ? 'eb-paragraph__header eb-paragraph__header--divider' : 'eb-paragraph__header'
    },
    contentClass() {
      return this.model.indent ? 'eb-paragraph__ctt eb-paragraph__ctt--indent' : 'eb-paragraph__ctt'
    },
    content() {
      let content = ['默认段落1', '默认段落2', '默认段落3'];
      return this.model.content && this.model.content.length ? this.model.content : content;
    }
  },
  // watch: {
  //   "model.divider": {
  //     immediate: true,
  //     handler: function(val) {
  //       console.log(val)
  //       debugger
  //       this.model.divider = val
  //     }
  //   },
  //   "model.indent": {
  //     immediate: true,
  //     handler: function(val) {
  //       console.log(val)
  //       debugger
  //       this.model.indent = val
  //     }
  //   },
  // }
}
</script>

<style lang="scss">
.eb-paragraph {
  padding: 10px;

  .eb-paragraph__header {
    position: relative;
    min-height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-weight: bold;

    p {
      position: absolute;
      padding-right: 10px;
      background: #fff;
    }
  }
  .eb-paragraph__header--divider::before {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background: #eee;
    position: absolute;
    left: 0;
    top: 50%;
  }
  .eb-paragraph__ctt {
    line-height: 20px;
    font-size: 12px;

  }
  .eb-paragraph__ctt--indent p {
    text-indent: 2em;
  }
}
</style>

