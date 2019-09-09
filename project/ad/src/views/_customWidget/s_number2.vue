<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1568045772955" :wid="`1568045772955`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`vda-h2-text2`]" id="1568045992449" :wid="`1568045992449`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda_device_value`]" id="1568046216169" :wid="`1568046216169`" :index="2" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"src":"${img}","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"35%","left":"0","width":"100%","height":"65%","animation-duration":"1s"},"id":1568045772955,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center"}},"text":"${title}","customClass":"vda-h2-text2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"38%","left":"0","width":"100%","animation-duration":"1s"},"id":1568045992449,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center"}},"text":"${proportion}","customClass":"vda_device_value","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","animation-duration":"1s"},"id":1568046216169,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return `完整率`}},
proportion:{default:()=>{return `83.9%`}},
img:{default:()=>{return `img/shanghai/s_circle_yellow.png`}}
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
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.proportion, dataStr:"proportion", wid:1568046216169, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1568045992449, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.img, dataStr:"img", wid:1568045772955, modelKey:"src" });/**bind over**/

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