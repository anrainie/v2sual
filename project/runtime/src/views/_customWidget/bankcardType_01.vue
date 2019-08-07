<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:150px;width:100%;" key="0"><v2-component-image class="V2Widget" id="1563956471336" :wid="`1563956471336`" :index="0" :pid="`root`"></v2-component-image></el-row><el-row class="V2ContainerBlock" style="height:150px;width:100%;position:absolute;top:0;left:0" key="1"><v2container id="1563956373172" :wid="`1563956373172`" :index="1" :pid="`root`"><el-row class="V2ContainerBlock" style="height:100px;width:100%;" key="0"><v2container id="1564107719907" :wid="`1564107719907`" :index="0" :pid="`1563956373172`"><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:120px;" key="0"><v2loop class="V2Widget" id="1564107693232" :wid="`1564107693232`" :index="0" :pid="`1564107719907`"><template v-slot="scope"><v2-component-text-value class="V2Widget" :id="`1564107693232-${scope._key}`" :wid="`1564107693232-${scope._key}`" :index="scope._key" :pid="`1564107693232`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-component-text-value></template></v2loop></el-col><el-col class="V2ContainerBlock" style="height:100%;width:30px;" key="1"><v2container id="1564110690153" :wid="`1564110690153`" :index="1" :pid="`1564107719907`"><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:50%;" key="0"><v2-component-text class="V2Widget" id="1564110671757" :wid="`1564110671757`" :index="0" :pid="`1564110690153`"></v2-component-text></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:50%;" key="1"><v2-component-icon class="V2Widget" id="1564110732517" :wid="`1564110732517`" :index="1" :pid="`1564110690153`"></v2-component-icon></el-col></v2container></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50px;width:100%;" key="1"><v2-component-text class="V2Widget" id="1563956376747" :wid="`1563956376747`" :index="1" :pid="`1563956373172`"></v2-component-text></el-row></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50px;width:100%;" key="2"><v2-component-text class="V2Widget" id="1563956129027" :wid="`1563956129027`" :index="2" :pid="`root`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:30px;width:100%;position:absolute;top:172px" key="3"><v2loop class="V2Widget" id="1564108768405" :wid="`1564108768405`" :index="3" :pid="`root`"><template v-slot="scope"><v2-component-btn class="V2Widget" :id="`1564108768405-${scope._key}`" :wid="`1564108768405-${scope._key}`" :index="scope._key" :pid="`1564108768405`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-component-btn></template></v2loop></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/utils/v2-view';import events from "@/utils/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["150","150","50","30"],"direction":"row","children":[{"src":"${cardBg}","height":"100%","width":"100%","customClass":"${imgClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"id":1563956471336,"pid":1563956039827,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"ctnClass":""},{"component":"v2-layout","href":"v2-layout","layout":["100","50"],"direction":"row","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","ctnClass":"","customClass":"${figureClass.ctn}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"component":"v2-layout","href":"v2-layout","layout":["120","30"],"direction":"col","children":[{"style":{"title":{"background-color":"","height":"","width":"","color":""},"value":{"background-color":"","height":"","width":"","color":""}},"title":"${$item.val}","type":"text","value":"${$item.key}","direction":"text-value-row","ctnClass":"","customClass":"","__type":"loop","__loopTarget":"figure","__capacity":"1","component":"v2-component-text-value","href":"v2-component-text-value","children":[],"events":{},"id":1564107693232,"pid":1564110716304,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"13px","color":"#fff"}},{"component":"v2-layout","href":"v2-layout","layout":[50,50],"direction":"col","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"余额","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{"_op_componentText_text":{"click":["figureUnfold"]}},"id":1564110671757,"pid":1564110690153,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"style":{"iStyle":{"font-size":"","font-weight":""}},"icon":"${figureArrowIcon}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{"_op_componentIcon_icon":{"click":["figureUnfold"]}},"id":1564110732517,"pid":1564110690153,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"sizeLocked":true}],"style":{},"pid":1564110716304,"id":1564110690153,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"${figureClass.opr}","realSize":["%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"__type":"","events":{}}],"style":{},"pid":1564107719907,"id":1564110716304,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["px","px"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"__type":"","animation":"bounceInLeft"}],"events":{},"layout":[100],"realSize":["%"],"id":1564107719907,"pid":1563956373172,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","background-color":"","border-radius":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"text":"${cardID}","editable":false,"customClass":"${cardIDClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563956376747,"pid":1564107843429,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"ctnClass":""}],"style":{},"pid":1563956039827,"id":1563956373172,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","border-radius":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"realSize":["px","px"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"__type":"","ctnClass":"","customClass":"${infosClass}"},{"text":"${cardName}","editable":false,"customClass":"${cardNameClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563956129027,"pid":1563956039827,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","font-size":"14px"},"ctnClass":""},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"${$item.title}","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"${btnClass}","__type":"loop","__loopTarget":"btns","__capacity":"3","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["bankcardBtnEv"]}},"id":1564108768405,"pid":1563956039827,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"root-0","id":1563956039827,"realSize":["px","px","px","px"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"absolute","top":"0","right":"","left":"0","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"absolute","top":"172px","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"__type":"","customClass":"${compClass}","ctnClass":"${compClass}"}],"events":{},"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"realSize":[]}},
                        
                    }
                },
                props:{
                  compClass:{default:()=>{return ['bankcard', 'bankcard--type-01']}},
imgClass:{default:()=>{return ['bankcard__img']}},
infosClass:{default:()=>{return ['bankcard__infos']}},
btns:{default:()=>{return [
  {title: '转账汇款', path: '/newPage', page: 'spa/newPage', status: true, type: 'BLANK'},
  {title: '生活缴费', path: '/open', page: 'spa/open', status: true, type: 'BLANK'},
  {title: '交易咨询', path: '/index', page: 'spa/index', status: true, type: 'BLANK'}
]}},
btnClass:{default:()=>{return ['bankcard__btn', 'el-button--mini']}},
cardNameClass:{default:()=>{return ['bankcard__name']}},
btnsClass:{default:()=>{return ['bankcard__btns']}},
cardName:{default:()=>{return '一张银行卡'}},
cardID:{default:()=>{return '1234 5678 9101 1121 314'}},
figure:{default:()=>{return [
  {key: '金额1', val: '1000.00'},
  {key: '金额2', val: '2000.00'}
]
}},
figureClass:{default:()=>{return {
    ctn: ['bankcard__figure'],
    ctt: ['bankcard__figure_ctt'],
    opr: ['bankcard__figure_opr']
}}},
cardIDClass:{default:()=>{return ['bankcard__cardid']}},
cardBg:{default:()=>{return 'img/bankcard-light.png'}},
figureArrowIcon:{default:()=>{return 'el-icon-arrow-right'}}
                },
                mixins:[root,widget,cpt,events],
                
                methods:{bankcardBtnEv(vue,event){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = console.log(event)
console.log(vue)
console.log(vue.$item)

let btnCtt = event.target.innerText

switch (btnCtt) {

  case '转账汇款':
    console.log('转账汇款');
    break;

  default:
    console.log('其他按钮')
    break;
}

this.open(vue.$item);
})();
                    /*overview over*/
                    
                    
              }, figureUnfold(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = // (function () {
// })()

(() => {
    if(ctx.figureArrowIcon === 'el-icon-arrow-right') {
        ctx.figureClass.ctn.push('unfold')
        ctx.figureArrowIcon = 'el-icon-arrow-left'
    }else {
        ctx.figureClass.ctn.pop('unfold')
        ctx.figureArrowIcon = 'el-icon-arrow-right'
    }

    return
})()


// this.figureClass.ctn.push('unfold')
// this.figureArrowIcon = 'el-icon-arrow-left'

console.log(this.figureClass);
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankcardClass, dataStr:"bankcardClass", wid:1563862813521, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.btnsClass, dataStr:"btnsClass", wid:1563869881193, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.compClass, dataStr:"compClass", wid:1563871254759, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardID, dataStr:"cardID", wid:1563956376747, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardIDClass, dataStr:"cardIDClass", wid:1563956376747, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardName, dataStr:"cardName", wid:1563956129027, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardNameClass, dataStr:"cardNameClass", wid:1563956129027, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.imgClass, dataStr:"imgClass", wid:1563956471336, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardBg, dataStr:"cardBg", wid:1563956471336, modelKey:"src" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.compClass, dataStr:"compClass", wid:1563956039827, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.compClass, dataStr:"compClass", wid:1563956039827, modelKey:"ctnClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.infosClass, dataStr:"infosClass", wid:1563956373172, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.figure, dataStr:"figure", wid:1564107693232, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.key", wid:1564107693232, modelKey:"value" });
ctx.$store.commit("registerBind",{ dataStr:"$item.val", wid:1564107693232, modelKey:"title" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.btns, dataStr:"btns", wid:1564108768405, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"btnClass", wid:1564108768405, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ dataStr:"$item.title", wid:1564108768405, modelKey:"btnName" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.figureClass.ctn, dataStr:"figureClass.ctn", wid:1564107719907, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.figureClass.opr, dataStr:"figureClass.opr", wid:1564110690153, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.figureArrowIcon, dataStr:"figureArrowIcon", wid:1564110732517, modelKey:"icon" });/**bind over**/
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