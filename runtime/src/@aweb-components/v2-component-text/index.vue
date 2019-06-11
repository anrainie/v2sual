<template>
  <div :class="model.layoutClass" :contenteditable="model.editable" :style="textStyle">{{model.text}}</div>
</template>

<script>
  export default {
    name: 'v2-component-text',

    data(){
      return {
        
      }
    },
    computed:{
      textStyle(){
        if(this.model.style && this.model.style.textStyle){
          !this.model.style.textStyle.width && (this.model.style.textStyle.width = "40px");
          !this.model.style.textStyle.height && (this.model.style.textStyle.height = "40px");

          return this.model.style.textStyle;
        }else{
           return {'width':'100px','height':'40px'}
        }
       
      }
    },
    mounted() {
    
    }
  }
</script>

