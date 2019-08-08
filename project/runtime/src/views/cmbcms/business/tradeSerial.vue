<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564556657476" :wid="`1564556657476`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1564556718402" :wid="`1564556718402`" :index="0" :pid="`1564556657476`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="1"><v2container id="1564556749064" :wid="`1564556749064`" :index="1" :pid="`1564556657476`"><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:25%;" key="0"><v2-form-input class="V2Widget" id="1564556798142" :wid="`1564556798142`" :index="0" :pid="`1564556749064`"></v2-form-input></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:25%;" key="1"><v2-form-datepicker class="V2Widget" id="1564556829221" :wid="`1564556829221`" :index="1" :pid="`1564556749064`"></v2-form-datepicker></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:25%;" key="2"><v2-form-datepicker class="V2Widget" id="1564556898382" :wid="`1564556898382`" :index="2" :pid="`1564556749064`"></v2-form-datepicker></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:25%;" key="3"><v2-component-btn class="V2Widget" id="1564556860045" :wid="`1564556860045`" :index="3" :pid="`1564556749064`"></v2-component-btn></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:80%;width:100%;" key="2"><v2-component-table class="V2Widget" id="1564556923576" :wid="`1564556923576`" :index="2" :pid="`1564556657476`"></v2-component-table></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["10","10","80"],"direction":"row","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"交易流水","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564556718402,"pid":1564556657476,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":[25,25,25,25],"direction":"col","children":[{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"银行卡号","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${tradeSerialQueryData.card_num}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564556798142,"pid":1564556749064,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"起始日期","labelWitdh":"80px","titleMode":"col","value":"${tradeSerialQueryData.start_date}","placeholder":"请选择","type":"date","disabled":false,"isRequired":false,"clearable":true,"format":"yyyy 年 MM 月 dd 日","valueFormat":"yyyyMMdd","align":"left","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-datepicker","href":"v2-form-datepicker","children":[],"events":{},"id":1564556829221,"pid":1564556749064,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"结束日期","labelWitdh":"80px","titleMode":"col","value":"${tradeSerialQueryData.end_date}","placeholder":"请选择","type":"date","disabled":false,"isRequired":false,"clearable":true,"format":"yyyy 年 MM 月 dd 日","valueFormat":"yyyyMMdd","align":"left","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-datepicker","href":"v2-form-datepicker","children":[],"events":{},"id":1564556898382,"pid":1564556749064,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"查询","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_root":{},"_op_componentBtn_btn":{"click":["queryTradeSerial"]}},"id":1564556860045,"pid":1564556749064,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"1564556657476-1","id":1564556749064,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"theme":{"tableType":"border","size":""},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false},{"active":true,"prop":"card_num","label":" 银行卡号","fixed":"","width":"","sortable":false},{"active":true,"prop":"trade_date","label":"交易时间","fixed":"","width":"","sortable":false},{"active":true,"prop":"trade_amount","label":"交易金额","fixed":"","width":"","sortable":false},{"active":true,"prop":"balance","label":"余额","fixed":"","width":"","sortable":false},{"active":true,"prop":"trade_type","label":"交易类型","fixed":"","width":"","sortable":false},{"active":true,"prop":"note","label":" 交易备注","fixed":"","width":"","sortable":false}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"100","toolBtns":[],"tHeight":"","tMaxHeight":"","tableData":"${tradeSerialListData}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1564556923576,"pid":1564556657476,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"root-0","id":1564556657476,"ctnClass":"","customClass":"","realSize":["%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},null,{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{}}},
                        tradeSerial:{
    serial_num: '',
    card_num: '',
    trade_date: '',
    trade_amount: '',
    balance: '',
    trade_type: '',
    note: '',
    notify_phone: '',
    payer: '',
    payer_account: '',
    payer_bank: '',
    payer_sub_account: '',
    payee: '',
    payee_account: '',
    payee_bank: '',
    payee_sub_account: '',
    fee: '',
    status: ''
}          ,
tradeSerialListData:[],
tradeSerialQueryData:{
    card_num: '',
    start_date: '',
    end_date: ''
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{queryTradeSerial(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/queryTradeSerial',ctx.tradeSerialQueryData
    ).then(res=>{
        if(res.data.retType === 'SUCCESS'){
            ctx.tradeSerialListData = res.data.jsonData;           
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerialListData, dataStr:"tradeSerialListData", wid:1564556923576, modelKey:"tableData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerialQueryData.card_num, dataStr:"tradeSerialQueryData.card_num", wid:1564556798142, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerialQueryData.start_date, dataStr:"tradeSerialQueryData.start_date", wid:1564556829221, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeSerialQueryData.end_date, dataStr:"tradeSerialQueryData.end_date", wid:1564556898382, modelKey:"value" });/**bind over**/
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