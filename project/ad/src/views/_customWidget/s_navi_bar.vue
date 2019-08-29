<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="item_class" id="1567048388398" :wid="`1567048388398`" :index="0" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="item_class" id="1567048390312" :wid="`1567048390312`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="item_class" id="1567048966553" :wid="`1567048966553`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="item_class" id="1567048977410" :wid="`1567048977410`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="item_class" id="1567048952427" :wid="`1567048952427`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="item_class" id="1567048976578" :wid="`1567048976578`" :index="5" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"${item_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"26px","left":"2px","width":"14px","height":"4px"},"id":1567048388398,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"${item_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"26px","left":"22px","width":"14px","height":"4px"},"id":1567048390312,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"${item_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"26px","left":"42px","width":"14px","height":"4px"},"id":1567048966553,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"${item_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"26px","left":"105px","width":"14px","height":"4px"},"id":1567048977410,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"${item_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"26px","left":"84px","width":"14px","height":"4px"},"id":1567048952427,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"${item_class}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"26px","left":"63px","width":"14px","height":"4px"},"id":1567048976578,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  item_class:{default:()=>{return ['s_navi_item']}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.item_class, dataStr:"item_class", wid:1567048388398, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.item_class, dataStr:"item_class", wid:1567048390312, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.item_class, dataStr:"item_class", wid:1567048966553, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.item_class, dataStr:"item_class", wid:1567048977410, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.item_class, dataStr:"item_class", wid:1567048952427, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.item_class, dataStr:"item_class", wid:1567048976578, modelKey:"customClass" });/**bind over**/
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