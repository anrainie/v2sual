<template>
  <!-- 抽象容器 -->
  <div  @click.stop="$emit('selected')">
    <span>{{model.name}}</span>

    <template v-for="(item,index) of model.children">
      <component
        @click.native="select=item.id"
        :class="{selected:select==item.id}"
        :key="index"
        :is="item.component.name"
        :model="item.model"
      ></component>
    </template>
  </div>
</template>
<script>
export default {
  name: "aContainer",
  props: ["model"],
};
</script>