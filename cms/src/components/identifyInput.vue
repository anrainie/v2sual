<template>

      <div class="cus-code-input">
        <el-input class="input" maxlength="8" placeholder="请输入验证码" v-model="identifyCode" @change="setIdentifyCode"></el-input>
        <div class="cus-identifying-code" @click="getIdentifyingCode(true)">
            <img style="height:40px; width: 100px; cursor: pointer;" alt="点击更换" :src=identifyCodeSrc
                title="点击更换" />
        </div>
      </div>

</template>

<script>
// import axios from 'axios';
import '../api/';
export default {
  name: 'identifyInput',

  data() {
    return {
      identifyCode:"",
      identifyCodeSrc:`${global.$axios.server}/verifyImage.do`
    };
  },
  mounted(){
    
  },

  methods: {
     setIdentifyCode(){
       this.$emit('setIdentifyCode',this.identifyCode)
     },
    getIdentifyingCode: function (bRefresh) {
     
      if (bRefresh) {
        this.identifyCodeSrc = `${global.$axios.server}/verifyImage.do?${Math.random()}`;
      }   
    },
  }
}
</script>

<style>

  .cus-identifying-code {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    width: 102px; /*设置图片显示的宽*/
    height: 40px; /*图片显示的高*/
    background: #e2e2e2;
    margin: 0;
  }
</style>