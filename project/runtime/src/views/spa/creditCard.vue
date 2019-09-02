<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" :class="[`eb-grid eb-grid--blue eb-grid--radius eb-creditCard__bankcards`]" style="height:;" key="0"><v2container id="1567435425885" :wid="`1567435425885`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="0"><v2-ebank-tabs class="V2Widget" id="1567417612056" :wid="`1567417612056`" :index="0" :pid="`1567435425885`"></v2-ebank-tabs></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__bankcards-main`]" style="height:;" key="1"><v2loop class="V2Widget" id="1567422831629" :wid="`1567422831629`" :index="1" :pid="`1567435425885`"><template v-slot="scope"><v2-ebank-bankcard-type2 class="V2Widget" :id="`1567422831629-${scope._key}`" :wid="`1567422831629-${scope._key}`" :index="scope._key" :pid="`1567422831629`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-bankcard-type2></template></v2loop></el-row></v2container></el-row><el-row class="V2ContainerBlock" :class="[`eb-creditCard__menus`]" style="height:;" key="1"><v2container id="1567417617048" :wid="`1567417617048`" :index="1" :pid="`root`"><el-col class="V2ContainerBlock" style="width:calc(50% - 10px);" key="0"><v2container id="1567417603409" :wid="`1567417603409`" :index="0" :pid="`1567417617048`"><el-col class="V2ContainerBlock" :class="[`eb-creditCard__grid`]" style="width:calc(50% - 10px);" key="0"><v2container id="1567418678448" :wid="`1567418678448`" :index="0" :pid="`1567417603409`"><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__menus-header`]" style="height:;" key="0"><v2-component-text class="V2Widget" id="1567418714462" :wid="`1567418714462`" :index="0" :pid="`1567418678448`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__menus-main`]" style="height:;" key="1"><v2loop class="V2Widget" id="1567418857876" :wid="`1567418857876`" :index="1" :pid="`1567418678448`"><template v-slot="scope"><v2-ebank-shortcut class="V2Widget" :id="`1567418857876-${scope._key}`" :wid="`1567418857876-${scope._key}`" :index="scope._key" :pid="`1567418857876`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut></template></v2loop></el-row></v2container></el-col><el-col class="V2ContainerBlock" :class="[`eb-creditCard__grid`]" style="width:calc(50% - 10px);" key="1"><v2container id="1567418720203" :wid="`1567418720203`" :index="1" :pid="`1567417603409`"><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__menus-header`]" style="height:;" key="0"><v2-component-text class="V2Widget" id="1567418746885" :wid="`1567418746885`" :index="0" :pid="`1567418720203`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__menus-main`]" style="height:;" key="1"><v2loop class="V2Widget" id="1567419000082" :wid="`1567419000082`" :index="1" :pid="`1567418720203`"><template v-slot="scope"><v2-ebank-shortcut class="V2Widget" :id="`1567419000082-${scope._key}`" :wid="`1567419000082-${scope._key}`" :index="scope._key" :pid="`1567419000082`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut></template></v2loop></el-row></v2container></el-col></v2container></el-col><el-col class="V2ContainerBlock" :class="[`eb-creditCard__grid`]" style="width:50%;" key="1"><v2container id="1567418658322" :wid="`1567418658322`" :index="1" :pid="`1567417617048`"><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__menus-header`]" style="height:;" key="0"><v2-component-text class="V2Widget" id="1567418771642" :wid="`1567418771642`" :index="0" :pid="`1567418658322`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-creditCard__menus-main`]" style="height:;" key="1"><v2loop class="V2Widget" id="1567418993158" :wid="`1567418993158`" :index="1" :pid="`1567418658322`"><template v-slot="scope"><v2-ebank-shortcut class="V2Widget" :id="`1567418993158-${scope._key}`" :wid="`1567418993158-${scope._key}`" :index="scope._key" :pid="`1567418993158`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut></template></v2loop></el-row></v2container></el-col></v2container></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["",""],"direction":"row","children":[{"component":"v2-layout","href":"v2-layout","layout":["",""],"direction":"row","children":[{"active":"","tabs":"${tabBar.tabs}","tabsType":"","hasBtns":true,"btns":"${tabBar.btns}","btnsType":"text","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-tabs","href":"v2-ebank-tabs","children":[],"events":{},"id":1567417612056,"pid":1567435425885,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"alias":"${$item.alias}","cardType":"${$item.cardType}","imgSrc":"${$item.imgSrc}","logo":"","cardID":"${$item.cardID}","funds":"${$item.funds}","shortcuts":"${$item.shortcuts}","ctnClass":"eb-creditCard__bankcards-main","customClass":"","__type":"loop","__loopTarget":"bankCards","__capacity":"1","component":"v2-ebank-bankcard-type2","href":"v2-ebank-bankcard-type2","children":[],"events":{},"id":1567422831629,"pid":1567435425885,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"style":{},"pid":"1567417533139-0","id":1567435425885,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"eb-grid eb-grid--blue eb-grid--radius eb-creditCard__bankcards","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":[],"__type":""},{"component":"v2-layout","href":"v2-layout","layout":["calc(50% - 10px)","50"],"direction":"col","children":[{"component":"v2-layout","href":"v2-layout","layout":["calc(50% - 10px)","calc(50% - 10px)"],"direction":"col","children":[{"component":"v2-layout","href":"v2-layout","layout":["",""],"direction":"row","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"账户查询","editable":false,"ctnClass":"eb-creditCard__menus-header","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567418714462,"pid":1567418678448,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"icon":"el-icon-arrow-right","iconPosition":"left","name":"${$item.name}","insideRoute":{"useInsideRoute":true,"route":""},"funcBtn":{"showFuncBtn":false,"funcBtnName":"添加","funcBtnParams":""},"funcIcon":{"showFuncIcon":false,"funcIconClass":"el-icon-error","funcIconParams":""},"ctnClass":"eb-creditCard__menus-main","customClass":"","__type":"loop","__loopTarget":"accountMenu","__capacity":"1","component":"v2-ebank-shortcut","href":"v2-ebank-shortcut","children":[],"events":{},"id":1567418857876,"pid":1567418678448,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"style":{},"pid":"1567417603409-0","id":1567418678448,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"eb-creditCard__grid","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"__type":""},{"component":"v2-layout","href":"v2-layout","layout":["",""],"direction":"row","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"分期理财","editable":false,"ctnClass":"eb-creditCard__menus-header","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567418746885,"pid":1567418720203,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"icon":"el-icon-arrow-right","iconPosition":"left","name":"${$item.name}","insideRoute":{"useInsideRoute":true,"route":""},"funcBtn":{"showFuncBtn":false,"funcBtnName":"添加","funcBtnParams":""},"funcIcon":{"showFuncIcon":false,"funcIconClass":"el-icon-error","funcIconParams":""},"ctnClass":"eb-creditCard__menus-main","customClass":"","__type":"loop","__loopTarget":"wealthMenu","__capacity":"1","component":"v2-ebank-shortcut","href":"v2-ebank-shortcut","children":[],"events":{},"id":1567419000082,"pid":1567418720203,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"style":{},"pid":"1567417603409-1","id":1567418720203,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"eb-creditCard__grid","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"realSize":["输入","输入"]}],"style":{},"pid":"1567417617048-0","id":1567417603409,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"__type":""},{"component":"v2-layout","href":"v2-layout","layout":["",""],"direction":"row","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"变更设置","editable":false,"ctnClass":"eb-creditCard__menus-header","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567418771642,"pid":1567418658322,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"icon":"el-icon-arrow-right","iconPosition":"left","name":"${$item.name}","insideRoute":{"useInsideRoute":true,"route":""},"funcBtn":{"showFuncBtn":false,"funcBtnName":"添加","funcBtnParams":""},"funcIcon":{"showFuncIcon":false,"funcIconClass":"el-icon-error","funcIconParams":""},"ctnClass":"eb-creditCard__menus-main","customClass":"","__type":"loop","__loopTarget":"settingMenu","__capacity":"1","component":"v2-ebank-shortcut","href":"v2-ebank-shortcut","children":[],"events":{},"id":1567418993158,"pid":1567418658322,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"style":{},"pid":"1567417617048-1","id":1567418658322,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"eb-creditCard__grid","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"style":{},"pid":1567417533139,"id":1567417617048,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"eb-creditCard__menus","customClass":"","realSize":["输入","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"__type":""}],"style":{},"pid":"root-0","id":1567417533139,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"__type":""}],"events":{},"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        tabBar:// tabBar
{
  tabs: [
    {text: '信用卡'}
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
    id: '', alias: '个人账户', cardType: '信用卡',
    // imgSrc: 'img/card2.jpg',
    imgSrc: 'img/bankcard-light.png',
    cardID: '1234 xxxx xxxx 2222',
    funds: [
      {title: '本期账单', sum: '100.00'},
      {title: '未出账单', sum: '100.00'},
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
    id: '', alias: '个人账户', cardType: '信用卡',
    // imgSrc: 'img/card2.jpg',
    imgSrc: 'img/bankcard-light.png',
    cardID: '1234 xxxx xxxx 2222',
    funds: [
      {title: '本期账单', sum: '100.00'},
      {title: '未出账单', sum: '100.00'},
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
ctx.$store.commit("registerBind",{ vueObj:this, data:this.accountMenu, dataStr:"accountMenu", wid:1567418857876, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.name", wid:1567418857876, modelKey:"name" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.wealthMenu, dataStr:"wealthMenu", wid:1567419000082, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.name", wid:1567419000082, modelKey:"name" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.settingMenu, dataStr:"settingMenu", wid:1567418993158, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.name", wid:1567418993158, modelKey:"name" });
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