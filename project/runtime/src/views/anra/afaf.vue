<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="0"><v2empty class="V2Empty" id="root-0" :wid="`root-0`" :index="0" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="2"><v2empty class="V2Empty" id="root-2" :wid="`root-2`" :index="2" :pid="`root`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:9%;width:100%;" key="3"><v2container id="1564890055062" :wid="`1564890055062`" :index="3" :pid="`root`"><el-col class="V2ContainerBlock" style="height:100%;width:50%;" key="0"><v2empty class="V2Empty" id="1564890055062-0" :wid="`1564890055062-0`" :index="0" :pid="`1564890055062`"></v2empty></el-col><el-col class="V2ContainerBlock" style="height:100%;width:50%;" key="1"><v2empty class="V2Empty" id="1564890055062-1" :wid="`1564890055062-1`" :index="1" :pid="`1564890055062`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:61%;width:100%;" key="4"><v2-ctn-xy class="V2Widget" id="1565252708259" :wid="`1565252708259`" :index="4" :pid="`root`"><v2-form-input class="V2Widget" id="1565253167801" :wid="`1565253167801`" :index="0" :pid="`1565252708259`"></v2-form-input><v2-form-input class="V2Widget" id="1565253102694" :wid="`1565253102694`" :index="1" :pid="`1565252708259`"></v2-form-input><v2-form-input class="V2Widget" id="1565253162942" :wid="`1565253162942`" :index="2" :pid="`1565252708259`"></v2-form-input><v2-form-input class="V2Widget" id="1565253082675" :wid="`1565253082675`" :index="3" :pid="`1565252708259`"></v2-form-input><v2empty class="V2Empty" id="1565252708259-4" :wid="`1565252708259-4`" :index="4" :pid="`1565252708259`"></v2empty></v2-ctn-xy></el-row></v2container></template>
<script>
<<<<<<< HEAD
            import {root} from '@/ideLib/mixin/v2-view';
=======
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
>>>>>>> 395578a59efe73ccfa4965c6458f1397266244a0
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[10,10,10,9,61],"style":{"width":"100%","height":"100%"},"data":{},"children":[null,null,null,{"component":"v2-layout","href":"v2-layout","layout":[50,50],"direction":"col","children":[null,null],"style":{},"pid":"root","id":1564890055062,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"realSize":["%","%"]},{"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-xy","href":"v2-ctn-xy","children":[{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"commonStyle":{"position":"absolute","top":"342px","left":"88px"},"id":1565253167801,"pid":1565252708259},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"commonStyle":{"position":"absolute","top":"260px","left":"99px"},"id":1565253102694,"pid":1565252708259},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"commonStyle":{"position":"absolute","top":"136px","left":"57px","width":342,"height":63,"transform":"matrix(0.924399, 0.381427, -0.381427, 0.924399, 0, 0)"},"id":1565253162942,"pid":1565252708259},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"commonStyle":{"position":"absolute","top":"52px","left":"173px"},"id":1565253082675,"pid":1565252708259},null],"events":{},"customEditor":"v2EditorXYCtn","id":1565252708259,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%","%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}},
                        name:'小明'
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{newUser(){
                  let ctx = this;
                  
              }, },
                watch:{},
                computed:{},
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
                deactivated(){
                  /**页面切出**/
                  let ctx = this;
                  
                },
                activated(){
                  /**页面切入**/
                  let ctx = this;
                  
                },

            };
        </script>
<style lang="scss">

</style>