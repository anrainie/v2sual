<template>
	<div class="leftMenu" v-show="menuShow">
		<div v-for="menu in menuData" 
			v-bind:class="['menu',{active:currentMenu.id === menu.id}]"
			v-on:click="currentMenu=menu">
			<router-link tag="li" :to="menu.name" replace>{{menu.local_name}}</router-link>
		</div>
		 <div class="list" v-on:click="hideLeftMenu"><i class="fa fa-dedent"></i></div> 
		<!-- <div class="list"><i class="fa fa-dedent"></i></div> -->
	</div>
</template>
<script>
export default{
  name: 'leftMenu',
  data () {
    return {
     	menuData:{},
     	currentMenu:'',
     	menuShow:true
    }
  },
  props:['parentMenu','fromAside'],
  watch:{
  	parentMenu(newValue,oldValue){
  		this.menuData=this.parentMenu
  	},
  	fromAside(newValue,oldValue){
  		this.menuShow=newValue
  	}
  },
  methods:{
  	hideLeftMenu(){
  		this.menuShow=false
  		this.$emit('menuShow',this.menuShow)
  	}
  }
}
</script>
<style>
	.leftMenu{
		width:200px;
		top: 60px;
	    left: 60px;
	    bottom: 0px;
	    position: absolute;
	    z-index: 3;
	    background:#eee;
	    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	}
	.leftMenu .menu{
		height:48px;
		width:100%;
		line-height:48px;
		text-align:center;
		font-size:14px;
		opacity:0.87;
		cursor:default
	}
	.leftMenu .menu>li{
		list-style-type:none;
	}
	.leftMenu .active{
		background:#fff;
	}
</style>