<template>
    <div>
        <div class="modal fade modal-lg" id="addFoodModal" tabindex="-1" aria-labelledby="addFoodModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addFoodModalLabel">Selecione os alimentos!</h5>
                <button @click="closeModal"  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="searchFoodCont">
                    <p class="searchTitleTxt">Pesquise o alimento que quer adicionar!</p>
                    <div class="searchCont">
                        <input class="searchFood" type="text" placeholder="Pesquise aqui!" v-model="searchResult"/>
                        <img @click="searchFood" class="lupaSearch" src="@/assets/modalAddImg/searchButton.png">
                    </div>
                </div>
                <div class="typeFoodCont">
                    <div v-for="resultado in result" :key="resultado" :value="resultado" class="typeFood">
                        <div id="divInfo" class="name">
                            <p class="titleInfo">Nome:</p>
                            <p>{{resultado.name}}</p>
                        </div>
                        <div id="divInfo" class="prot">
                            <p class="titleInfo">Proteinas:</p>
                            <p>{{resultado.proteinPer100g}}</p>
                        </div>
                        <div id="divInfo" class="carbo">
                            <p class="titleInfo">Carboidratos:</p>
                            <p>{{resultado.carbPer100g}}</p>
                        </div>
                        <div id="divInfo" class="gord">
                            <p class="titleInfo">Gordura:</p>
                            <p>{{resultado.fatPer100g}}</p>
                        </div>
                        <div id="divInfo" class="kcal">
                            <p class="titleInfo">Calorias:</p>
                            <p>{{resultado.kcalPer100g}}</p>
                        </div>
                        <div id="divInfo" class="quant">
                            <p class="titleInfo">Gramas consumidas</p>
                            <input type="text" placeholder="Q° Gramas"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="buttonSend">Adicionar</button>
                <button @click="closeModal"  type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="buttonClose">Fechar</button>
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
            defineImg: false,
            defineModal:true,
            searchResult: "",
            result:[]
        }
    },
    methods:{
        searchFood(){
            HTTP.get(`foodSaved?foodName=${this.searchResult}`)
            .then(response =>{
                this.result = response.data
            })
            .catch(error =>{
                if(error.message === 'Request failed with status code 404'){
                    alert('ALIMENTO NÃO ENCONTRADO')
                }else{
                    alert('OPS, O BANCO DE DADOS EXPLODIU <3')
                }
            })
        },
        closeModal(){
            this.searchResult = ""
            this.result = ""
        }
    },
}
</script>
<style scoped>
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
.modal-lg, .modal-xl {
    --bs-modal-width: 85%!important;
}
.noSelect{
    width: 59%;
}
.selected{
    width: 59%;
}
.typeFoodCont{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.typeFood{
    height: 83px;
    width: 100%;
    border: 1px #c57a7a solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 31px;
    margin-top: 25px;
    cursor: pointer;
}
.divInfoModal{
    width: 6.2%!important;
}
#divInfo{
    width: 15.2%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.titleInfo{
    color:#FD0054;
    border-bottom: 1px #c57a7a solid;
}
input{
    height: 31px;
    width: 80%;
    margin-bottom: 3px;
}
p{
    margin-bottom: 10px!important;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.searchTitleTxt{
    font-size: 1.3rem;
}
.searchFoodCont{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.searchFood{
    border-radius: 10px;
    width: 60%;
    border: 1px #222222 solid;
}
.searchCont{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.lupaSearch{
    margin-left: 10px;
    width: 4.5%;
    cursor: pointer;
}
.modal-title{
    font-size: 1.8rem;
}
</style>