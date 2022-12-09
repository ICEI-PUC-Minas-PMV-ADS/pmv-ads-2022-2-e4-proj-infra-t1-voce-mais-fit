<template>
  <div>
    <div class="allContainerHist">
        <div class= "titleBlockCont">
            <p class="titleBlock">Historico</p>
        </div>
        <div class="inputBlockCont">
           <div class="labelCont">
            <label>Adicione uma data para pesquisa:</label>
            <input class="inputCalendar" type = "date" v-model="dataInserida"/>
            <span>Insira alguma data!</span>
           </div> 
            <button @click="getHistFunc" class="searchHist"> Pesquisar</button>
            <button @click="getCloseHist" class="searchHist"> Fechar</button>
        </div>
    </div>
    <div class="allContainerRotinaHis">
      <div class="titleBlockCont">
        <label class="titleBlock" for="">Rotina | {{this.dataInserida}}</label>
      </div>
      <div class="geraldebaixo">
        <div class="teste">
          <p class="titleInfo">Carboidratos</p>
          <p class="info">{{this.carb}}</p>
        </div>
        <div class="pro">
          <p class="titleInfo">Proteinas</p>
          <p class="info">{{this.protein}}</p>
        </div>
        <div class="gord">
          <p class="titleInfo">Gorduras</p>
          <p class="info">{{this.gord}}</p>
        </div>
      </div>
      <div class="kcal">
        <p class="titleInfo" >kcal</p>
        <p class="info">{{this.kcal}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/api_system'
export default{
    data() {
        return{
          carb: 0,
          gord: 0,
          kcal: 0,
          protein: 0,
          dataInserida: ""
        }
    },
    methods:{
      getHistFunc(){
        let id = window.localStorage.getItem('gymgoerId')
        let idFormado = id.replace(/"/g, '')
        if(this.dataInserida === ""){
          let span = document.querySelector('span')
          span.style.display = 'block'
        }else{
          let span = document.querySelector('span')
          span.style.display = 'none'
          HTTP.get(`gymgoer/${idFormado}/dailyRegisters/${this.dataInserida}`)
          .then((x) => {
            let result = x.data
            this.carb = result.totalCarb
            this.gord = result.totalFat
            this.kcal = result.totalKcal
            this.protein = result.totalProtein
            let resultConte = document.querySelector('.allContainerRotinaHis')
            resultConte.style.display = 'flex'
          })
        }      
      },
      getCloseHist(){
        this.carb = ""
        this.gord = ""
        this.kcal = ""
        this.protein = ""
        this.dataInserida = ""
        let resultConte = document.querySelector('.allContainerRotinaHis')
        resultConte.style.display = 'none'
      }
    }
}
</script>

<style scoped>
span{
  display: none;
  color: rgb(255, 255, 255);
}
.titleBlockCont{
  margin-right: 3%;
}
.titleBlock{
  color: #FFFF;
  font-size: 60px;
}
.allContainerHist {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
  padding-bottom: 3%;
  background-color: rgb(127, 27, 64);
}
.inputBlockCont {
    width: 100%;
    display: flex;
    justify-content: center;
}
.labelCont {
    color: white;
    display: flex;
    flex-direction: column;
}
input {
color: rgb(19, 19, 19);
border: none;
} 
.searchHist {
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  border: 2px solid #fafafa;
  height: 50px;
  width: 14%;
  font-size: max(1rem, 18px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 2% 2% 2%;
  margin-left: 2%;
}
.searchHist:hover {
  border: none;
  background: #fd0054;
  color: #FFFF;
  transition: .7s ease-in-out;
}
.titleBlockCont{
  margin-right: 3%;
}
.titleBlock{
  color: #FFFF;
  font-size: 60px;
}
.allContainerRotinaHis {
  background: #ab0139;
  display: none;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 3.5999999046325684px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2%;
  padding-bottom: 3%;
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

