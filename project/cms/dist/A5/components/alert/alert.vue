<template>
	<transition name="ak-message">
		<li :class="`ak-message-${ type }`" v-show="visible">
			<i :class="typeClass"></i>
			<p class="ak-message_content">{{message}}</p>
			<div class="ak-message_closeBtn"><i class="ak-icon-close" @click="close"></i></div>
		</li>
	</transition>
</template>
<script>
	const typeMap={
		success:'success',
		warning:'warning',
		error:'error'
	};
	export default{
		data(){
			return{
				id:'',
				message:'',
				type:'warning',
				closed:false,
				visible:true,
				showClose:false,
				onClose:null,
				duration:3000,
				timer:null
			}
		},
		methods:{
			destroyElement() {
        		this.$el.removeEventListener('transitionend', this.destroyElement);
        		this.$destroy(true);
        		this.$el.parentNode.removeChild(this.$el);
      		},
			close(){
				this.closed=true
				if(typeof this.onClose==='function'){
					this.onClose(this)
				}
			},
			startTimer(){
				if(this.duration>0){
					this.timer = setTimeout(()=>{
						if(!this.closed){
							this.close()
						}
					},this.duration)
				}
			},
			clearTimer(){
				clearTimeout(this.timer)
			}
		},
		watch: {
	      closed(newVal) {
	        if (newVal) {
	          this.visible = false;
	          this.$el.addEventListener('transitionend', this.destroyElement);
	        }
	      }
	    },
		computed:{
			typeClass(){
				return `ak-message_icon el-icon-${typeMap[this.type]}`
			}
		},
		mounted(){
			this.startTimer()
		},
	}
</script>
<style>
	.ak-message>li{
		list-style:none;
		display:flex;
		padding:10px 10px;
		margin:10px 0;
		border-radius:4px;
	}
	.ak-message>li>p{
		margin:0;
		font-size:12px;
	}
	.ak-message-success{
		background-color: #f0f9eb;
    	color: #67c23a;
	}
	.ak-message-error{
		background-color: #fef0f0;
    	color: #f56c6c;
	}
	.ak-message-warning{
		background-color: #fdf6ec;
    	color: #e6a23c;
	}
	.ak-message_closeBtn{
		font-size: 12px;
	    color: #c0c4cc;
	    opacity: 1;
	    position:fixed;
	    cursor: pointer;
	 	right:15px;
	}
	.ak-message .ak-message_icon{
		font-size:16px;
		width:16px;
		margin-right:10px;
	}
	.ak-message [class*="ak-icon-"]{
		font-family: element-icons!important;
	    speak: none;
	    font-style: normal;
	    font-weight: 400;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    vertical-align: baseline;
	    display: inline-block;
	    -webkit-font-smoothing: antialiased;
	}
	.ak-message .ak-icon-warning{
		color: #e6a23c;
	}
	.ak-message .ak-icon-warning:before{
		content: "\e62e";
	}
	.ak-message .ak-icon-success:before{
		content: "\e62d";
	}
	.ak-message .ak-icon-error:before{
		content: "\e62c";
	}
	.ak-icon-close:before {
	    content: "\e60f";
	}
</style>