<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1566908431325" :wid="`1566908431325`" :index="0" :pid="`root`"></v2-component-image><v2-component-s_glass_title class="V2Widget" :style="`position:absolute;top:85px;left:36px;width:350px;height:50px;`" id="1566907857287" :wid="`1566907857287`" :index="1" :pid="`root`" :tradeCount="tradeCount" :tradeMeasure="tradeMeasure"></v2-component-s_glass_title><v2-component-text class="V2Widget" :class="[`s_title1`]" id="1566908161007" :wid="`1566908161007`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`more_detail`]" id="1566908118859" :wid="`1566908118859`" :index="3" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1566908160765" :wid="`1566908160765`" :index="4" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            import v2ComponentS_glass_title from '@/views/_customWidget/s_glass_title.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{},"src":"img/s_group3.png","height":"100%","width":"100%","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","fixation":true,"component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0px","left":"-5px","width":429,"height":310},"id":1566908431325,"pid":"root","animate":["","animated"]},{"dataBasket":{"tradeCount":"tradeCount","tradeMeasure":"tradeMeasure"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_glass_title","href":"v2-component-s_glass_title","cptpath":"\\src\\views\\_customWidget\\s_glass_title.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"85px","left":"36px","width":"350px","height":"50px"},"id":1566907857287,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${title}","editable":false,"ctnClass":"","customClass":"s_title1","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"41px","left":"36px"},"id":1566908161007,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"更多详情 >>","editable":false,"ctnClass":"","customClass":"more_detail","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"41px","left":"276px"},"id":1566908118859,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${tradeMeConfig}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"135px","left":"36px","width":"339px","height":"158px"},"id":1566908160765,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        
                    }
                },
                props:{
                  tradeCount:{default:()=>{return 11512}},
tradeMeasure:{default:()=>{return 22351}},
tradeMeConfig:{default:()=>{return {
    
    grid: {
        left: '3%',
        top:'0',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
}}},
title:{default:()=>{return `理财销售业务量及金额`}}
                },
                mixins:[root,widget,cpt,events,mixins],
                components:{v2ComponentS_glass_title},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeCount, dataStr:"tradeCount", wid:1566907857287, modelKey:"tradeCount" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeMeasure, dataStr:"tradeMeasure", wid:1566907857287, modelKey:"tradeMeasure" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeMeConfig, dataStr:"tradeMeConfig", wid:1566908160765, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1566908161007, modelKey:"text" });/**bind over**/
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