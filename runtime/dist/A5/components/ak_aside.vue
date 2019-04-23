<template>
	<div class="aside">
		<div v-for="icon in icons" v-bind:key="icon.id"
			v-bind:class="['icon',{activeAside:currentTab.id === icon.id}]" 
			v-on:click="getCurrentIcon(icon)">
			<span><i :class='icon.icon'></i></span>
		</div>
		<div class="list" v-show="listShow" v-on:click="hideIcon"><i class="fa fa-indent"></i></div>
	</div>
</template>
<script>
	export default{
	  name: 'ak_aside',
	  data (){
	    return {
	    	icons:this.parentData,
			currentTab:{
				id:'manager'
			},
			listShow:false
	    }
	  },
	  props:['parentData','fromLeftMenu'],
	  watch:{
	  	fromLeftMenu(newValue,oldValue){
	  		this.listShow=newValue
	  	}
	  },
	  created(){
	  	var icon=this.parentData[0]
	  	this.currentTab=icon
	  	this.$emit('currentMenu',icon.child)
	  },
	  methods:{
	  	getCurrentIcon(icon){
	  		this.currentTab=icon
	  		this.$emit('currentMenu',icon.child)
	  	},
	  	hideIcon(){
	  		this.listShow=false
	  		this.$emit('asideShow',this.listShow)
	  	}
	  },
	}
</script>
<style>
	.aside{
		width:60px;
		top: 60px;
	    left: 0;
	    bottom: 0px;
	    position: absolute;
	    z-index:3;
	    background:#616161;
	}
	.icon{
		color:#fff;
		font-size:1.5em;
		text-align:center;
		height:48px;
		width:100%;
		line-height:48px;
	}
	.activeAside{
		background:#03a9f4;
	}
</style>