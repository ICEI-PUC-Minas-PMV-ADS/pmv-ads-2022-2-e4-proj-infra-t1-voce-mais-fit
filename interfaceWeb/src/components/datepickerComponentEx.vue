<template>
  <div class="calendar">
    <p class="titleList">MODELO DE EXERCÍCIOS</p>
    <div class="table-responsive-sm"> 
    <table class="table table-bordered ">
      <thead class="cab">
        <tr class="titleTr">
          <th scope="col">#</th>
          <th colspan="1" scope="col"> Exercício</th>
          <th  style="width: 50%;" scope="col"> Repetição</th>
        </tr>      
      </thead>
      <tbody >
        <tr>
          <th scope="row">1</th>
          <th class="bodyTxt" scope="row">teste</th>
          <th class="bodyTxt" scope="row">teste</th>
        </tr>
        <tr>
          <th scope="row">2</th>
          <th class="bodyTxt" cope="row">teste</th>
          <th class="bodyTxt" scope="row">teste</th>
        </tr>
        <tr>
          <th  scope="row">3</th>
          <th class="bodyTxt" scope="row">teste</th>
          <th class="bodyTxt" scope="row">teste</th>
        </tr>
        <tr>
          <th scope="row">4</th>
          <th class="bodyTxt" scope="row">teste</th>
          <th class="bodyTxt" scope="row">teste</th>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="buttonContainer">
    <button class="addList" type="submit" data-bs-toggle="modal" data-bs-target="#addListEx">ADICIONAR LISTA</button>
  </div>
  <div class="titleListCont">
  <p class="titleListEx">Selecione a lista de Exercícios do dia!</p>
  <modalAddList></modalAddList>
  </div>
  <userListExVue></userListExVue>
</div> 
</template>
<script>
import userListExVue from './userListComp.vue';
import modalAddList from '@/Utils/modalAddList.vue'
  export default{
    components:{
      userListExVue,
      modalAddList
    }
  }
</script>
<style scoped>
* {
  /* font-family: 'Roboto', sans-serif; */
  left: 0px;
  top: 0px;
  text-align: center;
  /* background-color: orangered; */
  text-align: center;
}
p{
  margin-bottom: 3rem;
  margin-right: 3%;
}
.addList{
  background-color: #FFFF;
  color: #FD0054;
  box-sizing: border-box;
  border: 2px solid #FD0054;
  height: 50px;
  width: 14%;
  font-size: max(1rem, 18px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 2% 2% 2%;
  margin-right: 3%;
}
.addList:hover{
  background-color: #FD0054;
  color: #FFFF;
  transition: .7s;
}
.titleListCont{
  margin-top: 3%;
  text-align: center;
  height: 60px;
  padding-left: 2%;
}
.titleListEx{
  color: #FD0054;
  font-weight: 700;
  font-size:max(3vh, 20px) ;
}
.titleList{
  color: #222222;
  font-size:max(3vh, 20px) ;
}
.titleTr{
  background-color: #e1e1e1;
}
.buttonContainer{
  margin-top: 2%;
  display: flex;
   align-items: center;
  justify-content: center;
}
.calendar {
  padding: 5% 5% 5% 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bodyTxt{
  color: #FD0054;
}
.cab{
  min-width: 400px;
  max-width: 400px;
}
</style>