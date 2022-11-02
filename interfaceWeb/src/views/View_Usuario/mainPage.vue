<template>
  <div>
    <headerComponent></headerComponent>
    <startComponentVue id="home"></startComponentVue>
    <resumo-Usuario />
    <rotinaComponent id="rotina"/>
    <datepickerComponent></datepickerComponent>
    <footerComponent></footerComponent>
  </div>
</template>
<script>
import startComponentVue from '@/components/startComponent.vue';
import headerComponent from '@/components/headerComponent.vue'
import footerComponent from '@/components/footerComponent.vue'
import resumoUsuario from '@/Utils/resumoUsuario.vue';
import rotinaComponent from '@/components/rotinaComponent.vue'
import datepickerComponent from '@/components/datepickerComponent.vue'
export default {
  components: {
    resumoUsuario,
    rotinaComponent,
    headerComponent,
    footerComponent,
    startComponentVue,
    datepickerComponent
  },
 
};
</script>


<style scoped>


</style>