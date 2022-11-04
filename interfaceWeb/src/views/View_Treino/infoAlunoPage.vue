<template>
    <div class="allContainer">
        <div class="profile">
            <div class="box1">
                <img class="icon" src="@/assets/profile.svg">
            </div>
            <div class="box2">
                <h1 class="user">Iago Iann</h1>
            </div>
        </div>
        <div class="sections">
            <div class="sectionChild">
                <p>Informações do Aluno</p>
                <ul>
                    <li>Nome: Iago Iann</li>
                    <li>Idade: 16 Anos</li>
                    <li>Peso: 53KG</li>
                    <li>Altura: 173CM</li>
                    <li>Etnia: Branco</li>
                    <li>Profissão: Universitario</li>
                </ul>
            </div>
            <div class="sectionChild">
                <p>Lista de Exercicios</p>
                <ul>
                    <li>Dar o Cu</li>
                    <li>Mamar Rola</li>
                    <li>Dar de Ladinho</li>
                    <li>Altura: 173CM</li>
                    <li>Etnia: Branco</li>
                    <li>Profissão: Universitario</li>
                    <button type="submit"> Adicionar Lista</button>
                </ul>
            </div>
            <div class="sectionChild">
                <p>Lista de Alimentos</p>
                <ul>
                    <li>Dar o Cu</li>
                    <li>Mamar Rola</li>
                    <li>Dar de Ladinho</li>
                    <li>Altura: 173CM</li>
                    <li>Etnia: Branco</li>
                    <li>Profissão: Universitario</li>
                    <button type="submit"> Adicionar Lista</button>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.sectionChild{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.allContainer {
    box-sizing: border-box;
    margin: 0;
    background-image: url(@/assets/trainerImg/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 10%;
}
.profile {
    display: flex;
    justify-content: center;
    padding: 2%;
    align-items: center;
}
.icon {
    width: 130px;
    border-radius: 3px;
}
p {
    color: #FD0054;
    font-size: 25px;
    margin-left: 3%;
}
.box2 {
    margin-left: 3%;
    margin-top: 2%;
    font-size: 20px;
    color: #E7C7D1;
}
.sections {
    display: flex;
    text-align: center;
    padding: 2%;
    gap: 5rem;
    justify-content: center;
    opacity: 90%;
}
.sections div{
    width: 50vh;
    height: 60vh;
    background-color: white;
    border-radius: 5px;
}
ul {
    margin-top: 5%;
}
li {
    list-style: none;
    padding: 4px;
    font-size: 25px;
}
button {
    margin-top: 30%;
    padding: 5%;
    font-size: 20px;
    background-color: #f0555d;
    color: white;
    border: 0px;
    border-radius: 5px;
}
ul {
     padding-left: 0!important; 
}
</style>