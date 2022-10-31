<template>
    <div>
        <div class="modal fade modal-lg" id="addExModal" tabindex="-1" aria-labelledby="addExModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addExModalLabel">Selecione os exercícios!</h5>
                <button @click="closeModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="typeExCont">
                    <div @click="turnImg" class="typeEx">
                        <div id="divInfo" class="divInfoModal">
                            <img src="@/assets/modalAddImg/noSelect.png" class="noSelect">
                            <img src="@/assets/modalAddImg/selected.png" class="selected">
                        </div>
                        <div id="divInfo" class="name">
                            <p class="titleInfo">Nome:</p>
                            <p>Carne de Boi</p>
                        </div>
                        <div id="divInfo" class="quant">
                            <p class="titleInfo">Vídeo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="buttonSend">Adicionar</button>
                <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="buttonClose">Fechar</button>
            </div>
            </div>
        </div>
        </div>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            defineImg: false,
            defineModal:true
        }
    },
    methods:{
        turnImg(){
            let noSelect = document.querySelector('.noSelect')
            let selected = document.querySelector('.selected')
            if(this.defineImg === false){
                this.defineImg = true
                noSelect.style.display = 'none'
                selected.style.display = 'block'
            }else{
                this.defineImg = false
                noSelect.style.display = 'block'
                selected.style.display = 'none'
            }
        },
        closeModal(){
            this.defineModal === false
        }
    },
    mounted(){
        if(this.defineImg === false){
            let noSelect = document.querySelector('.noSelect')
            let selected = document.querySelector('.selected')
            noSelect.style.display = 'block'
            selected.style.display = 'none'
        }
    }
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
.typeExCont{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.typeEx{
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
.modal-title{
    font-size: 1.8rem;
}
</style>