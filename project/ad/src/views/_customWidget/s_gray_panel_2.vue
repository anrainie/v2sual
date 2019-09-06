<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="[`s_gray_panel`]" id="1567763573543" :wid="`1567763573543`" :index="0" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567763725051" :wid="`1567763725051`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567763789256" :wid="`1567763789256`" :index="2" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"s_gray_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","right":"0","width":"100%","height":"100%","animation-duration":"1s"},"id":1567763573543,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"line-height":"2rem"}},"text":"${title}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","left":"1rem","font-size":"1rem","animation-duration":"1s"},"id":1567763725051,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"line-height":"2rem"}},"text":"${value}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","right":"1rem","font-size":"1rem","animation-duration":"1s"},"id":1567763789256,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return `设备总数`}},
value:{default:()=>{return 11,066}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.value, dataStr:"value", wid:1567763789256, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1567763725051, modelKey:"text" });/**bind over**/
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