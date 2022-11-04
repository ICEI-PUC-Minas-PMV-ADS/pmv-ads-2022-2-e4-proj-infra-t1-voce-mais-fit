<template>
    <div class="miniContainer">
      <div class="contentCont">
        <div class="topProfileCont">
          <div class="perfil">
            <img class="borderImg" src="@/assets/border.svg">
            <p class="profileTxt">PERFIL</p>
          </div>
          <img src="@/assets/profile.svg" class="profile">
          <div class="profileName">
            <p>IAGO IANN</p>
            <img src="@/assets/stars.svg" class="stars">
          </div>
        </div>
        <div class="diet"> 
          <p> A DIETA É COMPLETAMENTE FUNCIONAL E OBRIGATÓRIA PARA SUA PERFOMANCE. </p>
        </div>
        <div class="loremContDad">
          <div class="loremCont">
            <p class="lorem">A melhor forma de ver o resultado da academia é treinando com frequência. Há dias bons e dias ruins nos treinos, mas é sempre melhor treinar do que deixar de movimentar o corpo!</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {

};
</script>


<style scoped>
.loremContDad{
  width: 100%;
  display: flex;
  justify-content: center;
}
.loremCont{
  width: 50%;
}
.topProfileCont{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 10px;

}
.miniContainer {
  margin-bottom: 2%;
  width: 100%;
  height: 370px;;
  font-family: 'Agency FB';
  font-style: normal;
  background: #222222;
  box-shadow: 0px 10px 40px rgb(0 0 0 / 10%);
}
.perfil {
  width: 7%;
  display: flex;
  flex-direction: row;
  color: #FD0054;
  height: 38px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  letter-spacing: 1.92px;
}
.borderImg{
  width: 40%;
  padding-right: 10px;
  border: none;
}
.profileName {
  height: 38px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  letter-spacing: 1.92px;
  color: #FD0054;
}
.profileName{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.diet {
  height: 57px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 57px;
  color: #FAFAFA;
  margin-left: 5%;
  font-size: max(1.6rem, 15px);
}
.lorem {
  height: 151px;
  font-style: normal;
  font-weight: 400;
  font-size: max(1.3rem, 18px);
  line-height: 28px;
  letter-spacing: 1.44px;
  color: #FAFAFA;
  mix-blend-mode: normal;
  opacity: 0.6;
}
.stars {
  width: 80%;
}
.profile {
 width: 6%;
 padding: 10px;
}

.contentCont{
  display: flex;
    flex-direction: column;
}

p{
  margin-bottom: 0;
}

</style>