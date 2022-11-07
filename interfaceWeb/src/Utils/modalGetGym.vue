<template>
    <div>
        <div class="modal fade modal-lg" id="getGynModal" tabindex="-1" aria-labelledby="getGynModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="getGynModalLabel">Procure a academia ideal para Você!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="inputCont">
                    <input @keyup="searchFilter" class="input" type="text" placeholder="Nome da Academia"/>
                </div>
                <div class="acadCont">
                    <div class="acadCad" v-for="gyn in allInfoFilter" :key="gyn" :value="gyn">
                        <p><strong>Nome:</strong> {{gyn.name}}</p>
                        <p><strong>Descrição:</strong> {{gyn.description}}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="buttonSend">Adicionar</button>
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
            allInfo:[],
            allInfoFilter:[]
        }
    },
    methods:{
        addCad(){
            HTTP.get("gym")              
            .then((res) => {
                this.allInfo = res.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        searchFilter({target}) {
            const filter = this.allInfo.filter(({name}) => {
                return name.toUpperCase().includes(target.value.toUpperCase())
            })
            this.allInfoFilter = filter
        }  
    },
    mounted(){
        this.addCad()
    }
}
</script>
<style scoped>
.inputCont{
    margin-bottom: 15px;
}
.acadCont{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-height: 250px;
    overflow-y: auto;
}
.acadCad{
    width: 90%;
    background-color: #d3d3d3;
    margin-top: 10px;
    padding-left: 5px;
    border-radius: 5px;
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
    flex-direction: column;
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