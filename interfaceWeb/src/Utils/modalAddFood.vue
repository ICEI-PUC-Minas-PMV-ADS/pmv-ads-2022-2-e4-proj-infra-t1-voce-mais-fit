<template>
    <div>
        <div class="modal fade modal-lg" id="addFoodModal" tabindex="-1" aria-labelledby="addFoodModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addFoodModalLabel">Selecione os alimentos!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="typeFoodCont">
                    <div class="typeFood">
                        <div id="divInfo" class="name">
                            <p>Nome:</p>
                            <p>Carne de Boi</p>
                        </div>
                        <div id="divInfo" class="carbo">
                            <p>Carboidratos:</p>
                            <p>200</p>
                        </div>
                        <div id="divInfo" class="prot">
                            <p>Proteínas:</p>
                            <p>200</p>
                        </div>
                        <div id="divInfo" class="gord">
                            <p>Gordura:</p>
                            <p>200</p>
                        </div>
                        <div id="divInfo" class="kcal">
                            <p>Calorias:</p>
                            <p>200</p>
                        </div>
                        <div id="divInfo" class="quant">
                            <p>Gramas consumidas</p>
                            <input type="text" placeholder="Q° Gramas"/>
                        </div>
                    </div>
                    <div class="typeFood">
                        <div id="divInfo" class="name">
                            <p>Nome:</p>
                            <p>Carne de Porco</p>
                        </div>
                        <div id="divInfo" class="carbo">
                            <p>Carboidratos:</p>
                            <p>150</p>
                        </div>
                        <div id="divInfo" class="prot">
                            <p>Proteínas:</p>
                            <p>150</p>
                        </div>
                        <div id="divInfo" class="gord">
                            <p>Gordura:</p>
                            <p>150</p>
                        </div>
                        <div id="divInfo" class="kcal">
                            <p>Calorias:</p>
                            <p>150</p>
                        </div>
                        <div id="divInfo" class="quant">
                            <p>Gramas consumidas</p>
                            <input type="text" placeholder="Q° Gramas"/>
                        </div>
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
export default {
    
}
</script>
<style scoped>
.modal-lg, .modal-xl {
    --bs-modal-width: 90%!important;
}
.typeFoodCont{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.typeFood{
    width: 100%;
    border: 1px #c57a7a solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 31px;
    margin-top: 25px;
}
#divInfo{
    width: 14.2%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
input{
    height: 40px;
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
</style>