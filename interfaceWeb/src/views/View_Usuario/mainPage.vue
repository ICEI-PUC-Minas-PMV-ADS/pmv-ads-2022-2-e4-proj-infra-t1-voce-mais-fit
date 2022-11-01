<template>
  <div>
    <headerComponent></headerComponent>
    <startComponentVue id="home"></startComponentVue>
    <resumo-Usuario />
    <rotinaComponent id="rotina"/>
    <footerComponent></footerComponent>
  </div>
</template>
<script>
import { HTTP } from '@/api_system'
import startComponentVue from '@/components/startComponent.vue';
import headerComponent from '@/components/headerComponent.vue'
import footerComponent from '@/components/footerComponent.vue'
import resumoUsuario from '@/Utils/resumoUsuario.vue';
import rotinaComponent from '@/components/rotinaComponent.vue'
export default {
  components: {
    resumoUsuario,
    rotinaComponent,
    headerComponent,
    footerComponent,
    startComponentVue
  },
  methods:{
    buscaAluno(){
      HTTP.get("user")
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted(){
    this.buscaAluno()
  }
};
</script>


<style scoped>


</style>