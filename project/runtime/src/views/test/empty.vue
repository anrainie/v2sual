<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-form-input class="V2Widget" id="1569291061602" :wid="`1569291061602`" :index="0" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:undefined%;" key="1"><v2-form-switch class="V2Widget" id="1569291129431" :wid="`1569291129431`" :index="1" :pid="`root`"></v2-form-switch></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:undefined%;" key="2"><v2-form-radio class="V2Widget" id="1569291134861" :wid="`1569291134861`" :index="2" :pid="`root`"></v2-form-radio></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:undefined%;" key="3"><v2-form-input class="V2Widget" id="1569291136653" :wid="`1569291136653`" :index="3" :pid="`root`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:undefined%;" key="4"><v2-form-radio class="V2Widget" id="1569291098325" :wid="`1569291098325`" :index="4" :pid="`root`"></v2-form-radio></el-row><el-row class="V2ContainerBlock" style="height:undefined%;" key="5"><v2empty class="V2Empty" id="root-5" :wid="`root-5`" :index="5" :pid="`root`"></v2empty></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"events":{},"ctnStyle":[{},{},{},{},{},{},null,{}],"realSize":["%","%","%",""],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"],"children":[{"theme":{},"style":{"label":{}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","__capacity":"1","component":"v2-form-input","href":"v2-form-input","events":{},"id":1569291061602,"pid":"root","commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border","animation-duration":"1s"},"animate":["","animated"]},{"style":{"title":{}},"label":"标题","labelWitdh":"80px","titleMode":"col","activeText":"开","inactiveText":"关","__capacity":"1","component":"v2-form-switch","href":"v2-form-switch","events":{},"id":1569291129431,"pid":"root","commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border","width":"100%","animation-duration":"1s"},"animate":["","animated"]},{"theme":{},"style":{"label":{}},"label":"标题","labelWitdh":"80px","titleMode":"col","options":[{"active":"true","text":"文本","disabled":false,"label":""},{"active":true,"text":"文本","disabled":false,"label":""}],"__capacity":"1","component":"v2-form-radio","href":"v2-form-radio","events":{},"id":1569291134861,"pid":"root","commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border","width":"100%","animation-duration":"1s"},"animate":["","animated"]},{"theme":{},"style":{"label":{}},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请输入","__capacity":"1","component":"v2-form-input","href":"v2-form-input","events":{},"id":1569291136653,"pid":"root","commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border","animation-duration":"1s"},"animate":["","animated"]},{"theme":{},"style":{"label":{}},"label":"标题","labelWitdh":"80px","titleMode":"col","options":[{"active":"true","text":"文本","disabled":false,"label":""},{"active":true,"text":"文本","disabled":false,"label":""}],"__capacity":"1","component":"v2-form-radio","href":"v2-form-radio","events":{},"id":1569291098325,"pid":"root","commonStyle":{"position":"relative","margin-top":"10px","margin-bottom":"10px","margin-left":"10px","margin-right":"10px","box-sizing":"border","width":"100%","animation-duration":"1s"},"animate":["","animated"]},null]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
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