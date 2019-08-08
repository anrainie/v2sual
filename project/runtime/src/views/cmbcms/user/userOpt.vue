<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1564048808359" :wid="`1564048808359`" :index="0" :pid="`root`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:90%;width:100%;" key="1"><v2container id="1564049166813" :wid="`1564049166813`" :index="1" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1564049150719" :wid="`1564049150719`" :index="0" :pid="`1564049166813`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1564049212440" :wid="`1564049212440`" :index="1" :pid="`1564049166813`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="2"><v2-form-radio class="V2Widget" id="1564050854412" :wid="`1564050854412`" :index="2" :pid="`1564049166813`"></v2-form-radio></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="3"><v2-form-datepicker class="V2Widget" id="1564049308279" :wid="`1564049308279`" :index="3" :pid="`1564049166813`"></v2-form-datepicker></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="4"><v2-form-input class="V2Widget" id="1564049311798" :wid="`1564049311798`" :index="4" :pid="`1564049166813`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="5"><v2-form-input class="V2Widget" id="1564049384998" :wid="`1564049384998`" :index="5" :pid="`1564049166813`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="6"><v2-form-input class="V2Widget" id="1564049379732" :wid="`1564049379732`" :index="6" :pid="`1564049166813`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:30%;width:100%;" key="7"><v2-component-btn class="V2Widget" id="1564049689725" :wid="`1564049689725`" :index="7" :pid="`1564049166813`"></v2-component-btn></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${userOptLabel}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564048808359,"pid":1564048823828,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":["10","10","10","10","10","10","10","30"],"direction":"row","children":[{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"身份证号","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${user.identity_card}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564049150719,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"姓名","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${user.name}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564049212440,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"boxType":"","size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"性别","labelWitdh":"80px","titleMode":"col","value":"${user.gender}","isRequired":false,"options":[{"active":true,"text":"男","disabled":false,"label":"0"},{"active":true,"text":"女","disabled":false,"label":"1"}],"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-radio","href":"v2-form-radio","children":[],"events":{},"id":1564050854412,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":" 生日","labelWitdh":"80px","titleMode":"col","value":"${user.birthday}","placeholder":"请选择","type":"date","disabled":false,"isRequired":false,"clearable":true,"format":"yyyy 年 MM 月 dd 日","valueFormat":"yyyyMMdd","align":"left","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-datepicker","href":"v2-form-datepicker","children":[],"events":{},"id":1564049308279,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"电话","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${user.phone}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564049311798,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"邮件","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${user.email}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564049384998,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"地址","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${user.address}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564049379732,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":"","color":""}},"btnName":"提交","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["submitUserInfo"]}},"id":1564049689725,"pid":1564049166813,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"1564048823828-1","id":1564049166813,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%","%","%","%","%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1564048823828,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}},
                        userOptLabel:'添加用户',
user:{
    user_id: '',
	identity_card: '',
	name: '',
	gender: '',
	birthday: '',
	phone: '',
	email: '',
	address: ''
},
userOptFlag:'newUser'
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{submitUserInfo(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/' + ctx.userOptFlag,ctx.user
    ).then(res=>{
        if(res.data.retType === 'SUCCESS'){
            ctx.$root.$emit('refreshUserList');
            ctx.close();
            this.$message({
                showClose: true,
                message: res.data.retMsg,
                type: 'success'
            });
        }else{
            this.$message({
                showClose: true,
                message: res.data.retMsg,
                duration: 0,
                type: 'error'
            });
        }     
    }).catch(error=> {
        this.$message({
                showClose: true,
                message: error,
                duration: 0,
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.userOptLabel, dataStr:"userOptLabel", wid:1564048808359, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.user.identity_card, dataStr:"user.identity_card", wid:1564049150719, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.user.name, dataStr:"user.name", wid:1564049212440, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.user.birthday, dataStr:"user.birthday", wid:1564049308279, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.user.phone, dataStr:"user.phone", wid:1564049311798, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.user.email, dataStr:"user.email", wid:1564049384998, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.user.address, dataStr:"user.address", wid:1564049379732, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.user.gender, dataStr:"user.gender", wid:1564050854412, modelKey:"value" });/**bind over**/
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