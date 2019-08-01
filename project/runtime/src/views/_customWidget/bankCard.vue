<template><v2container :wid="`root`" style="width:250px;height:200px"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563762438797" :wid="`1563762438797`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:69%;width:100%;" key="0"><v2-component-image class="V2Widget" id="1563762443281" :wid="`1563762443281`" :index="0" :pid="`1563762438797`"></v2-component-image></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:31%;width:100%;" key="1"><v2-switchable class="V2Widget" id="1563765120183" :wid="`1563765120183`" :index="1" :pid="`1563762438797`" activeindex="activeIndex"><template><v2container id="1563765125490" :wid="`1563765125490`" :index="0" :pid="`1563765120183`" v-if="activeIndex==0"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1563765648217" :wid="`1563765648217`" :index="0" :pid="`1563765125490`"></v2-component-text></el-row></v2container><v2container id="1563765091029" :wid="`1563765091029`" :index="1" :pid="`1563765120183`" v-if="activeIndex==1"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563765778662" :wid="`1563765778662`" :index="0" :pid="`1563765091029`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="8" key="0" style="height:100%;"><v2-component-btn class="V2Widget" :class="''" id="1563765862233" :wid="`1563765862233`" :index="0" :pid="`1563765778662`"></v2-component-btn></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="8" key="1" style="height:100%;"><v2-component-btn class="V2Widget" id="1563765926053" :wid="`1563765926053`" :index="1" :pid="`1563765778662`"></v2-component-btn></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="8" key="2" style="height:100%;"><v2-component-btn class="V2Widget" id="1563765865114" :wid="`1563765865114`" :index="2" :pid="`1563765778662`"></v2-component-btn></el-col></v2container></el-row></v2container></template></v2-switchable></el-row></v2container></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{},"src":"img/bankCard.png","height":"110px","width":"200px","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"id":1563762443281,"pid":1563762438797,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"5%","margin-bottom":"","margin-left":"10%","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"activeIndex","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1563765125490,"pid":1563765120183,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"招商银行 | 一卡通","editable":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563765648217,"pid":1563765125490,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"center","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}]},{"id":1563765091029,"pid":1563765120183,"component":"v2Container","layout":[100],"position":"row","children":[{"component":"v2-layout","href":"v2-layout","layout":[33.33,33.33,33.33],"direction":"col","children":[{"theme":{"btnType":"","size":"mini"},"style":{"btnStyle":{"background-color":"","height":"","width":"","color":""}},"btnName":"转账汇款","shape":"def","loading":false,"disabled":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1563765862233,"pid":1563765778662,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"10px"},"layoutClass":[],"lastLayoutClass":[null,null]},{"theme":{"btnType":"danger","size":"mini"},"style":{"btnStyle":{"background-color":"","height":"","width":"","color":""}},"btnName":"生活缴费","shape":"def","loading":false,"disabled":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1563765926053,"pid":1563766326081,"commonStyle":{"position":"","top":"10","right":"","left":"10","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"100","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"100","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"btnType":"","size":"mini"},"style":{"btnStyle":{"background-color":"","height":"","width":"","color":""}},"btnName":"交易查询","shape":"def","loading":false,"disabled":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1563765865114,"pid":1563765778662,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","border-radius":"0px"}}],"style":{},"pid":"1563765091029-0","id":1563765778662,"realSize":["%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}]}],"events":{},"customEditor":"v2EditorSwitch","id":1563765120183,"pid":1563765680135,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}],"events":{"wrap":{"mouseenter":["event0_1563762438797"]}},"layout":[69,31],"realSize":["%","%"],"id":1563762438797,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"events":{},"realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}},
                        
                    }
                },
                props:{
                  activeIndex:{default:()=>{return 0}}
                },
                mixins:[root,cpt,widget],
                
                methods:{event0_1563762438797(widget,item){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = this.value1;
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t1 = 1;
})();
                    /*overview over*/
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeIndex, dataStr:"activeIndex", wid:1563765120183, modelKey:"activeIndex" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = $(this.$el).on('mouseenter',e=>{
    this.activeIndex=1;
}).on('mouseleave',e=>{
    this.activeIndex=0;
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