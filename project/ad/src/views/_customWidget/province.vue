<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1566300216539" :wid="`1566300216539`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`wave`]" id="1566300800540" :wid="`1566300800540`" :index="1" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1566301365629" :wid="`1566301365629`" :index="2" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`vda-text2`]" id="1566301405105" :wid="`1566301405105`" :index="3" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"139px","left":"107px"},"ctnClass":"","customClass":"","events":{},"height":"24","href":"v2-component-image","src":"img/prov_line.png","style":{},"width":"2","__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1566300216539,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"wave","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"70px","left":"100px"},"id":1566300800540,"pid":"root","animate":["","animated"]},{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"106px","left":"60px","width":95,"height":35},"ctnClass":"","customClass":"","events":{},"height":"34","href":"v2-component-image","src":"img/prov_0.png","style":{},"width":"95","__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1566301365629,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"center","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${name}","editable":false,"ctnClass":"","customClass":"vda-text2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"107px","left":"58px","color":"#D9933A","width":"99px","height":"36px"},"id":1566301405105,"pid":"root","animate":["","animated"]}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        
                    }
                },
                props:{
                  detail:{default:()=>{return 0}},
name:{default:()=>{return '8.四川'}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.detail, dataStr:"detail", wid:1566300850414, modelKey:"activeIndex" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.name, dataStr:"name", wid:1566301405105, modelKey:"text" });/**bind over**/
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
.wave{
 box-shadow: inset 0 0 20px 4px rgba(255,255,255,1);
 top: 50%;
 left: 50%;
 margin-top: 97px;
 position: absolute;
 width: 16px;
 height: 16px;
 border-radius: 50%;
 transform: translate(-50%,-50%) rotateX(70deg);
 z-index: 1;
 animation: boxShadow1 0.8s linear infinite;
}

@keyframes boxShadow1 {
 0% {
  width: 0;
  height: 0;
 }
 100% {
  width: 120px;
  height: 120px;
 }
}
</style>