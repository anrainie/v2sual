<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567576974851" :wid="`1567576974851`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`pageName`]" id="1567577334215" :wid="`1567577334215`" :index="1" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567577404719" :wid="`1567577404719`" :index="2" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567577404879" :wid="`1567577404879`" :index="3" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567577526584" :wid="`1567577526584`" :index="4" :pid="`root`"></v2-component-image></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"src":"img/shanghai_mobile/s_m_bg.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"-0","left":"0px","width":"100%","height":"26rem"},"id":1567576974851,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"首页","editable":false,"ctnClass":"","customClass":"pageName","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"3rem","left":"0","width":"100%","height":"3rem"},"id":1567577334215,"pid":"root","animate":["","animated"]},{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"12px","right":"","left":"5%","bottom":"","width":"48px","height":"48px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"ctnClass":"","customClass":"","events":{"_root":{},"imgComponent":{"click":["openMenu"]}},"href":"v2-component-image","src":"img/矩形 10.png","fixation":false,"style":{},"__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1567577404719,"pid":"root","animate":["","animated"]},{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"17px","right":"","left":"90%","bottom":"","width":"48px","height":"48px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"ctnClass":"","customClass":"","events":{},"href":"v2-component-image","src":"img/椭圆 5.png","fixation":false,"style":{},"__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1567577404879,"pid":"root","animate":["","animated"]},{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"12rem","right":"","left":"7%","bottom":"","width":"160px","height":"40px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"ctnClass":"","customClass":"","events":{},"href":"v2-component-image","src":"img/形状 1.png","fixation":false,"style":{},"__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1567577526584,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{openMenu(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.$root.$store.state.MenuDrawer != ctx.$root.$store.state.MenuDrawer ;
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