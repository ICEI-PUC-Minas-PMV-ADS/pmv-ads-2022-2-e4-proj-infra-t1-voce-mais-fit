<template>
    <div class="allHeaderComponent">
        <div class="headerMiniLogo">
            <img src="@/assets/alllImages/alterIcon.svg" class="alterLink">
            <p class="textLogo">VOCÊ + FIT</p>
        </div>
        <div class="linksHeader">
            <p class="link">Home</p>
            <p class="link">Dieta</p>
            <p class="link">Exercicíos</p>
            <p class="link">Blog</p>
        </div>
        <div class="personalLinksHeader">
            <p class="link">Perfil</p>
            <p class="link">Configurações</p>
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
}
.link{
    padding-left: 58px;
    margin-bottom: 10px
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