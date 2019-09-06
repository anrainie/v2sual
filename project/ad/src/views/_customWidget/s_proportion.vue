<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567757941699" :wid="`1567757941699`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="textClass1" id="1567758011419" :wid="`1567758011419`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass2" id="1567758059178" :wid="`1567758059178`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass1" id="1567758064360" :wid="`1567758064360`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass2" id="1567758028321" :wid="`1567758028321`" :index="4" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"src":"img/shanghai/s_bank_trans.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"0px","left":"0px","width":"100%","height":"98%","animation-duration":"1s"},"id":1567757941699,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center"}},"text":"${text1}","customClass":"${textClass1}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20%","left":"0","width":"40%","animation-duration":"1s"},"id":1567758011419,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center"}},"text":"${text2}","customClass":"${textClass2}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"60%","left":"0","width":"40%","animation-duration":"1s"},"id":1567758059178,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center"}},"text":"${text3}","customClass":"${textClass1}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20%","left":"60%","width":"40%","animation-duration":"1s"},"id":1567758064360,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center"}},"text":"${text4}","customClass":"${textClass2}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"60%","left":"60%","width":"40%","animation-duration":"1s"},"id":1567758028321,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{}]}},
                        
                    }
                },
                props:{
                  text1:{default:()=>{return `1,807万`}},
text2:{default:()=>{return `今日轧差`}},
text3:{default:()=>{return `4,594万`}},
text4:{default:()=>{return `昨日现金余额`}},
textClass1:{default:()=>{return `vda-propertion-num`}},
textClass2:{default:()=>{return `vda-propertion-text`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass2, dataStr:"textClass2", wid:1567758059178, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text2, dataStr:"text2", wid:1567758059178, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass2, dataStr:"textClass2", wid:1567758028321, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text4, dataStr:"text4", wid:1567758028321, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass1, dataStr:"textClass1", wid:1567758064360, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text3, dataStr:"text3", wid:1567758064360, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass1, dataStr:"textClass1", wid:1567758011419, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1567758011419, modelKey:"text" });/**bind over**/
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