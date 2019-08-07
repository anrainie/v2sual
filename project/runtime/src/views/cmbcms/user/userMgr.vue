<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563783431348" :wid="`1563783431348`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1563783423809" :wid="`1563783423809`" :index="0" :pid="`1563783431348`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="1"><v2-component-btn class="V2Widget" id="1564542611330" :wid="`1564542611330`" :index="1" :pid="`1563783431348`"></v2-component-btn></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:80%;width:100%;" key="2"><v2-component-table class="V2Widget" id="1563785672702" :wid="`1563785672702`" :index="2" :pid="`1563783431348`"></v2-component-table></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/ideLib/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"客户管理","editable":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563783423809,"pid":1563783431348,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnClass":""},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"添加客户","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_root":{},"_op_componentBtn_btn":{"click":["addUser"]}},"id":1564542611330,"pid":1563783431348,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"tableType":"border","size":"mini"},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false},{"active":true,"prop":"identity_card","label":"身份证号","fixed":"","width":"","sortable":false},{"active":true,"prop":"name","label":"姓名","fixed":"","width":"","sortable":false},{"active":true,"prop":"gender","label":"性别","fixed":"","width":"","sortable":false},{"active":true,"prop":"birthday","label":"生日日期","fixed":"","width":"","sortable":false},{"active":true,"prop":"phone","label":"电话号码","fixed":"","width":"","sortable":false},{"active":true,"prop":"email","label":"邮箱","fixed":"","width":"","sortable":false},{"active":true,"prop":"address","label":"住址","fixed":"","width":"","sortable":false}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"300","toolBtns":[{"active":true,"btnName":" 编辑","type":"primary","handler":"editUser"},{"active":true,"btnName":"删除","type":"danger","handler":"deleteUser"}],"tHeight":"","tMaxHeight":"","tableData":"${userListData}","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1563785672702,"pid":1563783431348,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"ctnClass":""}],"events":{},"layout":["10","10","80"],"realSize":["%","%","%"],"id":1563783431348,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":""}],"events":{}}},
                        userListData:[
    
]
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{editUser(index,row){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = this.open({
	  status:true,
		title:'编辑用户',
		path:'cmbcms/editUser',
		page:'cmbcms/user/userOpt',
		type:'SUB',
		hideCancelBtn:true,
		hideConfirmBtn:true,
		params:{user:row,userOptFlag:'editUser',userOptLabel:'编辑用户'},
		confirmCallback:() => { 
			console.log('点击确定')
		},
		cancelCallback:(e) => {
			console.log('点击取消')
		}
});
})();
                    /*overview over*/
                    
                    
              }, queryUserList(index){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/queryUserList',{}
    ).then(res=>{
        debugger;

        if(res.data.retType === 'SUCCESS'){
            ctx.userListData = res.data.jsonData;
            ctx.$store.state.root.$store.state.loadingPage=false;
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
                    
                    
              }, deleteUser(index,row){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/deleteUser',{identity_card: row.identity_card}
    ).then(res=>{
        if(res.data.retType === 'SUCCESS'){
            ctx.$root.$store.state.loadingPage=true;

            ctx.queryUserList();
            ctx.$message({
                showClose: true,
                message: res.data.retMsg,
                type: 'success'
            });
        }else{
            ctx.$message({
                showClose: true,
                message: res.data.retMsg,
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
                    
                    
              }, addUser(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.open({
	  status:true,
		title:'添加用户',
		path:'cmbcms/addUser',
		page:'cmbcms/user/userOpt',
		type:'SUB',
		params:{userOptFlag:'addUser',userOptLabel:'添加用户'},
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
                    
                    
              }, },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.userListData, dataStr:"userListData", wid:1563785672702, modelKey:"tableData" });/**bind over**/
                /*overview*/
                    (async()=>{    const t4 = this.queryUserList();
})();
                /*overview over*/
                
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = ctx.$root.$on('refreshUserList',()=>{
    ctx.queryUserList();
});


// ctx.$root.$on('currentPageIndex',({
//     index,
//     data
// })=>{
//     ctx.subFormData = {...ctx.subFormData,...data};
//     if(index == 2){
//         $axios
//             .post("v1/ds/cmbcms/cmbcms/newSubAccount", ctx.subFormData)
//             .then(res => {
//                 if (res.data.retType === "SUCCESS") {
//                     this.$message({
//                         showClose: true,
//                         message: res.data.retMsg,
//                         type: 'success'
//                     });
//                     ctx.currentPageIndex = index;
//                     ctx.subAccountInfo =  ctx.subFormData;
//                 } else {
//                 this.$message({
//                     showClose: true,
//                     message: res.data.retMsg,
//                     type: "error"
//                 });
//                 }
//             })
//             .catch(error => {
//                 this.$message({
//                 showClose: true,
//                 message: error,
//                 type: "error"
//                 });
//             });
//     }else{
//         ctx.currentPageIndex = index;
//     }
    
    
//    debugger;
// });
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