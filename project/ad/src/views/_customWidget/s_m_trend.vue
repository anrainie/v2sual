<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567607410704" :wid="`1567607410704`" :index="0" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567607538725" :wid="`1567607538725`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567607573144" :wid="`1567607573144`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="trendClass" id="1567607664010" :wid="`1567607664010`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567607864393" :wid="`1567607864393`" :index="4" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1567607974090" :wid="`1567607974090`" :index="5" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0","height":"2rem","animation-duration":"1s","width":"100%"},"id":1567607410704,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${title}","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.3rem","left":"7%","animation-duration":"1s"},"id":1567607538725,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${number}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.8rem","left":"7%","font-size":"0.48rem","animation-duration":"1s"},"id":1567607573144,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${trend}","customClass":"${trendClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.95rem","left":"20%","font-size":"0.28rem","animation-duration":"1s"},"id":1567607664010,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${title2}","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.4rem","left":"7%","animation-duration":"1s"},"id":1567607864393,"pid":"root","animate":["","animated"]},{"configs":"${trendOption}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"0","left":"2rem","width":"3.5rem","height":"2rem","animation-duration":"1s"},"id":1567607974090,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return `近6日开户趋势`}},
number:{default:()=>{return 26}},
trend:{default:()=>{return `3.7%`}},
trendClass:{default:()=>{return ['grow']}},
title2:{default:()=>{return `今日开户数`}},
trendOption:{default:()=>{return {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color:'#52D5B0'
        }
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1567607538725, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.number, dataStr:"number", wid:1567607573144, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.trend, dataStr:"trend", wid:1567607664010, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.trendClass, dataStr:"trendClass", wid:1567607664010, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title2, dataStr:"title2", wid:1567607864393, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.trendOption, dataStr:"trendOption", wid:1567607974090, modelKey:"configs" });/**bind over**/
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