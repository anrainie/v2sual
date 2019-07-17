<template>
  <v2container :wid="`root`" style="width:100%;height:100%">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1562726615324" :wid="`1562726615324`" :index="0" :pid="`root`">
        <el-row class="V2ContainerBlock" style="height:20%;width:100%;" key="0">
          <v2empty
            class="V2Empty"
            id="1562726615324-0"
            :wid="`1562726615324-0`"
            :index="0"
            :pid="`1562726615324`"
          ></v2empty>
        </el-row>
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:80%;width:100%;"
          key="1"
        >
          <v2-component-calendar
            class="V2Widget"
            id="1562726621465"
            :wid="`1562726621465`"
            :index="1"
            :pid="`1562726615324`"
          ></v2-component-calendar>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root } from "@/utils/v2-view";

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
              layout: [20, 80],
              rules: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              def: {
                defheight: true,
                defwidth: true,
                defborder: true,
                defbackgroundStyle: true,
                defpaddingStyle: true
              },
              defaultValue: {
                "background-color": "#fff",
                "background-image": "",
                "padding-top": 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0
              },
              customStyle: {},
              component: "v2-layout",
              href: "v2-layout",
              children: [
                null,
                {
                  style: { cardHeader: { height: "", width: "", color: "" } },
                  range: [-1, 0, 1],
                  currentDate: "new Date()",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-component-calendar",
                  href: "v2-component-calendar",
                  children: [],
                  events: {},
                  id: 1562726621465,
                  pid: 1562726615324
                }
              ],
              events: {},
              realSize: [null, null],
              id: 1562726615324,
              pid: "root"
            }
          ],
          events: {}
        }
      },
      range: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
      start: new Date("2019-05-29")
    };
  },
  props: {},
  mixins: [root],

  methods: {},
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.range,
      dataStr: "range",
      wid: 1562726621465,
      modelKey: "range"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.start,
      dataStr: "start",
      wid: 1562726621465,
      modelKey: "currentDate"
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
  pause() {
    /**页面切出**/
  },
  resume() {
    /**页面切入**/
  }
};
</script>