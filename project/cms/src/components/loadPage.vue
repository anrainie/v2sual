<template>
    <asyncComponent :page="model.page" :params="$props.params||{}" :keepAlive='false' v-bind="$attrs" v-on="$listeners"></asyncComponent>
</template>


<script>
import { widget } from "../utils/v2-view.js";

let mixins = [widget];
import asyncComponent from './asyncComponent'

export default {
    name:"v2Page",
    mixins,
    props:{
     params:Object
    },
    data(){
        return {}
    },
    mounted(){
      console.log(`@/views/${this.model.page}`)
       console.log(this.model)

       console.log(this)
    },
    components:{
      asyncComponent  
    }
}
</script>
