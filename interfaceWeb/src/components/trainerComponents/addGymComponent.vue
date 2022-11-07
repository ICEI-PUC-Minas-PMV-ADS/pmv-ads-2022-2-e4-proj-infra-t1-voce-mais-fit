<template>
    <div class="allContainer">
        <div class="acadGyn">
            <p>Adicione a sua Academia!</p>
        </div>
        <div class="acadButton">
            <button class="button" data-bs-toggle="modal" data-bs-target="#addGynModal">ADD Academia</button>
            <modalAddGyn></modalAddGyn>
        </div>
    </div>
</template>

<script>
import modalAddGyn from '@/Utils/modalAddGyn.vue';
export default {
    components:{
        modalAddGyn
    }

}
</script>

<style scoped>
.allContainer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fafafa;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-bottom: 2%;
}
.acadGyn{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
}
.acadButton{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.button{
  color: white;
  box-sizing: border-box;
  background-color:   #fd0054;
  border: none;
  height: 50px;
  width: 14%;
  font-size: max(1rem, 18px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 2% 2% 2%;
}
.button:hover{
  border: none;
  background: #fafafa;
  color: #fd0054;
  transition: .7s ease-in-out;
}
</style>