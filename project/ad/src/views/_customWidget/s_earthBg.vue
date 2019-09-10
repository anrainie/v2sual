<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1568082039060" :wid="`1568082039060`" :index="0" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1568082122982" :wid="`1568082122982`" :index="1" :pid="`root`"></v2-component-image></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"-6px","left":"3px","width":"1920px","height":"1080px","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/background.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1568082039060,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"8px","left":"3px","width":"1920px","height":"1080px","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/边框.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1568082122982,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{}]}},
                        
                    }
                },
                props:{
                  
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