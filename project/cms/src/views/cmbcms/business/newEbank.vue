<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1564644905647" :wid="`1564644905647`" :index="0" :pid="`root`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1564644992266" :wid="`1564644992266`" :index="1" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="2"><v2-form-input class="V2Widget" id="1564645066539" :wid="`1564645066539`" :index="2" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="3"><v2-form-input class="V2Widget" id="1564645192624" :wid="`1564645192624`" :index="3" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="4"><v2-form-input class="V2Widget" id="1564645355278" :wid="`1564645355278`" :index="4" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="5"><v2-form-input class="V2Widget" id="1564645379665" :wid="`1564645379665`" :index="5" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:40%;width:100%;" key="6"><v2-component-btn class="V2Widget" id="1564645410898" :wid="`1564645410898`" :index="6" :pid="`root`"></v2-component-btn></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["10","10","10","10","10","10","40"],"direction":"row","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"开通网银","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564644905647,"pid":1564644843321,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"身份证号","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${ebank.identity_card}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564644992266,"pid":1564644843321,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"登录密码","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${ebank.login_pwd}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564645066539,"pid":1564644843321,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"登录密码确认","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${ebank.re_login_pwd}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564645192624,"pid":1564644843321,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"支付密码","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${ebank.pay_pwd}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564645355278,"pid":1564644843321,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"支付密码确认","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${ebank.re_pay_pwd}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564645379665,"pid":1564644843321,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"提交","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_root":{},"_op_componentBtn_btn":{"click":["newEbank"]}},"id":1564645410898,"pid":1564644843321,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"root-0","id":1564644843321,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%","%","%","%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"events":{}}},
                        ebank:{
    identity_card: '',
    login_pwd: '',
    pay_pwd: '',
    re_login_pwd: '',
    re_pay_pwd: '',
    status: '1'	
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{newEbank(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/newEban',ctx.ebank
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.ebank.identity_card, dataStr:"ebank.identity_card", wid:1564644992266, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.ebank.login_pwd, dataStr:"ebank.login_pwd", wid:1564645066539, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.ebank.re_login_pwd, dataStr:"ebank.re_login_pwd", wid:1564645192624, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.ebank.pay_pwd, dataStr:"ebank.pay_pwd", wid:1564645355278, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.ebank.re_pay_pwd, dataStr:"ebank.re_pay_pwd", wid:1564645379665, modelKey:"value" });/**bind over**/
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