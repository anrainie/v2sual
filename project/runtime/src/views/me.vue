<template>
  <v2container :wid="`root`" style="width:100%;height:100%">
    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0">
      <v2-component-table
        class="V2Widget"
        id="1563336155372"
        :wid="`1563336155372`"
        :index="0"
        :pid="`root`"
        @detailhandler=detailhandler
      ></v2-component-table>
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
              columns: [
                { active: true, sTitle: "columns0" },
                {
                  active: true,
                  sTitle: "organId",
                  __edm_collection: {
                    CODINGRULE: "UTF-8",
                    DICTTYPE: "2",
                    PUBCODECNAME: "机构号",
                    description: "机构号",
                    COLSCALE: "0",
                    name: "organId",
                    Parameter: { pname: "字段长度", pvalue: "77" },
                    type: "String",
                    UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                    EDITION: "v0.0.1",
                    APPLYAREA: "casdf.cadf",
                    fieldLength: "77",
                    like: true,
                    desp: "机构号"
                  }
                },
                {
                  active: true,
                  sTitle: "employeeId2",
                  __edm_collection: {
                    CODINGRULE: "UTF-8",
                    DICTTYPE: "2",
                    PUBCODECNAME: "复核柜员号",
                    description: "复核柜员号",
                    COLSCALE: "0",
                    name: "employeeId2",
                    Parameter: { pname: "字段长度", pvalue: "77" },
                    type: "String",
                    UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                    EDITION: "v0.0.1",
                    APPLYAREA: "casdf.cadf",
                    fieldLength: "77",
                    like: true,
                    desp: "复核柜员号"
                  }
                },
                {
                  active: true,
                  sTitle: "start",
                  __edm_collection: {
                    CODINGRULE: "UTF-8",
                    DICTTYPE: "2",
                    PUBCODECNAME: "交易起始时间",
                    description: "交易起始时间",
                    COLSCALE: "0",
                    name: "start",
                    Parameter: { pname: "字段长度", pvalue: "77" },
                    type: "String",
                    UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                    EDITION: "v0.0.1",
                    APPLYAREA: "casdf.cadf",
                    fieldLength: "77",
                    like: true,
                    desp: "交易起始时间"
                  }
                },
                {
                  active: true,
                  sTitle: "tradeId",
                  __edm_collection: {
                    CODINGRULE: "UTF-8",
                    DICTTYPE: "2",
                    PUBCODECNAME: "交易号",
                    description: "交易号",
                    COLSCALE: "0",
                    name: "tradeId",
                    Parameter: { pname: "字段长度", pvalue: "77" },
                    type: "String",
                    UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                    EDITION: "v0.0.1",
                    APPLYAREA: "casdf.cadf",
                    fieldLength: "77",
                    like: true,
                    desp: "交易号"
                  }
                }
              ],
              selection: "",
              toolBar: true,
              toolTitle: "操作列",
              toolLocation: "right",
              toolWidth: "100",
              toolBtns: [
                { active: "true", btnName: "详情", handler: "detailhandler" }
              ],
              tableData: "",
              customClass: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-component-table",
              href: "v2-component-table",
              children: [],
              events: {},
              id: 1563336155372,
              pid: "root",
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
      },
      yeye: {
        color: "red"
      }
    };
  },
  props: {},
  mixins: [root],

  methods: {
      detailhandler(arg){
          debugger;
          console.log('row',arg);
      }
  },
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this; /**bind over**/

    /**bind**/
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