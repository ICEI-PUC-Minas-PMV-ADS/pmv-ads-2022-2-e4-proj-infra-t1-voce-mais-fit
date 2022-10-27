<template>
  <FullCalendar :options="calendarOptions" />
</template>
<script default >
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth'
      }
    }
  }
}
</script>
<style scoped>
* {
  /* font-family: 'Roboto', sans-serif; */
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background-color: #ab0139;
  text-align: center;
}
</style>