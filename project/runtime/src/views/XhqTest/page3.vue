<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:20%;" key="0"><v2container id="1567151261276" :wid="`1567151261276`" :index="0" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" style="width:30%;" key="0"><v2-component-icon class="V2Widget" id="1567151352167" :wid="`1567151352167`" :index="0" :pid="`1567151261276`"></v2-component-icon></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="width:70%;" key="1"><v2-component-text class="V2Widget" id="1567151319826" :wid="`1567151319826`" :index="1" :pid="`1567151261276`"></v2-component-text></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;" key="1"><v2-component-btn class="V2Widget" id="1567151489359" :wid="`1567151489359`" :index="1" :pid="`root`"></v2-component-btn></el-row><el-row class="V2ContainerBlock" style="height:70%;" key="2"><v2empty class="V2Empty" id="root-2" :wid="`root-2`" :index="2" :pid="`root`"></v2empty></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"col","layout":["100"],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"iStyle":{"font-size":"","font-weight":""}},"icon":"el-icon-success","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{},"id":1567151352167,"pid":1567151261276,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"30px","margin-bottom":"","margin-left":"100px","margin-right":"","font-size":"80px","color":"#19C919","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"已成功转账","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567151319826,"pid":1567151261276,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"0","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"20px","margin-bottom":"","margin-left":"","margin-right":"","font-size":"70px","color":"#19C919","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"layout":["30","70"],"realSize":["%","%"],"id":1567151261276,"pid":1567151206486,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"#2D8CF0","height":"","width":""}},"btnName":"返回","shape":"def","loading":false,"leftIcon":"","rightIcon":"","disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{"_root":{},"_op_componentBtn_btn":{"click":["已完成"]}},"id":1567151489359,"pid":1567151206486,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"150px","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"200px","margin-right":"","font-size":"","color":"#FFFFFF","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},null],"events":{},"layout":["20","10","70"],"realSize":["%","%","%"],"id":1567151206486,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"realSize":["%"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
                methods:{已完成(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t1 = ctx.$root.$emit('step',{
    index: 0
});
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