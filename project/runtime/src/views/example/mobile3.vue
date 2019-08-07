<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1561359867874" :wid="`1561359867874`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1561359869184" :wid="`1561359869184`" :index="0" :pid="`1561359867874`"><el-row class="V2ContainerBlock" style="height:42%;width:100%;" key="0"><v2container id="1561430523255" :wid="`1561430523255`" :index="0" :pid="`1561359869184`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-component-steps class="V2Widget" id="1561430523254" :wid="`1561430523254`" :index="0" :pid="`1561430523255`"></v2-component-steps></el-row></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:58%;width:100%;" key="1"><v2-mobile-image class="V2Widget" id="1561430844903" :wid="`1561430844903`" :index="1" :pid="`1561359869184`"></v2-mobile-image></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1561359870169" :wid="`1561359870169`" :index="1" :pid="`1561359867874`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1561360983280" :wid="`1561360983280`" :index="0" :pid="`1561359870169`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-mobile-button class="V2Widget" id="1561359876554" :wid="`1561359876554`" :index="1" :pid="`1561359870169`"></v2-mobile-button></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[42,58],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[100],"direction":"row","children":[{"style":{"iStyle":{"font-size":"","font-weight":"","color":""},"iWarpStyle":{"background-color":"","margin":"","padding":""}},"active":"2","direction":"horizontal","processStatus":"process","finishStatus":"success","alignCenter":true,"simple":false,"list":[{"active":"true","title":"身份认证","description":"","icon":""},{"active":true,"title":"绑卡验证","description":"","icon":""},{"active":true,"title":"完成开户","description":"","icon":""}],"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-component-steps","href":"v2-component-steps","children":[],"events":{},"id":1561430523254}],"style":{},"id":1561430523255,"pid":1561359869184},{"style":{},"src":"","fit":"contain","width":"100%","height":"100%","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-mobile-image","href":"v2-mobile-image","children":[],"events":{},"id":1561430844903,"pid":1561359869184}],"events":{},"id":1561359869184,"pid":1561359867874},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"textStyle":{"text-align":"center","margin":"","padding":"","height":"40auto","width":" auto","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"申请成功","editable":false,"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1561360983280,"pid":1561359870169},{"style":{},"text":"完成","disabled":false,"loading":false,"round":false,"icon":"","type":"info","size":"large","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-mobile-button","href":"v2-mobile-button","children":[],"events":{"_op_mobileBtn_btn":{"click":["event0_1561359876554"]}},"id":1561359876554,"pid":1561434539229}],"events":{},"id":1561359870169,"pid":1561359867874}],"events":{},"id":1561359867874,"pid":"root"}],"events":{}}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{event0_1561434539229(widget,item){
                let ctx = this;
                
            
                    /*overview*/
                        (async()=>{const t1 = await console.log(2);
})();
                    /*overview over*/
                    
                    
            }, },
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