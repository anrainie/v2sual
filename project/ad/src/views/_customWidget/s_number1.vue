<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1568032831607" :wid="`1568032831607`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`vda-h2-text2`]" id="1568032956687" :wid="`1568032956687`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda_number`]" id="1568033109980" :wid="`1568033109980`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-h2-text2`]" id="1568033059739" :wid="`1568033059739`" :index="3" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"src":"img/shanghai/s_group.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","animation-duration":"1s"},"id":1568032831607,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${title}","customClass":"vda-h2-text2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"30%","left":"10%","animation-duration":"1s"},"id":1568032956687,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${text1}","customClass":"vda_number","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"15%","left":"45%","animation-duration":"1s"},"id":1568033109980,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${text2}","customClass":"vda-h2-text2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"45%","left":"85%","animation-duration":"1s"},"id":1568033059739,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return `按版面识别数`}},
text1:{default:()=>{return "1532572"}},
text2:{default:()=>{return `次`}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{
                  _source_init(){
                    let ctx = this;
                    window.pipe.vda.ready().then(() =>{
                      
                    });
                  },
                  
                },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    ctx._source_init();
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1568032956687, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1568033109980, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text2, dataStr:"text2", wid:1568033059739, modelKey:"text" });/**bind over**/

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