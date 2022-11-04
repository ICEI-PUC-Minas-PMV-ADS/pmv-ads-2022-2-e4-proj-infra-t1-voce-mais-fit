<template>
  <div>
    <headerComponent></headerComponent>
    <startComponentVue id="home"></startComponentVue>
    <resumo-Usuario/>
    <rotinaComponent id="rotina"/>
    <datapickerComponentEx id="listaEx"></datapickerComponentEx>
    <footerComponent></footerComponent>
  </div>
</template>
<script>
import startComponentVue from '@/components/startComponent.vue';
import headerComponent from '@/components/headerComponent.vue';
import footerComponent from '@/components/footerComponent.vue';
import resumoUsuario from '@/Utils/resumoUsuario.vue';
import rotinaComponent from '@/components/rotinaComponent.vue';
import datapickerComponentEx from '@/components/datepickerComponentEx.vue'
export default {
  components: {
    resumoUsuario,
    rotinaComponent,
    headerComponent,
    footerComponent,
    startComponentVue,
    datapickerComponentEx
  },
 
};
</script>

<style scoped>


</style>