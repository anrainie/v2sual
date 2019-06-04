<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559214383876" :wid="`1559214383876`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1559214383876-0" :wid="`1559214383876-0`" :index="0" :pid="`1559214383876`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1559214383876-1" :wid="`1559214383876-1`" :index="1" :pid="`1559214383876`"></v2empty></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[50,50],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","widget":{"belongTo":"aui","icon":"iconhengxiangbuju","type":"layout","href":"v2-layout-colctn","author":"zhanghaixian@agree.com.cn","version":510000,"accept":"","name":"横向布局","option":[{"name":"direction","desp":"排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"layout","desp":"栅格","hidden":false,"defaultValue":[50,50],"type":"string_input"}],"css":{"style":[{"desp":"容器","cssAttrs":"top right bottom left width height min-width max-width min-height max-height position overflow margin padding","name":"divCtn"}]},"editor":{"name":"avLayoutEditor","model":{"def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{}}},"main":"index.vue"},"children":[null,null],"id":1559214383876,"pid":"root"},null],"events":{}}}
                        ,orgList:'',orgId:''
                    }
                },
                mixins:[root],
                methods:{},
                watch:{},
                beforeCreate(){
                    
                    /**overview beforeCreate**/
                        (async()=>{const t1 = await pipe.getExcelData("机构表","(e,index)=>{index?label:e[1],key:e[0]:false}");this.this.orgList = t1})();
                    /**overview over**/
                    
                },
                created(){
                    
                    /**overview created**/
                        (async()=>{const t1 = await pipe.getExcelData('柜员表',"(e,index)=>{e}");})();
                    /**overview over**/
                    
                },
                beforeMount(){
                    
                },
                mounted(){
                    
                },
                beforeUpdate(){
                    
                },
                updated(){
                    
                },
                beforeDestroy(){ 
                    /**unBind**/this.$store("unbind",this)/**unBind over**/
                        
                },
                destroyed(){
                        
                }
            };
        </script>