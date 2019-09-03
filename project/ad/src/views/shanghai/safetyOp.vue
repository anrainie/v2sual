<template><v2-ctn-xy :wid="`root`"><v2-component-s_background class="V2Widget" :style="`position:absolute;top:15px;left:-3px;width:1920px;height:1080px;`" id="1566972327260" :wid="`1566972327260`" :index="0" :pid="`root`"></v2-component-s_background><v2-component-image class="V2Widget" id="1566973007700" :wid="`1566973007700`" :index="1" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`s_title1`]" id="1566973421782" :wid="`1566973421782`" :index="2" :pid="`root`"></v2-component-text><v2-switchable class="V2Widget" id="1566984474988" :wid="`1566984474988`" :index="3" :pid="`root`" :activeindex="0"><template><v2editorxyctn class="V2Widget" id="1566984458296" :wid="`1566984458296`" :index="0" :pid="`1566984474988`" v-show="0==0"><v2-component-image class="V2Widget" id="1567059489254" :wid="`1567059489254`" :index="0" :pid="`1566984458296`"></v2-component-image><v2empty class="V2Empty" id="1566984458296-1" :wid="`1566984458296-1`" :index="1" :pid="`1566984458296`"></v2empty><v2-component-text class="V2Widget" :class="[`s_num`]" id="1566984522108" :wid="`1566984522108`" :index="2" :pid="`1566984458296`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_title1`]" id="1566985878547" :wid="`1566985878547`" :index="3" :pid="`1566984458296`"></v2-component-text><v2empty class="V2Empty" id="1566984458296-4" :wid="`1566984458296-4`" :index="4" :pid="`1566984458296`"></v2empty></v2editorxyctn><v2editorxyctn class="V2Widget" id="1567059526738" :wid="`1567059526738`" :index="1" :pid="`1566984474988`" v-show="0==1"><v2empty class="V2Empty" id="1567059526738-0" :wid="`1567059526738-0`" :index="0" :pid="`1567059526738`"></v2empty></v2editorxyctn><v2empty class="V2Empty" id="1566984474988-2" :wid="`1566984474988-2`" :index="2" :pid="`1566984474988`" v-show="0==2"></v2empty></template></v2-switchable></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_background from '@/views/_customWidget/s_background.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_background","href":"v2-component-s_background","cptpath":"\\src\\views\\_customWidget\\s_background.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"15px","left":"-3px","width":"1920px","height":"1080px"},"id":1566972327260,"pid":"root","animate":["","animated"]},{"style":{},"src":"img/s_429x550.png","height":"100%","width":"100%","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"80px","left":"41px","width":"435px","height":"555px"},"id":1566973007700,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"后台作业主要操作统计","editable":false,"ctnClass":"","customClass":"s_title1","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"122.003px","left":"81.0149px"},"id":1566973421782,"pid":"root","animate":["","animated"]},{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"0","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1566984458296,"pid":1566984474988,"component":"v2EditorXYCtn","layout":[100],"position":"row","children":[{"src":"img/s_panel1.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"71px","left":"14px","width":328,"height":50},"id":1567059489254,"pid":1566984458296,"animate":["","animated"]},null,{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"按面板识别数","editable":false,"ctnClass":"","customClass":"s_num","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"12px","left":"32px"},"id":1566984522108,"pid":1566984458296,"animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"时点平均工作量比较","editable":false,"ctnClass":"","customClass":"s_title1","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"80px","left":"19px"},"id":1566985878547,"pid":1566984458296,"animate":["","animated"]},null],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":[],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"id":1567059526738,"pid":1566984474988,"component":"v2EditorXYCtn","layout":[100],"position":"row","children":[null]},null],"events":{},"customEditor":"v2EditorSwitch","commonStyle":{"position":"absolute","top":"143px","left":"68px","width":"375px","height":"444px"},"id":1566984474988,"pid":"root","animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_background},
                methods:{},
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