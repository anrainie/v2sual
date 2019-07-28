<template>
  <v2container :wid="`root`" style="width:100%;height:100%">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1563582557475" :wid="`1563582557475`" :index="0" :pid="`root`">
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:50%;width:100%;"
          key="0"
        >
          <v2-form-input
            class="V2Widget"
            id="1563582542976"
            :wid="`1563582542976`"
            :index="0"
            :pid="`1563582557475`"
          ></v2-form-input>
        </el-row>
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:50%;width:100%;"
          key="1"
        >
          <v2-component-bankcard
            class="V2Widget"
            id="1563766414906"
            :wid="`1563766414906`"
            :index="1"
            :pid="`1563582557475`"
            :activeIndex="0"
          ></v2-component-bankcard>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root } from "@/utils/v2-view";
import v2ComponentBankcard from "@/views/_customWidget/bankCard.vue";
export default {
  data() {
    return {
      CONTENT: {
        structure: {
          id: "root",
          component: "v2Container",
          direction: "row",
          layout: [100],
          style: { width: "100%", height: "100%" },
          data: {},
          children: [
            {
              style: {
                divCtn: {
                  position: "",
                  top: "",
                  right: "",
                  bottom: "",
                  left: "",
                  overflow: "",
                  margin: "",
                  padding: "",
                  height: "",
                  width: "",
                  "max-height": "",
                  "max-width": "",
                  "min-height": "",
                  "min-width": ""
                }
              },
              direction: "row",
              rules: "",
              customClass: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-layout",
              href: "v2-layout",
              children: [
                {
                  theme: { size: "" },
                  style: {
                    label: { "font-size": "", "font-weight": "", color: "" }
                  },
                  label: "标题",
                  titleMode: "col",
                  labelWitdh: "80px",
                  inputType: "text",
                  rows: "2",
                  placeholder: "请选择",
                  prepend: "",
                  append: "",
                  maxlength: "",
                  minlength: "",
                  prefixIcon: "",
                  suffixIcon: "",
                  showWordLimit: false,
                  value: "",
                  clearable: false,
                  disabled: false,
                  isRequired: false,
                  autoComplete: false,
                  suggestion: "",
                  rules: "",
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-form-input",
                  href: "v2-form-input",
                  children: [],
                  events: {},
                  id: 1563582542976,
                  pid: 1563582557475,
                  commonStyle: {
                    position: "",
                    top: "",
                    right: "",
                    left: "",
                    bottom: "",
                    width: "",
                    height: "",
                    "text-align": "",
                    "background-color": "",
                    "padding-top": "",
                    "padding-bottom": "",
                    "padding-left": "",
                    "padding-right": "",
                    "margin-top": "",
                    "margin-bottom": "",
                    "margin-left": "",
                    "margin-right": "",
                    "border-color": "",
                    "border-width": "",
                    "border-style": "",
                    color: "",
                    opacity: 1,
                    "border-radius": "0px"
                  },
                  sizeLocked: false
                },
                {
                  dataBasket: { activeIndex: "0" },
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-component-bankcard",
                  href: "v2-component-bankcard",
                  cptpath: "\\src\\views\\_customWidget\\bankCard.vue",
                  children: [],
                  events: {},
                  id: 1563766414906,
                  pid: 1563582557475,
                  commonStyle: {
                    position: "",
                    top: "",
                    right: "",
                    left: "",
                    bottom: "",
                    width: "",
                    height: "",
                    "text-align": "",
                    "background-color": "",
                    "padding-top": "",
                    "padding-bottom": "",
                    "padding-left": "",
                    "padding-right": "",
                    "margin-top": "",
                    "margin-bottom": "",
                    "margin-left": "",
                    "margin-right": "",
                    "border-color": "",
                    "border-width": "",
                    "border-style": "",
                    color: ""
                  }
                }
              ],
              events: {},
              layout: [50, 50],
              realSize: ["%", "%", "%"],
              id: 1563582557475,
              pid: "root"
            }
          ],
          events: {},
          commonStyle: {
            position: "",
            top: "",
            right: "",
            left: "",
            bottom: "",
            width: "",
            height: "",
            "text-align": "",
            "background-color": "",
            "padding-top": "",
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "margin-top": "",
            "margin-bottom": "",
            "margin-left": "",
            "margin-right": "",
            "border-color": "",
            "border-width": "",
            "border-style": "",
            color: "",
            opacity: 1,
            "border-radius": "0px"
          }
        }
      },
      treeList: [
        {
          label: "首页"
        }
      ],
      activeId: 0
    };
  },
  props: {},
  mixins: [root],
  components: { "v2-component-bankcard": v2ComponentBankcard },
  methods: {
    event0_1563258333580(widget, item) {
      let ctx = this;
    }
  },
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.theme1,
      dataStr: "theme1",
      wid: 1563262000359,
      modelKey: "customClass"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.treeList,
      dataStr: "treeList",
      wid: 1563450812189,
      modelKey: "configs"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.activeId,
      dataStr: "activeId",
      wid: 1563504966754,
      modelKey: "activeIndex"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.activeId,
      dataStr: "activeId",
      wid: 1563505032434,
      modelKey: "value"
    }); /**bind over**/
  },
  beforeMount() {
    let ctx = this;
  },
  mounted() {
    let ctx = this;
  },
  beforeUpdate() {
    let ctx = this;
  },
  updated() {
    let ctx = this;
  },
  beforeDestroy() {
    let ctx = this;
  },
  destroyed() {
    let ctx = this;
  },
  deactivated() {
    /**页面切出**/
  },
  activated() {
    /**页面切入**/
  }
};
</script>