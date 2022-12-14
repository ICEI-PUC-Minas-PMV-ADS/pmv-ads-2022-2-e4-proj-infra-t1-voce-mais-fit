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
                <div class="spinnerCont" v-if="this.load">
                    <div class="spinner-border text-danger" role="status" id="spinner"></div>
                </div>
                <div v-else class="typeFoodCont" >
                    <div @click="choosedFood(resultado)" v-for="resultado in result" :key="resultado" :value="resultado" class="typeFood">
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
                            <input type="text" placeholder="Q° Gramas" v-model="perGram"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="confirmChoose" type="button" class="btn btn-primary" id="buttonSend">Adicionar</button>
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
            result:[],
            load:true,
            perGram:0,
            carb:0,
            prot:0,
            gor:0,
            kcal:0,
            quant:0,
            day:"",
            infoId:"",
            id:"",
            name:""
        }
    },
    mounted(){
        this.getDailyId()
    },
    methods:{
        getDailyId(){
            var data = new Date();
            var dia  = data.getDate();
            if (dia< 10) {
                dia  = "0" + dia;
            }
            var mes  = data.getMonth() + 1;
            if (mes < 10) {
                mes  = "0" + mes;
            }
            var ano  = data.getFullYear();
            this.day = ano + "-" + mes + "-" + dia;
            let id = window.localStorage.getItem('gymgoerId')
            let idFormado = id.replace(/"/g, '')
            HTTP.get(`/gymgoer/${idFormado}/dailyRegisters/${this.day}`)
            .then(response =>{
                this.infoId = response.data
                this.id = this.infoId._id
            })
            .catch(error =>{
                console.log(error)
            })
        },
        searchFood(){
            if(this.result.length !== 0 ){
                let id = window.localStorage.getItem('gymgoerId')
                 let idFormado = id.replace(/"/g, '')
                this.result = ""
                this.load = true
                HTTP.get(`gymgoer/${idFormado}/foodSaved?foodName=${this.searchResult}`)
            .then(response =>{
                this.result = response.data
                this.load = false
            })
            .catch(error =>{
                if(error.message === 'Request failed with status code 404'){
                    alert('ALIMENTO NÃO ENCONTRADO')
                }else{
                    alert('OPS, O BANCO DE DADOS EXPLODIU <3')
                }
            })
            }else{
                let spiiner = document.querySelector('#spinner')
                spiiner.style.display = 'block'
                HTTP.get(`gymgoer/foodSaved/searchFood?foodName=${this.searchResult}`)
                .then(response =>{
                    this.result = response.data
                    this.load = false
                })
                .catch(error =>{
                    if(error.message === 'Request failed with status code 404'){
                        alert('ALIMENTO NÃO ENCONTRADO')
                    }else{
                        alert('OPS, O BANCO DE DADOS EXPLODIU <3')
                    }
                })
            }          
        },
        choosedFood(x){        
            let cont = document.querySelector('.typeFood')
            
            if(cont.style.backgroundColor !== 'rgb(179, 179, 179)'){
                cont.style.backgroundColor = '#b3b3b3'
                this.name = x.name
                this.carb = x.carbPer100g
                this.prot = x.proteinPer100g
                this.gor = x.fatPer100g
                this.kcal = x.kcalPer100g                
            }else{
                cont.style.backgroundColor = '#FFFF'
                this.name = ""
                this.carb = 0
                this.prot = 0
                this.gor = 0
                this.kcal = 0
                this.quant = 0
            }
                   
        },  
        confirmChoose(){
            this.quant = this.perGram
            this.carb = (this.carb * this.perGram)/100
            this.prot = (this.prot * this.perGram)/100
            this.gor = (this.gor * this.perGram)/100
            this.kcal = (this.kcal * this.perGram)/100
            HTTP.post(`gymgoer/dailyRegisters/${this.id}/foods`, {            
                name: this.name,
                gramsAmount: this.quant,
                carb: this.carb,
                protein: this.prot,
                fat: this.gor,
                kcal: this.kcal,
                description: ""
            })
            .then(()=>{
                window.location.reload()
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
    width: 12.2%;
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
#spinner{
    display: none;  
}
.spinnerCont{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-title{
    font-size: 1.8rem;
}
.typeFood #divInfo:nth-child(1){
    width: 18.2%;
}
.typeFood #divInfo:nth-child(6){
    width: 18.2%;
}
</style>