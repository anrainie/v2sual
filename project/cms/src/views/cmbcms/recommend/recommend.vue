<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563188412686" :wid="`1563188412686`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:33.3%;width:100%;" key="0"><v2container id="1563188415350" :wid="`1563188415350`" :index="0" :pid="`1563188412686`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:17%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1563188433133" :wid="`1563188433133`" :index="0" :pid="`1563188415350`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:83%;width:100%;" key="1"><v2container id="1563188490803" :wid="`1563188490803`" :index="1" :pid="`1563188415350`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="24" key="0" style="height:100%;"><v2-form-upload class="V2Widget" id="1563248768711" :wid="`1563248768711`" :index="0" :pid="`1563188490803`"></v2-form-upload></el-col></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:8.599999999999994%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1563188671493" :wid="`1563188671493`" :index="1" :pid="`1563188412686`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:58%;width:100%;" key="2"><v2-component-btn class="V2Widget" id="1563188584487" :wid="`1563188584487`" :index="2" :pid="`1563188412686`"></v2-component-btn></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[33.3,8.599999999999994,58],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[17,83],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"新建推荐","editable":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563188433133,"pid":1563188415350,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"}},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[100],"rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"label":"图片上传","labelWitdh":"80px","titleMode":"col","action":"","limit":"3","btnText":"按钮文本","prompt":"提示文本","disabled":false,"isRequired":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-upload","href":"v2-form-upload","children":[],"events":{},"id":1563248768711,"pid":1563188490803,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}}],"events":{},"realSize":["%",null],"id":1563188490803,"pid":1563188415350,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"}}],"events":{},"realSize":["%","%"],"id":1563188415350,"pid":1563188412686,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"超链接","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1563188671493,"pid":1563188412686,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"}},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":"","color":""},"btnWrapStyle":{"margin":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","padding":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":""}},"btnName":"发布","shape":"def","loading":false,"disabled":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1563188584487,"pid":1563188412686,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}}],"events":{},"realSize":["%","%","%"],"id":1563188412686,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"}}},
                        
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
                deactivated(){/**页面切出**/},
                activated(){/**页面切入**/},

            };
        </script>