<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563967982553" :wid="`1563967982553`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;opacity:1,border-radius:0px" key="0"><v2-component-text class="V2Widget" id="1563967999634" :wid="`1563967999634`" :index="0" :pid="`1563967982553`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:90%;width:100%;" key="1"><v2container id="1563968599384" :wid="`1563968599384`" :index="1" :pid="`1563967982553`"><el-col class="V2ContainerBlock" style="height:100%;width:100%" key="0"><v2container id="1563968537668" :wid="`1563968537668`" :index="0" :pid="`1563968599384`"><el-col class="V2ContainerBlock" style="height:100%;width:100%" key="0"><v2container id="1563968537654" :wid="`1563968537654`" :index="0" :pid="`1563968537668`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1564020480491" :wid="`1564020480491`" :index="0" :pid="`1563968537654`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1564020665825" :wid="`1564020665825`" :index="1" :pid="`1563968537654`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="2"><v2-form-select class="V2Widget" id="1564020864242" :wid="`1564020864242`" :index="2" :pid="`1563968537654`"></v2-form-select></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="3"><v2-form-select class="V2Widget" id="1564390542799" :wid="`1564390542799`" :index="3" :pid="`1563968537654`"></v2-form-select></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="4"><v2-form-select class="V2Widget" id="1564022931283" :wid="`1564022931283`" :index="4" :pid="`1563968537654`"></v2-form-select></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="5"><v2-form-datepicker class="V2Widget" id="1564023050490" :wid="`1564023050490`" :index="5" :pid="`1563968537654`"></v2-form-datepicker></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="6"><v2-form-datepicker class="V2Widget" id="1564023170751" :wid="`1564023170751`" :index="6" :pid="`1563968537654`"></v2-form-datepicker></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="7"><v2-form-input class="V2Widget" id="1564023395982" :wid="`1564023395982`" :index="7" :pid="`1563968537654`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:20%;width:100%;" key="8"><v2-component-btn class="V2Widget" id="1564023803051" :wid="`1564023803051`" :index="8" :pid="`1563968537654`"></v2-component-btn></el-row></v2container></el-col></v2container></el-col></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/ideLib/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"text":"办理银行卡","editable":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563967999634,"pid":1563967982553,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnClass":""},{"component":"v2-layout","href":"v2-layout","layout":[100],"direction":"col","children":[{"component":"v2-layout","href":"v2-layout","layout":[100],"direction":"col","children":[{"component":"v2-layout","href":"v2-layout","layout":[10,10,"10","10",10,10,10,10,20],"direction":"row","children":[{"theme":{"size":""},"label":"银行卡号","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${bankCard.card_num}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564020480491,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":""},"label":"密码","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${bankCard.password}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564020665825,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"label":"卡种","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"${bankCard.card_kind}","dataType":"cus","optionConfig":"","options":[{"active":"true","value":"0","label":"储蓄卡"},{"active":true,"value":"1","label":"贷记卡"},{"active":true,"value":"2","label":"信用卡"}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"id":1564020864242,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"状态","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"${bankCard.status}","dataType":"cus","optionConfig":"","options":[{"active":"true","value":"0","label":"未绑定"},{"active":true,"value":"1","label":"未激活"},{"active":true,"value":"2","label":"使用中"},{"active":true,"value":"3","label":"冻结"},{"active":true,"value":"4","label":"挂失"}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"id":1564390542799,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"label":"开户行","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"${bankCard.create_branch}","dataType":"cus","optionConfig":"","options":[{"active":"true","value":"广州黄花岗招行第三分行","label":"广州黄花岗招行第三分行"}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"id":1564022931283,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"label":"开卡时间","labelWitdh":"80px","titleMode":"col","value":"${bankCard.create_date}","placeholder":"请选择","type":"date","disabled":false,"isRequired":false,"clearable":true,"format":"yyyy 年 MM 月 dd 日","valueFormat":"yyyyMMdd","align":"left","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-datepicker","href":"v2-form-datepicker","children":[],"events":{},"id":1564023050490,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"label":"失效时间","labelWitdh":"80px","titleMode":"col","value":"${bankCard.expired_date}","placeholder":"请选择","type":"date","disabled":false,"isRequired":false,"clearable":true,"format":"yyyy 年 MM 月 dd 日","valueFormat":"yyyyMMdd","align":"left","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-datepicker","href":"v2-form-datepicker","children":[],"events":{},"id":1564023170751,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":""},"label":"预留电话","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${bankCard.phone}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564023395982,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"btnType":"","size":""},"btnName":"提交","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["newBankCard"]}},"id":1564023803051,"pid":1563968537654,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"style":{},"pid":"1563968537668-0","id":1563968537654,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%","%","%","%","%","%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"style":{},"pid":1563968599384,"id":1563968537668}],"style":{},"pid":"1563967982553-1","id":1563968599384}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1563967982553,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"}]}],"events":{},"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}},
                        bankCard:{
	card_num: '',
	password: '',
	card_kind: '',                    
	status: '',	                      
	create_branch: '',
	create_date: '',
	expired_date: '',
	phone: ''
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{newBankCard(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/addBankCard',ctx.bankCard
    ).then(res=>{
        if(res.data.retType === 'SUCCESS'){
            ctx.$root.$emit('refreshBankCardList');
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.card_num, dataStr:"bankCard.card_num", wid:1564020480491, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.password, dataStr:"bankCard.password", wid:1564020665825, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.card_kind, dataStr:"bankCard.card_kind", wid:1564020864242, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.create_branch, dataStr:"bankCard.create_branch", wid:1564022931283, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.create_date, dataStr:"bankCard.create_date", wid:1564023050490, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.expired_date, dataStr:"bankCard.expired_date", wid:1564023170751, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.phone, dataStr:"bankCard.phone", wid:1564023395982, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCard.status, dataStr:"bankCard.status", wid:1564390542799, modelKey:"value" });/**bind over**/
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