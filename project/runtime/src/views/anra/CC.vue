<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563269172514" :wid="`1563269172514`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1563269111647" :wid="`1563269111647`" :index="0" :pid="`1563269172514`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-switchable class="V2Widget" id="1563269209495" :wid="`1563269209495`" :index="1" :pid="`1563269172514`"><template><v2container class="V2Widget" id="1563269509158" :wid="`1563269509158`" :index="0" :pid="`1563269209495`" v-if="null==0"><v2container id="1563269423128" :wid="`1563269423128`" :index="0" :pid="`1563269509158`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1563269423128-0" :wid="`1563269423128-0`" :index="0" :pid="`1563269423128`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1563269423128-1" :wid="`1563269423128-1`" :index="1" :pid="`1563269423128`"></v2empty></el-row></v2container></v2container></template></v2-switchable></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[50,50],"direction":"row","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1563269111647,"pid":1563269172514},{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1563269509158,"pid":1563269209495,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[null,null],"events":{},"realSize":[null,null],"id":1563269423128,"pid":1563269509158}]}],"events":{},"customEditor":"v2EditorSwitch","id":1563269209495,"pid":1563269172514,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"style":{},"pid":"root","id":1563269172514}],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}},
                        treeList:[
{
    label:'首页'
}]
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