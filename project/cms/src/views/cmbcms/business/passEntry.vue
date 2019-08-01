<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564034234399" :wid="`1564034234399`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1564034252837" :wid="`1564034252837`" :index="0" :pid="`1564034234399`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:90%;width:100%;" key="1"><v2container id="1564034457235" :wid="`1564034457235`" :index="1" :pid="`1564034234399`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1564034557495" :wid="`1564034557495`" :index="0" :pid="`1564034457235`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1564034767182" :wid="`1564034767182`" :index="1" :pid="`1564034457235`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="2"><v2-form-select class="V2Widget" id="1564125548832" :wid="`1564125548832`" :index="2" :pid="`1564034457235`"></v2-form-select></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="3"><v2-form-input class="V2Widget" id="1564035260276" :wid="`1564035260276`" :index="3" :pid="`1564034457235`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="4"><v2-form-input class="V2Widget" id="1564035503969" :wid="`1564035503969`" :index="4" :pid="`1564034457235`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="5"><v2-form-input class="V2Widget" id="1564565382179" :wid="`1564565382179`" :index="5" :pid="`1564034457235`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="6"><v2-form-select class="V2Widget" id="1564035765826" :wid="`1564035765826`" :index="6" :pid="`1564034457235`"></v2-form-select></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="7"><v2-form-input class="V2Widget" id="1564036241428" :wid="`1564036241428`" :index="7" :pid="`1564034457235`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="8"><v2-form-input class="V2Widget" id="1564036228983" :wid="`1564036228983`" :index="8" :pid="`1564034457235`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="9"><v2-component-btn class="V2Widget" id="1564036278847" :wid="`1564036278847`" :index="9" :pid="`1564034457235`"></v2-component-btn></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"text":"入账","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564034252837,"pid":1564034234399,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":[10,10,10,10,10,10,10,10,10,10],"direction":"row","children":[{"theme":{"size":"medium"},"label":"收款方姓名","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerial.payee}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564034557495,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":"medium"},"label":"收款方账号","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerial.payee_account}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564034767182,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":"medium"},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"收款行","labelWitdh":"100px","titleMode":"col","placeholder":"请选择","value":"${tradeSerial.payee_bank}","dataType":"cus","optionConfig":"","options":[{"active":"true","value":"00001","label":"招商银行"}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"id":1564125548832,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":"medium"},"label":"入账金额","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerial.trade_amount}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564035260276,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":"medium"},"label":"付款方姓名","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerial.payer}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564035503969,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"付款账号","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerial.payer_account}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564565382179,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"label":"付款行","labelWitdh":"100px","titleMode":"col","placeholder":"请选择","value":"${tradeSerial.payer_bank}","dataType":"cus","optionConfig":"","options":[{"active":"true","value":"00001","label":"招商银行"},{"active":true,"value":"00002","label":"建设银行"}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"id":1564035765826,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":"medium"},"label":"附言","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerial.note}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564036241428,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":"medium"},"label":"短信通知","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerial.notify_phone}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564036228983,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"btnType":"","size":""},"btnName":"提交","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["passEntry"]}},"id":1564036278847,"pid":1564034457235,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"style":{},"pid":"1564034234399-1","id":1564034457235,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1564034234399,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}},
                        tradeSerial:{
    payee: '',
    payee_account: '',
    payee_bank: '',
    trade_amount: '',
    payer: '',
    payer_account: '',
    payer_bank: '',
    note: '',
    notify_phone: ''
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{passEntry(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/passEntry',ctx.tradeSerial
    ).then(res=>{
        if(res.data.retType === 'SUCCESS'){
            this.$message({
                showClose: true,
                message: res.data.retMsg,
                type: 'success',
                duration: 0
            });
        }else{
            this.$message({
                showClose: true,
                message: res.data.retMsg,
                type: 'error',
                duration: 0
            });
        }
        
    }).catch(error=> {
        this.$message({
                showClose: true,
                message: error,
                type: 'error',
                duration: 0
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.payee, dataStr:"tradeSerial.payee", wid:1564034557495, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.payee_account, dataStr:"tradeSerial.payee_account", wid:1564034767182, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.trade_amount, dataStr:"tradeSerial.trade_amount", wid:1564035260276, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.payer, dataStr:"tradeSerial.payer", wid:1564035503969, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.payer_bank, dataStr:"tradeSerial.payer_bank", wid:1564035765826, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.note, dataStr:"tradeSerial.note", wid:1564036241428, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.notify_phone, dataStr:"tradeSerial.notify_phone", wid:1564036228983, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.payee_bank, dataStr:"tradeSerial.payee_bank", wid:1564125548832, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerial.payer_account, dataStr:"tradeSerial.payer_account", wid:1564565382179, modelKey:"value" });/**bind over**/
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