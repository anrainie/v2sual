<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567653970103" :wid="`1567653970103`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="num_class" id="1567649606803" :wid="`1567649606803`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="text2_class" id="1567665556493" :wid="`1567665556493`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="text1_class" id="1567665608186" :wid="`1567665608186`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="text3_class" id="1567670813160" :wid="`1567670813160`" :index="4" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{},"src":"${bgImg}","height":"413px","width":"136px","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","fixation":true,"component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%"},"id":1567653970103,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${num}","editable":false,"ctnClass":"","customClass":"${num_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"22%","left":"30%","width":"","height":""},"id":1567649606803,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${text2}","editable":false,"ctnClass":"","customClass":"${text2_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"30%","left":"70%","width":"","height":""},"id":1567665556493,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${text1}","editable":false,"ctnClass":"","customClass":"${text1_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"30%","left":"10%","width":"","height":""},"id":1567665608186,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${text3}","editable":false,"ctnClass":"","customClass":"${text3_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"50%","left":"70%","width":"","height":""},"id":1567670813160,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  num:{default:()=>{return 136}},
text1:{default:()=>{return `柜面<br>
交易`}},
text2:{default:()=>{return `上月同比`}},
text3:{default:()=>{return `23.6% ↑`}},
num_class:{default:()=>{return `vda-h1-num3`}},
text1_class:{default:()=>{return `vda-h2-text2`}},
text2_class:{default:()=>{return `vda-h2-text2-redFont`}},
text3_class:{default:()=>{return `vda-h2-text2-greenFont`}},
bgImg:{default:()=>{return `img/shanghai/s_glassLong.png`}}
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
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bgImg, dataStr:"bgImg", wid:1567653970103, modelKey:"src" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text2, dataStr:"text2", wid:1567665556493, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text2_class, dataStr:"text2_class", wid:1567665556493, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1567665608186, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1_class, dataStr:"text1_class", wid:1567665608186, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text3, dataStr:"text3", wid:1567670813160, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text3_class, dataStr:"text3_class", wid:1567670813160, modelKey:"customClass" });/**bind over**/
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