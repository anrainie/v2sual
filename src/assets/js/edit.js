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
  },
  mounted() {
    $(this.$el).click(e => {
      this.selected(e);
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
    $removeChild(index) {
      //   this.model.children.push(factory());
      this.model.children.splice(index, 1, null);
    }
  },
}
