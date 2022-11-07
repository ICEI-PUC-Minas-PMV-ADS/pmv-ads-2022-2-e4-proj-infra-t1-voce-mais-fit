<template>
  <div>
    <header-component-vue></header-component-vue>
    <start-component-vue></start-component-vue>
    <div id="tbl" class="container">
      <table class="table  table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 

<script>
import headerComponentVue from "@/components/headerComponenTrainer.vue";
import startComponentVue from "@/components/startComponent.vue";
export default {
  components: {
    headerComponentVue,
    startComponentVue
    
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
