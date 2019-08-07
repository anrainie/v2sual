<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564474343039" :wid="`1564474343039`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:20%;width:100%;" key="0"><v2-component-steps class="V2Widget" id="1564474432949" :wid="`1564474432949`" :index="0" :pid="`1564474343039`"></v2-component-steps></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1564474457094" :wid="`1564474457094`" :index="1" :pid="`1564474343039`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="2"><v2-form-radio class="V2Widget" id="1564474519273" :wid="`1564474519273`" :index="2" :pid="`1564474343039`"></v2-form-radio></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;width:100%;" key="3"><v2-form-input class="V2Widget" id="1564474610329" :wid="`1564474610329`" :index="3" :pid="`1564474343039`"></v2-form-input></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;" key="4"><v2container id="1564474542831" :wid="`1564474542831`" :index="4" :pid="`1564474343039`"><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:80%;" key="0"><v2-form-input class="V2Widget" id="1564474566892" :wid="`1564474566892`" :index="0" :pid="`1564474542831`"></v2-form-input></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:20%;" key="1"><v2-component-btn class="V2Widget" id="1564474622603" :wid="`1564474622603`" :index="1" :pid="`1564474542831`"></v2-component-btn></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:40%;width:100%;" key="5"><v2-component-btn class="V2Widget" id="1564474652987" :wid="`1564474652987`" :index="5" :pid="`1564474343039`"></v2-component-btn></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/ideLib/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["20","10","10","10","10","40"],"direction":"row","children":[{"active":"1","direction":"horizontal","processStatus":"process","finishStatus":"finish","alignCenter":true,"simple":false,"list":[{"active":"true","title":"身份验证","description":"","icon":""},{"active":true,"title":"绑定银行卡","description":"","icon":""},{"active":true,"title":"完成开户","description":"","icon":""}],"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-steps","href":"v2-component-steps","children":[],"events":{},"id":1564474432949,"pid":1564474343039,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"银行卡号","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${cardInfo.card_num}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564474457094,"pid":1564474343039,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"boxType":"","size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"子账号类型","labelWitdh":"100px","titleMode":"col","value":"${cardInfo.sub_type}","isRequired":false,"options":[{"active":"true","text":"活期","disabled":false,"label":"0"},{"active":true,"text":"定期","disabled":false,"label":"1"},{"active":true,"text":"外汇","disabled":false,"label":"2"}],"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-radio","href":"v2-form-radio","children":[],"events":{},"id":1564474519273,"pid":1564474343039,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"预留手机号","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${cardInfo.phone}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564474610329,"pid":1564474576689,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":["80","20"],"direction":"col","children":[{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"动态验证码","titleMode":"col","labelWitdh":"100px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564474566892,"pid":1564474542831,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":"100%"}},"btnName":"发送","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1564474622603,"pid":1564474542831,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"1564474343039-4","id":1564474542831,"ctnClass":"","customClass":"","realSize":["%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"#1D35EA","height":"","width":"100%"}},"btnName":"下一步","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_op_componentBtn_btn":{"click":["nextStepClick"]}},"id":1564474652987,"pid":1564474343039,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"#FFFFFF"}}],"style":{},"pid":"root-0","id":1564474343039,"ctnClass":"","customClass":"","realSize":["%","%","%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},null,{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        cardInfo:{
    card_num: '',
	sub_type: '',
    status: '1',
    phone: ''
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{nextStepClick(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = // ctx.$root.$emit('currentPageIndex',2);
// ctx.$root.$emit('nextStepEvent',ctx.subAccountDict);
ctx.$root.$emit('currentPageIndex',{
    index: 2,
    data: ctx.cardInfo
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
                    
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardInfo.card_num, dataStr:"cardInfo.card_num", wid:1564474457094, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardInfo.phone, dataStr:"cardInfo.phone", wid:1564474610329, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardInfo.sub_type, dataStr:"cardInfo.sub_type", wid:1564474519273, modelKey:"value" });/**bind over**/
                /*overview*/
                    (async()=>{    const t4 = ctx.$root.$on('nextStepEvent',(value)=>{
    ctx.subAccountDict = value;
    debugger;
});;
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