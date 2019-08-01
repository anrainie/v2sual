<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="0"><v2empty class="V2Empty" id="root-0" :wid="`root-0`" :index="0" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="2"><v2empty class="V2Empty" id="root-2" :wid="`root-2`" :index="2" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="3"><v2empty class="V2Empty" id="root-3" :wid="`root-3`" :index="3" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="4"><v2empty class="V2Empty" id="root-4" :wid="`root-4`" :index="4" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="5"><v2empty class="V2Empty" id="root-5" :wid="`root-5`" :index="5" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="6"><v2empty class="V2Empty" id="root-6" :wid="`root-6`" :index="6" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="7"><v2empty class="V2Empty" id="root-7" :wid="`root-7`" :index="7" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="8"><v2empty class="V2Empty" id="root-8" :wid="`root-8`" :index="8" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="9"><v2empty class="V2Empty" id="root-9" :wid="`root-9`" :index="9" :pid="`root`"></v2empty></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[10,10,10,10,10,10,10,10,10,10],"style":{"width":"100%","height":"100%"},"data":{},"children":[null,null,null,null,null,null,null,null,null,null],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"}}},
                        activeIndex:0
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{},
                watch:{},
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
                pause(){/**页面切出**/},
                resume(){/**页面切入**/},

            };
        </script>