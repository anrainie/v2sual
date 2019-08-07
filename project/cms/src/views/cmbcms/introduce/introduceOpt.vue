<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564383767243" :wid="`1564383767243`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564384087400" :wid="`1564384087400`" :index="0" :pid="`1564383767243`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1564384253861" :wid="`1564384253861`" :index="0" :pid="`1564384087400`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1564384306107" :wid="`1564384306107`" :index="1" :pid="`1564384087400`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="2"><v2-form-input class="V2Widget" id="1564384584434" :wid="`1564384584434`" :index="2" :pid="`1564384087400`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:60%;width:100%;" key="3"><v2-form-editor class="V2Widget" id="1564384616501" :wid="`1564384616501`" :index="3" :pid="`1564384087400`"></v2-form-editor></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="4"><v2-component-btn class="V2Widget" id="1564384725651" :wid="`1564384725651`" :index="4" :pid="`1564384087400`"></v2-component-btn></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/ideLib/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"component":"v2-layout","href":"v2-layout","layout":["10","10","10","60","10"],"direction":"row","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${introduceOptLabel}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564384253861,"pid":1564384087400,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${introduce.title}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564384306107,"pid":1564384087400,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"优先级","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${introduce.priority}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564384584434,"pid":1564384087400,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""},"ctnStyle":{"height":"","width":""}},"label":"内容","titleMode":"col","labelWitdh":"80px","placeholder":"请编辑","value":"${introduce.content}","disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-editor","href":"v2-form-editor","children":[],"events":{},"id":1564384616501,"pid":1564384087400,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"提交","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["submitIntroduceInfo"]}},"id":1564384725651,"pid":1564384087400,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"1564383767243-0","id":1564384087400,"ctnClass":"","customClass":"","realSize":["%","%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":[100],"realSize":["%"],"id":1564383767243,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        introduceOptFlag:'addIntroduce',
introduceOptLabel:'添加介绍',
introduce:{
    id: '',
    title: '',
    content: '',
    priority: ''
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{submitIntroduceInfo(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/' + ctx.introduceOptFlag,ctx.introduce
    ).then(res=>{
        if(res.retType === 'SUCCESS'){
            this.$message({
                showClose: true,
                message: res.retMsg,
                type: 'success'
            });
        }else{
            this.$message({
                showClose: true,
                message: res.retMsg,
                type: 'error'
            });
        }     
    }).catch(error=> {
        this.$message({
                showClose: true,
                message: error,
                type: 'error'
        });
    });;
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.introduceOptLabel, dataStr:"introduceOptLabel", wid:1564384253861, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.introduce.title, dataStr:"introduce.title", wid:1564384306107, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.introduce.content, dataStr:"introduce.content", wid:1564384616501, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.introduce.priority, dataStr:"introduce.priority", wid:1564384584434, modelKey:"value" });/**bind over**/
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
<style lang="scss">

</style>