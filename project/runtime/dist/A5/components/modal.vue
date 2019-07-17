<template>
    <div class="modal" data-id="modal" :style="style" >
    	<div class="modal-header">
    		<button title="关闭" type="button" class="close" @click="close">X</button>
    		<slot name="title"><span>{{title}}</span></slot>
    	</div>
    	<div class="modal-body">
    		<slot name="main">{{content}}</slot>
    	</div>
    	<div class="modal-footer" :style="footerStyle">
    		<button type="button" data-role="confirm" class="btn btn-focus" @click="submit">确定</button>
    		<button type="button" data-role="cancel" class="btn btn-normal" @click="close">取消</button>
    	</div>
    </div>
</template>
<script>
	module.exports={
		data(){
			return{
			}
		},
		methods:{
			close(){
				this.$emit('hide')
			},
			submit(){
				this.$emit('submit')
			},
		},
		props:{
			width:String,
			height:String,
			title:{
				type:String,
				default:''
			},
			content:{
				type:String,
				default:''
			},
			display:String
		},
		computed:{
			style(){
				let style={}
				if(this.width) {
            		style.width = this.width;
            	}
            	if(this.height){
            		style.height = this.height;
            	}
            	return style
			},
			footerStyle(){
				let style={}
				if(this.display=='none'){
					style.display='none'
				}
				return style
			}
		}
	}
</script>
<style scoped>
	.modal{
		width:500px;
		height:500px;
		border-radius:4px;
		margin:auto;
		z-index:1000;
		background:#fff;
		box-shadow: 0 0 15px rgba(0,0,0,.3);
		border:1px solid #e5e5e5;
		display:block;
	}
	.modal .modal-header{
		padding: 20px;
		height:50px;
		line-height:50px;
		border-bottom:1px solid #bdbdbd;
	}
	.modal .modal-header>span{
		opacity: 0.87;
	    font-size: 14px;
	    position: absolute;
	    left: 30px;
	    top: 0px;
	    font-weight: bold;
	}
	.modal .modal-header .close{
		margin-top: -7px;
	    font-size: 24px;
	    color: #4d4d4d;
	    font-weight: 200;
	}
	.modal .modal-body{
		position: relative;
	    z-index: 1;
	    overflow-y: auto;
	    margin:0px 45px;
	    max-height:76%;
	}
	.modal .modal-footer{
		position: absolute;
	    bottom: 18px;
	    left: 0;
	    right: 5px;
	    height: 50px;
	    overflow: hidden;
	    padding: 14px 15px 15px;
	    margin-bottom: 0;
	    text-align: right;
	    border-top:none;
	}
	.modal .modal-footer .btn-focus{
		background-color: #03a9f4;
	    width: 80px;
	    height: 35px;
	    color:#fff;
	    border-radius:4px;
	}
	.modal .modal-footer .btn-normal{
		color: #000;
	    width: 80px;
	    height: 35px;
	    border:1px solid #6e6e6e;
	    background:#f5f5f5;
	    border-radius:4px;
	    opacity:0.8;
	}
</style>