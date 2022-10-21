<template>
    <div class="allContainer">
        <div class="headerLoginContainer">
            <div class="headerLogin">
                <div class="headerMiniLogo">
                    <img src="@/assets/alterIcon.svg" class="alterLink">
                    <p class="textLogo">VOCÊ + FIT</p>
                </div>
                <div class="headerLink">
                    <router-link to="/mainPage" class="link">Criar Conta</router-link>
                    <router-link to="/mainPage" class="link">Criar Conta Personal</router-link>
                    <router-link to="/mainPage" class="link">Fazer Login</router-link>
                </div>
            </div>
        </div>
        <div class="bodyLogin">
            <div class="bodyTextContainer">
                <h2 id="h2Text">MAKE YOUR</h2><br>
                <h1 id="h1Text">BODY</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.headerMiniLogo{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #222222;
}
.headerLink{
    width: 60%;
    height: 100%;
}
.headerLoginContainer{
    width: 100%;
    height: 221px;
    background-color: #601430;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
}
.headerLogin{
    width: 60%;
    height: 140px;
    background-color: #FD0054;
    display: flex;
    flex-direction: row;
}
.allContainer{
    display: flex;
    flex-direction: column;
    background-color: #601430;
}
.imgLogoCont{
    display: flex;
    justify-content: center;
}
.headerLink{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.link{
    padding-left: 20px;
    padding-right: 20px;
    color: #FFFF;
    text-decoration: none;
    font-size:max(2.5vh, 16px) ;
}
.link:hover{
    color: rgb(154, 154, 154);
    border-bottom: 1px rgb(154, 154, 154) solid;
    transition: 0.7s;
}
.textLogo{
    padding-left: 20px;
    padding-right: 20px;
    color: #FFFF;
    text-decoration: none;
    font-size:max(2.5vh, 16px) ;
}
.bodyTextContainer{
    flex-direction: column;
    text-align: center;
    border: 6px #FD0054 solid;
    padding-right: 2%;
    padding-left: 2%;
    padding-bottom: 4%;
}
.bodyLogin{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 9%;
}
#h1Text{
    color: #FFFF;
    font-size: 17vh;
}
#h2Text{ 
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    color: #dadada;
    font-size: 3vh;
    padding-top: 6%;
}
</style>