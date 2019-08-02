<template>
  <v2container :wid="`root`" style="width:100%;height:100%">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1562829629934" :wid="`1562829629934`" :index="0" :pid="`root`">
        <el-row class="V2ContainerBlock" style="height:62%;width:100%;" key="0">
          <v2container id="1562829631161" :wid="`1562829631161`" :index="0" :pid="`1562829629934`">
            <el-col class="V2ContainerBlock" :span="2" key="0" style="height:100%;">
              <v2container
                id="1562829641202"
                :wid="`1562829641202`"
                :index="0"
                :pid="`1562829631161`"
              >
                <el-row
                  class="V2ContainerBlock borderBox dashBorder"
                  style="height:33.3%;width:100%;"
                  key="0"
                >
                  <v2-component-image_desc
                    class="V2Widget"
                    id="1562834024669"
                    :wid="`1562834024669`"
                    :index="0"
                    :pid="`1562829641202`"
                    :text="'账户总览'"
                    :icon="'el-icon-s-home'"
                  ></v2-component-image_desc>
                </el-row>
                <el-row
                  class="V2ContainerBlock borderBox dashBorder"
                  style="height:33.3%;width:100%;"
                  key="1"
                >
                  <v2-component-image_desc
                    class="V2Widget"
                    id="1562834028938"
                    :wid="`1562834028938`"
                    :index="1"
                    :pid="`1562829641202`"
                    :text="'财富'"
                    :icon="'el-icon-user-solid'"
                  ></v2-component-image_desc>
                </el-row>
                <el-row
                  class="V2ContainerBlock borderBox dashBorder"
                  style="height:33.3%;width:100%;"
                  key="2"
                >
                  <v2-component-image_desc
                    class="V2Widget"
                    id="1562834030179"
                    :wid="`1562834030179`"
                    :index="2"
                    :pid="`1562829641202`"
                    :text="'转账'"
                    :icon="'el-icon-files'"
                  ></v2-component-image_desc>
                </el-row>
              </v2container>
            </el-col>
            <el-col class="V2ContainerBlock" :span="22" key="1" style="height:100%;">
              <v2container
                id="1562831140276"
                :wid="`1562831140276`"
                :index="1"
                :pid="`1562829631161`"
              >
                <el-row class="V2ContainerBlock" style="height:17%;width:100%;" key="0">
                  <v2container
                    id="1562831558905"
                    :wid="`1562831558905`"
                    :index="0"
                    :pid="`1562831140276`"
                  >
                    <el-col class="V2ContainerBlock" :span="19" key="0" style="height:100%;">
                      <v2container
                        id="1562834322712"
                        :wid="`1562834322712`"
                        :index="0"
                        :pid="`1562831558905`"
                      >
                        <el-col
                          class="V2ContainerBlock borderBox dashBorder"
                          :span="2"
                          key="0"
                          style="height:100%;"
                        >
                          <v2-component-text
                            class="V2Widget"
                            id="1562834330800"
                            :wid="`1562834330800`"
                            :index="0"
                            :pid="`1562834322712`"
                          ></v2-component-text>
                        </el-col>
                        <el-col class="V2ContainerBlock" :span="22" key="1" style="height:100%;">
                          <v2empty
                            class="V2Empty"
                            id="1562834322712-1"
                            :wid="`1562834322712-1`"
                            :index="1"
                            :pid="`1562834322712`"
                          ></v2empty>
                        </el-col>
                      </v2container>
                    </el-col>
                    <el-col class="V2ContainerBlock" :span="5" key="1" style="height:100%;">
                      <v2empty
                        class="V2Empty"
                        id="1562831558905-1"
                        :wid="`1562831558905-1`"
                        :index="1"
                        :pid="`1562831558905`"
                      ></v2empty>
                    </el-col>
                  </v2container>
                </el-row>
                <el-row
                  class="V2ContainerBlock borderBox dashBorder"
                  style="height:83%;width:100%;"
                  key="1"
                >
                  <v2loop
                    class="V2Widget"
                    id="1562835603426"
                    :wid="`1562835603426`"
                    :index="1"
                    :pid="`1562831140276`"
                  >
                    <template v-slot="scope">
                      <v2-component-bankcard
                        class="V2Widget"
                        :id="`1562835603426-${scope._key}`"
                        :wid="`1562835603426-${scope._key}`"
                        :index="scope._key"
                        :pid="`1562835603426`"
                        :cpttype="`loopItem`"
                        :$item="scope._item"
                        :$key="scope._key"
                      ></v2-component-bankcard>
                    </template>
                  </v2loop>
                </el-row>
              </v2container>
            </el-col>
          </v2container>
        </el-row>
        <el-row class="V2ContainerBlock" style="height:38%;width:100%;" key="1">
          <v2empty
            class="V2Empty"
            id="1562829629934-1"
            :wid="`1562829629934-1`"
            :index="1"
            :pid="`1562829629934`"
          ></v2empty>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root } from "@/utils/v2-view";
import v2ComponentBankcard from "@/views/_customWidget/bankCard.vue";
import v2ComponentImage_desc from "@/views/_customWidget/image_desc.vue";
export default {
                    data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[62,38],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[8,92],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[33.3,33.3,33.3],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":false,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"10px","border-color":"#2D8CF0","border-width":"2","border-style":"solid"},"component":"v2-layout","href":"v2-layout","children":[{"dataBasket":{"text":"'账户总览'","icon":"'el-icon-s-home'"},"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image_desc","href":"v2-component-image_desc","cptpath":"\\src\\views\\_customWidget\\image_desc.vue","children":[],"events":{},"id":1562834024669,"pid":1562829641202},{"dataBasket":{"text":"'财富'","icon":"'el-icon-user-solid'"},"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image_desc","href":"v2-component-image_desc","cptpath":"\\src\\views\\_customWidget\\image_desc.vue","children":[],"events":{},"id":1562834028938,"pid":1562829641202},{"dataBasket":{"text":"'转账'","icon":"'el-icon-files'"},"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image_desc","href":"v2-component-image_desc","cptpath":"\\src\\views\\_customWidget\\image_desc.vue","children":[],"events":{},"id":1562834030179,"pid":1562829641202}],"events":{},"realSize":[null,null,null],"id":1562829641202,"pid":1562829631161},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[17,83],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":false,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"10px","border-width":"2","border-style":"solid"},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[79,21],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":false,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px","background-color":"#BAC8E4"},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[8,92],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"我的","editable":false,"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1562834330800,"pid":1562834322712},null],"events":{},"realSize":[null,null],"id":1562834322712,"pid":1562831558905},null],"events":{},"realSize":[null,null],"id":1562831558905,"pid":1562831140276},{"__type":"loop","__loopTarget":"cardList","__capacity":"3","component":"v2-component-bankcard","href":"v2-component-bankcard","cptpath":"\\src\\views\\_customWidget\\bankCard.vue","children":[],"events":{},"id":1562835603426,"pid":1562831140276}],"events":{},"realSize":["100",null],"id":1562831140276,"pid":1562829631161}],"events":{},"realSize":[null,null],"id":1562829631161,"pid":1562829629934},null],"events":{},"realSize":[null,null],"id":1562829629934,"pid":"root"}],"events":{}}},
                        text1:'账户总览',
cardList:[
    {id:1214141514},
    {id:12314141514},
    {id:12134141514},
]
                    }
                },
  props: {},
  mixins: [root],
  components: { v2ComponentBankcard, v2ComponentImage_desc },
  methods: {},
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.cardList,
      dataStr: "cardList",
      wid: 1562835603426,
      modelKey: "__loopTarget"
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