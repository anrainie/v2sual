<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="bottomClass" id="1568011016229" :wid="`1568011016229`" :index="0" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="deviceClass" id="1568011916969" :wid="`1568011916969`" :index="1" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1568012154772" :wid="`1568012154772`" :index="2" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="titleClass" id="1568012441276" :wid="`1568012441276`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="keyClass" id="1568012460358" :wid="`1568012460358`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="valueClass" id="1568012408199" :wid="`1568012408199`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="keyClass" id="1568012389996" :wid="`1568012389996`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="valueClass" id="1568012442323" :wid="`1568012442323`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="keyClass" id="1568027862919" :wid="`1568027862919`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="valueClass" id="1568027934709" :wid="`1568027934709`" :index="9" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"${bottomClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2%","left":"10%","bottom":"2%","width":"90%","height":"95%","animation-duration":"1s"},"id":1568011016229,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"width":"50%"}},"customClass":"${deviceClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2%","left":"10%","bottom":"2%","height":"95%","animation-duration":"1s"},"id":1568011916969,"pid":"root","animate":["","animated"]},{"src":"${icon}","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"-60%","left":"-10%","width":"40%","height":"200%","animation-duration":"1s"},"id":1568012154772,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${title}","customClass":"${titleClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"15%","left":"25%","animation-duration":"1s"},"id":1568012441276,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${key1}","customClass":"${keyClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"55%","left":"25%","animation-duration":"1s"},"id":1568012460358,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${value1}","customClass":"${valueClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"55%","left":"40%","animation-duration":"1s"},"id":1568012408199,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${key3}","customClass":"${keyClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"55%","left":"75%","animation-duration":"1s"},"id":1568012389996,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${value3}","customClass":"${valueClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"55%","left":"85%","animation-duration":"1s"},"id":1568012442323,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${key2}","customClass":"${keyClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"55%","left":"50%","animation-duration":"1s"},"id":1568027862919,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${value2}","customClass":"${valueClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"55%","left":"65%","animation-duration":"1s"},"id":1568027934709,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  bottomClass:{default:()=>{return `vda_device_bottom`}},
deviceWidth:{default:()=>{return `50%`}},
deviceClass:{default:()=>{return `vda_device_proportion`}},
icon:{default:()=>{return `img/shanghai/s_atm.png`}},
title:{default:()=>{return `自助取款机`}},
key1:{default:()=>{return `完整数`}},
value1:{default:()=>{return "10"}},
key2:{default:()=>{return `完整数`}},
value2:{default:()=>{return "10"}},
key3:{default:()=>{return `占比`}},
value3:{default:()=>{return `47.8%`}},
titleClass:{default:()=>{return `vda_device_title`}},
keyClass:{default:()=>{return `vda_device_key`}},
valueClass:{default:()=>{return `vda_device_value`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.bottomClass, dataStr:"bottomClass", wid:1568011016229, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.deviceClass, dataStr:"deviceClass", wid:1568011916969, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.deviceWidth, dataStr:"deviceWidth", wid:1568011916969, modelKey:"style.textStyle.width" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.icon, dataStr:"icon", wid:1568012154772, modelKey:"src" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1568012441276, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.titleClass, dataStr:"titleClass", wid:1568012441276, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.key1, dataStr:"key1", wid:1568012460358, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.keyClass, dataStr:"keyClass", wid:1568012460358, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.keyClass, dataStr:"keyClass", wid:1568012389996, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.key3, dataStr:"key3", wid:1568012389996, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueClass, dataStr:"valueClass", wid:1568012442323, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value3, dataStr:"value3", wid:1568012442323, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueClass, dataStr:"valueClass", wid:1568012408199, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value1, dataStr:"value1", wid:1568012408199, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.keyClass, dataStr:"keyClass", wid:1568027862919, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.key2, dataStr:"key2", wid:1568027862919, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueClass, dataStr:"valueClass", wid:1568027934709, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value2, dataStr:"value2", wid:1568027934709, modelKey:"text" });/**bind over**/
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

</style>