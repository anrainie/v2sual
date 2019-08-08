<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="aweb-table-toolbar" style="padding-bottom: 0px; width:500px;margin-left:calc((100% - 500px)/2); text-align:center;">
			<el-form :model="changePwdForm" label-width="120px" :rules="changePwdFormRules" ref="changePwdForm" size="mini">
				<el-form-item label="旧密码" prop="oldPwd">
                    <el-input placeholder="请输入旧密码" v-model="changePwdForm.oldPwd" auto-complete="off" show-password></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPwd">
                    <el-input placeholder="请输入新密码" v-model="changePwdForm.newPwd" auto-complete="off" show-password></el-input>
                </el-form-item>
                <el-form-item label="重复新密码" prop="repeatPwd">
                    <el-input placeholder="请重复新密码" v-model="changePwdForm.repeatPwd" auto-complete="off" show-password></el-input>
                </el-form-item>      
				<el-form-item>
					<el-button type="primary" v-on:click="changePassword">提交</el-button>           
				</el-form-item>          
			</el-form>
		</el-col>

	</section>
</template>

<script>

import  {mixins} from '@/lib';
export default {
  mixins:[mixins],
		data() {
			var _this = this;
			var validatePwd = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
					//(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[~!#@&%\\^\\$_\\(\\)\\*\\.]+$)(.{6,30})
				} else if (!/(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[~!#@&%\\^\\$_\\(\\)\\*\\.]+$)(.{6,30})/g.test(value)) {
					callback(new Error("密码长度需在6-30之间，并且包含数字、字母和符号"));
				} else {
					callback();
				}
			},
			validateRepeatPwd = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else if (_this.changePwdForm.newPwd!==value) {
					callback(new Error("两次密码不一致"));
				} else {
					callback();
				}
			};
			return {
                changePwdForm:{
                    oldPwd:'',
                    newPwd:'',
                    repeatPwd:''
                },
			
				changePwdFormRules: {
					oldPwd: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{validator:validatePwd,trigger:'blur'}
                    ],
                    newPwd: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{validator:validatePwd,trigger:'blur'}
					],
					repeatPwd: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{validator:validateRepeatPwd,trigger:'blur'}
					]
				},
				
			}
		},
		props:{
			params:String //父组件传过来的参数
		},
		methods: {
			changePassword:function(){
				this.$refs.changePwdForm.validate(valid => {
					if (valid) {
						this.addLoading = true;
						let params = {};

						params.oldPassword = this.changePwdForm.oldPwd;
						params.newPassword = this.changePwdForm.newPwd;
						params.repeatNewPassword = this.changePwdForm.repeatPwd;
						this.$axios.put(`${this.$axios.server}/changePassword.do?ctoken=${localStorage.getItem('ctoken')}&oldPassword=${params.oldPassword}&newPassword=${params.newPassword}&repeatNewPassword=${params.repeatNewPassword}`).then(res => {
							this.addLoading = false;
							if (res.status) {
								this.$notify({
									title: "修改密码成功",
									type: "success"
								});
								this.$refs.changePwdForm.resetFields();
							} else {
								this.$notify({
									title: "修改密码失败",
									message:res.errorMsg,
									type: "error"
								});
							}
						});
						// this.$putAxios(
						// 	`${this.$axios.server}/changePassword.do`,
						// 	params
						// ).then(res => {
						// 	this.addLoading = false;
						// 	if (res.status) {
						// 		this.$notify({
						// 			title: "修改密码成功",
						// 			type: "success"
						// 		});
						// 		this.$refs.changePwdForm.resetFields();
						// 	} else {
						// 		this.$notify({
						// 			title: "修改密码失败",
						// 			message:res.errorMsg,
						// 			type: "error"
						// 		});
						// 	}
						// });
					}
				});				
			}
		},
		mounted() {

			console.log('刷新表格页面,参数',this.params)
		},
		resume(){
			console.log('表格页面resume')
		},
		pause(){
			console.log('表格页面pause')
		}
	}

</script>

<style lang="less">
.aweb-table-toolbar{
    padding: 12px;
    text-align: left;
}
</style>