export default {
  functional: true,
  name: 'EbParagraph',

  props: {
    // hLevel: {
    //   type: Number,
    //   default: 5
    // },
    // header: {
    //   type: String,
    //   default: '段落标题'
    // },
    // headerDivider: {
    //   type: Boolean,
    //   default: true
    // },
    // paragraphs: {
    //   type: Array,
    //   default: ['paragraph1', 'paragraph2', 'paragraph3']
    // },
    // pIsIndent: {
    //   type: Boolean,
    //   default: true
    // },

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
  data() {
    return {
    }
  },
  methods: {
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
};
