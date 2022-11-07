<template>
    <div>
        <div class="modal fade modal-lg" id="addListEx" tabindex="-1" aria-labelledby="addListExLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addListExLabel">Crie uma Lista de Exercícios!</h5>
                <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="allBodyCont">
                    <div class="inputCont">
                        <label>Nome da Lista</label>
                        <input 
                        v-model="nameList"
                        type="text"
                        placeholder="Nome da Lista"
                        />
                        <label>Descrição</label>
                        <input 
                        v-model="descList"
                        type="text"
                        placeholder="Descrição da Lista"
                        />
                    </div>
                    <div class="inputExCont">
                        <div class="insideExCont">
                            <label>Nome do Exercício</label>
                            <input 
                            type="text"
                            placeholder="Nome do Exercício"
                            v-model="nameOfEx"
                            @input="changeConferSpanName"
                            />
                            <span class="spanAtentionName">Insira o nome do Exercício!</span>
                        </div>
                        <div class="insideExCont">
                            <label>Descrição/Repetições</label>
                            <input 
                            type="text"
                            placeholder="Descrição/Repetições"
                            v-model="descOfEx"
                            @input="changeConferSpanDesc"
                            />
                            <span class="spanAtentionDesc">Insira a descrção/repetição do Exercício!</span>
                        </div>   
                        <img @click="addToArray" src="@/assets/modalAddImg/plusAddIcon.png" class="addIcon" />  
                        <p>Adicionar para Lista</p>
                    </div>
                    <div class="listContContainer">
                        <div class="listCont">
                            <div v-for="info in arrayList" :key="info" :value="info" class="listItem">
                                <p>{{info.name}}</p>
                                <p>{{info.desc}}</p>
                            </div>
                        </div>
                        <div class="clearCont">
                            <img @click="clearList" src="@/assets/modalAddImg/clearList.png" class="clearIcon" />  
                            <p class="limparTxt">Limpar Lista</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="sendList" type="button" class="btn btn-primary" id="buttonSend">Adicionar Lista</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="buttonClose">Cancelar</button>
            </div>
            </div>
        </div>
        </div>   
    </div>
</template>

<script>
import { HTTP } from '@/api_system'
export default {
    data(){
        return{
            nameList:"",
            descList:"",
            arrayList: [],
            nameOfEx:"",
            descOfEx:"",
        }
    },
    methods:{
        addToArray(){
            if(this.nameOfEx === "" || this.descOfEx ===""){
                this.conferSpan()
            }else{
                this.arrayList.push({'name':`${this.nameOfEx}`, 'desc':`${this.descOfEx}`})
                this.conferClearList()
                this.nameOfEx = ""
                this.descOfEx = ""
            }
        },
        clearList(){
            this.arrayList = []
            this.conferClearList()
            this.nameOfEx = ""
            this.descOfEx = ""
        },
        conferClearList(){
            if(this.arrayList.length === 0){
                let cont = document.querySelector('.clearCont')
                cont.style.display = 'none'
            }else{
                let cont = document.querySelector('.clearCont')
                cont.style.display = 'block'
            }
        },
        conferSpan(){
            if(this.nameOfEx === "" && this.descOfEx === ""){
                let spanName = document.querySelector('.spanAtentionName')
                spanName.style.display = 'block'
                let spanDesc = document.querySelector('.spanAtentionDesc')
                spanDesc.style.display = 'block'
            }else if(this.nameOfEx !== "" && this.descOfEx === ""){
                let spanDesc = document.querySelector('.spanAtentionDesc')
                spanDesc.style.display = 'block'
            }else if(this.nameOfEx === "" && this.descOfEx !== ""){
                let spanName = document.querySelector('.spanAtentionName')
                spanName.style.display = 'block'
            }else{
                let spanName = document.querySelector('.spanAtentionName')
                spanName.style.display = 'none'
                let spanDesc = document.querySelector('.spanAtentionDesc')
                spanDesc.style.display = 'none'
            }
        },
        changeConferSpanName(){
            if(this.nameOfEx !== ""){
                let spanName = document.querySelector('.spanAtentionName')
                spanName.style.display = 'none'
            }
        },
        changeConferSpanDesc(){
            if(this.descOfEx !== ""){
                let spanDesc = document.querySelector('.spanAtentionDesc')
                spanDesc.style.display = 'none'
                
            }
        },

        

        sendList(){
            const localStorageGymgoerId = JSON.parse(window.localStorage.getItem('localStorage')).gymgoerId
            HTTP.post(`gymgoer/${localStorageGymgoerId}/exerciseModels`, {
                name: this.nameList,
                description: this.descList,
                exercises: this.arrayList
            })
            window.location.reload()
        }
    },
    mounted(){
        this.conferClearList()
    }
}
</script>

<style scoped>
span{
    font-size: 16px;
    color: red;
    display: none;
}
.allBodyCont{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.inputCont{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.inputExCont {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-left: 83px;
}
.inputExCont input{
    width: 79%!important;
}
.addIcon{
    margin-top: 18px;
    width: 4%;
    cursor: pointer;
}
.clearIcon{
    margin-top: 18px;
    width: 30%;
    cursor: pointer;
}
.insideExCont {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.modal-lg, .modal-xl {
    --bs-modal-width: 70%!important;
}
input{
    width: 40%;
    border-radius: 10px;
}
input::placeholder{
    padding-left: 4px;
}
.btn-primary{
    width: 21%;
    background-color: #FD0054;
    color: #222222;
    font-size: max(1rem, 2px);
    font-weight: 471px;
    border: none;
    font-weight: unset;
}
.limparTxt{
    margin-left: 5px;
}
.btn-primary:hover{
    background-color: rgb(5, 176, 5);
    color: #FFFF;
    transition: .7s;
}
.btn-secondary:hover{
    background-color: red;
    color: #FFFF;
    transition: .7s;
}
.btn-secondary{
    width: 15%;
    background-color: #222222;
    color: #FD0054;
    font-size: max(1rem, 2px);
    font-weight: 471px;
    border: none;
    font-weight: unset;
}
.modal-title{
    font-size: 1.8rem;
}
p{
    margin-bottom: 0!important;
    padding-top: 17px;
}
label{
    font-size: 1.2rem;
    color: #FD0054;
}
.listCont{
    width: 80%;
    margin-top: 5%;
    border: 1px #222222 solid;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-height: 200px;
    overflow-y: auto;
}
.listItem{
    border: 1px #737373 solid;
    width: 100%;
}
.listItem p{
    padding-top: 0px;
}
.listContContainer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.clearCont{
    width: 10%;
}
</style>