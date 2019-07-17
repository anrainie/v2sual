<template>
    <asyncComponent :page="model.page" :params="model.param||{}"></asyncComponent>
</template>


<script>
import { widget } from "../utils/v2-view.js";

let mixins = [widget];
import asyncComponent from './asyncComponent'

export default {
    name:"v2Page",
    mixins,
    data(){
        return {}
    },
    mounted(){
      console.log(`@/views/${this.model.page}`)
       console.log(this.model)
    },
    components:{
      asyncComponent  
    }
}
</script>
