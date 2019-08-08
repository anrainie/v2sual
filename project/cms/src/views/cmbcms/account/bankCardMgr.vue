<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563875679465" :wid="`1563875679465`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1563875761911" :wid="`1563875761911`" :index="0" :pid="`1563875679465`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:90%;width:100%;" key="1"><v2container id="1564043725000" :wid="`1564043725000`" :index="1" :pid="`1563875679465`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-btn class="V2Widget" :class="'v2left v2bottom '" id="1564043682665" :wid="`1564043682665`" :index="0" :pid="`1564043725000`"></v2-component-btn></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:90%;width:100%;" key="1"><v2-component-table class="V2Widget" id="1563875773177" :wid="`1563875773177`" :index="1" :pid="`1564043725000`"></v2-component-table></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"text":"银行卡管理","editable":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563875761911,"pid":1563875679465,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":["10","90"],"direction":"row","children":[{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":"","color":""}},"btnName":"银行卡录入","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["addBankCard"]}},"id":1564043682665,"pid":1564043725000,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"layoutClass":["v2left","v2bottom"],"lastLayoutClass":[null,null]},{"theme":{"tableType":"border","size":"mini"},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false},{"active":true,"prop":"card_num","label":"银行卡号","fixed":"","width":"","sortable":false},{"active":true,"prop":"password","label":"密码","fixed":"","width":"","sortable":false},{"active":true,"prop":"card_kind","label":" 卡种","fixed":"","width":"","sortable":false,"type":"tag","tagMap":[{"active":true,"value":"0","text":"储蓄卡","type":"text"},{"active":true,"value":"1","text":"贷记卡","type":"text"},{"active":true,"value":"2","text":"信用卡","type":"text"}]},{"active":true,"prop":"status","label":"状态","fixed":"","width":"","sortable":false,"type":"tag","tagMap":[{"active":true,"value":"0","text":"未绑定"},{"active":true,"value":"1","text":"未激活","type":"text"},{"active":true,"value":"2","text":"使用中","type":"text"},{"active":true,"value":"3","text":"冻结","type":"text"},{"active":true,"value":"4","text":"挂失","type":"text"}]},{"active":true,"prop":"create_branch","label":"开户行","fixed":"","width":"","sortable":false},{"active":true,"prop":"create_date","label":"创建日期","fixed":"","width":"","sortable":false},{"active":true,"prop":"expired_date","label":"过期日期","fixed":"","width":"","sortable":false},{"active":true,"prop":"phone","label":"预留电话","fixed":"","width":"","sortable":false}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"100","toolBtns":[{"active":true,"btnName":"删除","type":"danger","handler":"deleteBankCard"}],"tHeight":"","tMaxHeight":"","tableData":"${bankCardListData}","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1563875773177,"pid":1564043725000,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnClass":""}],"style":{},"pid":1563875679465,"id":1564043725000,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1563875679465,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{}}},
                        bankCard:{
	card_num: '',
	password: '',
	card_kind: '',                    
	status: '',	                      
	create_branch: '',
	create_date: '',
	expired_date: '',
	phone: '',
	identity_card: ''
},
bankCardListData:[
    
]
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{addBankCard(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.open({
	  status:true,
		title:'银行卡录入',
		path:'cmbcms/addBankCard',
		page:'cmbcms/account/addBankCard',
		type:'SUB',
		params:{userOptFlag:'addBankCard',userOptLabel:'银行卡录入'},
		hideCancelBtn:true,
		hideConfirmBtn:true,
		confirmCallback:() => { 
			console.log('点击确定')
		},
		cancelCallback:(e) => {
			console.log('点击取消')
		}
});
})();
                    /*overview over*/
                    
                    
              }, deleteBankCard(index,row){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/deleteBankCard',{card_num: row.card_num}
    ).then(res=>{
        if(res.retType === 'SUCCESS'){
            ctx.queryBankCardList();
            ctx.$message({
                showClose: true,
                message: res.retMsg,
                type: 'success'
            });
        }else{
            ctx.$message({
                showClose: true,
                message: res.retMsg,
                duration: 0,
                type: 'error'
            });
        }
        
    }).catch(error=> {
        ctx.$message({
                showClose: true,
                message: error,
                duration: 0,
                type: 'error'
        });
    });;
})();
                    /*overview over*/
                    
                    
              }, queryBankCardList(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/queryBankCardList',{}
    ).then(res=>{
        debugger;

        if(res.retType === 'SUCCESS'){
            ctx.bankCardListData = res.jsonData;
        }else{
            this.$message({
                showClose: true,
                message: res.retMsg,
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
                    
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankCardListData, dataStr:"bankCardListData", wid:1563875773177, modelKey:"tableData" });/**bind over**/
                /*overview*/
                    (async()=>{    const t4 = ctx.queryBankCardList();
})();
                /*overview over*/
                
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = ctx.$root.$on('refreshBankCardList',()=>{
    ctx.queryBankCardList();
});;
})();
                    /*overview over*/
                    
                    
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