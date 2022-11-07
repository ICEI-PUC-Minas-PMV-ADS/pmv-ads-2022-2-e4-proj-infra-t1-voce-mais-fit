<template>
    <div class="allContainerHist">
        <div class= "titleBlockCont">
            <p class="titleBlock">Historico</p>
        </div>
        <div class="inputBlockCont">
           <div class="labelCont">
            <label>Adicione uma data para pesquisa:</label>
            <input class="inputCalendar" type = "date"/>
           </div> 
            <button class="searchHist"> Pesquisar</button>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return{

        }
    },
}
</script>

<style scoped>
* {
  background-color: rgb(127, 27, 64);
  text-align: center;
}
.titleBlockCont{
  margin-right: 3%;
}
.titleBlock{
  color: #FFFF;
  font-size: 60px;
}
.allContainerHist {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3%;
  padding-bottom: 3%;
}
.inputBlockCont {
    width: 100%;
    display: flex;
    justify-content: center;
}
.labelCont {
    color: white;
    display: flex;
    flex-direction: column;
}
input {
color: white;
border: none;
} 
.searchHist {
  color: white;
  box-sizing: border-box;
  border: 2px solid #fafafa;
  height: 50px;
  width: 14%;
  font-size: max(1rem, 18px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 2% 2% 2%;
  margin-left: 2%;
}
.searchHist:hover {
  border: none;
  background: #fd0054;
  color: #FFFF;
  transition: .7s ease-in-out;
}
</style>

