<template>
  <v2container :wid="`root`" style="width:100%;height:100%">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1563851818163" :wid="`1563851818163`" :index="0" :pid="`root`">
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:36px;width:100%;"
          key="0"
        >
          <v2-component-text
            class="V2Widget"
            id="1563851951029"
            :wid="`1563851951029`"
            :index="0"
            :pid="`1563851818163`"
          ></v2-component-text>
        </el-row>
        <el-row class="V2ContainerBlock borderBox dashBorder" style="height:px;width:100%;" key="1">
          <v2-component-text
            class="V2Widget"
            id="1563851983236"
            :wid="`1563851983236`"
            :index="1"
            :pid="`1563851818163`"
          ></v2-component-text>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root, cpt, widget } from "@v2-lib/v2sual/mixin/v2-view";

export default {
  data() {
    return {  "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"${compClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${header}","editable":false,"customClass":"${headerClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563851951029,"pid":1563851818163,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${content}","editable":false,"customClass":"${contentClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563851983236,"pid":1563851818163,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}],"events":{},"layout":["36",""],"realSize":["px","px"],"id":1563851818163,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}],"events":{}}},
                       };
  },
  props: {
    header: {
      default: () => {
        return "段落标题";
      }
    },
    content: {
      default: () => {
        return "段落内容";
      }
    },
    contentClass: {
      default: () => {
        return ["article__content"];
      }
    },
    headerClass: {
      default: () => {
        return ["article__header"];
      }
    },
    compClass: {
      default: () => {
        return ["article"];
      }
    }
  },
  mixins: [root, cpt, widget],

  methods: {},
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.content,
      dataStr: "content",
      wid: 1563851983236,
      modelKey: "text"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.contentClass,
      dataStr: "contentClass",
      wid: 1563851983236,
      modelKey: "customClass"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.header,
      dataStr: "header",
      wid: 1563851951029,
      modelKey: "text"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.headerClass,
      dataStr: "headerClass",
      wid: 1563851951029,
      modelKey: "customClass"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.compClass,
      dataStr: "compClass",
      wid: 1563851818163,
      modelKey: "customClass"
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