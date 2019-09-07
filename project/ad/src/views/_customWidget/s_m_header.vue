<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567576974851" :wid="`1567576974851`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`pageName`]" id="1567577334215" :wid="`1567577334215`" :index="1" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567577404719" :wid="`1567577404719`" :index="2" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567577404879" :wid="`1567577404879`" :index="3" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567577526584" :wid="`1567577526584`" :index="4" :pid="`root`"></v2-component-image></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"src":"img/shanghai_mobile/s_m_bg.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"-0","left":"0px","width":"100%","height":"2.6rem","animation-duration":"1s"},"id":1567576974851,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"首页","customClass":"pageName","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.3rem","left":"0","width":"100%","height":"0.3rem","animation-duration":"1s"},"id":1567577334215,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"0.12rem","left":"0.1rem","width":"48px","height":"48px","animation-duration":"1s"},"events":{"_root":{},"imgComponent":{"click":["openMenu"]}},"href":"v2-component-image","src":"img/矩形 10.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567577404719,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"0.12rem","width":"48px","height":"48px","animation-duration":"1s","right":"0.1rem"},"events":{},"href":"v2-component-image","src":"img/椭圆 5.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567577404879,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"1.2rem","left":"0.5rem","width":"1.6rem","height":"0.4rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/形状 1.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567577526584,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{}]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{openMenu(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = "";
ctx.$root.$emit('showDrawer',true);;
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**//**bind over**/
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