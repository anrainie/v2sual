<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1566292911453" :wid="`1566292911453`" :index="0" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1566293006059" :wid="`1566293006059`" :index="1" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1566293346292" :wid="`1566293346292`" :index="2" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="vda-f-text" id="1566294467452" :wid="`1566294467452`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="vda-text2" id="1566294480259" :wid="`1566294480259`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="vda-text2" id="1566294670227" :wid="`1566294670227`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="vda-val" id="1566294724804" :wid="`1566294724804`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="vda-value" id="1566294666260" :wid="`1566294666260`" :index="7" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1566294884157" :wid="`1566294884157`" :index="8" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"1px","left":"1px","width":1014,"height":134},"ctnClass":"","customClass":"","events":{},"height":"100%","href":"v2-component-image","src":"img/wanglian.png","style":{},"width":"100%","__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1566292911453,"pid":"root","animate":["","animated"]},{"style":{},"src":"img/xianquan.png","height":"100%","width":"100%","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1.0203px","left":"241.027px"},"id":1566293006059,"pid":"root","animate":["","animated"]},{"style":{},"src":"${imgUrl}","height":"100%","width":"100%","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"41px","left":"291px","width":49,"height":54},"id":1566293346292,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${title}","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"20.2px","left":"23px"},"id":1566294467452,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"响应时间","editable":false,"ctnClass":"","customClass":"vda-text2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"63px","left":"23px"},"id":1566294480259,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"成功率","editable":false,"ctnClass":"","customClass":"vda-text2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"95px","left":"23px"},"id":1566294670227,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${respTime}","editable":false,"ctnClass":"","customClass":"vda-val","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"63px","left":"123px"},"id":1566294724804,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${succRare}","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"95px","left":"123px"},"id":1566294666260,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${config}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":1,"left":398,"width":611,"height":122},"id":1566294884157,"pid":"root","animate":["","animated"]}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        
                    }
                },
                props:{
                  imgUrl:{default:()=>{return 'img/alipay.png'}},
title:{default:()=>{return '财付通'}},
respTime:{default:()=>{return '384ms'}},
succRare:{default:()=>{return '100%'}},
config:{default:()=>{return {
    grid:{
        left:'10%',
        right:0,
        top:10,
        bottom:20
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.imgUrl, dataStr:"imgUrl", wid:1566293346292, modelKey:"src" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1566294467452, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.respTime, dataStr:"respTime", wid:1566294724804, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.succRare, dataStr:"succRare", wid:1566294666260, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.config, dataStr:"config", wid:1566294884157, modelKey:"configs" });/**bind over**/
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