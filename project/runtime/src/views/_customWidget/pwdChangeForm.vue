<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564380892103" :wid="`1564380892103`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:30px;width:100%;" key="0"><v2-component-text-value class="V2Widget" id="1564380955055" :wid="`1564380955055`" :index="0" :pid="`1564380892103`"></v2-component-text-value></el-row><el-row class="V2ContainerBlock" style="height:200px;width:100%;" key="1"><v2container id="1564380994090" :wid="`1564380994090`" :index="1" :pid="`1564380892103`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50px;width:100%;" key="0"><v2-component-text-value class="V2Widget" id="1564380891379" :wid="`1564380891379`" :index="0" :pid="`1564380994090`"></v2-component-text-value></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:150px;width:100%;" key="1"><v2loop class="V2Widget" id="1564380974075" :wid="`1564380974075`" :index="1" :pid="`1564380994090`"><template v-slot="scope"><v2-form-input class="V2Widget" :id="`1564380974075-${scope._key}`" :wid="`1564380974075-${scope._key}`" :index="scope._key" :pid="`1564380974075`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-form-input></template></v2loop></el-row></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50px;width:100%;" key="2"><v2-component-btn class="V2Widget" id="1564380917315" :wid="`1564380917315`" :index="2" :pid="`1564380892103`"></v2-component-btn></el-row></v2container></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/ideLib/mixin/v2-view';import events from "@/ideLib/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["30","200","50"],"direction":"row","children":[{"style":{"title":{"background-color":"","height":"","width":"","color":""},"value":{"background-color":"","height":"","width":"","color":""}},"title":"${data.title.ctt}","type":"icon","value":"${data.title.icon}","direction":"text-value-row","ctnClass":"","customClass":"${classes.title}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text-value","href":"v2-component-text-value","children":[],"events":{},"id":1564380955055,"pid":1564380892103,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":[50,"150"],"direction":"row","children":[{"style":{"title":{"background-color":"","height":"","width":"","color":""},"value":{"background-color":"","height":"","width":"","color":""}},"title":"${data.curCard.val}","type":"text","value":"${data.curCard.key}","direction":"text-value-row","ctnClass":"","customClass":"${classes.curCard}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text-value","href":"v2-component-text-value","children":[],"events":{},"id":1564380891379,"pid":1564380994090,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"${$item.key}","titleMode":"col","labelWitdh":"30%","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"${$item.val}","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"${classes.inputs}","__type":"loop","__loopTarget":"data.inputs","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1564380974075,"pid":1564380994090,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":1564380892103,"id":1564380994090,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"${classes.form}","realSize":["px","px"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"__type":""},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"${data.btn}","shape":"def","loading":false,"disabled":false,"ctnClass":"","customClass":"${classes.btn}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1564380917315,"pid":1564380892103,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"root-0","id":1564380892103,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"${classes.ctn}","realSize":["px","px","px"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""},"__type":""}],"events":{}}},
                        
                    }
                },
                props:{
                  classes:{default:()=>{return {
  ctn: ['pwd-change'],
  title: ['pwd-change__title'],
  form : ['pwd-change__form'],
  curCard : ['pwd-change__curCard'],
  inputs: ['pwd-change__input'],
  btn: ['pwd-change__btn', 'el-button--mini']
}}},
data:{default:()=>{return {
  title: {
    icon: 'el-icon-s-tools',
    ctt: '修改密码'
  },
  curCard : {
    key: '当前卡号',
    val: '1234 5678 91011'
  },
  inputs: [
    {
      key: '密码',
      val: ''
    },
    {
      key: '密码',
      val: ''
    },
    {
      key: '密码',
      val: ''
    },
  ],
  btn: '确定'
}
}}
                },
                mixins:[root,widget,cpt,events],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ dataStr:"$item.val", wid:1564380974075, modelKey:"value" });
ctx.$store.commit("registerBind",{ dataStr:"$item.key", wid:1564380974075, modelKey:"label" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.data.inputs, dataStr:"data.inputs", wid:1564380974075, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ dataStr:"classes.inputs", wid:1564380974075, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.data.curCard.key, dataStr:"data.curCard.key", wid:1564380891379, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.data.curCard.val, dataStr:"data.curCard.val", wid:1564380891379, modelKey:"title" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.curCard, dataStr:"classes.curCard", wid:1564380891379, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.data.btn, dataStr:"data.btn", wid:1564380917315, modelKey:"btnName" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.btn, dataStr:"classes.btn", wid:1564380917315, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.ctn, dataStr:"classes.ctn", wid:1564380892103, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.title, dataStr:"classes.title", wid:1564380955055, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.data.title.ctt, dataStr:"data.title.ctt", wid:1564380955055, modelKey:"title" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.data.title.icon, dataStr:"data.title.icon", wid:1564380955055, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.form, dataStr:"classes.form", wid:1564380994090, modelKey:"customClass" });/**bind over**/
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