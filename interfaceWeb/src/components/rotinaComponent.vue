<template >
  <div class="allContainerRotina">
    <div class="titleBlockCont">
      <label class="titleBlock" for="">Rotina</label>
    </div>
    <div class="geraldebaixo">
      <div class="teste">
        <p class="titleInfo">Carboidratos</p>
        <p class="info">500</p>
      </div>
      <div class="pro">
        <p class="titleInfo">Proteinas</p>
        <p class="info">500</p>
      </div>
      <div class="gord">
        <p class="titleInfo">Gorduras</p>
        <p class="info">500</p>
      </div>
    </div>
    <div class="kcal">
      <p class="titleInfo" >kcal</p>
      <p class="info">500</p>
    </div>
    <div class="addFoodCont">
      <button type="button" class="food" data-bs-toggle="modal" data-bs-target="#addFoodModal">ADD ALIMENTOS</button>
    </div>
    <modalAddFood></modalAddFood>
  </div>
  
</template>

<script>
import modalAddFood from '@/Utils/modalAddFood.vue'
export default {
  components:{
    modalAddFood
  }
}
</script>>

<style scoped>

* {
  /* font-family: 'Roboto', sans-serif; */
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background-color: #ab0139;
  text-align: center;
}
.titleBlockCont{
  margin-right: 3%;
}
.titleBlock{
  color: #FFFF;
  font-size: 60px;
}
.allContainerRotina {
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 3.5999999046325684px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3%;
}
.titleInfo{
  background-color: unset;
}
.info{
  background-color: unset;
}
.geraldebaixo {
  display: flex;
  flex-direction: row;
  width: 61%;
}
.teste {
  width: 33%;
  height: 172px;
  background-color: #2B2024;
  margin: 5% 5% 5% 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  flex-direction: column;
}
.pro {
  width: 33%;
  height: 172px;
  background-color: #fd0054;
  margin: 5% 5% 5% 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  flex-direction: column;
}

.gord {
  width: 33%;
  height: 172px;
  background-color: #2B2024;
  margin: 5% 5% 5% 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  text-align: center;
  flex-direction: column;
}

.kcal {
  width: 58%;
  height: 172px;
  background-color: #2B2024;
  margin-right: 3%;
  color: white;
  font-size: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.food {
  color: white;
  box-sizing: border-box;
  border: 2px solid #fafafa;
  height: 50px;
  width: 14%;
  font-size: max(1rem, 18px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 2% 2% 2%;
  margin-right: 3%;
}
.food:hover{
  border: none;
  background: #fd0054;
  color: #FFFF;
  transition: .7s ease-in-out;
}
.addFoodCont{
  margin-top: 3%;
  margin-bottom: 3%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


