<template><v2container :wid="`root`" style="width:100%;height:200%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563263448874" :wid="`1563263448874`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1563263448874-0" :wid="`1563263448874-0`" :index="0" :pid="`1563263448874`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1563263482090" :wid="`1563263482090`" :index="1" :pid="`1563263448874`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2container id="1563263483564" :wid="`1563263483564`" :index="0" :pid="`1563263482090`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1563263483564-0" :wid="`1563263483564-0`" :index="0" :pid="`1563263483564`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1563263483564-1" :wid="`1563263483564-1`" :index="1" :pid="`1563263483564`"></v2empty></el-row></v2container></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2container id="1563263484568" :wid="`1563263484568`" :index="1" :pid="`1563263482090`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1563263484568-0" :wid="`1563263484568-0`" :index="0" :pid="`1563263484568`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1563263484568-1" :wid="`1563263484568-1`" :index="1" :pid="`1563263484568`"></v2empty></el-row></v2container></el-col></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[null,{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[50,50],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[null,null],"events":{},"realSize":[null,null],"id":1563263483564,"pid":1563263482090},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[null,null],"events":{},"realSize":[null,null],"id":1563263484568,"pid":1563263482090}],"events":{},"realSize":[null,null],"id":1563263482090,"pid":1563263448874}],"events":{},"realSize":["400","500"],"id":1563263448874,"pid":"root"}],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}},
                        thema1:'fontClass1'
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