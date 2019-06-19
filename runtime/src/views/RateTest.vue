<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560929580986" :wid="`1560929580986`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1560929581945" :wid="`1560929581945`" :index="0" :pid="`1560929580986`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2container id="1560929584635" :wid="`1560929584635`" :index="0" :pid="`1560929581945`"><el-col class="V2ContainerBlock" :span="15" key="0" style="height:100%;"><v2container id="1560929587784" :wid="`1560929587784`" :index="0" :pid="`1560929584635`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2loop class="V2Widget" id="1560929591842" :wid="`1560929591842`" :index="0" :pid="`1560929587784`"><template v-slot="scope"><v2-form-switch class="V2Widget" :id="`1560929591842-${scope._key}`" :wid="`1560929591842-${scope._key}`" :index="scope._key" :pid="`1560929591842`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-form-switch></template></v2loop></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1560929587784-1" :wid="`1560929587784-1`" :index="1" :pid="`1560929587784`"></v2empty></el-row></v2container></el-col><el-col class="V2ContainerBlock" :span="9" key="1" style="height:100%;"><v2container id="1560929588760" :wid="`1560929588760`" :index="1" :pid="`1560929584635`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1560929588760-0" :wid="`1560929588760-0`" :index="0" :pid="`1560929588760`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1560929588760-1" :wid="`1560929588760-1`" :index="1" :pid="`1560929588760`"></v2empty></el-row></v2container></el-col></v2container></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2container id="1560929586450" :wid="`1560929586450`" :index="1" :pid="`1560929581945`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2empty class="V2Empty" id="1560929586450-0" :wid="`1560929586450-0`" :index="0" :pid="`1560929586450`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1560929586450-1" :wid="`1560929586450-1`" :index="1" :pid="`1560929586450`"></v2empty></el-col></v2container></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1560929580986-1" :wid="`1560929580986-1`" :index="1" :pid="`1560929580986`"></v2empty></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-rowctn","href":"v2-layout-rowctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[62,38],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"component":"v2-layout-rowctn","href":"v2-layout-rowctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"title":{"font-size":"","font-weight":"","color":""},"switch":{"margin":"","padding":"","height":""}},"label":"open","labelWitdh":"80px","titleMode":"col","value":true,"activeText":"$item.open","inactiveText":"关","disabled":false,"isRequired":false,"__type":"loop","__loopTarget":"switchList","__loopKey":"","__capacity":"1","component":"v2-form-switch","href":"v2-form-switch","children":[],"events":{},"id":1560929591842,"pid":1560929587784},null],"events":{},"id":1560929587784,"pid":1560929584635},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[null,null],"events":{},"id":1560929588760,"pid":1560929584635}],"events":{},"id":1560929584635,"pid":1560929581945},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-rowctn","href":"v2-layout-rowctn","children":[null,null],"events":{},"id":1560929586450,"pid":1560929581945}],"events":{},"id":1560929581945,"pid":1560929580986},null],"events":{},"id":1560929580986,"pid":"root"}],"events":{}}},
                        switchList:[{open:'显示'},{open:'可编辑'},{open:'可删除'}],
open:'open1'
                    }
                },
                mixins:[root],
                
                methods:{},
                watch:{},

                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.switchList, dataStr:"switchList", wid:1560929591842, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"$item.open", wid:1560929591842, modelKey:"activeText" });
ctx.$store.commit("registerBind",{ dataStr:"open", wid:1560929591842, modelKey:"label" });/**bind over**/
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