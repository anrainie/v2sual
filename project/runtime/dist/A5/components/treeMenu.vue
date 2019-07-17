<template>
 <ul>
   <li v-for='(cel,key) in model' :key='key'  ref="listId">
       <span  :id="cel.id" @click='selected(cel,key)'>
        <i v-if='cel.children&&cel.children.length' :class="[!cel.show ?'fa fa-caret-up':'fa fa-caret-down']" @click="toggle(cel)"></i>
         <i class = "selectBox" @click = "checkItem(cel)" v-if="test[cel.id]==undefined?false:{}">
                <!-- 如果cel的selectArr.length是大于0的，也就是里面有值的话就是勾选状态，否则就是不勾选状态 -->
                <i :class = "{'checkName fa fa-check':true}" v-if="test[cel.id]==undefined?false:test[cel.id].selectArr"></i>
         </i>
         {{cel.local_name}}
       </span>
       <treeMenu  v-show="cel.show" v-if='cel.children&&cel.children.length' :model='cel.children' @getId="getId" @checkItem="checkItem" :test="test" @checkId="checkId"></treeMenu>
   </li>
 </ul>
</template>
<script>
 export default {
  name: 'treeMenu',
  props: {
          //数组中的子集
          model:{
            type:Array,
            default:''
          },
          test:{
            type:Object,
            default:''
          }
         }, 
  components: {},
  data() {
   return {
          idArr:[]
       }
  },
  computed: {
  },
  mounted(){
    // console.log(this.test);
  },
  methods: {
    // 列表显示隐藏和选中
   selected: function(cel,key) {
   $('ul').find('.active').removeClass('active')
   $('#'+cel.id).addClass('active')
    this.$emit('getId',cel);
   },
   getId(val){
    this.$emit("getId",val);
   },
   toggle(cel){
      cel.show= !cel.show;
   },
   checkId(val){
    this.$emit('checkId',val);
   },
    // 将checkItem方法暴露出去
  checkItem(data){
            var test = this.test;
            // console.log(test);
            if(test[data.id].selectArr==false){
                test[data.id].selectArr=true;
                if(data.children&&data.children.length>0){
                        this.child(data.children,true,test);
                }
               this.addFather(data,test);
            }else{
                test[data.id].selectArr = false;
                   if(data.children&&data.children.length>0){
                        this.child(data.children,false,test);
                   }
                   this.clearFather(data,test);
            }
            this.idArr = []
            for(var x in test){
              if(test[x].selectArr==true){
                 this.idArr.push(test[x].id);
              }
            }
             // 多选id函数
             this.$emit('checkId',this.idArr);
           
        },
    // 子级的多选添加与取消
   child(arr,type,test){
      for(var key1 in test){
          for(var i = 0;i < arr.length;i++){
              if(key1==arr[i].id){
                test[key1].selectArr = type;
              }else if(arr[i].children && arr[i].children.length > 0){
                  this.child(arr[i].children,type,test);
              }
           }
      }
   }, 
    // 父级添加多选
   addFather(data,test){
      if(data.parentId!=''){
          for(var key in test){
            if(key == data.parentId){
                test[key].selectArr=true;
                this.addFather(test[key],test);
            }
          }
      }
    },
  //清空父级多选
  clearFather(data,test){
      var parentId = data.parentId;
      if(parentId!=''){
        if(test[parentId].children.length>0){
            for(var i = 0,length=test[parentId].children.length;i <length;i++){
                if(test[parentId].children[i].selectArr==true){
                    test[parentId].selectArr=true;
                    break;
                }
                if(test[parentId].children[i].selectArr==false&&i==length-1){
                    test[parentId].selectArr=false;
                    // var current_parentId=test[parentId].parentId
                    this.clearFather(test[parentId],test)
                }
            }
        }
      }
    }
  }
 }
</script>
 
<style scoped>
 ul {
  list-style: none;
  padding-left:20px;
 }
 ul li{
  list-style: none;
  line-height: 1.5;
 }
 .active{
  background:lightgray;
 }
 .selectBox{
   display: inline-block;
   width: 16px;
   height:16px;
   border:1px solid #ccc;
   border-radius: 3px;
   position: relative;
   background: #fff;
   top:3px;
    
}
.selectBox .checkName{
       position: absolute;
       top:2px;
       left:0px;
       color:#333;
    }
</style>