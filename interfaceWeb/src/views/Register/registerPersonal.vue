<template>
    <div class="allContainer">
        <header class="headerLoginContainer">
            <div class="headerLogin">
                <router-link to="/" class="headerMiniLogo">
                    <img src="@/assets/alllImages/alterIcon.svg" class="alterLink">
                    <p class="textLogo">VOCÊ + FIT</p>
                </router-link>
                <div class="headerLink">
                    <router-link to="/registerUserPage" class="link">Criar Conta</router-link>
                    <router-link to="/registerPersonal" class="link">Criar Conta Personal</router-link>
                    <router-link to="/loginPage" class="link">Fazer Login</router-link>
                </div>
            </div>
        </header>
        <body>
            <div class="formContainer">
                <div class="row" id="row">
                    <div class="col-6 p-0" >
                        <label class="mb-1 label_default"
                        >Nome</label
                        >
                        <input id="inputForm"
                        placeholder="Seu Nome"
                        type="text"
                        class="input_default form-control requiredName"
                        v-model="userName"
                        />
                        <span class="spanName">Insira um Nome válido</span>
                    </div>
                    <div class="col-6 p-0" >
                        <label class="mb-1 label_default"
                        >CPF</label
                        >
                        <input id="inputForm"
                        placeholder="000.000.000-00"
                        type="Seu CPF"
                        class="input_default form-control requiredName"
                        v-mask="'###.###.###-##'"
                        v-model="userCpf"
                        @input="validaCpf"
                        />
                        <span class="spanCpf">Insira um CPF válido</span>
                    </div>
                    <div class="col-6 p-0" >
                        <label class="mb-1 label_default"
                        >Email</label
                        >
                        <input id="inputForm"
                        placeholder="Seu e-mail"
                        type="email"
                        class="input_default form-control requiredName"
                        v-model="userEmail"
                        @input="validaMail"
                        />
                        <span class="spanMail">Insira um E-mail válido</span>
                    </div>
                    <div class="col-6 p-0" >
                        <label class="mb-1 label_default"
                        >Senha</label
                        >
                        <input id="inputFormTwo"
                        placeholder="Sua Senha"
                        type="password"
                        class="input_default form-control required"
                        v-model="userSenha"
                        @input="validaSenha"
                        />
                        <span class="spanSenha">Insira a senha correta</span>
                    </div>
                    <button class="submitButton" @click="toGo" type="submit">Cadastrar!</button>
                </div>
            </div>
        </body>
        <footerComponent></footerComponent>
    </div>
</template>

<script>
import footerComponent from '@/components/footerComponent.vue';
export default {
    components:{
        footerComponent,
    },
    data(){
        return{
            userName:"",
            userCpf:"",
            userEmail:"",
            userSenha:""
        }
    },
    methods:{
        validaMail(k){
            let email = this.userEmail;
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            
            if(email.match(pattern)){
                k.target.style.border = '1px solid #5B9CCF'
                let span = document.querySelector('.spanMail')
                span.style.display = 'none'
            }else if(email.length === 0){
                k.target.style.border = '1px solid #5B9CCF'
                let span = document.querySelector('.spanMail')
                span.style.display = 'none'
            }else{
                k.target.style.border = '2px solid #cc1313'
                let span = document.querySelector('.spanMail')
                span.style.display = 'block'
            }
        },
        toGo(){
            if(!this.userEmail && !this.userSenha && !this.userCpf && !this.userName){
                let spanMail = document.querySelector('.spanMail')
                spanMail.style.display = 'block'
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'block'
                let spanCpf = document.querySelector('.spanCpf')
                spanCpf.style.display = 'block'
                let spanName = document.querySelector('.spanName')
                spanName.style.display = 'block'
            }else if(this.userEmail && !this.userSenha && !this.userCpf && !this.userName){
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'block'
                let spanCpf = document.querySelector('.spanCpf')
                spanCpf.style.display = 'block'
                let spanName = document.querySelector('.spanName')
                spanName.style.display = 'block'
            }else if(!this.userEmail && this.userSenha && !this.userCpf && !this.userName){
                let spanMail = document.querySelector('.spanMail')
                spanMail.style.display = 'block'
                let spanCpf = document.querySelector('.spanCpf')
                spanCpf.style.display = 'block'
                let spanName = document.querySelector('.spanName')
                spanName.style.display = 'block'
            }else if(!this.userEmail && !this.userSenha && this.userCpf && !this.userName){
                let spanMail = document.querySelector('.spanMail')
                spanMail.style.display = 'block'
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'block'
                let spanName = document.querySelector('.spanName')
                spanName.style.display = 'block'
            }else if(!this.userEmail && !this.userSenha && !this.userCpf && this.userName){
                let spanMail = document.querySelector('.spanMail')
                spanMail.style.display = 'block'
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'block'
                let spanCpf = document.querySelector('.spanCpf')
                spanCpf.style.display = 'block'
            }else if(!this.userEmail && !this.userSenha && this.userCpf && this.userName){
                let spanMail = document.querySelector('.spanMail')
                spanMail.style.display = 'block'
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'block'
            }else if(!this.userEmail && this.userSenha && !this.userCpf && this.userName){
                let spanMail = document.querySelector('.spanMail')
                spanMail.style.display = 'block'
                let spanCpf = document.querySelector('.spanCpf')
                spanCpf.style.display = 'block'
            }else if(this.userEmail && !this.userSenha && !this.userCpf && this.userName){
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'block'
                let spanCpf = document.querySelector('.spanCpf')
                spanCpf.style.display = 'block'
            }else if(!this.userEmail && this.userSenha && this.userCpf && !this.userName){
                let spanMail = document.querySelector('.spanMail')
                spanMail.style.display = 'block'
                let spanName = document.querySelector('.spanName')
                spanName.style.display = 'block'
            }else if(this.userEmail && !this.userSenha && this.userCpf && !this.userName){
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'block'
                let spanName = document.querySelector('.spanName')
                spanName.style.display = 'block'
            }else if(this.userEmail && this.userSenha && !this.userCpf && !this.userName){
                let spanCpf = document.querySelector('.spanCpf')
                spanCpf.style.display = 'block'
                let spanName = document.querySelector('.spanName')
                spanName.style.display = 'block'
            } 
        },
        validaSenha(j){
            if(this.userSenha === ""){
                j.target.style.border = '1px solid #5B9CCF'
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'none'
            }else if(this.userSenha !== ""){
                j.target.style.border = '1px solid #5B9CCF'
                let spanSenha = document.querySelector('.spanSenha')
                spanSenha.style.display = 'none'
            }
        },
        validaCpf(x){
            if(this.userCpf.length > 0 && this.userCpf.length < 14 || this.userCpf.length > 14){
                x.target.style.border = '2px solid #cc1313'
                let span = document.querySelector('.spanCpf')
                span.style.display = 'block'
            }else if(this.userCpf.length === 0){
                x.target.style.border = '1px solid #5B9CCF'
                let span = document.querySelector('.spanCpf')
                span.style.display = 'none'
            }
            else{
                x.target.style.border = '1px solid #5B9CCF'
                let span = document.querySelector('.spanCpf')
                span.style.display = 'none'
            }
            
        },
    }
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
    text-decoration: none;
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
}
.headerLogin{
    width: 60%;
    height: 140px;
    background-color: #FD0054;
    display: flex;
    flex-direction: row;
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

.allContainer{
    display: flex;
    flex-direction: column;
    background-color: #601430;
}

.formContainer{
    background: #601430;
    display: flex;
    justify-content: center;
    align-items: center;
}
label{
    color: #FFFF;
}
.submitButton{
    width: 35%;
    margin-top: 3%;
    border: none;
    border-radius: 15px;
    height: 30px;
    font-size: 18px;
}
.submitButton:hover{
    background-color: #FD0054;
    color: #FFFF;
    transition: .6s;
}
.forget{
    color: #FFFF;
}
input{
    margin-bottom: 1%;
}
.col-6 :nth-child(1){
    margin-top: 4%;
}
.row{
    padding-top: 5%;
    padding-bottom: 12%;
    border: 4px #FD0054 solid;
    width: 80%;
    padding-bottom: 8%;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
span{
    display: none;
    color: red;
}
.allLoginPageContainer{
    background-color: #601430;
}
</style>