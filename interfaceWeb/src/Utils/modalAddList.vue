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
                        <input type="text"/>
                        <label>Descrição</label>
                        <input type="text"/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="buttonSend">Adicionar Lista</button>
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

</style>