<template><v2-ctn-xy :wid="`root`"><v2-component-icon class="V2Widget" id="1568051228975" :wid="`1568051228975`" :index="0" :pid="`root`"></v2-component-icon><v2-component-text class="V2Widget" id="1568051383919" :wid="`1568051383919`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_icon_img_text2`]" id="1568051346663" :wid="`1568051346663`" :index="2" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"iStyle":{}},"icon":"${icon}","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","events":{},"commonStyle":{"position":"absolute","top":"5px","left":"5px","width":"19px","height":"18px","font-size":"18px","color":"#44a0ff","animation-duration":"1s"},"id":1568051228975,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${text1}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"5px","left":"36.0163px","font-size":"14px","color":"#D3E7F5","animation-duration":"1s"},"id":1568051383919,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${text2}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"5.00973px","left":"88.0086px","font-size":"14px","color":"#D3E7F5","animation-duration":"1s"},"id":1568051346663,"pid":"root","animate":["","animated"],"customClass":"s_icon_img_text2"}],"ctnStyle":[{},{},{}]}},
                        
                    }
                },
                props:{
                  text1:{default:()=>{return '12:30'}},
text2:{default:()=>{return '什么情况什么情况什么情况什么情况什么情况什么情况'}},
icon:{default:()=>{return 'el-icon-s-comment'}}
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
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1568051383919, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text2, dataStr:"text2", wid:1568051346663, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.icon, dataStr:"icon", wid:1568051228975, modelKey:"icon" });/**bind over**/

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
.s_icon_img_text2 {
    width: 240px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>