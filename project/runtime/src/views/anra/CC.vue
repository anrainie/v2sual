<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563582557475" :wid="`1563582557475`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:8%;width:100%;opacity:1,border-radius:0px" key="0"><v2-form-input class="V2Widget" id="1563876208204" :wid="`1563876208204`" :index="0" :pid="`1563582557475`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:8%;width:100%;opacity:1,border-radius:0px" key="1"><v2-form-input class="V2Widget" id="1563876301248" :wid="`1563876301248`" :index="1" :pid="`1563582557475`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:8%;width:100%;" key="2"><v2-form-input class="V2Widget" id="1563876253373" :wid="`1563876253373`" :index="2" :pid="`1563582557475`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:8%;width:100%;opacity:1,border-radius:0px" key="3"><v2-form-input class="V2Widget" id="1563876246798" :wid="`1563876246798`" :index="3" :pid="`1563582557475`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:8%;width:100%;opacity:1,border-radius:0px" key="4"><v2-form-input class="V2Widget" id="1563876307252" :wid="`1563876307252`" :index="4" :pid="`1563582557475`"></v2-form-input></el-row><el-row class="V2ContainerBlock" style="height:10%;width:100%;opacity:1,border-radius:0px" key="5"><v2empty class="V2Empty" id="1563582557475-5" :wid="`1563582557475-5`" :index="5" :pid="`1563582557475`"></v2empty></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;opacity:1,border-radius:0px" key="6"><v2loop class="V2Widget" id="1563766414906" :wid="`1563766414906`" :index="6" :pid="`1563582557475`"><template v-slot="scope"><v2-component-bankcard class="V2Widget" :id="`1563766414906-${scope._key}`" :wid="`1563766414906-${scope._key}`" :index="scope._key" :pid="`1563766414906`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :activeIndex="0"></v2-component-bankcard></template></v2loop></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            import v2ComponentBankcard from '@/views/_customWidget/bankCard.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"theme":{"size":""},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1563876208204,"pid":1563582557475,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},{"theme":{"size":""},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1563876301248,"pid":1563582557475,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":""},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1563876253373,"pid":1563582557475,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},{"theme":{"size":""},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1563876246798,"pid":1563582557475,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},{"theme":{"size":""},"label":"标题","titleMode":"col","labelWitdh":"80px","inputType":"text","rows":"2","placeholder":"请选择","prepend":"","append":"","maxlength":"","minlength":"","prefixIcon":"","suffixIcon":"","showWordLimit":false,"value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1563876307252,"pid":1563582557475,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}},null,{"dataBasket":{"activeIndex":"0"},"customClass":"","__type":"loop","__loopTarget":"cardList","__capacity":"3","component":"v2-component-bankcard","href":"v2-component-bankcard","cptpath":"\\src\\views\\_customWidget\\bankCard.vue","children":[],"events":{},"id":1563766414906,"pid":1563582557475,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}],"events":{},"layout":[8,8,8,8,8,10,50],"realSize":["%","%","%","%","%","%","%"],"id":1563582557475,"pid":"root","ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","opacity":1,"border-radius":"0px"}],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}],"events":{},"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}}},
                        treeList:[
{
    label:'首页'
}],
activeId:0,
cardList:[
    {},{},{}
]
                    }
                },
                props:{
                  
                },
                mixins:[root],
                components:{v2ComponentBankcard},
                methods:{event0_1563258333580(widget,item){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t5 = this.value1;
})();
                    /*overview over*/
                    
                    
              }, changeClick(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = alert(1);
})();
                    /*overview over*/
                    
                    
              }, Test(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = alert(1);
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.theme1, dataStr:"theme1", wid:1563262000359, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.treeList, dataStr:"treeList", wid:1563450812189, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeId, dataStr:"activeId", wid:1563504966754, modelKey:"activeIndex" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.activeId, dataStr:"activeId", wid:1563505032434, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardList, dataStr:"cardList", wid:1563766414906, modelKey:"__loopTarget" });/**bind over**/
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
                deactivated(){/**页面切出**/},
                activated(){/**页面切入**/},

            };
        </script>
<style lang="scss">

</style>