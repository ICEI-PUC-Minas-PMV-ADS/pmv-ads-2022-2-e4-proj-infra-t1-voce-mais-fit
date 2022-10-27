<template>
  <div>
    <resumo-Usuario />
    <start-Component />
    <rotinaComponent />
    <datepickerComponent/>
  </div>
</template>
<script>
import resumoUsuario from '@/Utils/resumoUsuario.vue';
import startComponent from '@/components/startComponent.vue';
import rotinaComponent from '@/components/rotinaComponent.vue'
import datepickerComponent from '@/components/datepickerComponent.vue'
export default {
  components: {
    resumoUsuario,
    startComponent,
    rotinaComponent,
    datepickerComponent
  },
};
</script>


<style scoped>


</style>