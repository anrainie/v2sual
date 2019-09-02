<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-ctn-xy class="V2Widget" id="1567417616711" :wid="`1567417616711`" :index="0" :pid="`root`"><v2-component-image class="V2Widget" id="1567417666056" :wid="`1567417666056`" :index="0" :pid="`1567417616711`"></v2-component-image><v2-component-text class="V2Widget" :class="[`white_background`]" id="1567417975465" :wid="`1567417975465`" :index="1" :pid="`1567417616711`"></v2-component-text><v2-component-text class="V2Widget" :class="[`fin_title`]" id="1567418139214" :wid="`1567418139214`" :index="2" :pid="`1567417616711`"></v2-component-text><v2-component-image_text class="V2Widget" :style="`position:absolute;top:107px;left:43px;width:100px;height:120px;`" id="1567419502918" :wid="`1567419502918`" :index="3" :pid="`1567417616711`" :img="`img/finhelper/sicon1.png`" :text="`黄金产品`"></v2-component-image_text><v2-component-image_text class="V2Widget" :style="`position:absolute;top:107px;left:198px;width:100px;height:121px;`" id="1567419441892" :wid="`1567419441892`" :index="4" :pid="`1567417616711`" :img="`img/finhelper/sicon2.png`" :text="`基金产品`"></v2-component-image_text><v2-component-image_text class="V2Widget" :style="`position:absolute;top:107px;left:361px;width:100px;height:120px;`" id="1567419526261" :wid="`1567419526261`" :index="5" :pid="`1567417616711`" :img="`img/finhelper/sicon3.png`" :text="`理财产品`"></v2-component-image_text><v2empty class="V2Empty" id="1567417616711-6" :wid="`1567417616711-6`" :index="6" :pid="`1567417616711`"></v2empty><v2empty class="V2Empty" id="1567417616711-7" :wid="`1567417616711-7`" :index="7" :pid="`1567417616711`"></v2empty><v2empty class="V2Empty" id="1567417616711-8" :wid="`1567417616711-8`" :index="8" :pid="`1567417616711`"></v2empty><v2empty class="V2Empty" id="1567417616711-9" :wid="`1567417616711-9`" :index="9" :pid="`1567417616711`"></v2empty></v2-ctn-xy></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentImage_text from '@/views/_customWidget/image_text.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-xy","href":"v2-ctn-xy","children":[{"src":"img/finhelper/page1.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"107px","left":"20px","width":1479,"height":177},"id":1567417666056,"pid":1567417616711,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"white_background","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"38px","left":"-6px","width":"1535px","height":"680px"},"id":1567417975465,"pid":1567417616711,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"bold","font-style":"","text-decoration":""}},"text":"产品超市","editable":false,"ctnClass":"","customClass":"fin_title","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1.0057px","left":"43px","font-size":"20px"},"id":1567418139214,"pid":1567417616711,"animate":["","animated"]},{"dataBasket":{"img":"img/finhelper/sicon1.png","text":"黄金产品"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image_text","href":"v2-component-image_text","cptpath":"\\src\\views\\_customWidget\\image_text.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"107px","left":"43px","width":"100px","height":"120px"},"id":1567419502918,"pid":1567417616711,"animate":["","animated"]},{"dataBasket":{"img":"img/finhelper/sicon2.png","text":"基金产品"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image_text","href":"v2-component-image_text","cptpath":"\\src\\views\\_customWidget\\image_text.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"107px","left":"198px","width":"100px","height":"121px"},"id":1567419441892,"pid":1567417616711,"animate":["","animated"]},{"dataBasket":{"img":"img/finhelper/sicon3.png","text":"理财产品"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image_text","href":"v2-component-image_text","cptpath":"\\src\\views\\_customWidget\\image_text.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"107px","left":"361px","width":"100px","height":"120px"},"id":1567419526261,"pid":1567417616711,"animate":["","animated"]},null,null,null,null],"events":{},"customEditor":"v2EditorXYCtn","id":1567417616711,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentImage_text},
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