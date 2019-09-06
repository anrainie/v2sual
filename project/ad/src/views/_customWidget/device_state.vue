<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567764883240" :wid="`1567764883240`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" id="1567764981515" :wid="`1567764981515`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567764922061" :wid="`1567764922061`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765022543" :wid="`1567765022543`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567764951962" :wid="`1567764951962`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765049623" :wid="`1567765049623`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765017184" :wid="`1567765017184`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765045348" :wid="`1567765045348`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765014080" :wid="`1567765014080`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765017667" :wid="`1567765017667`" :index="9" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765101578" :wid="`1567765101578`" :index="10" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567765152846" :wid="`1567765152846`" :index="11" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="radioClass" id="1567765167826" :wid="`1567765167826`" :index="12" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"component":"v2-component-image","commonStyle":{"position":"absolute","left":"3.35%","width":"3.3rem","height":"3.3rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"${img}","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567764883240,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${name}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2125px","left":"14.7%","animation-duration":"1s"},"id":1567764981515,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"交易量","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1px","left":"91px","animation-duration":"1s","width":"30px","height":"13px"},"id":1567764922061,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"时点环比","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2px","left":"56%","animation-duration":"1s"},"id":1567765022543,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"完好","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2px","left":"75%","animation-duration":"1s"},"id":1567764951962,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"开机","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14px","left":"75%","animation-duration":"1s"},"id":1567765049623,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${intact}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2px","left":"calc(75% + 2rem)","animation-duration":"1s"},"id":1567765017184,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${open}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14px","left":"calc(75% + 2rem)","animation-duration":"1s"},"id":1567765045348,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${intactRate}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2px","right":"0","animation-duration":"1s"},"id":1567765014080,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${openRate}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14px","right":"0","animation-duration":"1s"},"id":1567765017667,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${total}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14px","left":"14.7%","animation-duration":"1s"},"id":1567765101578,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${measure}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14px","left":"33%","animation-duration":"1s"},"id":1567765152846,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${radio}","customClass":"${radioClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14px","left":"56%","animation-duration":"1s"},"id":1567765167826,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},{},{},{}]}},
                        
                    }
                },
                props:{
                  name:{default:()=>{return `CDS`}},
measure:{default:()=>{return `206,132笔`}},
radio:{default:()=>{return `7.3%`}},
radioClass:{default:()=>{return ['grow']}},
intact:{default:()=>{return 12331}},
open:{default:()=>{return 34122}},
intactRate:{default:()=>{return `99%`}},
openRate:{default:()=>{return `98%`}},
total:{default:()=>{return 21311}},
img:{default:()=>{return `img/形状 3.png`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.intact, dataStr:"intact", wid:1567765017184, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.open, dataStr:"open", wid:1567765045348, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.intactRate, dataStr:"intactRate", wid:1567765014080, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.openRate, dataStr:"openRate", wid:1567765017667, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.total, dataStr:"total", wid:1567765101578, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.name, dataStr:"name", wid:1567764981515, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.measure, dataStr:"measure", wid:1567765152846, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.radio, dataStr:"radio", wid:1567765167826, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.radioClass, dataStr:"radioClass", wid:1567765167826, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.img, dataStr:"img", wid:1567764883240, modelKey:"src" });/**bind over**/
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