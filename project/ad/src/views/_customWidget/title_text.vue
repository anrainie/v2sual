<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="[`title1`]" id="1567509900934" :wid="`1567509900934`" :index="0" :pid="`root`"></v2-component-text><v2-ctn-order class="V2Widget" id="1567672730773" :wid="`1567672730773`" :index="1" :pid="`root`"><v2-component-text class="V2Widget" id="1567672740353" :wid="`1567672740353`" :index="0" :pid="`1567672730773`"></v2-component-text><v2-component-text class="V2Widget" id="1567672723022" :wid="`1567672723022`" :index="1" :pid="`1567672730773`"></v2-component-text></v2-ctn-order></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"text":"${title}","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"13px","left":"-2px","width":"218px","height":"32px"},"id":1567509900934,"pid":"root","animate":["","animated"]},{"__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"style":{"textStyle":{"line-height":"3rem"}},"text":"${value}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"id":1567672740353,"pid":1567672730773,"commonStyle":{"font-size":"3rem","animation-duration":"1s"},"animate":["","animated"]},{"style":{"textStyle":{"line-height":"3rem"}},"text":"${unit}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"id":1567672723022,"pid":1567672730773,"commonStyle":{"font-size":"3rem","animation-duration":"1s"},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","commonStyle":{"position":"absolute","top":"5rem","left":"3rem","animation-duration":"1s"},"id":1567672730773,"pid":"root","animate":["","animated"],"ctnStyle":[{},{}]}],"ctnStyle":[{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return `当前排队人数`}},
value:{default:()=>{return 1494}},
unit:{default:()=>{return `人`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1567509900934, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value, dataStr:"value", wid:1567672740353, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.unit, dataStr:"unit", wid:1567672723022, modelKey:"text" });/**bind over**/
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