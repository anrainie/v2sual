<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563502702676" :wid="`1563502702676`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:80%;width:100%;" key="0"><v2container id="1563502726536" :wid="`1563502726536`" :index="0" :pid="`1563502702676`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="4" key="0" style="height:100%;"><v2-component-tree class="V2Widget" id="1563502754963" :wid="`1563502754963`" :index="0" :pid="`1563502726536`"></v2-component-tree></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="20" key="1" style="height:100%;"><v2-component-table class="V2Widget" id="1563520789618" :wid="`1563520789618`" :index="1" :pid="`1563502726536`"></v2-component-table></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:20%;width:100%;" key="1"><v2container id="1563502666203" :wid="`1563502666203`" :index="1" :pid="`1563502702676`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563504039722" :wid="`1563504039722`" :index="0" :pid="`1563502666203`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1563504039722-0" :wid="`1563504039722-0`" :index="0" :pid="`1563504039722`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1563504039722-1" :wid="`1563504039722-1`" :index="1" :pid="`1563504039722`"></v2empty></el-row></v2container></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"layout":[17,83],"direction":"col","component":"v2-layout","children":[{"style":{"treeWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"treeData","defaultProps":{"children":"children","label":"label"},"showCheckbox":false,"nodeKey":"id","defExpanded":"${openNodes}","defChecked":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-tree","href":"v2-component-tree","children":[],"events":{},"id":1563502754963,"pid":1563520917871,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},{"theme":{"tableType":"stripe","size":"medium"},"style":{},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false},{"active":true,"prop":"employeeId","label":"柜员号","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"柜员号","description":"柜员号","COLSCALE":"0","name":"employeeId","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"柜员号"}},{"active":true,"prop":"end","label":"交易结束时间","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易结束时间","description":"交易结束时间","COLSCALE":"0","name":"end","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易结束时间"}},{"active":true,"prop":"serialId","label":"业务流水号","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"业务流水号","description":"业务流水号","COLSCALE":"0","name":"serialId","Parameter":{"pname":"serialId","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"业务流水号"}},{"active":true,"prop":"state","label":"交易状态","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易状态","description":"交易状态","COLSCALE":"0","name":"state","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易状态"}},{"active":true,"prop":"tradeName","label":"交易名","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易名","description":"交易名","COLSCALE":"0","name":"tradeName","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易名"}},{"active":true,"prop":"employeeId2","label":"复核柜员号","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"复核柜员号","description":"复核柜员号","COLSCALE":"0","name":"employeeId2","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"复核柜员号"}},{"active":true,"prop":"organId","label":"机构号","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"机构号","description":"机构号","COLSCALE":"0","name":"organId","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"机构号"}},{"active":true,"prop":"start","label":"交易起始时间","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易起始时间","description":"交易起始时间","COLSCALE":"0","name":"start","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易起始时间"}},{"active":true,"prop":"tradeId","label":"交易号","fixed":"","width":"","sortable":false,"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易号","description":"交易号","COLSCALE":"0","name":"tradeId","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易号"}}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"200","toolBtns":[{"active":"true","btnName":"详情","type":"primary","handler":"openDetailPage"},{"active":true,"btnName":"删除","type":"danger","handler":""}],"tHeight":"","tMaxHeight":"","tableData":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1563520789618,"pid":1563502726536,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"id":1563502726536,"pid":1563502702676},{"layout":[100],"direction":"row","component":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[null,null],"events":{},"layout":[50,50],"realSize":["%","%"],"id":1563504039722,"pid":1563502666203,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"center","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","border-radius":"0px"}}],"id":1563502666203,"pid":1563502702676}],"events":{},"layout":[80,20],"realSize":["%","%"],"id":1563502702676,"pid":"root"}],"events":{}}},
                        treeData:[{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
openNodes:[1,2,3]
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{openDetailPage(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{const t4 = await this.open({status:true,page:'form/form',type:'SUB',title:'详情页'});
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.openNodes, dataStr:"openNodes", wid:1563502754963, modelKey:"defExpanded" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.treeData, dataStr:"treeData", wid:1563502754963, modelKey:"configs" });/**bind over**/
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