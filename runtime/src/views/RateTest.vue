<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560247080748" :wid="`1560247080748`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1560334017733" :wid="`1560334017733`" :index="0" :pid="`1560247080748`"></v2-form-input></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1560247080748-1" :wid="`1560247080748-1`" :index="1" :pid="`1560247080748`"></v2empty></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","widget":{"belongTo":"aui","icon":"iconhengxiangbuju","type":"layout","href":"v2-layout-colctn","author":"zhanghaixian@agree.com.cn","version":510000,"accept":"","name":"横向布局","option":[{"name":"direction","desp":"排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"layout","desp":"栅格","hidden":false,"defaultValue":[50,50],"type":"string_input"},{"name":"rules","desp":"表单验证","defaultValue":"","type":"single_array","attrInEachElement":[{"name":"rule","desp":"规则","defaultValue":"","type":"string_input"}]},{"defaultValue":"","valueArray":["","loop"],"type":"string_select","desp":"复用类型","despArray":["无","循环"],"name":"__type"},{"desp":"复用数据","defaultValue":"","type":"string_input","name":"__loopTarget"},{"desp":"复用数据项ID","defaultValue":"","type":"string_input","name":"__loopKey"}],"css":{"style":[{"desp":"容器","cssAttrs":"top right bottom left width height min-width max-width min-height max-height position overflow margin padding","name":"divCtn"}]},"editor":{"name":"v2LayoutEditor","model":{"def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{}}},"main":"index.vue","index":10000002},"children":[{"style":{"label":{"font-size":"30px","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"$item.title","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"$item.name","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"loop","__loopTarget":"userList","__loopKey":"$item.id","__capacity":"3","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560334017733,"pid":1560247080748},null],"events":{},"id":1560247080748,"pid":"root"}],"events":{}}},
                        userList:[
    {id:1,name:4},
    {id:2,name:4},
    {id:3,name:4},
    {id:4,name:4},
    {id:5,name:4},
]
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
                    
                    
                    
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    /**bind**/this.$store.commit("bind",{ vueObj:this, data:this.userList, dataStr:"userList", wid:1560334017733, modelKey:"__loopTarget" });

this.$store.commit("bind",{ vueObj:this, data:this.$item.id, dataStr:"$item.id", wid:1560334017733, modelKey:"__loopKey" });
this.$store.commit("bind",{ vueObj:this, data:this.$item.name, dataStr:"$item.name", wid:1560334017733, modelKey:"value" });
this.$store.commit("bind",{ vueObj:this, data:this.$item.title, dataStr:"$item.title", wid:1560334017733, modelKey:"label" });/**bind over**/
                    
                },
                beforeUpdate(){
                    let ctx = this;
                    
                },
                updated(){
                    let ctx = this;
                    
                },
                beforeDestroy(){ 
                    let ctx = this;
                    /**unBind**/ctx.$store.commit("unbind",this)/**unBind over**/
                        
                },
                destroyed(){
                    let ctx = this;
                        
                }
            };
        </script>