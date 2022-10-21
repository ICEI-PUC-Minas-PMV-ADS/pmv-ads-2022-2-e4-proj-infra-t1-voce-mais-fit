<template>
  <div>
    <resumo-Usuario/>
    <start-Component/>
    
  </div>
</template>
<script>
import resumoUsuario from '@/Utils/resumoUsuario.vue'
import startComponent from '@/components/startComponent.vue'
export default {
  components:{
    resumoUsuario,
    startComponent
  }

};
</script>


<style scoped>

</style>