<template><v2container :wid="`root`" style="width:100%;height:60px"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563523267977" :wid="`1563523267977`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-component-icon class="V2Widget" id="1563523779440" :wid="`1563523779440`" :index="0" :pid="`1563523267977`"></v2-component-icon></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-component-text class="V2Widget" id="1563523805252" :wid="`1563523805252`" :index="1" :pid="`1563523267977`"></v2-component-text></el-row></v2container></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","font-size":"","vertical-align":""}},"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"iStyle":{"font-size":"","font-weight":"","color":"#3642b9","top":"","right":"","bottom":"","left":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":"","line-height":""},"iWarpStyle":{"background-color":"","margin":"","padding":"","top":"","right":"","bottom":"","left":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":"","font-size":"","line-height":"45px"}},"icon":"${icon}","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{},"id":1563523779440,"pid":1563523267977,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"40px","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","font-size":"24px"}},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"20px","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":"","top":"","right":"","bottom":"","left":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","max-height":"","max-width":"","min-height":"","min-width":""}},"text":"${ctt}","editable":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563523805252,"pid":1563523267977,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"20px","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","font-size":"12px"}}],"events":{"wrap":{"click":["event0_1563523267977"]}},"layout":[50,50],"realSize":[null,null],"id":1563523267977,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"60px","height":"60px","text-align":"center","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}],"events":{}}},
                        
                    }
                },
                props:{
                  icon:{default:()=>{return 'el-icon-eleme'}},
ctt:{default:()=>{return '图标'}}
                },
                mixins:[root,cpt,widget],
                
                methods:{event0_1563523267977(widget,item){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = this.value1

alert('点击快捷键');
console.log(this);;
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.icon, dataStr:"icon", wid:1563523779440, modelKey:"icon" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.ctt, dataStr:"ctt", wid:1563523805252, modelKey:"text" });/**bind over**/
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
                pause(){/**页面切出**/},
                resume(){/**页面切入**/},

            };
        </script>