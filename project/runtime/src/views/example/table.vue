<template>
  <div>
    <v2-component-calendar :model="model"></v2-component-calendar>
  </div>
</template>

<script>
import v2ComponentCalendar from '@/@aweb-components/v2-component-calendar';

export default {
  components:{
    v2ComponentCalendar
  },
  data() {
    return {
      model:{
       range:[-1,0,1,2],
       currentDate:new Date()
      }
    };
  }
};
</script>
