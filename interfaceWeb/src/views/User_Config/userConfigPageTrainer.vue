<template>
    <div>
        <headerComponent></headerComponent>
        
        
        <div class="formContainer">
            <div class="row" id="row">  
                <div class="lowerRow">               
                    <div class="col-6" >
                        <h3 id="Titulo">Dados da Conta</h3>
                        <label class="mb-1">Nome: {{nome}}</label>
                        <br>
                        <div class="stealth" v-if="displayNome">
                            <input id="inputForm" placeholder="Digite o nome que deseja alterar" type="text" class="input_default form-control requiredName" v-model="userName" />
                            <p class="p-waring" v-if="verificaNome">Deve digitar um nome para atualizar</p>
                            <button type="button" class="btn btn-light" @click="verificaDadosName">Atualizar</button>
                        </div>
                        <button type="button" class="btn btn-light" @click="AlteraDisplay">{{ ButtonName }}</button>
                        
                    </div>
                    <div class="col-6" >

                        <label class="mb-1">Email: {{email}}</label>
                        <br>
                        <div class="stealth" v-if="displayEmail">
                            <input id="inputForm" placeholder="Seu e-mail" type="email" class="input_default form-control requiredName" v-model="userEmail" @input="validaMail"/>
                            <p class="p-waring" v-if="verificaEmail">Deve digitar o Email corretamente para atualizar</p>
                            <button type="button" class="btn btn-light" @click="verificaDadosEmail">Atualizar</button>
                        </div>
                        <button type="button" class="btn btn-light" @click="AlteraDisplayEmail">{{ ButtonEmail }}</button>

                    </div>
                    <div class="col-6" >

                        <label class="mb-1">Senha: {{senha}}</label>
                        <br>
                        <div class="stealth" v-if="displaySenha">
                            <input id="inputFormTwo" placeholder="Sua Senha" type="password" class="input_default form-control required" v-model="userSenha" @input="validaSenha"/>
                            <p class="p-waring" v-if="verificaSenha">Deve digitar a Senha para atualizar</p>
                            <button type="button" class="btn btn-light" @click="verificaDadosSenha">Atualizar</button>
                        </div>
                        <button type="button" class="btn btn-light" @click="AlteraDisplaySenha">{{ ButtonSenha }}</button>
                    </div>
                    <router-link class="logout" to="/">Logout</router-link>
                </div> 
                    <div class="lowerRow">
                        <div class="col-6" >
                                <label class="mb-1">Whatsapp: {{Whatsapp}}</label>
                                <br>
                                <div class="stealth" v-if="displayWhatsapp">
                                    <input id="inputForm" placeholder="Digite o nome que deseja alterar" type="text" class="input_default form-control requiredName" v-model="userWhatsapp" />
                                    <p class="p-waring" v-if="verificaWhatsapp">Deve digitar o número para atualizar</p>
                                    <button type="button" class="btn btn-light" @click="verificaDadoWhatsapp">Atualizar</button>
                                </div>
                                <button type="button" class="btn btn-light" @click="AlteraDisplayWhatsapp">{{ ButtonAlt }}</button>                   
                        </div>
                        <div class="col-6" >
                                <label class="mb-1">Imagem de Perfil</label>
                                <br>
                                <!-- :src="require(`../../assets/carrouselImg/${imgUrl}`)" -->
                                <img class="ImgUrl" :src="imgUrl" alt="Imagem de perfil do usuário">
                                <br>
                                <div class="stealth" v-if="displayImg">
                                    <input id="inputForm" placeholder="Digite a URL da Imagem que deseja alterar" type="text" class="input_default form-control requiredName" v-model="userImg" />
                                    <p class="p-waring" v-if="verificaImg">Deve digitar a Imagem para atualizar</p>
                                    <button type="button" class="btn btn-light" @click="verificaDadoImg">Atualizar</button>
                                </div>
                                <button type="button" class="btn btn-light" @click="AlteraDisplayImg">{{ ButtonImg }}</button>                   
                        </div>
                    </div>
                </div>

        </div>

        <footerComponent></footerComponent>
    </div>
    

</template>


<script>
    import { HTTP } from '@/api_system'
    import headerComponent from '@/components/trainerComponents/headerComponenTrainer.vue'
    import footerComponent from '@/components/footerComponent.vue'
    import axios from "axios";

    export default {
        components: {
            headerComponent,
            footerComponent,
        },
        data(){
            return{
                imgUrl: "https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=2000",
                
                email:"",
                senha:"",
                nome:"",
                Whatsapp:"",
                gyngoerId:"",

                Data: [],

                displayNome: false,
                displayEmail: false,
                displaySenha: false,
                displayAltura: false,
                displayWhatsapp: false,
                displayImg: false,

                verificaNome: false,
                verificaEmail: false,
                verificaSenha: false,
                verificaAlt: false,
                verificaWhatsapp: false,
                verificaImg: false,

                ButtonName: "Alterar",
                ButtonEmail: "Alterar",
                ButtonSenha: "Alterar",
                ButtonAlt: "Alterar",
                ButtonWhatsapp: "Alterar",
                ButtonImg: "Alterar",

                userName: "",
                userEmail: "",
                userSenha: "",
                userAlt : "",
                userWhatsapp: "",
                userImg: "",
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
            AlteraDisplayAlt(){
                this.displayAltura = !this.displayAltura;
                if(this.displayAltura)
                    this.ButtonAlt = "Cancelar"
                else
                    this.ButtonAlt = "Alterar"
            },
            AlteraDisplayWhatsapp(){
                this.displayWhatsapp = !this.displayWhatsapp;
                if(this.displayWhatsapp)
                    this.ButtonWhatsapp = "Cancelar"
                else
                    this.ButtonWhatsapp = "ALterar"
            },
            AlteraDisplayImg(){
                this.displayImg = !this.displayImg;
                if(this.displayImg)
                    this.ButtonImg = "Cancelar"
                else
                    this.ButtonImg = "Alterar"
            },
            // Métodos para verificar se os campos estão corretos e exibir ou não a msg
            verificaDadosName(){
                let nome = this.userName;
                if(nome == "")
                    this.verificaNome = true;
                else{
                    this.alterDataName(this.userName)
                    alert("Nome foi atualizado com suceso")
                }
                    
            },
            verificaDadosEmail(){
                let email = this.userEmail;
                let carcEspc = email.includes("@");
                if(email == "" || !carcEspc)
                    this.verificaEmail = true;
                else{
                    this.alterDataEmail(this.userEmail)
                    alert("Email alterado com sucesso")
                }
                    
            },
            verificaDadosSenha(){
                let senha = this.userSenha;
                if(senha == "")
                    this.verificaSenha = true;
                else{
                    this.alterDataPassword(this.userSenha)
                    alert("Senha foi alterada com sucesso");
                }
                    
            },

            verificaDadoWhatsapp(){
                let Whatsapp = this.userWhatsapp;
                if(Whatsapp == "")
                    this.verificaWhatsapp = true;
                else
                    this.alterDataWhatsapp(this.userWhatsapp)
                    alert("Whatsapp alterado com sucesso");
            },
            verificaDadoImg(){
                let img = this.userImg;
                if(img == "")
                    this.verificaImg = true;
                else
                    this.imgUrl = this.userImg
                console.log(this.imgUrl)
                console.log(this.userImg)
            },

            // Get para pegar o usuário logado do banco
            allData(){
                const localStorageToken = JSON.parse(window.localStorage.getItem('localStorage')).userId
                const localStorageTrainerId = JSON.parse(window.localStorage.getItem('localStorage')).trainerId
                const localStorageGymgoerId = JSON.parse(window.localStorage.getItem('localStorage')).gymgoerId

                // GET usuario
                axios
                .get("http://localhost:3000/api/user/"+localStorageToken)
                .then((res) => {
                        this.Data = res.data
                       this.email = res.data.email
                       this.senha = res.data.password
                })
                .catch((error) => {
                        console.log(error);
                });
            
                // GET trainer
                if(localStorageTrainerId != null){
                    axios
                    .get("http://localhost:3000/api/trainer/"+localStorageTrainerId)
                    .then((res) => {
                        this.nome = res.data.name
                        this.Whatsapp = res.data.whatsapp
                    })
                }
                //GET Gymgoer
                if(localStorageGymgoerId != null){
                    axios
                    .get("http://localhost:3000/api/gymgoer/"+localStorageGymgoerId)
                    .then((res) => {
                        this.nome = res.data.name
                        this.Whatsapp = res.data.whatsapp
                        this.altura = res.data.height
                    })
                }
                
            },

            // Alteração de dados do Banco
            alterDataEmail(email){
                const localStorageToken = JSON.parse(window.localStorage.getItem('localStorage')).userId
                HTTP.patch("user/"+localStorageToken, { email: email})
                .then((res) => {
                    console.log(res);
                })
        },
            getGynData(){
                HTTP.get(`gymgoer/${this.gyngoerId}`)
                .then(response =>{
                    this.allDataGyn = response.data
                    console.log(this.allDataGyn)
                    this.nome = this.allDataGyn.name;
                    this.peso = this.allDataGyn.physicalInformation.weight;
                    this.altura = this.allDataGyn.physicalInformation.height;
                })
            },
            alterDataPassword(password){
                const localStorageToken = JSON.parse(window.localStorage.getItem('localStorage')).userId
                HTTP.patch("user/"+localStorageToken, { password: password})
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                })
            },

           alterDataName(name){
                const localStorageTrainerId = JSON.parse(window.localStorage.getItem('localStorage')).trainerId
                const localStorageGymgoerId = JSON.parse(window.localStorage.getItem('localStorage')).gymgoerId
                if(localStorageTrainerId != null){
                    HTTP.patch("trainer/"+localStorageTrainerId, { name: name})
                }
                if(localStorageGymgoerId != null){
                    HTTP.patch("gymgoer/"+localStorageGymgoerId, { name: name})
                }
            },
            alterDataWhatsapp(whatsapp){
                const localStorageTrainerId = JSON.parse(window.localStorage.getItem('localStorage')).trainerId
                const localStorageGymgoerId = JSON.parse(window.localStorage.getItem('localStorage')).gymgoerId
                if(localStorageTrainerId != null){
                    HTTP.patch("trainer/"+localStorageTrainerId, { whatsapp: whatsapp})
                }
                if(localStorageGymgoerId != null){
                    HTTP.patch("gymgoer/"+localStorageGymgoerId, { whatsapp: whatsapp})
                }
            },
        },
        mounted(){
            this.allData()
        }
    }

</script>


<style scoped>
.lowerRow{
    display: flex;
    flex-direction: column;
    width: 50%!important;
    align-items: center;
    justify-content: center;
}
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
.logout{
    text-decoration: none;
    color: #FFFF;
    font-size: 22px;
    border: 1px #FFFF solid;
    padding: 5px;
    margin-top: 12%;
    margin-right: 36%;
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    
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


.card{
    background-color: #601430;
}

.Titulo{
    background-color: #601430;
    
}

.ImgUrl{
    width: 100px;
    height: 100px;
    margin: 10px;
}

</style>