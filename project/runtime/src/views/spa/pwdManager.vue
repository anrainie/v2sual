<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1564041295800" :wid="`1564041295800`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:70px;width:100%;" key="0"><v2-form-select class="V2Widget" id="1564645253372" :wid="`1564645253372`" :index="0" :pid="`1564041295800`"></v2-form-select></el-row><el-row class="V2ContainerBlock" style="height:350px;width:100%;" key="1"><v2container id="1564041477216" :wid="`1564041477216`" :index="1" :pid="`1564041295800`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50px;width:100%;" key="0"><v2-component-tabs class="V2Widget" id="1564041477624" :wid="`1564041477624`" :index="0" :pid="`1564041477216`"></v2-component-tabs></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:300px;width:100%;" key="1"><v2-switchable class="V2Widget" id="1564041440608" :wid="`1564041440608`" :index="1" :pid="`1564041477216`" activeindex="pwdTabs.activeIdx"><template><v2container id="1564366648326" :wid="`1564366648326`" :index="0" :pid="`1564041440608`" v-if="pwdTabs.activeIdx==0"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-component-pwdchangeform class="V2Widget" id="1564381674477" :wid="`1564381674477`" :index="0" :pid="`1564366648326`" :classes="undefined" :data="pwdTabs.forms[0]"></v2-component-pwdchangeform></el-row></v2container><v2container id="1564367586510" :wid="`1564367586510`" :index="1" :pid="`1564041440608`" v-if="pwdTabs.activeIdx==1"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-component-pwdchangeform class="V2Widget" id="1564381771720" :wid="`1564381771720`" :index="0" :pid="`1564367586510`" :classes="undefined" :data="pwdTabs.forms[1]"></v2-component-pwdchangeform></el-row></v2container><v2container id="1564367608416" :wid="`1564367608416`" :index="2" :pid="`1564041440608`" v-if="pwdTabs.activeIdx==2"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-component-pwdchangeform class="V2Widget" id="1564381806479" :wid="`1564381806479`" :index="0" :pid="`1564367608416`" :classes="undefined" :data="pwdTabs.forms[2]"></v2-component-pwdchangeform></el-row></v2container><v2container id="1564367833244" :wid="`1564367833244`" :index="3" :pid="`1564041440608`" v-if="pwdTabs.activeIdx==3"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-component-pwdchangeform class="V2Widget" id="1564381835365" :wid="`1564381835365`" :index="0" :pid="`1564367833244`" :classes="undefined" :data="pwdTabs.forms[3]"></v2-component-pwdchangeform></el-row></v2container></template></v2-switchable></el-row></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:%;width:100%;" key="2"><v2-component-article class="V2Widget" id="1564368084503" :wid="`1564368084503`" :index="2" :pid="`1564041295800`" :header="operateNote.header" :content="operateNote.content" :contentClass="['article__content']" :headerClass="['article__header']" :compClass="classes.note"></v2-component-article></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentArticle from '@/views/_customWidget/article.vue';import v2ComponentPwdchangeform from '@/views/_customWidget/pwdChangeForm.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":["70","350",""],"direction":"row","children":[{"theme":{"size":"mini"},"style":{"label":{"font-size":"12px","font-weight":"","color":""}},"label":"一卡通号","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"${bankcards.value}","dataType":"def","optionConfig":"${bankcards.options}","options":[{"active":"true","value":"","label":""}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"${classes.select}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{"_root":{},"_op_formSelect_select":{"change":["bankcardChange"]}},"id":1564645253372,"pid":1564041295800,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"component":"v2-layout","href":"v2-layout","layout":[50,"300"],"direction":"row","children":[{"active":"${pwdTabs.activeIdx}","list":[{"active":"true","label":"查询密码修改","name":"0"},{"active":true,"label":"查询密码重置","name":"1"},{"active":true,"label":"取款密码修改","name":"2"},{"active":true,"label":"支付密码重置","name":"3"}],"type":"","tabPosition":"top","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-tabs","href":"v2-component-tabs","children":[],"events":{},"id":1564041477624,"pid":1564041477216,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"activeIndex":"pwdTabs.activeIdx","ctnClass":"","customClass":"","__type":"","__loopTarget":"tabs","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1564366648326,"pid":1564041440608,"component":"v2Container","layout":[100],"position":"row","children":[{"dataBasket":{"classes":"undefined","data":"pwdTabs.forms[0]"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-pwdchangeform","href":"v2-component-pwdchangeform","cptpath":"\\src\\views\\_customWidget\\pwdChangeForm.vue","children":[],"events":{},"id":1564381674477,"pid":1564366648326,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1564367586510,"pid":1564041440608,"component":"v2Container","layout":[100],"position":"row","children":[{"dataBasket":{"classes":"undefined","data":"pwdTabs.forms[1]"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-pwdchangeform","href":"v2-component-pwdchangeform","cptpath":"\\src\\views\\_customWidget\\pwdChangeForm.vue","children":[],"events":{},"id":1564381771720,"pid":1564367586510,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1564367608416,"pid":1564041440608,"component":"v2Container","layout":[100],"position":"row","children":[{"dataBasket":{"classes":"undefined","data":"pwdTabs.forms[2]"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-pwdchangeform","href":"v2-component-pwdchangeform","cptpath":"\\src\\views\\_customWidget\\pwdChangeForm.vue","children":[],"events":{},"id":1564381806479,"pid":1564367608416,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1564367833244,"pid":1564041440608,"component":"v2Container","layout":[100],"position":"row","children":[{"dataBasket":{"classes":"undefined","data":"pwdTabs.forms[3]"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-pwdchangeform","href":"v2-component-pwdchangeform","cptpath":"\\src\\views\\_customWidget\\pwdChangeForm.vue","children":[],"events":{},"id":1564381835365,"pid":1564367833244,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"customEditor":"v2EditorSwitch","id":1564041440608,"pid":1564041477216,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"style":{},"pid":1564041295800,"id":1564041477216,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"${classes.tabs}","realSize":["px","px"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}},{"dataBasket":{"header":"operateNote.header","content":"operateNote.content","contentClass":"['article__content']","headerClass":"['article__header']","compClass":"classes.note"},"ctnClass":"","customClass":"${classes.note}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-article","href":"v2-component-article","cptpath":"\\src\\views\\_customWidget\\article.vue","children":[],"events":{},"id":1564368084503,"pid":1564041295800,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":""}}],"style":{},"pid":"root-0","id":1564041295800,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"${classes.ctn}","realSize":["px","px","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"__loopTarget":""}],"events":{}}},
                        bankcards:{
  options: [{
    value: '1234 5678',
    label: '1234 5678'
  }, {
    value: '2345 6789',
    label: '2345 6789'
  }, {
    value: '3456 7890',
    label: '3456 7890'
  }],
  value: '1234 5678'
},
pwdTabs:{
  activeIdx: '0',
  forms: [
    {
      title: {
        icon: 'el-icon-s-tools',
        ctt: '查询密码修改'
      },
      curCard : {
        key: '当前一卡通卡号',
        val: ''
      },
      inputs: [
        {
          key: '原查询密码',
          val: ''
        },
        {
          key: '新查询密码',
          val: ''
        },
        {
          key: '再次输入新查询密码',
          val: ''
        }
      ],
      btn: '确定'
    },
    {
      title: {
        icon: 'el-icon-s-tools',
        ctt: '查询密码重置'
      },
      curCard : {
        key: '当前一卡通卡号',
        val: '1234 5678 91011'
      },
      inputs: [
        {
          key: '取款密码',
          val: ''
        },
        {
          key: '新查询密码',
          val: ''
        },
        {
          key: '再次输入新查询密码',
          val: ''
        }
      ],
      btn: '确定'
    },
    {
      title: {
        icon: 'el-icon-s-tools',
        ctt: '取款密码修改'
      },
      curCard : {
        key: '当前一卡通卡号',
        val: '1234 5678 91011'
      },
      inputs: [
        {
          key: '原取款密码',
          val: ''
        },
        {
          key: '新取款密码',
          val: ''
        },
        {
          key: '再次输入新取款密码',
          val: ''
        }
      ],
      btn: '确定'
    },
    {
      title: {
        icon: 'el-icon-s-tools',
        ctt: '支付密码重置'
      },
      curCard : {
        key: '当前一卡通卡号',
        val: '1234 5678 91011'
      },
      inputs: [
        {
          key: '原支付密码',
          val: ''
        },
        {
          key: '新支付密码',
          val: ''
        },
        {
          key: '再次输入新支付密码',
          val: ''
        }
      ],
      btn: '确定'
    }
  ]
},
operateNote:{
    header: '说明',
    content: '【操作说明书】科技应用文的一种。又称“操作指南”是对技术环节作具体操作指导的文件；是科技人员的某一技术工具书，常常编汇成小册子。操作的项目不同，操作说明书内容和形式也各不相同，有的以专项技术为内容，也有的以专门的仪器设备或技术为对象；形式上有技术指导书、技术岗位手册、操作规程等。一般的操作说明书格式如下：①引言、②操作原理、③设备用具说明、④操作说明、⑤注意事项和故障排除、⑥附录。核心部分为操作说明，介绍每一操作的具体步骤和要求，有的按操作时间顺序编排，有的按逻辑顺序或操作的重要程度编排。顺序编排应结合实用。操作说明写作要求准确、具体、形象，使用者读起来清楚、易懂。'
},
classes:{
  ctn: ['page__pwd-manager'],
  gridWrap: ['grid__wrap'],
  select: ['pwd-manager__select'],
  tabs : ['pwd-manager__tabs'],
  note : ['article', 'pwd-manager__note']
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                components:{v2ComponentArticle,v2ComponentPwdchangeform},
                methods:{bankcardChange(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = // this.value1

this.$nextTick(function () {
    this.pwdTabs.forms[this.pwdTabs.activeIdx].curCard.val = this.bankcards.value
    console.log(this.bankcards.value)
})
;
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.pwdTabs.activeIdx, dataStr:"pwdTabs.activeIdx", wid:1564041440608, modelKey:"activeIndex" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.pwdTabs.activeIdx, dataStr:"pwdTabs.activeIdx", wid:1564041477624, modelKey:"active" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.operateNote.header, dataStr:"operateNote.header", wid:1564368084503, modelKey:"header" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.operateNote.content, dataStr:"operateNote.content", wid:1564368084503, modelKey:"content" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.note, dataStr:"classes.note", wid:1564368084503, modelKey:"compClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.note, dataStr:"classes.note", wid:1564368084503, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.pwdTabs.forms[1], dataStr:"pwdTabs.forms[1]", wid:1564372251182, modelKey:"data" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.pwdTabs.forms[0], dataStr:"pwdTabs.forms[0]", wid:1564381674477, modelKey:"data" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.pwdTabs.forms[1], dataStr:"pwdTabs.forms[1]", wid:1564381771720, modelKey:"data" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.pwdTabs.forms[2], dataStr:"pwdTabs.forms[2]", wid:1564381806479, modelKey:"data" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.pwdTabs.forms[3], dataStr:"pwdTabs.forms[3]", wid:1564381835365, modelKey:"data" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.ctn, dataStr:"classes.ctn", wid:1564041295800, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.tabs, dataStr:"classes.tabs", wid:1564041477216, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankcards.value, dataStr:"bankcards.value", wid:1564645253372, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankcards.options, dataStr:"bankcards.options", wid:1564645253372, modelKey:"optionConfig" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.classes.select, dataStr:"classes.select", wid:1564645253372, modelKey:"customClass" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = // this.value1

this.bankcardChange();
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