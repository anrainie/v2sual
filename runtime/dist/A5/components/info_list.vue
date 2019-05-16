<template>
	<div  class="info_list">
		<div class="dv-left" :style="style">
			<div v-if="spreadIcon !=undefined" class="spread" v-on:click="spread"><i v-bind:class="spread_flag==true?'fa fa-caret-up':'fa fa-caret-down'"></i></div>{{name}}
	    </div>
		<div class="dv-right" v-if="info_flag">{{value}}</div>
		<div v-bind:class="toggle" :id="id" :enable="enable" @click="modal">
			<i v-bind:class="updateSwitchStyle"></i></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				spread_flag:this.spreadIcon,
				info_flag:this.infoDisp,
				switch:this.enable,
				toggle:this.enable==true?'open':'close'
			}
		},
		props:{
			name:String,
			value:[String,Number],
			icon:String,
			id:String,
			spreadIcon:Boolean,
			infoDisp:Boolean,
			width:String,
			marginLeft:String,
			enable:Boolean
		},
		computed:{
			style(){
				let style={}
				if(this.width){
            		style.width = this.width;
            	}
            	if(this.marginLeft){
            		style.marginLeft = this.marginLeft;
            	}
            	return style
			},
			updateSwitchStyle(){
				if(this.id=="switch" && this.enable){
					this.toggle='open'
					return 'fa fa-toggle-on'
				}else if(this.id=="switch" && !this.enable){
					this.toggle='close'
					return 'fa fa-toggle-off'
				}else if(this.id=="device"){
					this.toggle='open'
					return 'fa fa-edit'
				}else if(this.id=="check"){
					this.toggle='open'
					return 'fa fa-list'
				}
			}
		},
		methods:{
			modal(){
				var info = {
					id:this.id,
					enable:!this.enable
				}
				this.switch = info.enable
				this.$emit('modal',info)
			},
			spread(){
				this.spread_flag = !this.spread_flag
				this.info_flag = !this.info_flag
				var info = {
					flag:this.spread_flag,
					name:this.name
				}
				this.$emit('spread',info)
			},
		}
	}
</script>
<style>
	.info_list{
		color:#000;
		opacity:0.8;
		font-size:12px;
		display:flex;
		height:30px;
		line-height:30px;
	}
	.info_list .dv-left .spread{
		font-size: 1.4em;
	    margin-right: 5px;
	    margin-top: -1px;
	    width: 10px;
	    float:left;
	}
	.info_list .dv-left{
		text-align:left;
		width:120px;
	}
	.info_list .dv-right{
		width:auto;
	}
	.info_list .open{
		color:#03a9f4;
		margin: 3px 10px;
		font-size:1.8em;
	}
	.info_list .close{
		color:#000;
		margin: 5px 10px;
		font-size:1.8em;
	}
</style>