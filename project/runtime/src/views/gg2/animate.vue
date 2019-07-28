<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1561970454592" :wid="`1561970454592`" :index="0" :pid="`root`"></v2-form-input></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{"_op_formInput_input":{"focus":["event0_1561970454592"]}},"id":1561970454592,"pid":"root"}],"events":{}}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{event0_1561970454592(widget,item){
                let ctx = this;
                
            
                    /*overview*/
                        (async()=>{const t1 = await (new Promise((res,rej)=>{
       const t=ctx.id;
    debugger;
    res(t);
}));
})();
                    /*overview over*/
                    
                    
            }, event1_1561970454592(widget,item){
                let ctx = this;
                
            
                    /*overview*/
                        (async()=>{const t1 = await new Promise(res=>{
    console.log('hello')
    res(1);
});
})();
                    /*overview over*/
                    
                    
            }, event2_1561970454592(widget,item){
                let ctx = this;
                
            
                    /*overview*/
                        (async()=>{const t1 = await new Promise(re=>{
    re(1);
});
})();
                    /*overview over*/
                    
                    
            }, },
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    
                    /**bind**//**bind over**/
                /*overview*/
                    (async()=>{const t1 = await this.value1;
})();
                /*overview over*/
                
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