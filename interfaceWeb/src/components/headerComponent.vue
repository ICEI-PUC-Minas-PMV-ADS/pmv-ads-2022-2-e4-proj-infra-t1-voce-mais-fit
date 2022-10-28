<template>
    <div class="allHeaderComponent">
        <div class="headerMiniLogo">
            <img src="@/assets/alllImages/alterIcon.svg" class="alterLink">
            <p class="textLogo">VOCÊ + FIT</p>
        </div>
        <div class="linksHeader">
            <a class="link" href="#home">Home</a>
            <a class="link" href="#rotina">Rotina</a>
            <a class="link">Dieta</a>
            <a class="link">Exercicíos</a>
        </div>
        <div class="personalLinksHeader">
            <a class="link">Perfil</a>
            <a class="link">Configurações</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.allHeaderComponent{
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #222222;
    height: 150px;
    width: 100%;
}
.headerMiniLogo{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FD0054;
}
.textLogo{
    padding-left: 20px;
    padding-right: 20px;
    color: #FFFF;
    text-decoration: none;
    font-size:max(2.5vh, 16px) ;
}
.linksHeader{
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size:max(3vh, 20px);
    text-decoration: none;
    color: #FFFF;
    margin-right: 3%;
}
.link{
    color: #FFFF;
    padding-left: 58px;
    margin-bottom: 10px;
    cursor: pointer;
    text-decoration: none;
}
.personalLinksHeader{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FD0054;
    font-size:max(3vh, 20px);
    text-decoration: none;
    color: #FFFF;
}
</style>