<template>
  <div class="allContainer" >
    <div class="exCont">
      <div v-for="listas in allData" :key="listas" :value="listas" class="exercice">
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

      
      <!-- <iframe width="560" height="315" :src=this.url title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
</div>
</template>

<script>
import { HTTP } from '@/api_system'
export default {
    data(){
      return{
        allData: [],
        url: "",
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
}
.exCont{
  width: 70%;
  background-color: #222222;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 320px;
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
</style>