<template>
  <div class="allContainer" >
    <div class="titleCont">
      <p class="titleListEx">Selecione a lista de Exercícios do dia!</p>
    </div>
    <div class="selectedList">
      <div class="selectedListCont">
        <p v-if="this.nameList"><strong>Nome: </strong> {{this.nameList}}</p>
        <p v-if="this.descList"><strong>Descrição: </strong> {{this.descList}}</p>
      </div>
      <div class="selectedExer" v-for="exer in exercises" :key="exer" :value="exer">
        <div class="infoInfoCont">
          <div class="infoExCont">
            <label>Nome Exercício:</label>
            <p>{{exer.name}}</p>
          </div>
          <div class="infoExCont">
            <label>Tutorial Exercício:</label>
            <a :href=exer.youtubeUrl target="_blank">{{exer.name}}</a>
          </div>
        </div>
      </div>
    </div>
    <modalAddList></modalAddList>
    <div class="exCont">
      <div @click="teste(listas)" v-for="listas in allData" :key="listas" :value="listas" class="exercice">
        <div class="labelCont">
          <label>Nome:</label>
          <p>{{listas.name}}</p>
        </div>
        <div class="labelCont">
          <label>Descrição/Repetições:</label>
          <p>{{listas.description}}</p>
        </div>
      </div>
    </div>
    <div class="buttonContainer">
        <button class="addList" type="submit" data-bs-toggle="modal" data-bs-target="#addListEx">ADICIONAR LISTA</button>
      </div>
      
      <!-- <iframe width="560" height="315" :src=this.url title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
</div>
</template>

<script>
import modalAddList from '@/Utils/modalAddList.vue'
import { HTTP } from '@/api_system'
export default {
  components:{
    modalAddList
  },
    data(){
      return{
        allData: [],
        url: "",
        nameList: "",
        descList: "",
        exercises: []
      }
    },
    
    methods:{
      getExList(){
        const localStorageGymgoerId = JSON.parse(window.localStorage.getItem('localStorage')).gymgoerId
        HTTP.get(`gymgoer/${localStorageGymgoerId}/exerciseModels`)
        .then((res) => {
          this.allData = res.data
          for(let i = 0; i < this.allData.length; i++){
            this.url = res.data[i].exercises[0].youtubeUrl
          }

        })
      },
      teste(x){
        this.nameList = x.name
        this.descList = x.description
        this.exercises = x.exercises
      }
    },
    mounted(){
      this.getExList()
    }
}
</script>

<style scoped>
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
  padding-bottom: 3%;
}
.exCont{
  width: 70%;
  background-color: #222222;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 385px;
  overflow-y: auto;
}
.exercice{
  cursor: pointer;
  width: 90%;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 7px;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
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
.titleListEx{
  color: #FD0054;
  font-weight: 700;
  font-size:max(3vh, 20px) ;
}

.buttonContainer{
  margin-top: 2%;
  display: flex;
   align-items: center;
  justify-content: center;
}
.titleCont{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.buttonContainer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.selectedList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  margin-bottom: 5%;
  margin-top: 3%;
}
.selectedExer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  border: 1px black solid;
}
.infoExCont{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 25%;
}
.selectedListCont{
  width: 80%;
  border: 1px black solid;
}
.infoInfoCont{
  width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
}
</style>