(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["global-userList"],{"3aef":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("el-col",{staticClass:"aweb-table-toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[s("el-form",{attrs:{inline:!0,model:e.searchForm,size:"mini"}},[s("el-form-item",{attrs:{label:"用户ID"}},[s("el-input",{model:{value:e.searchForm.userId,callback:function(t){e.$set(e.searchForm,"userId",t)},expression:"searchForm.userId"}})],1),s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),s("el-form-item",{attrs:{label:"创建用户"}},[s("el-input",{model:{value:e.searchForm.creator,callback:function(t){e.$set(e.searchForm,"creator",t)},expression:"searchForm.creator"}})],1)],1),s("el-form",[s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.searchUsers}},[e._v("查询")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.resetForm}},[e._v("重置")]),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.addUserVisible=!0}}},[e._v("新增")]),s("el-button",{attrs:{type:"primary",disabled:e.isSelected,size:"mini"},on:{click:e.showEditModal}},[e._v("修改")]),s("el-button",{attrs:{type:"primary",disabled:e.isSelected,size:"mini"},on:{click:e.delUser}},[e._v("删除")]),s("el-button",{attrs:{type:"primary",disabled:e.isSelected,size:"mini"},on:{click:e.showAssociateRoleModal}},[e._v("关联角色")]),s("el-button",{attrs:{type:"primary",disabled:e.isLocked,size:"mini"},on:{click:e.unlock}},[e._v("解锁")]),s("el-button",{attrs:{type:"primary",disabled:e.isSelected,size:"mini"},on:{click:e.getUserDetail}},[e._v("详细信息")])],1)],1)],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.userList,"highlight-current-row":"","max-height":"500"},on:{"current-change":e.selectUser}},[s("el-table-column",{attrs:{type:"index",width:"60"}}),s("el-table-column",{attrs:{prop:"userId",label:"用户ID",width:"180",sortable:""}}),s("el-table-column",{attrs:{prop:"username",label:"用户名",width:"100",sortable:""}}),s("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"100",sortable:""}}),s("el-table-column",{attrs:{prop:"createUser",label:"创建用户",width:"120",sortable:""}}),s("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":"180",sortable:""}}),s("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"120",sortable:""}})],1),s("el-col",{staticClass:"aweb-table-toolbar",attrs:{span:24}},[s("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":e.pageSize,total:e.totalUser},on:{"current-change":e.handleCurrentChange}})],1),s("el-dialog",{attrs:{title:"新增用户",visible:e.addUserVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addUserVisible=t}}},[s("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules,size:"mini"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),s("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.nickname,callback:function(t){e.$set(e.addForm,"nickname",t)},expression:"addForm.nickname"}})],1),s("el-form-item",{attrs:{label:"手机",prop:"phone"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.phone,callback:function(t){e.$set(e.addForm,"phone",t)},expression:"addForm.phone"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),s("el-form-item",{attrs:{label:"用户类型",prop:"userType"}},[s("el-radio-group",{model:{value:e.addForm.userType,callback:function(t){e.$set(e.addForm,"userType",t)},expression:"addForm.userType"}},[s("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("管理员")]),s("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("普通用户")])],1)],1),s("el-form-item",{attrs:{label:"备注",prop:"remark"}},[s("el-input",{attrs:{"auto-complete":"off",type:"textarea"},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("确认")]),s("el-button",{nativeOn:{click:function(t){e.addUserVisible=!1}}},[e._v("取消")])],1)],1),s("el-dialog",{attrs:{title:"编辑用户",visible:e.editUserVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editUserVisible=t}}},[s("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules,size:"mini"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{attrs:{disabled:!0,"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),s("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.nickname,callback:function(t){e.$set(e.editForm,"nickname",t)},expression:"editForm.nickname"}})],1),s("el-form-item",{attrs:{label:"手机",prop:"phone"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.phone,callback:function(t){e.$set(e.editForm,"phone",t)},expression:"editForm.phone"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),s("el-form-item",{attrs:{label:"用户类型",prop:"userType"}},[s("el-radio-group",{model:{value:e.editForm.userType,callback:function(t){e.$set(e.editForm,"userType",t)},expression:"editForm.userType"}},[s("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("管理员")]),s("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("普通用户")])],1)],1),s("el-form-item",{attrs:{label:"备注",prop:"remark"}},[s("el-input",{attrs:{"auto-complete":"off",type:"textarea"},model:{value:e.editForm.remark,callback:function(t){e.$set(e.editForm,"remark",t)},expression:"editForm.remark"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("确认")]),s("el-button",{nativeOn:{click:function(t){e.editUserVisible=!1}}},[e._v("取消")])],1)],1),s("el-dialog",{attrs:{title:"关联角色",visible:e.roleModalVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.roleModalVisible=t}}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"roleTable",staticStyle:{width:"100%"},attrs:{data:e.roleList,"max-height":"500"},on:{"selection-change":e.changeRole}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),s("el-table-column",{attrs:{type:"index",width:"60"}}),s("el-table-column",{attrs:{prop:"roleId",label:"角色ID",sortable:""}}),s("el-table-column",{attrs:{prop:"roleName",label:"角色名",sortable:""}}),s("el-table-column",{attrs:{prop:"remark",label:"备注",sortable:""}})],1),s("el-col",{staticClass:"aweb-table-toolbar",attrs:{span:24}},[s("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","current-page":e.rolePage,"page-size":e.pageSize,total:e.totalRole},on:{"current-change":e.getPageRole}})],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.sureAssociateRole(t)}}},[e._v("确认")]),s("el-button",{nativeOn:{click:function(t){e.roleModalVisible=!1}}},[e._v("取消")])],1)],1),s("el-dialog",{attrs:{title:"详细信息",visible:e.detailModalVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.detailModalVisible=t}}},[s("div",{staticClass:"basic-info-wrap"},[s("p",{staticClass:"basic-info-title"},[e._v("基本信息")]),s("div",{staticClass:"basic-info-ctn"},[s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("用户ID：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.userId))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("用户名：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.username))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("昵称：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.nickname))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("手机：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.telephone))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("用户类型：")]),s("div",{staticClass:"group-text"},[e._v(e._s("0"===e.selectedUser.userType?"管理员":"普通用户"))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("邮箱：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.email))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("备注：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.remark))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("创建用户：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.createUser))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("创建时间：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.formatTime(e.selectedUser.createTime)))])])])]),s("div",{staticClass:"basic-info-wrap"},[s("p",{staticClass:"basic-info-title"},[e._v("其他信息")]),s("div",{staticClass:"basic-info-ctn"},[s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("更新时间：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.formatTime(e.selectedUser.updateTime)))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("最后登录成功时间：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.formatTime(e.selectedUser.lastLoginTime)))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("最后登录失败时间：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.formatTime(e.selectedUser.lastFailedLoginTime)))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("锁定开始时间：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.lockTime||""))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("连续登录错误次数：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.failedLoginCount))])]),s("div",{staticClass:"group-item"},[s("label",{staticClass:"group-label"},[e._v("用户登录IP：")]),s("div",{staticClass:"group-text"},[e._v(e._s(e.selectedUser.lastHostAddress))])])])])])],1)},r=[],i=s("b36c"),l=i["a"],o=(s("acbe"),s("2877")),n=Object(o["a"])(l,a,r,!1,null,null,null);t["default"]=n.exports},"4ca8":function(e,t,s){},acbe:function(e,t,s){"use strict";var a=s("4ca8"),r=s.n(a);r.a},b36c:function(e,t,s){"use strict";(function(e){s("7f7f"),s("ac6a"),s("c5f6"),s("4ec3");t["a"]={data:function(){var e=function(e,t,s){""===t?s(new Error("请输入手机号")):Number(t)?s():s(new Error("请输入正确的手机号"))},t=function(e,t,s){""===t?s(new Error("请输入邮箱")):/\w+.com$/g.test(t)?s():s(new Error("请输入正确的邮箱"))},s=function(e,t,s){""===t?s(new Error("请输入用户名")):/[a-zA-Z][a-zA-Z0-9_]{5,19}$/g.test(t)?s():s(new Error("用户名必须字母开头，是字母、数字或下划线中的任两种的组合，长度为6至20位"))};return{searchForm:{userId:"",username:"",creator:""},isLocked:!0,userList:[],roleList:[],totalUser:0,userPage:1,pageSize:10,listLoading:!1,isSelected:!0,selectedUser:{},editUserVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:s,trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:e,trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:t,trigger:"blur"}],userType:[{required:!0,message:"请选择用户类型",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"}]},editForm:{name:"",nickname:"",phone:"",email:"",userType:-1,remark:""},addUserVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:s,trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:e,trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:t,trigger:"blur"}],userType:[{required:!0,message:"请选择用户类型",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"}]},addForm:{name:"",nickname:"",phone:"",email:"",userType:"",remark:""},roleModalVisible:!1,selectedRole:[],selectedPageRole:{},detailModalVisible:!1,rolePage:1,totalRole:0,userRoles:[]}},props:{params:String},methods:{searchUsers:function(){this.userPage=1,this.getUsers()},handleCurrentChange:function(e){this.userPage=e,this.getUsers()},getUsers:function(){var t=this;this.listLoading=!0,this.$get("".concat(e.$axios.server,"/springmvc/user/listAllUsers.do"),{userId:t.searchForm.userId,username:t.searchForm.username,createUser:t.searchForm.creator,pageNum:t.userPage,pageSize:t.pageSize}).then(function(e){var s=e&&e.content&&e.content.data&&e.content.data.userList||[];if(e.status&&s){for(var a=0;a<s.length;a++)s[a].createTime=t.formatTime(s[a].createTime);t.userList=s,t.totalUser=e.content.data.totle||0}}),this.listLoading=!1},resetForm:function(){this.searchForm.userId="",this.searchForm.username="",this.searchForm.creator="",this.userPage=1,this.getUsers()},delUser:function(){var t=this;this.$confirm("确认删除该用户吗?","删除用户",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$deleteAxios("".concat(e.$axios.server,"/springmvc/user/delete/").concat(t.selectedUser.userId),{}).then(function(e){e.status&&(t.$notify({title:"删除用户成功",type:"success"}),t.getUsers())}).catch(function(e){t.$notify({title:"删除用户失败",type:"error"})})})},getRoleList:function(){var t=this;this.$get("".concat(e.$axios.server,"/springmvc/role/listAllRoles"),{createUser:"",roleName:"",roleId:"",pageNum:t.rolePage,pageSize:t.pageSize}).then(function(e){e.status&&(t.roleList=e.content&&e.content.data&&e.content.data.roleList||[],t.totalRole=e.content&&e.content.data&&e.content.data.totle||0,t.$refs.roleTable.toggleRowSelection(t.roleList[0]),t.$nextTick(function(){t.selectedPageRole[t.rolePage]&&t.selectedPageRole[t.rolePage].length?t.selectedPageRole[t.rolePage].forEach(function(e){for(var s=0;s<t.roleList.length;s++)t.roleList[s].roleId===e.roleId&&t.$refs.roleTable.toggleRowSelection(t.roleList[s])}):t.userRoles.length&&t.totalRole&&t.userRoles.forEach(function(e){for(var s=0;s<t.roleList.length;s++)t.roleList[s].roleId===e.role.roleId&&t.$refs.roleTable.toggleRowSelection(t.roleList[s])})}))}).catch(function(e){t.$notify({title:e,type:"error"})})},getPageRole:function(e){this.selectedPageRole[this.rolePage]=this.selectedRole||[],this.rolePage=e,this.getRoleList()},showAssociateRoleModal:function(){var t=this;this.rolePage=1,t.selectedPageRole={},this.$get("".concat(e.$axios.server,"/springmvc/user/listUserRelevanceRoles/").concat(this.selectedUser.userId),{}).then(function(e){e.status&&(t.userRoles=e&&e.content&&e.content.userRoles||[]),t.getRoleList()}).catch(function(e){t.$notify({title:e,type:"error"})}),t.roleModalVisible=!0},changeRole:function(e){this.selectedRole=e},sureAssociateRole:function(){var t=this,s=this.selectedUser.userId,a=[];if(1===Math.ceil(this.totalRole/this.pageSize))a=this.selectedRole.map(function(e){return e.roleId});else{for(var r in this.selectedPageRole)this.selectedPageRole.hasOwnProperty(r)&&(a=a.concat(this.selectedPageRole[r]));a=a.map(function(e){return e.roleId})}a&&a.length?this.$putAxios("".concat(e.$axios.server,"/springmvc/user/doUserRelevanceRoles/").concat(s),{roleIds:a}).then(function(e){e.status&&(t.$notify({title:"关联角色成功",type:"success"}),t.roleModalVisible=!1)}).catch(function(e){t.$notify({title:e,type:"error"})}):t.$notify({title:"请选择角色",type:"error"})},unlock:function(){var t=this;t.$putAxios("".concat(e.$axios.server,"/springmvc/user/doUnlockUser/").concat(t.selectedUser.userId),{}).then(function(e){e.status?(t.$notify({title:"解锁成功",type:"success"}),t.getUsers()):t.$notify({title:"解锁失败",message:e.errorMsg,type:"error"})}).catch(function(e){t.$notify({title:"解锁失败",message:e,type:"error"})})},getUserDetail:function(){this.detailModalVisible=!0},showEditModal:function(){this.editForm.name=this.selectedUser.username,this.editForm.nickname=this.selectedUser.nickname,this.editForm.phone=this.selectedUser.telephone,this.editForm.email=this.selectedUser.email,this.editForm.userType=Number(this.selectedUser.userType),this.editForm.remark=this.selectedUser.remark,this.editUserVisible=!0},editSubmit:function(){var t=this;this.$refs.editForm.validate(function(s){if(s){t.addLoading=!0;var a={};a.userId=t.selectedUser.userId,a.nickname=t.editForm.nickname,a.remark=t.editForm.remark,a.userType=t.editForm.userType,a.email=t.editForm.email,a.telephone=t.editForm.phone,t.$putAxios("".concat(e.$axios.server,"/springmvc/user/editUser"),a).then(function(e){t.addLoading=!1,e.status?(t.$notify({title:"修改用户成功",type:"success"}),t.$refs["editForm"].resetFields(),t.editUserVisible=!1,t.getUsers()):t.$notify({title:"修改用户失败",type:"error"})})}})},addSubmit:function(){var t=this;this.$refs.addForm.validate(function(s){if(s){t.addLoading=!0;var a={};a.username=t.addForm.name,a.nickname=t.addForm.nickname,a.remark=t.addForm.remark,a.userType=t.addForm.userType,a.email=t.addForm.email,a.telephone=t.addForm.phone,t.$post("".concat(e.$axios.server,"/springmvc/user/addUser"),a).then(function(e){t.addLoading=!1,e.status?(t.$alert('创建用户成功,用户密码为：<span style="font-weight:bold;font-size:14px">'+e.content.password+"</span>","提示",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0}),t.$refs["addForm"].resetFields(),t.addUserVisible=!1,t.getUsers()):t.$notify({title:e.errorMsg||"创建用户失败",type:"error"})})}})},selectUser:function(t){var s=this;this.selectedUser=t||{},t?(this.isSelected=!1,"正常"===t.status&&(this.isLocked=!0),"正常"!==t.status&&(this.isLocked=!1)):(this.isSelected=!0,this.isLocked=!0),this.listLoading=!0,this.$get("".concat(e.$axios.server,"/springmvc/user/info/").concat(this.selectedUser.userId),{}).then(function(e){e.status&&(s.selectedUser=e&&e.content&&e.content.user||{})}),this.listLoading=!1},formatTime:function(e){var t=e&&new Date(e);return e&&t?t.getFullYear()+"-"+(t.getMonth()+1>9?t.getMonth()+1:"0"+(t.getMonth()+1))+"-"+(t.getDate()>9?t.getDate():"0"+t.getDate())+" "+(t.getHours()>9?t.getHours():"0"+t.getHours())+":"+(t.getMinutes()>9?t.getMinutes():"0"+t.getMinutes())+":"+(t.getSeconds()>9?t.getSeconds():"0"+t.getSeconds()):""}},mounted:function(){this.getUsers(),console.log("刷新表格页面,参数",this.params)},resume:function(){console.log("表格页面resume")},pause:function(){console.log("表格页面pause")}}}).call(this,s("24aa"))}}]);