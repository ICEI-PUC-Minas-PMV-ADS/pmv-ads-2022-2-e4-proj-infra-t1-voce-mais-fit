<template>
    <div>
        <div class="modal fade modal-lg" id="addGynModal" tabindex="-1" aria-labelledby="addGynModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addGynModalLabel">Insira os dados de sua Academia!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="inputCont">
                    <input class="input" v-model="nameCad" type="text" placeholder="Nome da Academia"/>
                    <input class="input" v-model="descCad" type="text" placeholder="Descrição"/>
                    <input class="input" v-model="endCad" type="text" placeholder="Endereço da Academia"/>
                    <p class="idInfo">ACADEMIA ADICIONADA!!! Anote o Id para consultar seu estabelecimento: {{AcadId}}</p>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="addCad" type="button" class="btn btn-primary" id="buttonSend">Adicionar</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="buttonClose">Fechar</button>
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
            AcadId:"",
            allInfo:[],
            nameCad:"",
            descCad:"",
            endCad:""
        }
    },
    methods:{
        addCad(){
            HTTP.post("gym", {
                name: this.nameCad,
                description: this.descCad,
                address: this.endCad
            })
            .then((res) => {
                this.allInfo = res.data
                this.AcadId = this.allInfo._id
                let acadId = document.querySelector('.idInfo')
                acadId.style.display = 'block'
                this.nameCad = ""
                this.descCad = ""
                this.endCad = ""
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
.idInfo{
    display: none;
}
.input{
    width: 70%;
    height: 55px;
    margin-top: 15px;
    border-radius: 10px;
}
.input::placeholder{
    padding-left: 5px;
}
.modal-body{
    display: flex;
    justify-content: center;
    align-items: center;
}
.inputCont{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
}
.modal-title{
    font-size: 1.8rem;
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
</style>