<template> 
    <div class="allContainer"> 
        <div class="profile">
            <div class="box1">
                <img class="icon" src="@/assets/profile.svg">
            </div>
            <div class="box2">
                <h1 class="user">{{ nome }}</h1>
            </div>
        </div>
        <div class="sections">
            <div class="sectionChild">
                <p>Informações do Aluno</p>
                <ul>
                    <li>Nome: {{ nome }}</li>
                    <li>Idade: {{ idade }} Anos</li>
                    <li>Peso: {{ peso }} KG</li>
                    <li>Altura: {{ altura }} CM</li>
                    <li>Sexo: {{ sexo }}</li>
                </ul>
            </div>
            <div class="sectionChild">
                <p>Lista de Exercicios</p>
                <ul>
                    <li v-for="listas in lista" :key="listas" :value="listas">
                        {{ listas.name }}
                    </li>
                    <button type="submit"> Adicionar Lista</button>
                </ul>
            </div>
            <div class="sectionChild">
                <p>Alimentos Salvos</p>
                <ul>
                    <li>Maçã</li>
                    <li>Banana</li>
                    <li>Pera</li>
                    <button type="submit"> Adicionar Lista</button>
                </ul>
            </div>
        </div>
        <div class="backToMain"><router-link to="/mainPageTraner#alunos" class="backTo">Voltar</router-link></div>
    </div>
</template>

<script>


import axios from "axios";

export default {
    data(){
        return{
            nome: "",
            idade: "",
            peso: "",
            altura: "",
            sexo: "",

            lista: [],
            Exrcnome: "",
        }
        
    },
    methods:{
        // Get para pegar o usuário logado do banco
        allData(){
                const localStorageToken = JSON.parse(window.localStorage.getItem('localStorage')).userId
                const localStorageTrainerId = JSON.parse(window.localStorage.getItem('localStorage')).trainerId
                const localStorageGymgoerId = JSON.parse(window.localStorage.getItem('localStorage')).gymgoerId

                // GET usuario
                axios
                .get("http://localhost:3000/api/user/"+localStorageToken)
                .then((res) => {
                       this.Data = res.data
                       this.email = res.data.email
                       this.senha = res.data.password
                })
                .catch((error) => {
                        console.log(error);
                });
            
                // GET trainer
                if(localStorageTrainerId != null){
                    axios
                    .get("http://localhost:3000/api/trainer/"+localStorageTrainerId)
                    .then((res) => {
                        this.nome = res.data.name
                    })
                }
                //GET Gymgoer
                if(localStorageGymgoerId != null){
                    axios
                    .get("http://localhost:3000/api/gymgoer/"+localStorageGymgoerId)
                    .then((res) => {
                        this.nome = res.data.name
                        this.idade = res.data.physicalInformation.age
                        this.peso = res.data.physicalInformation.weight
                        this.altura = res.data.physicalInformation.height
                        this.sexo = res.data.physicalInformation.geneticSex
                    })
                }
                
            },

            allExercices(){
                const localStorageGymgoerId = JSON.parse(window.localStorage.getItem('localStorage')).gymgoerId
                axios
                .get("http://localhost:3000/api/gymgoer/"+localStorageGymgoerId+"/exerciseModels")
                .then((res) => {
                        this.lista = res.data     
                })
                .catch((error) => {
                        console.log(error);
                });
            }
    },
    mounted(){
            this.allData()
            this.allExercices()
        }
}
</script>

<style scoped>
.backToMain{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.backTo{
    text-decoration: none;
    font-size: 40px;
    color: #FFFF;
}
.sectionChild{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.allContainer {
    box-sizing: border-box;
    margin: 0;
    background-image: url(@/assets/trainerImg/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 10%;
}
.profile {
    display: flex;
    justify-content: center;
    padding: 2%;
    align-items: center;
}
.icon {
    width: 130px;
    border-radius: 3px;
}
p {
    color: #FD0054;
    font-size: 25px;
    margin-left: 3%;
}
.box2 {
    margin-left: 3%;
    margin-top: 2%;
    font-size: 20px;
    color: #E7C7D1;
}
.sections {
    display: flex;
    text-align: center;
    padding: 2%;
    gap: 5rem;
    justify-content: center;
    opacity: 90%;
}
.sections div{
    width: 50vh;
    height: 60vh;
    background-color: white;
    border-radius: 5px;
}
ul {
    margin-top: 5%;
}
li {
    list-style: none;
    padding: 4px;
    font-size: 25px;
}
button {
    margin-top: 30%;
    padding: 5%;
    font-size: 20px;
    background-color: #f0555d;
    color: white;
    border: 0px;
    border-radius: 5px;
}
ul {
     padding-left: 0!important; 
}
</style>