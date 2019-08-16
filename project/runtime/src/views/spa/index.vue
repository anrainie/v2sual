<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:240px;width:100%;" key="0"><v2container id="1565940916625" :wid="`1565940916625`" :index="0" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:10%;" key="0"><v2-ctn-order class="V2Widget" id="1565940926105" :wid="`1565940926105`" :index="0" :pid="`1565940916625`"><v2loop class="V2Widget" id="1565940995955" :wid="`1565940995955`" :index="0" :pid="`1565940926105`"><template v-slot="scope"><v2-ebank-shortcut class="V2Widget" :id="`1565940995955-${scope._key}`" :wid="`1565940995955-${scope._key}`" :index="scope._key" :pid="`1565940995955`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-ebank-shortcut></template></v2loop></v2-ctn-order></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:90%;" key="1"><v2-ctn-order class="V2Widget" id="1565940946831" :wid="`1565940946831`" :index="1" :pid="`1565940916625`"><v2loop class="V2Widget" id="1565941313040" :wid="`1565941313040`" :index="0" :pid="`1565940946831`"><template v-slot="scope"><v2-ebank-bankcard class="V2Widget" :id="`1565941313040-${scope._key}`" :wid="`1565941313040-${scope._key}`" :index="scope._key" :pid="`1565941313040`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-ebank-bankcard></template></v2loop></v2-ctn-order></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:240px;width:100%;" key="1"><v2container id="1565940932995" :wid="`1565940932995`" :index="1" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:33.33%;" key="0"><v2-ctn-order class="V2Widget" id="1565940907364" :wid="`1565940907364`" :index="0" :pid="`1565940932995`"></v2-ctn-order></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:33.33%;" key="1"><v2-ctn-order class="V2Widget" id="1565940937032" :wid="`1565940937032`" :index="1" :pid="`1565940932995`"></v2-ctn-order></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:33.33%;" key="2"><v2-ctn-order class="V2Widget" id="1565940931362" :wid="`1565940931362`" :index="2" :pid="`1565940932995`"></v2-ctn-order></el-col></v2container></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":["240","240"],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"display":"inline-block","width":"calc(100% - 20px)","height":"220px","margin":"10px","padding":"10px","background":"#fff","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"V2Controllable","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"theme":{},"style":{},"icon":"${$item.icon}","iconPosition":"top","name":"${$item.name}","route":"${$item.route}","size":"normal","ctnClass":"","customClass":"","__type":"loop","__loopTarget":"shortcuts","__capacity":"1","component":"v2-ebank-shortcut","href":"v2-ebank-shortcut","children":[],"events":{},"id":1565940995955,"pid":1565940926105,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""}}],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940926105,"pid":1565940916625,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"display":"inline-block","width":"calc(100% - 20px)","height":"220px","margin":"10px","padding":"10px","background":"#fff","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"V2Controllable","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"theme":{},"style":{},"alias":"${$item.alias}","cardType":"${$item.cardType}","imgSrc":"${$item.imgSrc}","cardID":"${$item.cardID}","funds":"${$item.funds}","shortcuts":"${$item.shortcuts}","ctnClass":"","customClass":"","__type":"loop","__loopTarget":"bankCards","__capacity":"4","component":"v2-ebank-bankcard","href":"v2-ebank-bankcard","children":[],"events":{},"id":1565941313040,"pid":1565940946831,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""}}],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940946831,"pid":1565940916625,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1565940916625,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"display":"inline-block","width":"calc(100% - 20px)","height":"200px","margin":"10px","padding":"10px","background":"#fff","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"V2Controllable","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940907364,"pid":1565940932995,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""}},{"display":"inline-block","width":"calc(100% - 20px)","height":"200px","margin":"10px","padding":"10px","background":"#fff","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"V2Controllable","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940937032,"pid":1565940932995,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""}},{"display":"inline-block","width":"calc(100% - 20px)","height":"200px","margin":"10px","padding":"10px","background":"#fff","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"V2Controllable","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940931362,"pid":1565940932995,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""}}],"events":{},"layout":[33.33,33.33,33.33],"realSize":["%","%","%"],"id":1565940932995,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnClass":"","customClass":"","realSize":["px","px"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        shortcuts:// shortcuts
[
  {
    name: '账户预览',
    title: '账户预览',
    icon: 'el-icon-s-finance',
    // icon: 'img/custom-aweb-logo.png',
    iconPosition: 'top',
    route: {
      page: "spa/index",
      path: "/index",
      type: "BLANK",
      status: !0,
      params: { param: "一个参数" }
    }
  },
  {
    name: '转账',
    title: '转账',
    icon: 'el-icon-s-help',
    iconPosition: 'left',
    route: {
      page: "spa/queryTransaction",
      path: "/queryTransaction",
      type: "BLANK",
      status: !0,
      params: { param: "一个参数" }
    }
  },
  {
    name: '财富',
    title: '财富',
    icon: 'el-icon-s-goods',
    iconPosition: 'right',
    route: {
      page: "spa/pwdManager",
      path: "/pwdManager",
      type: "BLANK",
      status: !0,
      params: { param: "一个参数" }
    }
  }
],
bankCards:// bankCards
[
  {
    id: '', alias: '招商银行 | 一卡通', cardType: '借记卡',
    imgSrc: '/img/bankcard-dark.png',
    cardID: '1234 xxxx xxxx 1111',
    funds: [
      {title: '定期', sum: '100.00'},
      {title: '活期', sum: '100.00'},
    ],
    // 这里的卡快捷按钮可以考虑固定写在组件里
    shortcuts: [
      {id: '', title: '转账汇款',
        route: {
          page: "spa/index",
          path: "/index",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
      {id: '', title: '生活缴费',
        route: {
          page: "spa/pwdManager",
          path: "/pwdManager",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
      {id: '', title: '交易查询',
        route: {
          page: "spa/queryTransaction",
          path: "/queryTransaction",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
    ],
  },
  {
    id: '', alias: '个人账户', cardType: '信用卡',
    imgSrc: '/img/bankcard-blue.png',
    cardID: '1234 xxxx xxxx 2222',
    funds: [
      {title: '本期账单', sum: '100.00'},
      {title: '未出账单', sum: '100.00'},
    ],
    // 这里的卡快捷按钮可以考虑固定写在组件里
    shortcuts: [
      {id: '', title: '转账汇款',
        route: {
          page: "spa/index",
          path: "/index",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
      {id: '', title: '生活缴费',
        route: {
          page: "spa/pwdManager",
          path: "/pwdManager",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
      {id: '', title: '交易查询',
        route: {
          page: "spa/queryTransaction",
          path: "/queryTransaction",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
    ],
  },
]
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.shortcuts, dataStr:"shortcuts", wid:1565940995955, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.icon", wid:1565940995955, modelKey:"icon" });
ctx.$store.commit("registerBind",{ dataStr:"$item.name", wid:1565940995955, modelKey:"name" });
ctx.$store.commit("registerBind",{ dataStr:"$item.route", wid:1565940995955, modelKey:"route" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCards, dataStr:"bankCards", wid:1565941313040, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.alias", wid:1565941313040, modelKey:"alias" });
ctx.$store.commit("registerBind",{ dataStr:"$item.cardType", wid:1565941313040, modelKey:"cardType" });
ctx.$store.commit("registerBind",{ dataStr:"$item.imgSrc", wid:1565941313040, modelKey:"imgSrc" });
ctx.$store.commit("registerBind",{ dataStr:"$item.cardID", wid:1565941313040, modelKey:"cardID" });
ctx.$store.commit("registerBind",{ dataStr:"$item.funds", wid:1565941313040, modelKey:"funds" });
ctx.$store.commit("registerBind",{ dataStr:"$item.shortcuts", wid:1565941313040, modelKey:"shortcuts" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    
                },
                beforeUpdate(){
                    let ctx = this;
                    
                },
                updated(){
                    let ctx = this;
                    
                },
                beforeDestroy(){ 
                    let ctx = this;
                        
                },
                destroyed(){
                    let ctx = this;
                        
                },
                deactivated(){
                  /**页面切出**/
                  let ctx = this;
                  
                },
                activated(){
                  /**页面切入**/
                  let ctx = this;
                  
                },

            };
        </script>
<style lang="scss">

</style>