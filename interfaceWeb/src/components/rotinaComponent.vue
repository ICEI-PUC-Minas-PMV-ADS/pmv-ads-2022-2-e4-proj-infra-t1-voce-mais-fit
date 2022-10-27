<template >
  <div class="geral">
    <div><label for="">Rotina</label></div>
    <div class="geraldebaixo">
      <div class="teste">Carboidratos</div>
      <div class="pro">Proteinas</div>
      <div class="gord">Gorduras</div>
    </div>
    <div class="kcal">kcal</div>

    <button type="button" class="food">ADD ALIMENTOS</button>
    
  </div>
  
</template>

<script>
</script>

<style  scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'); */
/* @import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss'; */
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

* {
  /* font-family: 'Roboto', sans-serif; */
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background-color: #ab0139;
  text-align: center;
}
.geral {
  font-family: Agency FB;
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 3.5999999046325684px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.geraldebaixo {
  display: flex;
  flex-direction: row;
}
.teste {
  width: 386px;
  height: 172px;
  background-color: black;
  margin: 5% 5% 5% 0%;
  padding: 5% 5% 5% 0%;
  color: white;
  font-size: 32px;
}
.pro {
  width: 386px;
  height: 172px;
  background-color: #fd0054;
  margin: 5% 5% 5% 0%;
  padding: 5% 5% 5% 0%;
  color: white;
  font-size: 32px;
}

.gord {
  width: 386px;
  height: 172px;
  background-color: black;
  margin: 5% 5% 5% 0%;
  padding: 5% 5% 5% 0%;
  color: white;
  font-size: 32px;
  text-align: center;
}

.kcal {
  width: 1100px;
  height: 172px;
  background-color: black;
  margin: 5% 5% 5% 0%;
  padding: 5% 5% 5% 0%;
  color: white;
  font-size: 32px;
  text-align: center;
}
.food {
  color: white;
  box-sizing: border-box;
  border: 2px solid #fafafa;
  height: 50px;
  width: 206px;


}
</style>


