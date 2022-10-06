<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Bem-vindo, Senhor @</h3>
      <md-button>Refresh</md-button>
      <md-button class="md-primary">
        <md-avatar>
          <img
            src="https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9keWJ1aWxkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Avatar"
          />
          <md-tooltip md-direction="top">Top</md-tooltip>
        </md-avatar>
      </md-button>
    </md-toolbar>
    <body>
      <section class="header-site">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1 class="text-center">Faça ela se arrepender!</h1>
              <p class="lead text-center">
                Série feita para pessoas que buscam crescimento acelerado
              </p>
              <p class="text-center">
                <md-button
                  href="/treinoPage"
                  class="md-dense md-raised md-accent"
                  >Ir!
                </md-button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="content-site">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1 class="text-center">Alimentação, 50% do processo</h1>
              <p class="lead text-center">
                Escolha o que mais combina com você!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="thumbnail">
                <img src="@/assets/buking.jpg" />
                <div class="caption text-center">
                  <h3>Bulking</h3>
                  <p>
                    O bulking é a primeira fase do processo de hipertrofia que
                    consiste no aumento do consumo de calorias, durante 4 a 6
                    meses, para facilitar o ganho de peso e de massa muscular.
                    Este processo é praticado principalmente por fisiculturistas
                    e atletas de alta performance
                  </p>
                  <md-button
                    href="/treinoPage"
                    class="md-dense md-raised md-primary"
                    >Ir!
                  </md-button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="thumbnail">
                <img src="@/assets/cutting.jpg" />
                <div class="caption text-center">
                  <h3>Cutting</h3>
                  <p>
                    É um processo para a redução da gordura corporal (bodyfat –
                    BF) tendo como objetivo principal a definição muscular. O
                    melhor resultado de cutting é perder gordura mantendo a
                    massa muscular magra. Geralmente é feito após o período de
                    bulking
                  </p>
                  <md-button
                    href="/treinoPage"
                    class="md-dense md-raised md-primary"
                    >Ir!
                  </md-button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="thumbnail">
                <img src="@/assets/Dieta.jpg" />
                <div class="caption text-center">
                  <h3>Faça você mesmo!</h3>
                  <p>Monte você mesmo a sua dieta.</p>
                  <md-button
                    href="/treinoPage"
                    class="md-dense md-raised md-primary"
                    >Ir!
                  </md-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="img-site">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1 class="text-center">Sem as manha não entra não!</h1>
              <p class="lead text-center">Que tal encontrar um profissional?</p>
              <md-button
                href="/treinoPage"
                class="md-dense md-raised md-primary" id="btn_treinador"
                >Ir!
              </md-button>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-site">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <p class="text-center">marusvado</p>
            </div>
          </div>
        </div>
      </section>
    </body>
  </div>
</template>
<script src="./effect.js">
</script>


<style scoped src="./Style_VU.css"></style>