<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567653970103" :wid="`1567653970103`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="num_class" id="1567649606803" :wid="`1567649606803`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="text1_class" id="1567649605859" :wid="`1567649605859`" :index="2" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{},"src":"${bgImg}","height":"413px","width":"136px","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","fixation":true,"component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"},"id":1567653970103,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${num}","editable":false,"ctnClass":"","customClass":"${num_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"50%","left":"0","width":"100%","height":""},"id":1567649606803,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${text1}","editable":false,"ctnClass":"","customClass":"${text1_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"20%","left":"0","width":"100%","height":""},"id":1567649605859,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  num:{default:()=>{return 24,560}},
text1:{default:()=>{return `当年签约数`}},
num_class:{default:()=>{return `vda-h1-num4`}},
text1_class:{default:()=>{return `vda-h2-text`}},
bgImg:{default:()=>{return `img/shanghai/s_glassShort.png`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.num, dataStr:"num", wid:1567649606803, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.num_class, dataStr:"num_class", wid:1567649606803, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1567649605859, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1_class, dataStr:"text1_class", wid:1567649605859, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bgImg, dataStr:"bgImg", wid:1567653970103, modelKey:"src" });/**bind over**/
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