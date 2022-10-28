<template>
  <div class="allContainer" id="home">
      <div class="bodyLogin">
          <div class="bodyTextContainer">
              <h2 id="h2Text">MAKE YOUR</h2><br>
              <h1 id="h1Text">BODY</h1>
          </div>
          <div class="bodyLogoTextContainer">
              <p>Aplicação para sua saúde física e aliementar!</p>
          </div>
      </div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style scoped>

.allContainer{
  padding-top: 6%;
  display: flex;
  flex-direction: column;
  background-color: #7d002a;
  margin-bottom: 11%;
}
.imgLogoCont{
  display: flex;
  justify-content: center;
}
.bodyTextContainer{
  flex-direction: column;
  text-align: center;
  border: 6px #FD0054 solid;
  padding-right: 2%;
  padding-left: 2%;
  padding-bottom: 4%;
}
.bodyLogin{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6%;
  flex-direction: column;
}
#h1Text{
  color: #FFFF;
  font-size: 17vh;
  overflow: hidden;
}
#h2Text{ 
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  color: #dadada;
  font-size: 3vh;
  padding-top: 6%;
}
.bodyLogoTextContainer{
  color: #FFFF;
  padding-top: 2%;
  font-size:max(2.8vh, 16px) ;
}
</style>