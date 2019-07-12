<template>
  <el-form
    :model="ruleForm2"
    :rules="rules2"
    ref="ruleForm2"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm cus-login-container"
  >
    <h3 class="cus-title">赞同管理系统</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="identifyCode">
      <identifyInput @setIdentifyCode="setIdentifyCode" placeholder="验证码"></identifyInput>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button
        type="primary"
        class="cus-submit-btn"
        native-type="submit" 
        @click.native.prevent="handleSubmit2"
    
        :loading="logining"
      >登录</el-button>
    </el-form-item>
    <!-- <el-form-item style="width:100%;">
      <el-checkbox v-model="checked" class="cus-remember" text-color="#771faa">记住密码</el-checkbox>
      <el-button type="text" class="cus-forget-passWord">忘记密码</el-button>
    </el-form-item> -->
  </el-form>
</template>

<script>
import { requestLogin, getRoutersList } from "@/api/api";
import { saveRouter, getRouter, addDynRoute } from "@/promission.js";

import identifyInput from "../components/identifyInput.vue";

export default {
  data() {
    return {
      logining: false,
      user: {
        name: "admin123",
        avatar:
          "https://s.gravatar.com/avatar/f30a9191dda93b5389965ed99f57f850?s=50&d=retro"
      },
      ruleForm2: {
        account: "admin123",
        checkPass: "",
        identifyCode: ""
      },
      rules2: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
		],
		identifyCode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: false
    };
  },
  created(){

  },
  methods: {

    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    setIdentifyCode(code) {
      this.ruleForm2.identifyCode = code;
    },
    getMenu:function(list){
      var context = this;
      let menus = [],
          menuObj = {},
          menuParent = {},
          result = list||[];

      if(result.length){
      
        result.sort((a,b)=>{
          return parseInt(a.seq,10)-parseInt(b.seq,10);
        }).map(i=>{
          !i.pid&&(i.pid='');
          let p=menuObj[i.pid];
          if(!p){
            p=menuObj[i.pid]={
              id:i.pid,
              children:[]
            }
          }else{
            !p.children&&(p.children=[]);
          }
          let item=menuObj[i.id]||{
            id:i.id,
          };
          item.pid=i.pid||"";
          item.name = i.id;
          item.path = i.id;
          item.component=i.value;
          item.meta ={title:i.name,icon:i.icon};
          menuObj[i.id]=item;
          p.children.push(item);
        });

        Object.keys(menuObj)
            .filter(e=>!menuObj[e].children)
            .map(e=>delete menuObj[e]);

        return menuObj[''].children;

      }
    },

    handleSubmit2(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          
          var loginParams = {
            username: this.ruleForm2.account,
            password: this.ruleForm2.checkPass,
            checkCode: this.ruleForm2.identifyCode
          };
		  this.logining = true;
          requestLogin(loginParams)
            .then(response => {
              this.logining = false;
              if (response.status && response.content) {
                window.localStorage.setItem('ctoken', response.content.result||'');
                sessionStorage.setItem(
                  "user",
                  JSON.stringify({
                    name: this.ruleForm2.account,
                    avatar: "./img/user.png"
                  })
                );
                global.hasLogin = true;

                getRoutersList().then(res => {
                  if (res.status) {  
                    var list = res&&res.content&&res.content.menus||[],
                        menus =  _this.getMenu(list);                
                    //addDynRoute(res.content.router);
                    addDynRoute(menus);
                    _this.$store.state.openedTabs = [];

                    _this.$router.push({ path: "/" });
                  }
                });

              }else{
                    this.$notify({
                      title: "登录失败",
                      message:response.errorMsg,
                      type: "error"
                    });  
              }
            })
            .catch(err => {
              this.logining = false;
              this.$notify({
                title:'登录失败',
                message: err.errorMsg,
                type: "error"
              });
            });
          // requestLogin(loginParams).then(response => {
          //   this.logining = false;

          // if (response) {
          //   sessionStorage.setItem(
          //     "user",
          //     JSON.stringify({
          //       name: this.ruleForm2.account,
          //       avatar: "./img/user.png"
          //     })
          //   );
          //   global.hasLogin = true;W

          //   getRoutersList().then(res => {
          //     addDynRoute(res.data.router);

          //     _this.$store.state.openedTabs = [];

          //     _this.$router.push({ path: "/" });
          //   });
          // } else {
          //   this.$message({
          //     message: response.errorMsg,
          //     type: "warning"
          //   });
          // }

          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    identifyInput
  }
};
</script>

 <style lang="less" >
.cus-submit-btn {
  width: 100%;
}
.cus-login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .cus-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .cus-remember {
    float: left;
  }

  .cus-forget-passWord {
    float: right;
  }
}
</style>