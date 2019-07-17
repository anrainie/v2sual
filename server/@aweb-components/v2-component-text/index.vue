<template>
  <div :class="widgetClass"  ref="_op_componentText_text" :contenteditable="model.editable" :style="{...(model.style && model.style.textStyle),...model.commonStyle}" v-html="model.text"></div>
</template>

<script>
  export default {
    name: 'v2-component-text',

    data(){
      return {
        
      }
    },
    computed:{
      // textStyle(){
      //   if(this.model.style && this.model.style.textStyle){
      //     // !this.model.style.textStyle.width && (this.model.style.textStyle.width = "100px");
      //     // !this.model.style.textStyle.height && (this.model.style.textStyle.height = "40px");

      //     return this.model.style.textStyle;
      //   }else{
      //      return {'width':'100px','height':'40px'}
      //   }
       
      // }
    },
    mounted() {
    
    }
  }
</script>

