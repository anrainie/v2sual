<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563532254348" :wid="`1563532254348`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:37%;width:100%;" key="0"><v2empty class="V2Empty" id="1563532254348-0" :wid="`1563532254348-0`" :index="0" :pid="`1563532254348`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:-710%;width:100%;" key="1"><v2empty class="V2Empty" id="1563532254348-1" :wid="`1563532254348-1`" :index="1" :pid="`1563532254348`"></v2empty></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[37,-710],"direction":"row","children":[null,null],"style":{},"pid":"root","id":1563532254348}],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}},
                        treeList:[
{
    label:'首页'
}],
activeId:0
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{event0_1563258333580(widget,item){
                let ctx = this;
                
            }, },
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.theme1, dataStr:"theme1", wid:1563262000359, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.treeList, dataStr:"treeList", wid:1563450812189, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeId, dataStr:"activeId", wid:1563504966754, modelKey:"activeIndex" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeId, dataStr:"activeId", wid:1563505032434, modelKey:"value" });/**bind over**/
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