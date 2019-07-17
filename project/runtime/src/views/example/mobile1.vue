<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1561340567238" :wid="`1561340567238`" :index="0" :pid="`root`"><el-col class="V2ContainerBlock" :span="24" key="0" style="height:100%;"><v2container id="1561340577252" :wid="`1561340577252`" :index="0" :pid="`1561340567238`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1561340597051" :wid="`1561340597051`" :index="0" :pid="`1561340577252`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:38%;width:100%;" key="0"><v2-component-steps class="V2Widget" id="1561430955929" :wid="`1561430955929`" :index="0" :pid="`1561340597051`"></v2-component-steps></el-row><el-row class="V2ContainerBlock" style="height:62%;width:100%;" key="1"><v2container id="1561342741848" :wid="`1561342741848`" :index="1" :pid="`1561340597051`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-mobile-input class="V2Widget" id="1561342745545" :wid="`1561342745545`" :index="0" :pid="`1561342741848`"></v2-mobile-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-mobile-input class="V2Widget" id="1561342746608" :wid="`1561342746608`" :index="1" :pid="`1561342741848`"></v2-mobile-input></el-row></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1561340579828" :wid="`1561340579828`" :index="1" :pid="`1561340577252`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1561344448172" :wid="`1561344448172`" :index="0" :pid="`1561340579828`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:29%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1561344458398" :wid="`1561344458398`" :index="0" :pid="`1561344448172`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:71%;width:100%;" key="1"><v2-mobile-uploader class="V2Widget" id="1561344484591" :wid="`1561344484591`" :index="1" :pid="`1561344448172`"></v2-mobile-uploader></el-row></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-mobile-button class="V2Widget" id="1561342734241" :wid="`1561342734241`" :index="1" :pid="`1561340579828`"></v2-mobile-button></el-row></v2container></el-row></v2container></el-col></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":"","direction":"col","layout":[100],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-rowctn","href":"v2-layout-rowctn","children":[{"style":"","direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":"","direction":"row","layout":[38,62],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"iStyle":{"font-size":"","font-weight":"","color":""},"iWarpStyle":{"background-color":"","margin":"","padding":""}},"active":"0","direction":"horizontal","processStatus":"process","finishStatus":"finish","alignCenter":true,"simple":false,"list":[{"active":"true","title":"身份认证","description":"","icon":""},{"active":true,"title":"绑卡验证","description":"","icon":""},{"active":true,"title":"完成开户","description":"","icon":""}],"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-component-steps","href":"v2-component-steps","children":[],"events":{},"id":1561430955929,"pid":1561340597051},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{},"value":"","placeholder":"请输入本人真实姓名","label":"客户姓名","disabled":false,"required":false,"readonly":false,"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-mobile-input","href":"v2-mobile-input","children":[],"events":{},"id":1561342745545,"pid":1561342741848},{"style":{},"value":"","placeholder":"请输入本人身份证号码","label":"身份证号","disabled":false,"required":false,"readonly":false,"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-mobile-input","href":"v2-mobile-input","children":[],"events":{},"id":1561342746608,"pid":1561342741848,"buttonSize":"normal","buttonType":"default"}],"events":{},"id":1561342741848,"pid":1561340597051}],"events":{},"id":1561340597051,"pid":1561340577252},{"style":"","direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"10px","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[29,71],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"40px","width":"100px","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"上传证件图片","editable":false,"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1561344458398,"pid":1561344448172},{"style":{},"maxCount":"1","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-mobile-uploader","href":"v2-mobile-uploader","children":[],"events":{},"id":1561344484591,"pid":1561344448172}],"events":{},"id":1561344448172,"pid":1561340579828},{"style":{},"text":"下一步","disabled":false,"loading":false,"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-mobile-button","href":"v2-mobile-button","children":[],"events":{"_op_mobileBtn_btn":{"click":["event0_1561342734241"]}},"id":1561342734241,"pid":1561340579828,"type":"info","size":"large","icon":"","round":false}],"events":{},"id":1561340579828,"pid":1561340577252}],"events":{},"id":1561340577252,"pid":1561340567238}],"events":{},"id":1561340567238,"pid":"root"}],"events":{}}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{event0_1561342734241(widget,item){
                let ctx = this;
                
            
                    /*overview*/
                        (async()=>{const t2 = await this.open({ status: true, path:"/mobile2", page:"example/mobile2", title:"mobile2" });
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