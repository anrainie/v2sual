<template>
    <div :class="wrapClass">
        <components :is="model.href" :model="model" :wid="wid"></components>
    </div>
    
</template>
<script>
import { widget, composite } from "../assets/js/v2-view.js";
import { edit } from "../assets/js/edit.js";

export default {
        
        mixins: [widget, edit],
        data() {
            return {}
        },
        created() {
            
         this.$options.components[this.model.href] =()=>import(`../../runtime/src/@aweb-components/${this.model.href}/index.vue`);
         
        },
        computed:{
           
        },
    
    }

  
 
 </script>



