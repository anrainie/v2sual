<template><v2-ctn-xy :wid="`root`"><v2-component-echart class="V2Widget" id="1567413889862" :wid="`1567413889862`" :index="0" :pid="`root`"></v2-component-echart><v2-component-text class="V2Widget" id="1567413934820" :wid="`1567413934820`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567413923807" :wid="`1567413923807`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567414239674" :wid="`1567414239674`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567414270069" :wid="`1567414270069`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567414382783" :wid="`1567414382783`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567414326228" :wid="`1567414326228`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567414320903" :wid="`1567414320903`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567414362999" :wid="`1567414362999`" :index="8" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"configs":"${option}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"-1.00841px","left":"2.0126px","width":"54px","height":"54px"},"id":1567413889862,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${bankName}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"-1.0126px","left":"67px","font-size":"18px","color":"#2D8CF0"},"id":1567413934820,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"开户数","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"32.0336px","left":"67.0084px","font-size":"16px","color":"#FFFFFF"},"id":1567413923807,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${openAccNum}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"32.0042px","left":"127.012px","font-size":"16px","color":"#FFFFFF"},"id":1567414239674,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"户","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"32.0042px","left":"159.004px","font-size":"16px","color":"#FFFFFF"},"id":1567414270069,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"|","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"32.0084px","left":"193.012px","font-size":"16px","color":"#2D8CF0"},"id":1567414382783,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"销户数","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"32.0042px","left":"208.008px","font-size":"16px","color":"#FFFFFF"},"id":1567414326228,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${closeAccNum}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"32.0042px","left":"278.008px","font-size":"16px","color":"#FFFFFF"},"id":1567414320903,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"户","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"32.0083px","left":"299.012px","font-size":"16px","color":"#FFFFFF"},"id":1567414362999,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  bankName:{default:()=>{return `莘庄工业园支行`}},
openAccNum:{default:()=>{return 103}},
closeAccNum:{default:()=>{return 27}},
option:{default:()=>{return {
   tooltip : {
        trigger: 'item',
        formatter: "{b}:{c}({d}%)"
    },
    calculable : false,
    color:['red','#4876FF','#8DEEEE'],
    series : [
        {
            type:'pie',
            clockWise:false,
            radius : '100%',//设置饼图大小
            center: ['50%', '50%'],//设置饼图位置
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
             data: [
                {value: 1, name:'异常数'},
                {value: 3, name:'离线数'},
                {value: 9, name:'在线数'},
                
            ]
        }
    ]
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankName, dataStr:"bankName", wid:1567413934820, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.openAccNum, dataStr:"openAccNum", wid:1567414239674, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.closeAccNum, dataStr:"closeAccNum", wid:1567414320903, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.option, dataStr:"option", wid:1567413889862, modelKey:"configs" });/**bind over**/
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