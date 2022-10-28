<template>
    <footer>
        <div class="allFooterContainer">
            <div class="footerComponent">
                <p class="footerText">VOCÊ + FIT -- PUC MINAS 2022 © Todos os direitos reservados </p>
                <img @click="goToTop" src="@/assets/footerImg/pngwing.com.png" class="goToTop">
            </div>
            <div class="footerComponentLogo">
                <img src="@/assets/alllImages/alterIcon.svg" class="alterLink">
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    methods:{
        goToTop(){
            var btn = document.querySelector(".goToTop");
            btn.addEventListener("click", function() {
                window.scrollTo(0, 0);
            });
        }
    }
}
</script>

<style scoped>
p{
    margin-bottom: 0;
}
.allFooterContainer{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    background-color: #FD0054;
}
.footerComponent{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
}
.footerComponentLogo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 20%;
    background-color:#222222;
}
.goToTop{
    width: 2%;
    margin-right: 3%;
    cursor: pointer;
    margin-top: 0.5%;
}
.footerText{
    font-size:max(2vh, 14px) ;
    color: #FFFF;
    margin-right: 1%;
    margin-left: 29%;
}
.alterLink{
    width: 20%;
}
</style>