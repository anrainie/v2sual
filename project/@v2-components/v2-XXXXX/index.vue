<template>
        <div
        class="V2XXXXX V2ContainerBlock"
        :class="`${model.thisClasss}`"
        ref="wrap"
        :style="`width:${model.width};height:${model.height};background:${model.background};`"
    >
        <slot>

        </slot>
    </div>
</template>
<script>
    export default{
        
    }
</script>