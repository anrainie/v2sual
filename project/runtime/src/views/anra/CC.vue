<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563421439637" :wid="`1563421439637`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:20%;width:100%;" key="0"><v2container id="1563421384794" :wid="`1563421384794`" :index="0" :pid="`1563421439637`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2empty class="V2Empty" id="1563421384794-0" :wid="`1563421384794-0`" :index="0" :pid="`1563421384794`"></v2empty></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:80%;width:100%;" key="1"><v2container id="1563421438744" :wid="`1563421438744`" :index="1" :pid="`1563421439637`"><el-col class="V2ContainerBlock" :span="9" key="0" style="height:100%;"><v2container id="1563421433929" :wid="`1563421433929`" :index="0" :pid="`1563421438744`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2empty class="V2Empty" id="1563421433929-0" :wid="`1563421433929-0`" :index="0" :pid="`1563421433929`"></v2empty></el-row></v2container></el-col><el-col class="V2ContainerBlock" :span="15" key="1" style="height:100%;"><v2empty class="V2Empty" id="1563421438744-1" :wid="`1563421438744-1`" :index="1" :pid="`1563421438744`"></v2empty></el-col></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[20,80],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"layout":[100],"direction":"row","component":"v2-layout","realSize":[null,null],"children":[null],"id":1563421384794,"pid":1563421439637},{"layout":[37,63],"direction":"col","component":"v2-layout","children":[{"layout":[100],"direction":"row","component":"v2-layout","realSize":[null,null],"children":[null],"id":1563421433929,"pid":1563421438744,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},null],"id":1563421438744,"pid":1563421439637,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"events":{},"realSize":[null,null],"id":1563421439637,"pid":"root"}],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}},
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.theme1, dataStr:"theme1", wid:1563262000359, modelKey:"customClass" });/**bind over**/
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