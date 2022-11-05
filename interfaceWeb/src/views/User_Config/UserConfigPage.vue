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
                </div> 
                    <div class="lowerRow">                  
                        <div class="col-6" >
                            <h3 id="Titulo">Dados do Perfil</h3>
                            <label class="mb-1">Altura: {{altura}}</label>
                            <br>
                            <div class="stealth" v-if="displayAltura">
                                <input id="inputForm" placeholder="Digite o nome que deseja alterar" type="text" class="input_default form-control requiredName" v-model="userAlt" />
                                <p class="p-waring" v-if="verificaAlt">Deve digitar a altura para atualizar</p>
                                <button type="button" class="btn btn-light" @click="verificaDadoAlt">Atualizar</button>
                            </div>
                            <button type="button" class="btn btn-light" @click="AlteraDisplayAlt">{{ ButtonAlt }}</button>                   
                        </div>
                        <div class="col-6" >
                                <label class="mb-1">Peso: {{peso}}</label>
                                <br>
                                <div class="stealth" v-if="displayPeso">
                                    <input id="inputForm" placeholder="Digite o nome que deseja alterar" type="text" class="input_default form-control requiredName" v-model="userPeso" />
                                    <p class="p-waring" v-if="verificaPeso">Deve digitar a altura para atualizar</p>
                                    <button type="button" class="btn btn-light" @click="verificaDadoPeso">Atualizar</button>
                                </div>
                                <button type="button" class="btn btn-light" @click="AlteraDisplayPeso">{{ ButtonAlt }}</button>                   
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
    import headerComponent from '@/components/headerComponent.vue'
    import footerComponent from '@/components/footerComponent.vue'

    export default {
        components: {
            headerComponent,
            footerComponent,
        },
        data(){
            return{
                imgUrl: "https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=2000",
                
                allData:[],
                allDataGyn:[],
                email:"",
                senha:"",
                nome:"",
                altura:"",
                peso:"",
                gyngoerId:"",

                displayNome: false,
                displayEmail: false,
                displaySenha: false,
                displayAltura: false,
                displayPeso: false,
                displayImg: false,

                verificaNome: false,
                verificaEmail: false,
                verificaSenha: false,
                verificaAlt: false,
                verificaPeso: false,
                verificaImg: false,

                ButtonName: "Alterar",
                ButtonEmail: "Alterar",
                ButtonSenha: "Alterar",
                ButtonAlt: "Alterar",
                ButtonPeso: "Alterar",
                ButtonImg: "Alterar",

                userName: "",
                userEmail: "",
                userSenha: "",
                userAlt : "",
                userPeso: "",
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
            AlteraDisplayPeso(){
                this.displayPeso = !this.displayPeso;
                if(this.displayPeso)
                    this.ButtonPeso = "Cancelar"
                else
                    this.ButtonPeso = "ALterar"
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
                else
                    alert("Nome foi atualizado com suceso")
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
            },
            verificaDadoAlt(){
                let alt = this.userName;
                if(alt == "")
                    this.verificaAlt = true;
                else
                    alert("Altura alterada com sucesso");
            },
            verificaDadoPeso(){
                let peso = this.userPeso;
                if(peso == "")
                    this.verificaPeso = true;
                else
                    alert("Peso alterado com sucesso");
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
            getData(){
                this.id = localStorage.getItem('UserId')
                var idNoAs = this.id.replace(/"/g, '');
                HTTP.get(`user/${idNoAs}`)
                .then((res) => {
                    this.allData = res.data
                    this.email = this.allData.email
                    this.senha = this.allData.password
                    this.gyngoerId = this.allData.gymgoerInfo
                    this.getGynData()
                })
                .catch((error) => {
                    console.log(error)
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
            }
        },
        mounted(){
            this.getData()
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