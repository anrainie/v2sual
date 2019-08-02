<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1562903856703" :wid="`1562903856703`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:29%;width:100%;" key="0"><v2-form-select class="V2Widget" id="1562904008220" :wid="`1562904008220`" :index="0" :pid="`1562903856703`"></v2-form-select></el-row><el-row class="V2ContainerBlock" style="height:71%;width:100%;" key="1"><v2container id="1562903860829" :wid="`1562903860829`" :index="1" :pid="`1562903856703`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1562904093284" :wid="`1562904093284`" :index="0" :pid="`1562903860829`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-switchable class="V2Widget" id="1562904127570" :wid="`1562904127570`" :index="1" :pid="`1562903860829`" activeindex="activeIndex"><template><v2container class="V2Widget" id="1562904137649" :wid="`1562904137649`" :index="0" :pid="`1562904127570`" v-if="activeIndex==0"><v2container id="1562904140160" :wid="`1562904140160`" :index="0" :pid="`1562904137649`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2container id="1562904197395" :wid="`1562904197395`" :index="0" :pid="`1562904140160`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-input class="V2Widget" id="1562904141603" :wid="`1562904141603`" :index="0" :pid="`1562904197395`"></v2-form-input></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-input class="V2Widget" id="1562904203038" :wid="`1562904203038`" :index="1" :pid="`1562904197395`"></v2-form-input></el-col></v2container></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-input class="V2Widget" id="1562904144820" :wid="`1562904144820`" :index="1" :pid="`1562904140160`"></v2-form-input></el-col></v2container></v2container><v2container class="V2Widget" id="1562904237074" :wid="`1562904237074`" :index="1" :pid="`1562904127570`" v-if="activeIndex==1"><v2-form-editor class="V2Widget" id="1562904150466" :wid="`1562904150466`" :index="0" :pid="`1562904237074`"></v2-form-editor></v2container></template></v2-switchable></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[29,71],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"类型","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"${activeIndex}","dataType":"def","optionConfig":"${fieldList}","options":[{"active":"true","value":"","label":""}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"id":1562904008220,"pid":1562903856703,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"${activeIndex}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1562904093284,"pid":1562903860829,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}},{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"activeIndex","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1562904137649,"pid":1562904127570,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"component":"v2-layout","href":"v2-layout","children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[50,50],"direction":"col","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1562904141603,"pid":1562904197395},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1562904203038,"pid":1562904197395}],"style":{},"pid":1562904140160,"id":1562904197395},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1562904144820,"pid":1562904140160}],"events":{},"realSize":[null,null],"id":1562904140160,"pid":1562904137649}]},{"id":1562904237074,"pid":1562904127570,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"ctnStyle":{"height":"","width":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请编辑","value":"","disabled":false,"isRequired":false,"rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-editor","href":"v2-form-editor","children":[],"events":{},"id":1562904150466,"pid":1562904237074}]}],"events":{},"customEditor":"v2EditorSwitch","id":1562904127570,"pid":1562903860829,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}}],"events":{},"realSize":[null,null],"id":1562903860829,"pid":1562903856703}],"events":{},"realSize":[null,null],"id":1562903856703,"pid":"root"}],"events":{}}},
                        activeIndex:0,
fieldList:[{
    label:'身份证',
    key:0,
    value:0,
},{
    label:'其他',
    key:1,
    value:1,
}]
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeIndex, dataStr:"activeIndex", wid:1562904008220, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.fieldList, dataStr:"fieldList", wid:1562904008220, modelKey:"optionConfig" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeIndex, dataStr:"activeIndex", wid:1562904093284, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeIndex, dataStr:"activeIndex", wid:1562904127570, modelKey:"activeIndex" });/**bind over**/
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