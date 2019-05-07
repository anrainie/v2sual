import {
  selectionTool,
  createTool,
} from "./tools.js"
/**
 * 该文件定义了编辑器的行为
 */
export const edit = window.preview ? {} : {
  computed: {
    wrapClass() {
      let activeTool = this.$store.state.activeTool || selectionTool;
      return activeTool.$wrapClass ? activeTool.$wrapClass(this) : {};
    },
    blockClass() {
      return (index, parent) => {
        let c = {};
        //令Empty以外的元素具备border，需要注意borderbox的影响
        if (parent && parent.children[index] && !parent.children[index].layout) {
          c.borderBox = true;
          c.dashBorder = true;
        }
        return c
      }
    }
  },
  mounted() {
    $(this.$el).click(e => {
      this.selected(e);
      e.stopPropagation();
    });

    $(this.$el).mouseenter(e => {
      if (this.$mouseenter(e))
        e.stopPropagation();
    });
    $(this.$el).mouseleave(e => {
      if (this.$mouseleave(e))
        e.stopPropagation();
    });
  },
  methods: {
    /**
     * 选中行为被触发，会交给当前激活的Tool处理
     */
    selected(e) {
      let activeTool = this.$store.state.activeTool || selectionTool;
      return activeTool.$selected(this, e);
    },
    $mouseleave(e) {
      let activeTool = this.$store.state.activeTool || selectionTool;
      return activeTool.$mouseleave && activeTool.$mouseleave(this, e);
    },
    $mouseenter(e) {
      let activeTool = this.$store.state.activeTool || selectionTool;
      return activeTool.$mouseenter && activeTool.$mouseenter(this, e);
    },
    $removeChild(index) {
      //   this.model.children.push(factory());
      this.model.children.splice(index, 1, null);
    }
  },
}
