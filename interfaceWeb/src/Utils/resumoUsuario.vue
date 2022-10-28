<template>
    <div class="miniContainer">
      <img src="@/assets/border.svg" class="border">
      <div class="perfil"> PERFIL</div>
      <img src="@/assets/profile.svg" class="profile">
      <div class="profileName">
        IAGO IANN
        <img src="@/assets/stars.svg" class="stars">
      </div>
      <div class="diet"> 
        <p> A DIETA É COMPLETAMENTE FUNCIONAL E OBRIGATÓRIA PARA SUA PERFOMANCE. </p>
        <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
      </div>
    </div>
</template>
<script>
export default {

};
</script>


<style scoped>
.miniContainer {
  width: 95%;
  position: absolute;
  height: 370px;
  left: 50px;
  right: 50px;
  font-family: 'Agency FB';
  font-style: normal;
  background: #2B2024;
  box-shadow: 0px 10px 40px rgb(0 0 0 / 10%);
  top: 857px;
}
.perfil {
  color: #FD0054;
  position: absolute;
  height: 38px;
  left: 11.19%;
  right: 83.81%;
  top: calc(50% - 38px/2 - 116px);
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 38px;
  letter-spacing: 1.92px;
}
.profileName {
  position: absolute;
  height: 38px;
  left: 50%;
  top: calc(50% - 38px/2 - 143px);
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  letter-spacing: 1.92px;
  color: #FD0054;
}

.diet {
  position: absolute;
  height: 57px;
  left: 7.44%;
  right: 13.6%;
  top: calc(50% - 57px/2 - 29.5px);
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 57px;
  color: #FAFAFA;
    
}
.lorem {
  position: absolute;
  height: 151px;
  left: 30.55%;
  right: 23.05%;
  top: calc(50% - 151px/2 + 100.5px);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1.44px;
  color: #FAFAFA;
  mix-blend-mode: normal;
  opacity: 0.6;
}
.stars {
  position: absolute;
  top: 40px;
  right: 19px;
  
}
.profile {
 position: absolute;
 left: 72vh;
 padding: 10px;
}
.border {
  position: absolute;
  top: 65px;
  left: 135px;
}
.text {
  position: absolute;
  height: 24px;
  right: 8.84%;
  top: calc(50% - 24px/2 + 83px);
  font-family: 'Agency FB';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 24px;
  color: #FD0054;
}
@media screen and (max-width:2600px){
  .miniContainer {
    top: 968px!important;
    height: 310px!important;
  }
  .profileName {
    margin-top: 10px;
  }
}
@media screen and (max-width:2450px){
  .miniContainer {
    top: 930px!important;
    height: 310px!important;
  }
}
@media screen and (max-width:2250px){
  .miniContainer {
    top: 910px!important;
    height: 310px!important;
  }
}
@media screen and (max-width:2070px){
  .miniContainer {
    top: 880px!important;
  }
}
@media screen and (max-width:1860px){
  .miniContainer {
    top: 820px!important;
    height: 340px!important;
  }
}

</style>