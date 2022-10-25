<template>
  <div class="miniContainer">
  <div class="perfil"> PERFIL</div>
  <div class="profileName">
    IAGO IANN
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
  position: absolute;
height: 300px;
left: 50px;
right: 50px;

background: #2B2024;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.101961);

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
font-size: 20px;
line-height: 38px;
letter-spacing: 1.92px;
}
.profileName {
  position: absolute;
  height: 38px;
  left: 50%;
  top: calc(58% - 38px/2 - 143px);
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


</style>