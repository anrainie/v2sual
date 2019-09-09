<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="BannerClass" id="1567583758864" :wid="`1567583758864`" :index="0" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567583990590" :wid="`1567583990590`" :index="1" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`device_name`]" id="1567584023355" :wid="`1567584023355`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`device_number`]" id="1567584178962" :wid="`1567584178962`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`device_data`]" id="1567584201677" :wid="`1567584201677`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`device_data`]" id="1567584240870" :wid="`1567584240870`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`device_data`]" id="1567584466853" :wid="`1567584466853`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`device_data`]" id="1567584514370" :wid="`1567584514370`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`device_number`]" id="1567584749195" :wid="`1567584749195`" :index="8" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"${BannerClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","height":"1.6rem","animation-duration":"1s","left":"0px","width":"100%","top":"0px"},"id":1567583758864,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"0.12rem","width":"1rem","height":"1rem","animation-duration":"1s","right":"-0.05rem"},"events":{},"href":"v2-component-image","src":"${img}","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567583990590,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${name}","customClass":"device_name","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.12rem","left":"0.12rem","animation-duration":"1s","font-size":"0.18rem"},"id":1567584023355,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${number}","customClass":"device_number","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.6rem","left":"0.12rem","animation-duration":"1s","font-size":"0.2rem","transform":"none","margin-top":"0"},"id":1567584178962,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${intact_number}","customClass":"device_data","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2rem","left":"0.6rem","animation-duration":"1s","font-size":"0.14rem"},"id":1567584201677,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${open_number}","customClass":"device_data","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2rem","left":"1.5rem","animation-duration":"1s","font-size":"0.14rem"},"id":1567584240870,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"完好","customClass":"device_data","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2rem","left":"0.12rem","animation-duration":"1s","font-size":"0.1rem"},"id":1567584466853,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"开机","customClass":"device_data","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.2rem","left":"1rem","animation-duration":"1s","font-size":"0.1rem"},"id":1567584514370,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"台","customClass":"device_number","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.65rem","left":"0.5rem","font-size":"0.15rem","animation-duration":"1s"},"id":1567584749195,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  BannerClass:{default:()=>{return "['s_m_panel','s_m_gradient2']"}},
img:{default:()=>{return `img/形状 3.png`}},
name:{default:()=>{return `CDS`}},
number:{default:()=>{return "6"}},
intact_number:{default:()=>{return "13"}},
intact_rare:{default:()=>{return `99%`}},
open_number:{default:()=>{return "11"}},
open_rare:{default:()=>{return `97%`}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{
                  _source_init(){
                    let ctx = this;
                    window.pipe.vda.ready().then(() =>{
                      
                    });
                  },
                  
                },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    ctx._source_init();
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.BannerClass, dataStr:"BannerClass", wid:1567583758864, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.img, dataStr:"img", wid:1567583990590, modelKey:"src" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.name, dataStr:"name", wid:1567584023355, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.number, dataStr:"number", wid:1567584178962, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.intact_number, dataStr:"intact_number", wid:1567584201677, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.open_number, dataStr:"open_number", wid:1567584240870, modelKey:"text" });/**bind over**/

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