<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567581926152" :wid="`1567581926152`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`title1`]" id="1567581951140" :wid="`1567581951140`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`value1`]" id="1567581949607" :wid="`1567581949607`" :index="2" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"component":"v2-component-image","commonStyle":{"position":"absolute","left":"0","width":"0.9rem","height":"0.9rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"${img}","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567581926152,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${title}","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.18rem","left":"1.2rem","font-size":"0.2rem","animation-duration":"1s"},"id":1567581951140,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${value}","customClass":"value1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.5rem","left":"1.2rem","font-size":"0.35rem","animation-duration":"1s"},"id":1567581949607,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{}]}},
                        
                    }
                },
                props:{
                  img:{default:()=>{return `img/device1.png`}},
title:{default:()=>{return `完好率`}},
value:{default:()=>{return `83.7%`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.img, dataStr:"img", wid:1567581926152, modelKey:"src" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1567581951140, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value, dataStr:"value", wid:1567581949607, modelKey:"text" });/**bind over**/
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