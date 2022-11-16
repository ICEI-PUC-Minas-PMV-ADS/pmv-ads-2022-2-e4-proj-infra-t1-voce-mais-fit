<template>
<div class="allContainer" >
    <div class="titleAluno">
        <h1 class="alunoTitle">Escolha o aluno para detalhes!</h1>
    </div>
    <div class="alunoCont">
      <router-link to="/infoAlunoPage" class="aluno">
        <div class="labelCont">
          <label>Nome:</label>
          <p>Victor Lopes</p>
        </div>
      </router-link>
      <router-link to="/infoAlunoPage" class="aluno">
        <div class="labelCont">
          <label>Nome:</label>
          <p>Felipe Bohm</p>
        </div>
      </router-link>
      <router-link to="/infoAlunoPage" class="aluno">
        <div class="labelCont">
          <label>Nome:</label>
          <p>Gabriel Illidio</p>
        </div>
      </router-link>
      <router-link to="/infoAlunoPage" class="aluno">
        <div class="labelCont">
          <label>Nome:</label>
          <p>João Sena</p>
        </div>
      </router-link>
      <router-link to="/infoAlunoPage" class="aluno">
        <div class="labelCont">
          <label>Nome:</label>
          <p>Iago Iann</p>
        </div>
      </router-link>
      <router-link to="/infoAlunoPage" class="aluno">
        <div class="labelCont">
          <label>Nome:</label>
          <p>Yuri Witter</p>
        </div>
      </router-link>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.titleAluno{
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    color: black;
    padding-top: 1%;
    font-size: 23px;
    margin-left: 1%;
}
.allContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4%;
  margin-bottom: 4%;
}
.alunoCont{
  margin-top: 2%;
  width: 70%;
  background-color: #222222;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 380px;
  overflow-y: auto;
}
.aluno{
  cursor: pointer;
  width: 90%;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  text-decoration: none;
}
.labelCont{
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction:column;
}
label{
  color: #FD0054;
}
</style>