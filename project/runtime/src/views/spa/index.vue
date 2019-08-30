<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:;" key="0"><v2container id="1565940916625" :wid="`1565940916625`" :index="0" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" style="width:120px;" key="0"><v2-ctn-order class="V2Widget" id="1567067777125" :wid="`1567067777125`" :index="0" :pid="`1565940916625`"><v2loop class="V2Widget" id="1567067806810" :wid="`1567067806810`" :index="0" :pid="`1567067777125`"><template v-slot="scope"><v2-ebank-shortcut class="V2Widget" :id="`1567067806810-${scope._key}`" :wid="`1567067806810-${scope._key}`" :index="scope._key" :pid="`1567067806810`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut></template></v2loop></v2-ctn-order></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="width:calc(100% - 120px);" key="1"><v2-ctn-order class="V2Widget" id="1565940946831" :wid="`1565940946831`" :index="1" :pid="`1565940916625`"><v2-ebank-tabs class="V2Widget" id="1567068987730" :wid="`1567068987730`" :index="0" :pid="`1565940946831`"></v2-ebank-tabs><v2loop class="V2Widget" id="1565941313040" :wid="`1565941313040`" :index="1" :pid="`1565940946831`"><template v-slot="scope"><v2-ebank-bankcard class="V2Widget" :id="`1565941313040-${scope._key}`" :wid="`1565941313040-${scope._key}`" :index="scope._key" :pid="`1565941313040`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-bankcard></template></v2loop></v2-ctn-order></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:;" key="1"><v2container id="1565940932995" :wid="`1565940932995`" :index="1" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" style="width:33.33%;" key="0"><v2-ctn-order class="V2Widget" id="1565940907364" :wid="`1565940907364`" :index="0" :pid="`1565940932995`"><v2-ebank-tabs class="V2Widget" id="1567069066913" :wid="`1567069066913`" :index="0" :pid="`1565940907364`"></v2-ebank-tabs><v2loop class="V2Widget" id="1567071207399" :wid="`1567071207399`" :index="1" :pid="`1565940907364`"><template v-slot="scope"><v2-ebank-shortcut class="V2Widget" :id="`1567071207399-${scope._key}`" :wid="`1567071207399-${scope._key}`" :index="scope._key" :pid="`1567071207399`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut></template></v2loop></v2-ctn-order></el-col><el-col class="V2ContainerBlock" style="width:33.33%;" key="1"><v2container id="1567074636334" :wid="`1567074636334`" :index="1" :pid="`1565940932995`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50px;" key="0"><v2-ctn-order class="V2Widget" id="1567074633082" :wid="`1567074633082`" :index="0" :pid="`1567074636334`"><v2-ebank-tabs class="V2Widget" id="1567074574476" :wid="`1567074574476`" :index="0" :pid="`1567074633082`"></v2-ebank-tabs></v2-ctn-order></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="1"><v2-switchable class="V2Widget" id="1567074607686" :wid="`1567074607686`" :index="1" :pid="`1567074636334`" activeindex="recommendNoticeTabBar.activeIndex"><template><v2container id="1567074667461" :wid="`1567074667461`" :index="0" :pid="`1567074607686`" v-if="recommendNoticeTabBar.activeIndex==0"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-component-carousel class="V2Widget" id="1567129300851" :wid="`1567129300851`" :index="0" :pid="`1567074667461`"></v2-component-carousel></el-row></v2container><v2container id="1567074692298" :wid="`1567074692298`" :index="1" :pid="`1567074607686`" v-if="recommendNoticeTabBar.activeIndex==1"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-ebank-paragraph class="V2Widget" id="1567129296149" :wid="`1567129296149`" :index="0" :pid="`1567074692298`"></v2-ebank-paragraph></el-row></v2container></template></v2-switchable></el-row></v2container></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="width:33.33%;" key="2"><v2-ctn-order class="V2Widget" id="1565940931362" :wid="`1565940931362`" :index="2" :pid="`1565940932995`"><v2-ebank-calendar class="V2Widget" id="1567068580571" :wid="`1567068580571`" :index="0" :pid="`1565940931362`"></v2-ebank-calendar></v2-ctn-order></el-col></v2container></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":["",""],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"width":"","height":"","margin":"10px","padding":"10px","background":"","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"theme":{},"style":{},"icon":"${$item.icon}","iconPosition":"top","name":"${$item.name}","insideRoute":{"useInsideRoute":true,"route":"${$item.route}"},"funcBtn":{"showFuncBtn":false,"funcBtnName":"添加","funcBtnParams":""},"funcIcon":{"showFuncIcon":false,"funcIconClass":"el-icon-error","funcIconParams":""},"ctnClass":"","customClass":"","__type":"loop","__loopTarget":"shortcuts","__capacity":"1","component":"v2-ebank-shortcut","href":"v2-ebank-shortcut","children":[],"events":{},"id":1567067806810,"pid":1567067777125,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567067777125,"pid":1565940916625,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"display":"","width":"","height":"","margin":"10px","padding":"","background":"","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"active":"","tabs":"${bankCardsTabBar.tabs}","tabsType":"","hasBtns":true,"btns":"${bankCardsTabBar.btns}","btnsType":"text","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-tabs","href":"v2-ebank-tabs","children":[],"events":{},"id":1567068987730,"pid":1565940946831,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"alias":"${$item.alias}","cardType":"${$item.cardType}","imgSrc":"${$item.imgSrc}","cardID":"${$item.cardID}","funds":"${$item.funds}","shortcuts":"${$item.shortcuts}","ctnClass":"","customClass":"","__type":"loop","__loopTarget":"bankCards","__capacity":"4","component":"v2-ebank-bankcard","href":"v2-ebank-bankcard","children":[],"events":{},"id":1565941313040,"pid":1565940946831,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""}}],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940946831,"pid":1565940916625,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["120","calc(100% - 120px)"],"realSize":["px","输入"],"id":1565940916625,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"display":"","width":"","height":"200px","margin":"10px","padding":"","background":"","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"active":"","tabs":"${favoritesTabBar.tabs}","tabsType":"","hasBtns":true,"btns":"${favoritesTabBar.btns}","btnsType":"text","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-tabs","href":"v2-ebank-tabs","children":[],"events":{},"id":1567069066913,"pid":1565940907364,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"icon":"${$item.icon}","iconPosition":"top","name":"${$item.name}","insideRoute":{"useInsideRoute":true,"route":""},"funcBtn":{"showFuncBtn":false,"funcBtnName":"添加","funcBtnParams":""},"funcIcon":{"showFuncIcon":false,"funcIconClass":"el-icon-error","funcIconParams":""},"ctnClass":"","customClass":"","__type":"loop","__loopTarget":"favorites","__capacity":"4","component":"v2-ebank-shortcut","href":"v2-ebank-shortcut","children":[],"events":{},"id":1567071207399,"pid":1565940907364,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"22px","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940907364,"pid":1565940932995,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"component":"v2-layout","href":"v2-layout","layout":[50,""],"direction":"row","children":[{"display":"","width":"","height":"200px","margin":"10px","padding":"","background":"","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"active":"${recommendNoticeTabBar.activeIndex}","tabs":"${recommendNoticeTabBar.tabs}","tabsType":"","hasBtns":false,"btns":"","btnsType":"text","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-tabs","href":"v2-ebank-tabs","children":[],"events":{},"id":1567074574476,"pid":1567074633082,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567074633082,"pid":1567074636334,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"recommendNoticeTabBar.activeIndex","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1567074667461,"pid":1567074607686,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{},"list":"","trigger":"hover","autoplay":true,"interval":"1000","indicator":"","arrow":"hover","type":"","direction":"horizontal","height":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-carousel","href":"v2-component-carousel","children":[],"events":{},"id":1567129300851,"pid":1567074667461,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1567074692298,"pid":1567074607686,"component":"v2Container","layout":[100],"position":"row","children":[{"theme":{},"style":{},"header":"标题","divider":true,"content":"","indent":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-paragraph","href":"v2-ebank-paragraph","children":[],"events":{},"id":1567129296149,"pid":1567074692298,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"customEditor":"v2EditorSwitch","id":1567074607686,"pid":1567074636334,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"style":{},"pid":1565940932995,"id":1567074636334,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["px","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"display":"","width":"","height":"","margin":"10px","padding":"","background":"","border":"1px solid #ccc","borderRadius":"5px","boxShadow":"1px 1px 5px #ccc","thisClass":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"notes":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-calendar","href":"v2-ebank-calendar","children":[],"events":{},"id":1567068580571,"pid":1565940931362,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1565940931362,"pid":1565940932995,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":[33.33,33.33,33.33],"realSize":["%","%","%"],"id":1565940932995,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnClass":"","customClass":"","realSize":["输入","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"animate":{"0":"","1":"animated","name":"","duration":0,"delay":0,"classCode":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        shortcuts:[
  {
    name: '账户预览',
    title: '账户预览',
    // icon: 'el-icon-s-finance',
    icon: '/img/custom-aweb-logo.png',
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
bankCardsTabBar:{
  tabs: [
    {text: '我的'}
  ],
  btns: [
    {
      text: '显示全部余额',
      icon: 'el-icon-view'
    }
  ]
},
bankCards:// bankCards
[
  {
    id: '', alias: '招商银行 | 一卡通', cardType: '借记卡',
    // imgSrc: '/v1/runtime/img/bankcard-dark.png',
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
],
favoritesTabBar:// favoritesTabBar
{
  tabs: [
    {text: '我的最爱'}
  ],
  btns: [
    {
      text: '设置',
      icon: 'el-icon-setting'
    }
  ]
},
favorites:// favorites
[
  {
    name: '账户预览',
    title: '账户预览',
    // icon: 'el-icon-s-finance',
    icon: '/img/custom-aweb-logo.png',
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
  },
  {
    name: '账户预览',
    title: '账户预览',
    // icon: 'el-icon-s-finance',
    icon: '/img/custom-aweb-logo.png',
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
  },
  {
    name: '账户预览',
    title: '账户预览',
    // icon: 'el-icon-s-finance',
    icon: '/img/custom-aweb-logo.png',
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
recommendNoticeTabBar:// recommendNoticeTabBar
{
  tabs: [
    {text: '缤纷推荐'},
    {text: '最新公告'}
  ],
  activeIndex: '0'
},
test1:123123,
test2:`123;1243af;34.zcj7194h`,
test3:`return [1,2,3]`,
test4:"123123af"
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.shortcuts, dataStr:"shortcuts", wid:1565940995955, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.icon", wid:1565940995955, modelKey:"icon" });
ctx.$store.commit("registerBind",{ dataStr:"$item.name", wid:1565940995955, modelKey:"name" });
ctx.$store.commit("registerBind",{ dataStr:"$item.route", wid:1565940995955, modelKey:"route" });
ctx.$store.commit("registerBind",{ dataStr:"classes.ctn1", wid:1565940995955, modelKey:"ctnClass" });
ctx.$store.commit("registerBind",{ dataStr:"classes.comp1", wid:1565940995955, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCards, dataStr:"bankCards", wid:1565941313040, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.alias", wid:1565941313040, modelKey:"alias" });
ctx.$store.commit("registerBind",{ dataStr:"$item.cardType", wid:1565941313040, modelKey:"cardType" });
ctx.$store.commit("registerBind",{ dataStr:"$item.imgSrc", wid:1565941313040, modelKey:"imgSrc" });
ctx.$store.commit("registerBind",{ dataStr:"$item.cardID", wid:1565941313040, modelKey:"cardID" });
ctx.$store.commit("registerBind",{ dataStr:"$item.funds", wid:1565941313040, modelKey:"funds" });
ctx.$store.commit("registerBind",{ dataStr:"$item.shortcuts", wid:1565941313040, modelKey:"shortcuts" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.shortcuts, dataStr:"shortcuts", wid:1567067806810, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.icon", wid:1567067806810, modelKey:"icon" });
ctx.$store.commit("registerBind",{ dataStr:"$item.name", wid:1567067806810, modelKey:"name" });
ctx.$store.commit("registerBind",{ dataStr:"$item.route", wid:1567067806810, modelKey:"route" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCardsTabBar.tabs, dataStr:"bankCardsTabBar.tabs", wid:1567068987730, modelKey:"tabs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCardsTabBar.btns, dataStr:"bankCardsTabBar.btns", wid:1567068987730, modelKey:"btns" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.favoritesTabBar.tabs, dataStr:"favoritesTabBar.tabs", wid:1567069066913, modelKey:"tabs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.favoritesTabBar.btns, dataStr:"favoritesTabBar.btns", wid:1567069066913, modelKey:"btns" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.favorites, dataStr:"favorites", wid:1567071207399, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.icon", wid:1567071207399, modelKey:"icon" });
ctx.$store.commit("registerBind",{ dataStr:"$item.name", wid:1567071207399, modelKey:"name" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.recommendNoticeTabBar.tabs, dataStr:"recommendNoticeTabBar.tabs", wid:1567069092926, modelKey:"tabs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.recommendNoticeTabBar.activeIndex, dataStr:"recommendNoticeTabBar.activeIndex", wid:1567069092926, modelKey:"active" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.recommendNoticeTabBar.activeIndex, dataStr:"recommendNoticeTabBar.activeIndex", wid:1567074574476, modelKey:"active" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.recommendNoticeTabBar.tabs, dataStr:"recommendNoticeTabBar.tabs", wid:1567074574476, modelKey:"tabs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.recommendNoticeTabBar.activeIndex, dataStr:"recommendNoticeTabBar.activeIndex", wid:1567074607686, modelKey:"activeIndex" });/**bind over**/
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