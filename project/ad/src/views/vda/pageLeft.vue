<template><v2-ctn-xy :wid="`root`"><v2-component-vdafolder class="V2Widget" :style="`position:absolute;top:85.0167px;left:74px;width:321px;height:229px;`" id="1566525343062" :wid="`1566525343062`" :index="0" :pid="`root`" :title="`响应耗时`" :persent="`50%`" :currentValue="222" :commonValue="261" :icon="`el-icon-arrow-down`" :textClass="['vda-f-text']" :valueClass="['valueUp']" :value="`40%`"></v2-component-vdafolder><v2-form-input class="V2Widget" id="1566526645962" :wid="`1566526645962`" :index="1" :pid="`root`"></v2-form-input><v2-component-text class="V2Widget" id="1566526726331" :wid="`1566526726331`" :index="2" :pid="`root`"></v2-component-text><v2-form-select class="V2Widget" id="1566526728835" :wid="`1566526728835`" :index="3" :pid="`root`"></v2-form-select><v2-switchable class="V2Widget" id="1566979557509" :wid="`1566979557509`" :index="4" :pid="`root`" activeindex="0"><template><v2editorxyctn class="V2Widget" id="1566979532245" :wid="`1566979532245`" :index="0" :pid="`1566979557509`" v-if="0==0"><v2-component-text class="V2Widget" id="1566979529956" :wid="`1566979529956`" :index="0" :pid="`1566979532245`"></v2-component-text><v2-component-text class="V2Widget" id="1566979573565" :wid="`1566979573565`" :index="1" :pid="`1566979532245`"></v2-component-text><v2empty class="V2Empty" id="1566979532245-2" :wid="`1566979532245-2`" :index="2" :pid="`1566979532245`"></v2empty></v2editorxyctn></template></v2-switchable></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentVdafolder from '@/views/_customWidget/vdafolder.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"dataBasket":{"title":"'响应耗时'","persent":"'50%'","currentValue":"222","commonValue":"261","icon":"'el-icon-arrow-down'","textClass":"['vda-f-text']","valueClass":"['valueUp']","value":"\"40%\""},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-vdafolder","href":"v2-component-vdafolder","cptpath":"\\src\\views\\_customWidget\\vdafolder.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"85.0167px","left":"74px","width":"321px","height":"229px"},"id":1566525343062,"pid":"root","animate":["","animated"]},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"commonStyle":{"position":"absolute","top":127,"left":471},"id":1566526645962,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"文本内容","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"407px","left":"74px"},"id":1566526726331,"pid":"root","animate":["","animated"]},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"公司名","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"companyId","dataType":"def","optionConfig":"","options":[{"active":"true","value":"","label":""}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"commonStyle":{"position":"absolute","top":"347px","left":"177px"},"id":1566526728835,"pid":"root","animate":["","animated"]},{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"0","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1566979532245,"pid":1566979557509,"component":"v2EditorXYCtn","layout":[100],"position":"row","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"文本内容","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"99px","left":"152px"},"id":1566979529956,"pid":1566979532245},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"文本内容","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"4px","left":"11px"},"id":1566979573565,"pid":1566979532245},null],"ctnClass":"","customClass":"","realSize":[],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorSwitch","commonStyle":{"position":"absolute","top":"314px","left":"177px","width":"427px","height":"272px"},"id":1566979557509,"pid":"root","animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        companyId:""
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentVdafolder},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**//**bind over**/
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