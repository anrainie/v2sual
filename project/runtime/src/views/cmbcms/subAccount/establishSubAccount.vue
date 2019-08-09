<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-switchable class="V2Widget" id="1564466628237" :wid="`1564466628237`" :index="0" :pid="`root`" activeindex="currentPageIndex"><template><v2container id="1564466596099" :wid="`1564466596099`" :index="0" :pid="`1564466628237`" v-if="currentPageIndex==0"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-page class="V2Widget" id="1564480496878" :wid="`1564480496878`" :index="0" :pid="`1564466596099`"></v2-page></el-row></v2container><v2container id="1564466766582" :wid="`1564466766582`" :index="1" :pid="`1564466628237`" v-if="currentPageIndex==1"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-page class="V2Widget" id="1564467369335" :wid="`1564467369335`" :index="0" :pid="`1564466766582`"></v2-page></el-row></v2container><v2container id="1564467428690" :wid="`1564467428690`" :index="2" :pid="`1564466628237`" v-if="currentPageIndex==2"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-page class="V2Widget" id="1564467467136" :wid="`1564467467136`" :index="0" :pid="`1564467428690`"></v2-page></el-row></v2container></template></v2-switchable></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"currentPageIndex","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1564466596099,"pid":1564466628237,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"wrapStyle":{"background-color":"","margin":"","padding":""}},"page":"cmbcms/subAccount/authentication","params":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-page","href":"v2-page","children":[],"events":{},"id":1564480496878,"pid":1564466596099,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1564466766582,"pid":1564466628237,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"wrapStyle":{"background-color":"","margin":"","padding":""}},"page":"cmbcms/subAccount/bindingCard","params":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-page","href":"v2-page","children":[],"events":{},"id":1564467369335,"pid":1564466766582,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1564467428690,"pid":1564466628237,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"wrapStyle":{"background-color":"","margin":"","padding":""}},"page":"cmbcms/subAccount/finishCreateSubAccount","params":"${subAccountInfo}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-page","href":"v2-page","children":[],"events":{},"id":1564467467136,"pid":1564467428690,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"customEditor":"v2EditorSwitch","id":1564466628237,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        currentPageIndex:0,
subFormData:{},
subAccountInfo:{
    subAccountInfo:{
        name: 'qqq',
        identity_card: 'www',
        card_num: 'eee',
	    sub_type: '1',
        status: '1',
        phone: '2222'
    }
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.currentPageIndex, dataStr:"currentPageIndex", wid:1564466628237, modelKey:"activeIndex" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.subAccountInfo, dataStr:"subAccountInfo", wid:1564467467136, modelKey:"params" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = // ctx.$root.$on('currentPageIndex',(value)=>{
//     ctx.currentPageIndex = value;
// })



ctx.$root.$on('currentPageIndex',({
    index,
    data
})=>{
    ctx.subFormData = {...ctx.subFormData,...data};
    if(index == 2){
        $axios
            .post("v1/ds/cmbcms/cmbcms/newSubAccount", ctx.subFormData)
            .then(res => {
                if (res.data.retType === "SUCCESS") {
                    this.$message({
                        showClose: true,
                        message: res.data.retMsg,
                        type: 'success'
                    });
                    ctx.currentPageIndex = index;
                    ctx.subAccountInfo =  ctx.subFormData;
                } else {
                this.$message({
                    showClose: true,
                    message: res.data.retMsg,
                    type: "error"
                });
                }
            })
            .catch(error => {
                this.$message({
                showClose: true,
                message: error,
                type: "error"
                });
            });
    }else{
        ctx.currentPageIndex = index;
    }
    
    
   debugger;
});
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
                deactivated(){/**页面切出**/},
                activated(){/**页面切入**/},

            };
        </script>
<style lang="scss">

</style>