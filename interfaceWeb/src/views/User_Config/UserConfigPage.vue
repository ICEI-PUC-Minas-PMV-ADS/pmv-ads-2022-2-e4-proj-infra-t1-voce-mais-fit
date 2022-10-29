<template>
    <div>
        <headerComponent></headerComponent>
        <div class="formContainer">
                <div class="row" id="row">
                    <div class="col-6" >

                        <label class="mb-1">{{nome}}</label>
                        <br>
                        <div class="stealth" v-if="displayNome">
                            <input id="inputForm" placeholder="Digite o nome que deseja alterar" type="text" class="input_default form-control requiredName" v-model="userName" />
                            <p class="p-waring" v-if="verificaNome">Deve digitar um nome para atualizar</p>
                            <button type="button" class="btn btn-light" @click="verificaDadosName">Atualizar</button>
                        </div>
                        <button type="button" class="btn btn-light" @click="AlteraDisplay">{{ ButtonName }}</button>
                        
                    </div>
                    <div class="col-6" >

                        <label class="mb-1">{{cpf}}</label>
                        <br>
                        <div class="stealth" v-if="displayCpf">
                            <input id="inputForm" placeholder="000.000.000-00" type="Seu CPF" class="input_default form-control requiredName" v-mask="'###.###.###-##'" v-model="userCpf" @input="validaCpf"/>
                            <p class="p-waring" v-if="verificaCPF">Deve digitar o CPF corretamente para atualizar</p>
                            <button type="button" class="btn btn-light" @click="verificaDadosCpf">Atualizar</button>
                        </div>
                        <button type="button" class="btn btn-light" @click="AlteraDisplayCpf">{{ ButtonCpf }}</button>
                        
                    </div>
                    <div class="col-6" >

                        <label class="mb-1">{{email}}</label>
                        <br>
                        <div class="stealth" v-if="displayEmail">
                            <input id="inputForm" placeholder="Seu e-mail" type="email" class="input_default form-control requiredName" v-model="userEmail" @input="validaMail"/>
                            <p class="p-waring" v-if="verificaEmail">Deve digitar o Email corretamente para atualizar</p>
                            <button type="button" class="btn btn-light" @click="verificaDadosEmail">Atualizar</button>
                        </div>
                        <button type="button" class="btn btn-light" @click="AlteraDisplayEmail">{{ ButtonEmail }}</button>

                    </div>
                    <div class="col-6" >

                        <label class="mb-1">{{senha}}</label>
                        <br>
                        <div class="stealth" v-if="displaySenha">
                            <input id="inputFormTwo" placeholder="Sua Senha" type="password" class="input_default form-control required" v-model="userSenha" @input="validaSenha"/>
                            <p class="p-waring" v-if="verificaSenha">Deve digitar a Senha para atualizar</p>
                            <button type="button" class="btn btn-light" @click="verificaDadosSenha">Atualizar</button>
                        </div>
                        <button type="button" class="btn btn-light" @click="AlteraDisplaySenha">{{ ButtonSenha }}</button>

                    </div>

                </div>
            </div>

        <footerComponent></footerComponent>
    </div>
    

</template>


<script>

    import headerComponent from '@/components/headerComponent.vue'
    import footerComponent from '@/components/footerComponent.vue'

    export default {
        components: {
            headerComponent,
            footerComponent,
        },
        data(){
            return{
                nome: "nome Exp",
                cpf: "00000000000",
                email: "exp@exp",
                senha: "******",

                displayNome: false,
                displayCpf: false,
                displayEmail: false,
                displaySenha: false,

                verificaNome: false,
                verificaCPF: false,
                verificaEmail: false,
                verificaSenha: false,

                ButtonName: "Alterar",
                ButtonCpf: "Alterar",
                ButtonEmail: "Alterar",
                ButtonSenha: "Alterar",

                userName: "",
                userCpf: "",
                userEmail: "",
                userSenha: "",
            }
        },
        methods:{
            // Métodos para esconder e aparecer as DIVs
            AlteraDisplay(){
                this.displayNome = !this.displayNome;
                if(this.displayNome)
                    this.ButtonName = "Cancelar"
                else{
                    this.ButtonName = "Alterar"
                }
            },

            AlteraDisplayCpf(){
                this.displayCpf = !this.displayCpf;
                if(this.displayCpf)
                    this.ButtonCpf = "Cancelar"
                else{
                    this.ButtonCpf = "Alterar"
                }
            },

            AlteraDisplayEmail(){
                this.displayEmail = !this.displayEmail;
                if(this.displayEmail)
                    this.ButtonEmail = "Cancelar"
                else
                    this.ButtonEmail = "Alterar"
            },

            AlteraDisplaySenha(){
                this.displaySenha = !this.displaySenha;
                if(this.displaySenha)
                    this.ButtonSenha = "Cancelar"
                else
                    this.ButtonSenha = "Alterar"
            },
            // Métodos para verificar se os campos estão corretos e exibir ou não a msg
            verificaDadosName(){
                let nome = this.userName;
                if(nome == "")
                    this.verificaNome = true;
                else
                    alert("Nome foi atualizado com suceso")
            },

            verificaDadosCpf(){
                let cpf = this.userCpf;
                if(cpf == "" || cpf.length < 11)
                    this.verificaCPF = true;
                else
                    alert("CPF foi alterado com sucesso")
            },

            verificaDadosEmail(){
                let email = this.userEmail;
                let carcEspc = email.includes("@");
                if(email == "" || !carcEspc)
                    this.verificaEmail = true;
                else
                    alert("Email foi alterado com sucesso")
            },

            verificaDadosSenha(){
                let senha = this.userSenha;
                if(senha == "")
                    this.verificaSenha = true;
                else
                    alert("Senha foi alterada com sucesso");
            }
        }
    }

</script>


<style scoped>

headerMiniLogo{
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

.forget{
    color: #FFFF;
}
input{
    margin-bottom: 1%;
    height: 55px;
}
.col-6 :nth-child(1){
    margin-top: 4%;
}
.row{
    margin-top: 25px;
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

.stealth button{
    margin-bottom: 5px;
}

.p-waring{
    color: azure;
}


</style>