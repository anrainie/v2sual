<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:8%;" key="0"><v2-form-input class="V2Widget" id="1568703140580" :wid="`1568703140580`" :index="0" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock" style="height:42%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;" key="2"><v2empty class="V2Empty" id="root-2" :wid="`root-2`" :index="2" :pid="`root`"></v2empty></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[8,42,50],"style":{"width":"100%","height":"100%"},"data":{},"events":{},"ctnStyle":[{},{}],"realSize":["%","%","%"],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"],"children":[{"theme":{},"style":{"label":{}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","__capacity":"1","component":"v2-form-input","href":"v2-form-input","events":{},"id":1568703140580,"pid":"root","commonStyle":{"animation-duration":"1s"},"animate":["","animated"]},null,null]}},
                        
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