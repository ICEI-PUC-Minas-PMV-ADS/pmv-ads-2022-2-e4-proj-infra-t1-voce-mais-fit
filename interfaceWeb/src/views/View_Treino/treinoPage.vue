<template>
  <div>
    <header-component-vue></header-component-vue>
    <start-component-vue></start-component-vue>
    <alunos-list-component-vue id="alunos"></alunos-list-component-vue>
    <add-gym-component-vue></add-gym-component-vue>
    <footer-component-vue></footer-component-vue>
  </div>
</template> 

<script>
import alunosListComponentVue from "@/components/trainerComponents/alunosListComponent.vue";
import headerComponentVue from "@/components/trainerComponents/headerComponenTrainer.vue";
import startComponentVue from "@/components/startComponent.vue";
import addGymComponentVue from "@/components/trainerComponents/addGymComponent.vue";
import footerComponentVue from "@/components/footerComponent.vue";
export default {
  components: {
    headerComponentVue,
    startComponentVue,
    alunosListComponentVue,
    addGymComponentVue,
    footerComponentVue
  },
};
</script>

<style scoped>
#tbl{
  padding: 5% 5% 5% 5%;
}
.table{
  border: 0.5px;
}
</style>
