<template>
	<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane  v-for="tab in tabs" :label="tab.label" :name="tab.name">{{tab.label}}</el-tab-pane>
	</el-tabs>
</template>
<script>
	export default{
		props:{
			tabs:{
				type:Array,
				default:() => []
			}
		},
		methods:{
			handleClick(){
				this.$emit('handleClick')
			}
		}
	}
</script>