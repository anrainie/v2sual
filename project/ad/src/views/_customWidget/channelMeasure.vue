<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1566352630724" :wid="`1566352630724`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="vda-text2" id="1566352878221" :wid="`1566352878221`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="vda-vlue" id="1566352937700" :wid="`1566352937700`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="vda-value" id="1566352859055" :wid="`1566352859055`" :index="3" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"-6.0164px","left":"-8.0166px"},"ctnClass":"","customClass":"","events":{},"height":"70","href":"v2-component-image","src":"img/paymeasure.png","style":{},"width":"321","__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1566352630724,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${title}","editable":false,"ctnClass":"","customClass":"vda-text2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"17px","left":"15px","font-size":"20"},"id":1566352878221,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"right","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${value}","editable":false,"ctnClass":"","customClass":"vda-vlue","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":17,"left":93,"font-size":"20","width":171,"height":27},"id":1566352937700,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"笔","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"17.0167px","left":"275px","font-size":"20"},"id":1566352859055,"pid":"root","animate":["","animated"]}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return 信用卡}},
value:{default:()=>{return 123,13,4,123}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1566352878221, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value, dataStr:"value", wid:1566352937700, modelKey:"text" });/**bind over**/
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