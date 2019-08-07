<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564380751797" :wid="`1564380751797`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1564380818823" :wid="`1564380818823`" :index="0" :pid="`1564380751797`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:90%;width:100%;" key="1"><v2container id="1564380855419" :wid="`1564380855419`" :index="1" :pid="`1564380751797`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-btn class="V2Widget" id="1564380946704" :wid="`1564380946704`" :index="0" :pid="`1564380855419`"></v2-component-btn></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:90%;width:100%;" key="1"><v2-component-table class="V2Widget" id="1564380937088" :wid="`1564380937088`" :index="1" :pid="`1564380855419`"></v2-component-table></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/ideLib/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"账户功能介绍","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564380818823,"pid":1564380751797,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":["10","90"],"direction":"row","children":[{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"添加功能介绍","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["addIntroduce"]}},"id":1564380946704,"pid":1564380855419,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"tableType":"border","size":""},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false},{"active":true,"prop":"title","label":"标题","fixed":"","width":"","sortable":false},{"active":true,"prop":"content","label":"内容","fixed":"","width":"","sortable":false},{"active":true,"prop":"priority","label":"优先级","fixed":"","width":"","sortable":false}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"150","toolBtns":[{"active":"true","btnName":"编辑","type":"primary","handler":"editIntroduce"},{"active":true,"btnName":"删除","type":"danger","handler":"deleteIntroduce"}],"tHeight":"","tMaxHeight":"","tableData":"${introduceListData}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1564380937088,"pid":1564380855419,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"1564380751797-1","id":1564380855419,"ctnClass":"","customClass":"","realSize":["%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1564380751797,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        introduceListData:[

]      
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{addIntroduce(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.open({
	  status:true,
		title:'添加介绍',
		path:'cmbcms/addIntroduce',
		page:'cmbcms/introduce/introduceOpt',
		type:'SUB',
		params:{introduceOptFlag:'addIntroduce',introduceOptLabel:'添加介绍'},
		hideCancelBtn:true,
		hideConfirmBtn:true,
		confirmCallback:() => { 
			ctx.queryIntroduceList();
			ctx.$root.$store.state.loadingPage=false;
			ctx.close();
			console.log('点击确定')
		},
		cancelCallback:(e) => {
			console.log('点击取消')
		}
});
})();
                    /*overview over*/
                    
                    
              }, editIntroduce(index,row){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.open({
	  status:true,
		title:'编辑介绍',
		path:'cmbcms/editIntroduce',
		page:'cmbcms/introduce/introduceOpt',
		type:'SUB',
		params:{introduceOptFlag:'editIntroduce',introduceOptLabel:'编辑介绍',introduce: row},
		hideCancelBtn:true,
		hideConfirmBtn:true,
		confirmCallback:() => { 
			ctx.queryIntroduceList();
			ctx.$root.$store.state.loadingPage=false;
			ctx.close();
			console.log('点击确定')
		},
		cancelCallback:(e) => {
			console.log('点击取消')
		}
});
})();
                    /*overview over*/
                    
                    
              }, deleteIntroduce(index,row){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/deleteIntroduce',{id: row.id}
    ).then(res=>{
        if(res.data.retType === 'SUCCESS'){
            ctx.$root.$store.state.loadingPage=true;

            ctx.queryIntroduceList();
            ctx.$message({
                showClose: true,
                message: res.data.retMsg,
                type: 'success'
            });
        }else{
            ctx.$message({
                showClose: true,
                message: res.data.retMsg,
                type: 'error'
            });
        }
        
    }).catch(error=> {
        ctx.$message({
                showClose: true,
                message: error,
                type: 'error'
        });
    });;
})();
                    /*overview over*/
                    
                    
              }, queryIntroduceList(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/queryIntroduceList',{}
    ).then(res=>{
        debugger;

        if(res.data.retType === 'SUCCESS'){
            ctx.introduceListData = res.data.jsonData;
            ctx.$store.state.root.$store.state.loadingPage=false;
        }else{
            this.$message({
                showClose: true,
                message: res.data.retMsg,
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
                    
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.introduceListData, dataStr:"introduceListData", wid:1564380937088, modelKey:"tableData" });/**bind over**/
                /*overview*/
                    (async()=>{    const t4 = ctx.queryIntroduceList();
})();
                /*overview over*/
                
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