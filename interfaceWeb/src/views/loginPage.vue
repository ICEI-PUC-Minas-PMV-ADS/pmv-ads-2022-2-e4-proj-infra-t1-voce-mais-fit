<template>
    <div class="allContainer">
        <div class="wordContainer">
            <div class="showTextContainer">
                <div class="textTitle"><p>VOCÊ + FIT</p></div>
                <div class="textSubTitle"><p class="showText">Um website funcional para pessoas que querem ter uma vida saudável e para profissionais exercerem suas funções!</p></div>
            </div>
        </div>
        <div class="formsContainer">
            <div class="builderImageContainer">
                <img src="@/assets/lgPageImg.jpg" class="buiderImg">
            </div>
            <div class="inputContainer">
                <input class="inputEmail" type="text" placeholder="E-mail">
                <input class="inputSenha" type="text" placeholder="************">
            </div>
            <div class="linksContainer">
                <a class="inputC">Criar Conta</a>
                <a class="inputP">Criar Conta Personal</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.allContainer{
    background-color: #3b3b3b;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding-bottom: 5%;
}
.wordContainer{
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: center;
    padding-bottom: 6%;
    border: 1px #7c7777 solid;
    border-right: none;
    background-color: #7c7777;
    margin-top: 4%;
}
.formsContainer{
    width: 40%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #313919;
    border-radius: 20px;
    padding-bottom: 3%;
}
.showTextContainer{
    margin-top: 4%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.showText{
    font-size: max(1.6vw, 21px);
    text-decoration: none;
    color: #FFF;
    text-align: center;
    margin-bottom: 15%;
}
.builderImageContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2%;
}
.buiderImg{
    width: 89%;
    margin-top: 8%;
    border-radius: 41px;
}
.inputContainer{
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.inputEmail{
    background-color: #a8c349;
    border: none;
    border-radius: 10px ;
    max-height: 55px;
    height: 55px;
    width: 70%;
    font-size: max(1vw, 19px);
    padding-left: 8px;
    color: #FFF;
    box-shadow: 5px 10px 8px #131313
}
.inputSenha{
    margin-top: 4%;
    background-color: #a8c349;
    border: none;
    border-radius: 10px ;
    max-height: 55px;
    height: 55px;
    width: 70%;
    font-size: max(1vw, 19px);
    padding-left: 8px;
    color: #FFF;
    box-shadow: 5px 10px 8px #131313
}
input::placeholder{
    color: #FFF;
}
.linksContainer{
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
.linksContainer a{
    font-size: max(1.6vw, 21px);
    text-decoration: none;
    color: #FFFF;
    text-align: center;
}
.inputP{
    padding-top: 15%;
}
.textTitle{
    font-size: max(2.6vw, 21px);
    text-decoration: none;
    color: #FFF;
    text-align: center;
    margin-bottom: 15%;
    padding-top: 17%;
}

@media screen and (max-width:800px) {
    .formsContainer{
        width: 80%;
    }
    .inputEmail{
        max-height: 40px;
        height: 40px;
    }
    .inputSenha{
        max-height: 40px;
        height: 40px;
    }
    .allContainer{
        padding-bottom: 19.5%;
    }
    .allContainer{
        flex-direction: column!important;
    }
    .wordContainer{
        width: 80%;
        justify-content: center;
        margin-bottom: 2%;
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: center;
        padding-bottom: 0%;
        border: none; 
        background-color: #3b3b3b;
        margin-top: 0%!important;
    }
    .showTextContainer{
        margin-top: 0%!important;
    }
    .textTitle{
        margin-top: 5%;
        margin-bottom: 8%;
        font-size: max(1.6vw, 33px);
    }
    .buiderImg{
        width: 79%;
        margin-top: 8%;
        border-radius: 41px;
    }
}
</style>