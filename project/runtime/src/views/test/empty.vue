<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:20%;" key="0"><v2empty class="V2Empty" id="root-0" :wid="`root-0`" :index="0" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:80%;" key="1"><v2container id="1568628017920" :wid="`1568628017920`" :index="1" :pid="`root`"><el-col class="V2ContainerBlock" style="width:20%;" key="0"><v2empty class="V2Empty" id="1568628017920-0" :wid="`1568628017920-0`" :index="0" :pid="`1568628017920`"></v2empty></el-col><el-col class="V2ContainerBlock" style="width:80%;" key="1"><v2empty class="V2Empty" id="1568628017920-1" :wid="`1568628017920-1`" :index="1" :pid="`1568628017920`"></v2empty></el-col></v2container></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[20,80],"style":{"width":"100%","height":"100%"},"data":{},"children":[null,{"layout":[20,80],"direction":"col","component":"v2-layout","children":[null,null],"id":1568628017920,"pid":1568627970158,"ctnStyle":[{},{}]}],"events":{},"ctnStyle":[{},{}],"realSize":["%","%"],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
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