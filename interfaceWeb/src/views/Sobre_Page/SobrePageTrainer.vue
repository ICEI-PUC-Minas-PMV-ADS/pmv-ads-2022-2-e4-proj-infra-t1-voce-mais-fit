<template>
    <div>
        <headerComponent></headerComponent>
        
        <div class="allContainer">
            
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body" id="card-body-mod">
                            <h3 class="card-title" id="titulo3">OLÁ, CARO TREINADOR/USUÁRIO.</h3>
                            <p class="card-text">ESTE PROJETO FOI DESENVOLVIDO COMO UMA ATIVIDADE AVALIATIVA PARA A CONCLUSÃO DO 4º SEMESTRE DO CURSO DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS, PELA PUC-MINAS.</p>
                            <p>DENTRE AS VÁRIAS ESPECIFICAÇÕES QUE PODEM SER ENCONTRADAS NA DOCUMENTAÇÃO DO SITE, DESTACA-SE A UTILIZAÇÃO DO FRAMEWORK VUE.JS PARA O FRONT-END, DA TECNOLOGIA NODE PARA A CONSTRUÇÃO DE UMA API E UTILIZAÇÃO DO BANCO DE DADOS NÃO RELACIONAL MONGODB.</p>
                        </div>  
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body" id="card-body-mod">
                            <h3 class="card-title">ENTRE EM CONTATO</h3>
                            
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Digite seu Nome" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Digite seu Email" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected disabled>Motivo do Contato</option>
                                    <option value="1">Avaliação Positiva</option>
                                    <option value="2">Avaliação Negativa</option>
                                    <option value="3">Dúvida</option>
                                </select>
                            </div>
                            <div class="input-group mb-3">
                                <textarea class="comentario" name="comentario" cols="30" rows="10" placeholder="Digite seu Comentário aqui..."></textarea>
                            </div>
                            <button type="button" class="btn btn-light">Enviar</button>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card" id="card-carrousel">
                    <div class="card-body">
                        
                        <!--  CARROUSEL -->

                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner imgCarrousel">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="../../assets/carrouselImg/felipe.png" class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Felipe Mitre Costa</h5>
                                        <p><a href="https://www.linkedin.com/in/felipe-bohm-mitre-268b171a2/" target="_blank"><i class="ti ti-brand-linkedin"></i></a> <a href="https://github.com/lipebohmmitre" target="_blank"><i class="ti ti-brand-github"></i></a></p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="../../assets/carrouselImg/gabriel.png" class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Gabriel Ilidio</h5>
                                        <p><a href="https://www.linkedin.com/in/gabriel-il%C3%ADdio-8aa54b86/" target="_blank"><i class="ti ti-brand-linkedin"></i></a> <a href="https://github.com/gilidio8" target="_blank"><i class="ti ti-brand-github"></i></a></p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/carrouselImg/iann.png" class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Iago Iann</h5>
                                        <p><a href="https://www.linkedin.com/in/iago-iann-b760311a6/" target="_blank"><i class="ti ti-brand-linkedin"></i></a> <a href="https://github.com/IagoIann" target="_blank"><i class="ti ti-brand-github"></i></a></p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/carrouselImg/joao.png" class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>João Sena</h5>
                                        <p><a href="https://www.linkedin.com/in/jo%C3%A3o-sena-57489b11b/   " target="_blank"><i class="ti ti-brand-linkedin"></i></a> <a href="https://github.com/joaosena19" target="_blank"><i class="ti ti-brand-github"></i></a></p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/carrouselImg/victor.png" class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Victor Santos</h5>
                                        <p><a href="https://www.linkedin.com/in/victor-santos-a6b3491a2/" target="_blank"><i class="ti ti-brand-linkedin"></i></a> <a href="https://github.com/VictorLopes1010" target="_blank"><i class="ti ti-brand-github"></i></a></p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../../assets/carrouselImg/yuri.png" class="d-block w-100" alt="...">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Yuri Witer</h5>
                                        <p><a href="https://www.linkedin.com/in/yuri-witer-12aba9181/" target="_blank"><i class="ti ti-brand-linkedin"></i></a> <a href="https://github.com/YuriWiter-dev" target="_blank"><i class="ti ti-brand-github"></i></a></p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <!--  CARROUSEL END  -->

                    </div>
                </div>

            </div>
        
        <footerComponent></footerComponent>
    </div>
    

</template>


<script>

    import headerComponent from '@/components/trainerComponents/headerComponenTrainer.vue'
    import footerComponent from '@/components/footerComponent.vue'


    export default{
        components: {
            headerComponent,
            footerComponent,
        },
        data(){
            return{
                imgIann: require("../../assets/carrouselImg/iann.png"),
                imgFelipe: require("../../assets/carrouselImg/felipe.png"),
                imgGabriel: require("../../assets/carrouselImg/gabriel.png"),
                imgJoao: require("../../assets/carrouselImg/joao.png"),
                imgVictor: require("../../assets/carrouselImg/victor.png"),
                imgYuri: require("../../assets/carrouselImg/yuri.png"),
                imgVoid: "",
            }
        },
        methods:{

        },     
    }

</script>
    

<style scoped>
    #titulo3{
        margin-bottom: 4%;
    }
    h5{
        color: #FFFF;
    }
    .carousel-dark .carousel-indicators [data-bs-target] {
    background-color: #FFFF!important;
    }
    .carousel-dark .carousel-control-next-icon, .carousel-dark .carousel-control-prev-icon {
     filter: none
    }   
    .allContainer{
        display: flex;
        flex-direction: column;
        background-color: #601430;
    }

    .card-body{
        background-color: #601430;
        color:azure;
        
    }

    #card-body-mod{
        height: 550px;
    }

    .card{
        background-color: #601430;
    }

    .comentario{
        width: 100%;
    }

    .row{
        margin-top: 25px;
    }

    .imgCarrousel{
        width: 350px;
    }
  
    #card-carrousel{
        align-items: center;
    }
    

    #exampleModalLabel{
        color: black
    }

</style>