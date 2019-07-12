<template>
  <div class="afa-ajax-wrapper">
    <el-row class="aweb-component-info">
        <p class="afa-ajax">调用afa服务，需要在页面"import afaAxios from '@/api/afaAxios'"。afaAxios需要传入一个参数对象params，params中包括url、t、m、data等参数。
          其中url为代理请求路径，默认为'/afa',t为afa交易码t，m为afa服务码m，data为请求所需要的参数对象数据。
          如果更改代理请求路径的值，则需要把vue.config.js文件里proxy配置的'/afa'改为对应的值。</p>
    </el-row>
    <el-row class="aweb-normal-ctn">
      <el-form
        :model="afa"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="afa交易码t" prop="name">
          <el-input v-model="afa.t"></el-input>
        </el-form-item>

        <el-form-item label="afa服务码m" prop="desc">
          <el-input v-model="afa.m"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">连接afa服务</el-button>
        </el-form-item>
      </el-form>
    </el-row>

    <el-row v-if="isShowResult" class="aweb-normal-ctn afa-result">
      <el-form
        :model="afaResult"
        ref="afaForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户ID" prop="id">
          <el-input v-model="afaResult.UserID"></el-input>
        </el-form-item>

        <el-form-item label="用户名" prop="name1">
          <el-input v-model="afaResult.Name"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email1">
          <el-input v-model="afaResult.Email"></el-input>
        </el-form-item>

      </el-form>
    </el-row>
    
  </div>
</template>

<script>
import axios from 'axios';
import afaAxios from '@/api/afaAxios';
export default {
    data() {
      return {
        afa: {
          t: 'http',
          m:'json'
        },
        isShowResult:false,
        afaResult:{},

        formInline: {
          user: '',
          region: ''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        // axios.get(`/afa/${this.afa.t}/${this.afa.m}`).then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
        var self = this;
        afaAxios({t:'http',m:'json'}).then(function (response) {
            if(response.data){
              self.afaResult = response.data;
              self.isShowResult = true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    }
  }
</script>

<style lang="less">
.aweb-component-info{
  height: 100px;
  padding: 20px;
  width: 100%;
  margin: 20px 0;
  >h3{
    margin-bottom:12px;
  }
}
.aweb-normal-ctn{
     padding: 20px;
    margin: 0 20px;
    // padding: 12px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
  form{
      width: 600px;

  }
}
.afa-result{
  margin-top:20px;
}
</style>

