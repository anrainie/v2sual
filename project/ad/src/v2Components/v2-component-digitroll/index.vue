<template>
  <div :class="widgetClass"  :style="digitrollStyle">
    <DigitRoll :rollDigits="rollDigits" :isPic='false' :mode="modeType"/>
  </div>

</template>
<script>
import DigitRoll from './digitroll'

export default {
  name: "v2-component-digitroll",
  data() {
    return {
     modeType:'edit',
     rollDigits:820133288
    };
  },
  watch:{
    'model.digits':{
      
      handler(val){
        this.rollDigits = parseInt(val)
      }
    }
  },
  computed:{
      digitrollStyle(){
         this.model.commonStyle && (this.model.commonStyle['width']=(((this.rollDigits+'').length*parseInt(this.model.dWidth))+200)+'px');
         this.model.commonStyle && (this.model.commonStyle['height']=this.model.dHeight||'160px');
         return this.model.commonStyle ||{"width":(((this.rollDigits+'').length*112)+200)+'px',"height":'160px'}
      }
  },
  created(){
    if(this.$ArrowDown && this.$ArrowLeft && this.$Tab){
      this.modeType = 'runtime'
    }else{
      this.modeType ='edit'
    }
  },
  mounted(){
       debugger;
        console.log('mode',this.model);
      this.rollDigits = parseInt(this.model.digits);
  },
  components: { DigitRoll }
};
</script>
<style lang="scss" scoped>
ul.d-roll-list:after {
    content: '笔';
    display: block;
    float: left;
    font-size: 60px;
    color: #d5bb7d;
    width: 60px;
    padding: 0 20px;
    line-height: 160px;
    margin-top: 15px;
    font-weight: 800;
}
</style>
