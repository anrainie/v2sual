
<script>
// <template>
//   <div class="comp-ctn">
//     <eb-paragraph v-bind="paragraphProps"></eb-paragraph>
//   </div>
// </template>

export default {
  functional: true,
  name: 'v2-ebank-paragraph',
  data() {
    return {}
  },
  props: {
    header: {
      type: Object,
      default: {
        level: 5,
        value: '默认段落标题',
        divider: true
      }
    },
    content: {
      type: Object,
      default: {
        value: ['默认段落1', '默认段落2', '默认段落3'],
        indent: true
      }
    },

  },
  computed: {
    paragraphProps() {
      return {
        // hLevel: 1,
        // header: '还是段落标题',
        // headerDivider: false,
        // paragraphs: ['段落1', '段落2', '段落3'],
        // pIsIndent: false,

        header: {
          level: 5,
          value: '实例段落标题',
          divider: true
        },
        content: {
          value: ['实例段落1', '实例段落2', '实例段落3'],
          indent: true
        },
      }
    }
  },
  methods: {
  },
  mounted() {
  },
  render(h, ctx) {
    // const $slots = ctx.slots()
    // const { hLevel, header, headerDivider, paragraphs, pIsIndent } = ctx.props

    const { header, content } = ctx.props

    let headerClass = header.divider ? 'eb-paragraph__header eb-paragraph__header--divider' : 'eb-paragraph__header'
    let contentClass = content.indent ? 'eb-paragraph__ctt eb-paragraph__ctt--indent' : 'eb-paragraph__ctt'

    return (
      <div class="eb-paragraph">
        {/* <div class={['eb-paragraph__header']}>{header}</div> */}
        {
          h(
            'h' + header.level,
            {
              attrs: {
                class: headerClass
              }
            },
            [
              h(
                'p',
                header.value
              )
            ]
          )
        }
        <div class={contentClass}>
          {
            content.value.map((item) => {
              return h('p', item)
            })
          }
        </div>
        {/* <p class="eb-paragraph__content" id={[idStr]} class={['el-divider', `el-divider--${classStr}`]}>$slots.content</p>
        <p class="eb-paragraph__content" style={[style]} class={['el-divider', `el-divider--${classStr}`]}>$slots.content</p> */}
      </div>
    );
  }
}
</script>

<style lang="scss">
.eb-paragraph {
  padding: 10px;

  .eb-paragraph__header {
    position: relative;
    min-height: 30px;
    line-height: 30px;
    // font-size: 12px;
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

