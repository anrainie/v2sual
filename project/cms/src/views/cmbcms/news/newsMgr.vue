<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564132587089" :wid="`1564132587089`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1564132652035" :wid="`1564132652035`" :index="0" :pid="`1564132587089`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:90%;width:100%;" key="1"><v2container id="1564132596255" :wid="`1564132596255`" :index="1" :pid="`1564132587089`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="0"><v2-component-btn class="V2Widget" id="1564132722557" :wid="`1564132722557`" :index="0" :pid="`1564132596255`"></v2-component-btn></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:90%;width:100%;" key="1"><v2-component-table class="V2Widget" id="1564367911594" :wid="`1564367911594`" :index="1" :pid="`1564132596255`"></v2-component-table></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"公告管理","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1564132652035,"pid":1564132587089,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":["10","90"],"direction":"row","children":[{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"添加公告","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["addNews"]}},"id":1564132722557,"pid":1564132596255,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"tableType":"border","size":""},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false},{"active":true,"prop":"title","label":"标题","fixed":"","width":"","sortable":false,"type":"text","expandMap":[{"active":true},{"active":true,"name":"title","label":"标题"},{"active":true,"name":"content","label":"内容"}]},{"active":true,"prop":"content","label":"正文","fixed":"","width":"","sortable":false},{"active":true,"prop":"modified","label":"修改时间","fixed":"","width":"","sortable":true}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"170","toolBtns":[{"active":"true","btnName":"编辑","type":"primary","handler":"editNews"},{"active":true,"btnName":"删除","type":"danger","handler":"deleteNews"}],"tHeight":"","tMaxHeight":"","tableData":"${newsListData}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1564367911594,"pid":1564132596255,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"1564132587089-1","id":1564132596255,"ctnClass":"","customClass":"","realSize":["%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["10","90"],"realSize":["%","%"],"id":1564132587089,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        newsListData:[
    
]
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{queryNewsList(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/queryNewsList',{}
    ).then(res=>{
        debugger;

        if(res.retType === 'SUCCESS'){
            ctx.newsListData = res.jsonData;
            ctx.$store.state.root.$store.state.loadingPage=false;
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
                    
                    
              }, editNews(index,row){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.open({
	  status:true,
		title:'编辑公告',
		path:'cmbcms/editNews',
		page:'cmbcms/news/newsOpt',
		type:'SUB',
		params:{newsOptFlag:'editNews',newsOptLabel:'编辑公告',news: row},
		hideCancelBtn:true,
		hideConfirmBtn:true,
		confirmCallback:() => { 
			ctx.queryNewsList();
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
                    
                    
              }, addNews(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.open({
	  status:true,
		title:'添加新公告',
		path:'cmbcms/addNews',
		page:'cmbcms/news/newsOpt',
		type:'SUB',
		params:{newsOptFlag:'addNews',newsOptLabel:'添加新公告'},
		hideCancelBtn:true,
		hideConfirmBtn:true,
		confirmCallback:() => { 
			ctx.queryNewsList();
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
                    
                    
              }, deleteNews(index,row){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = $axios.post('v1/ds/cmbcms/cmbcms/deleteNews',{id: row.id}
    ).then(res=>{
        if(res.retType === 'SUCCESS'){
            ctx.queryNewsList();
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
                    
                    
              }, },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.newsListData, dataStr:"newsListData", wid:1564367911594, modelKey:"tableData" });/**bind over**/
                /*overview*/
                    (async()=>{    const t4 = ctx.queryNewsList();
})();
                /*overview over*/
                
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = ctx.$root.$on('refreshNewsList',()=>{
    ctx.queryNewsList();
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