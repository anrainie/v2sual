<template>
	
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			getLocalName(data,i){
				var value=data[i],name
					name=value.local_name
					console.log(name)
					if(value.children && value.children.length>0){
						this.getLocalName(value.children,0)
					}
				if(data[i+1])
					this.getLocalName(data,i+1)
			}
		},
		props:{
			data:Array
		},
		mounted(){
			this.getLocalName(this.data,0)
		}
	}
</script>