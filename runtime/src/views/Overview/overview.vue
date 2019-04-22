<template>
  <div>
    <label>
      输入1：
      <input :value="value1">
    </label>
    <label>
      输入2：
      <input :value="value2">
    </label>
    <div :style="style">Hello World</div>
  </div>
</template>

<script>
import { parse } from "querystring";
import { callbackify } from 'util';

const app={
    async greatThan(input1,input2){
        return new Promise((res,rej)=>{
            try{
                const i=parseFloat(input1);
                const j=parseFloat(input2);

                res(i>j);
            }catch(e){
                rej(e);
            }
        });
    },

    async lessThan(input1,input2){
        return new Promise((res,rej)=>{
            try{
                const i=parseFloat(input1);
                const j=parseFloat(input2);

                res(i>j);
            }catch(e){
                rej(e);
            }
        });
    },

    async condition(input1,input2,condition){}
};



export default {
  data() {
    return {
      style: {
        color: "green"
      },
      value1: "1",
      value2: "2",

      $$overview: {
        $$color: 0
      }
    };
  },
  watch: {
    value1(val) {
      ++this.$$overview.$$color;
    },
    value2(val) {
      ++this.$$overview.$$color;
    },
    '$$overview.$$color'(val) {
        this.style.color=(await app.condition(app.greatThan(this.value1,10),app.lessThan(this.value2,100),'and'))?'red':'green'
    }
  }
};
</script>

