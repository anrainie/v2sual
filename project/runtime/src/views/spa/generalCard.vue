<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" :class="[`eb-grid eb-grid--blue eb-grid--radius eb-creditCard__bankcards`]" style="height:;" key="0"><v2container id="1567435425885" :wid="`1567435425885`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="0"><v2-ebank-tabs class="V2Widget" id="1567417612056" :wid="`1567417612056`" :index="0" :pid="`1567435425885`"></v2-ebank-tabs></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__bankcards-main`]" style="height:;" key="1"><v2loop class="V2Widget" id="1567422831629" :wid="`1567422831629`" :index="1" :pid="`1567435425885`"><template v-slot="scope"><v2-ebank-bankcard-type2 class="V2Widget" :id="`1567422831629-${scope._key}`" :wid="`1567422831629-${scope._key}`" :index="scope._key" :pid="`1567422831629`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-bankcard-type2></template></v2loop></el-row></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-generalCard__msg`]" style="height:;" key="1"><v2-ctn-order class="V2Widget" id="1567443884853" :wid="`1567443884853`" :index="1" :pid="`root`"><v2-component-text class="V2Widget" :class="[`key`]" id="1567443897420" :wid="`1567443897420`" :index="0" :pid="`1567443884853`"></v2-component-text><v2-component-text class="V2Widget" :class="[`val`]" id="1567443968431" :wid="`1567443968431`" :index="1" :pid="`1567443884853`"></v2-component-text><v2-component-text class="V2Widget" :class="[`key`]" id="1567443898547" :wid="`1567443898547`" :index="2" :pid="`1567443884853`"></v2-component-text><v2-component-text class="V2Widget" :class="[`val`]" id="1567443944869" :wid="`1567443944869`" :index="3" :pid="`1567443884853`"></v2-component-text></v2-ctn-order></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["",""],"direction":"row","children":[{"component":"v2-layout","href":"v2-layout","layout":["",""],"direction":"row","children":[{"active":"","tabs":"${tabBar.tabs}","tabsType":"","hasBtns":true,"btns":"${tabBar.btns}","btnsType":"text","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-tabs","href":"v2-ebank-tabs","children":[],"events":{},"id":1567417612056,"pid":1567435425885,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"alias":"${$item.alias}","cardType":"${$item.cardType}","imgSrc":"${$item.imgSrc}","logo":"","cardID":"${$item.cardID}","funds":"${$item.funds}","shortcuts":"${$item.shortcuts}","ctnClass":"eb-creditCard__bankcards-main","customClass":"","__type":"loop","__loopTarget":"bankCards","__capacity":"1","component":"v2-ebank-bankcard-type2","href":"v2-ebank-bankcard-type2","children":[],"events":{},"id":1567422831629,"pid":1567435425885,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"style":{},"pid":"1567417533139-0","id":1567435425885,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"eb-grid eb-grid--blue eb-grid--radius eb-creditCard__bankcards","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":[],"__type":""},{"width":"","height":"","margin":"","padding":"","background":"","border":"","borderRadius":"","boxShadow":"","ctnClass":"eb-generalCard__msg","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"特别推介 :","editable":false,"ctnClass":"","customClass":"key","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567443897420,"pid":1567443884853,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"这里看这里瞧这里看这里瞧这里看这里瞧这里看这里瞧","editable":false,"ctnClass":"","customClass":"val","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567443968431,"pid":1567443884853,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"优惠资讯 :","editable":false,"ctnClass":"","customClass":"key","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567443898547,"pid":1567443884853,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"这里有优惠有实惠这里有优惠有实惠这里有优惠有实惠","editable":false,"ctnClass":"","customClass":"val","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567443944869,"pid":1567443884853,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567443884853,"pid":1567417533139,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"style":{},"pid":"root-0","id":1567417533139,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"__type":""}],"events":{},"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        tabBar:// tabBar
{
  tabs: [
    {text: '一卡通'}
  ],
  btns: [
    {
      text: '显示所有账单',
      icon: 'el-icon-view'
    }
  ]
},
accountMenu:[
  {name: '账单查询'},
  {name: '额度查询'},
  {name: '交易明细查询'}
],
wealthMenu:[
  {name: '现金分期'},
  {name: '预借现金'},
  {name: '已出账单分期'},
  {name: '未出账单分期'}
],
settingMenu:[
  {name: '交易密码修改'},
  {name: '查询密码修改'},
  {name: '申请消费通知'},
  {name: '账务提醒时间设置'},
  {name: '临时额度调整'},
  {name: '固定额度调整'},
  {name: '账单地址修改'},
  {name: '固定电话修改'}
]
,
bankCards:// bankCards
[
  {
    id: '', alias: '个人账户', cardType: '借记卡',
    // imgSrc: 'img/card2.jpg',
    imgSrc: 'img/bankcard-blue.png',
    cardID: '1234 xxxx xxxx 2222',
    funds: [
      {title: '定期余额', sum: '100.00'},
      {title: '活期余额', sum: '100.00'},
    ],
    // 这里的卡快捷按钮可以考虑固定写在组件里
    shortcuts: [
      {id: '', title: '转账汇款',
        route: {
          page: "XhqTest/tranfer",
          path: "XhqTest/tranfer",
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
          page: "spa/queryTrade",
          page: "spa/queryTrade",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
    ],
  },
  {
    id: '', alias: '个人账户', cardType: '借记卡',
    // imgSrc: 'img/card2.jpg',
    imgSrc: 'img/bankcard-blue.png',
    cardID: '1234 xxxx xxxx 2222',
    funds: [
      {title: '定期余额', sum: '100.00'},
      {title: '活期余额', sum: '100.00'},
    ],
    // 这里的卡快捷按钮可以考虑固定写在组件里
    shortcuts: [
      {id: '', title: '转账汇款',
        route: {
          page: "XhqTest/tranfer",
          path: "XhqTest/tranfer",
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
          page: "spa/queryTrade",
          page: "spa/queryTrade",
          type: "BLANK",
          status: !0,
          params: { cardID: '1234 xxxx xxxx 2222' }
        }
      },
    ],
  }
]
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.tabBar.btns, dataStr:"tabBar.btns", wid:1567417612056, modelKey:"btns" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tabBar.tabs, dataStr:"tabBar.tabs", wid:1567417612056, modelKey:"tabs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCards, dataStr:"bankCards", wid:1567422831629, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.alias", wid:1567422831629, modelKey:"alias" });
ctx.$store.commit("registerBind",{ dataStr:"$item.cardType", wid:1567422831629, modelKey:"cardType" });
ctx.$store.commit("registerBind",{ dataStr:"$item.imgSrc", wid:1567422831629, modelKey:"imgSrc" });
ctx.$store.commit("registerBind",{ dataStr:"$item.cardID", wid:1567422831629, modelKey:"cardID" });
ctx.$store.commit("registerBind",{ dataStr:"$item.funds", wid:1567422831629, modelKey:"funds" });
ctx.$store.commit("registerBind",{ dataStr:"$item.shortcuts", wid:1567422831629, modelKey:"shortcuts" });/**bind over**/
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