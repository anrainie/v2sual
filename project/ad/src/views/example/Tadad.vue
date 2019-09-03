<template><v2-ctn-xy :wid="`root`"><v2-form-input class="V2Widget" id="1567500972324" :wid="`1567500972324`" :index="0" :pid="`root`"></v2-form-input><v2-component-text class="V2Widget" id="1567501042022" :wid="`1567501042022`" :index="1" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"commonStyle":{"position":"absolute","top":"89px","left":"78px"},"id":1567500972324,"pid":"root","undefined":"${v2forminput_1567500972324_undefined}","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"test","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"238px","left":"74px"},"id":1567501042022,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        v2forminput_1567500972324_undefined:""
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.v2forminput_1567500972324_undefined, dataStr:"v2forminput_1567500972324_undefined", wid:1567500972324, modelKey:"undefined" });/**bind over**/
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