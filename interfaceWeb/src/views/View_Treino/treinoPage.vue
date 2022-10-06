<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Bem-vindo, Senhor @</h3>
      <md-button class="md-primary">
        <md-menu>
          <md-button md-menu-trigger>
            <md-avatar>
              <img
                src="https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9keWJ1aWxkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Avatar"
              />
              <md-tooltip md-menu-trigger>Top</md-tooltip>
            </md-avatar>
          </md-button>

          <md-menu-content>
            <md-menu-item
              ><md-button class="md-dense md-raised md-primary"
                >Editar perfil
              </md-button></md-menu-item
            >
            <md-menu-item
              ><md-button class="md-dense md-raised md-primary"
                >Sobre
              </md-button></md-menu-item
            >
            <md-menu-item
              ><md-button class="md-dense md-raised md-primary"
                >Sair
              </md-button></md-menu-item
            >
            <md-menu-item
              ><md-button class="md-dense md-raised md-primary"
                >Página Inicial
              </md-button></md-menu-item
            >
          </md-menu-content>
        </md-menu>
      </md-button>
    </md-toolbar>
    <div class="Topo">
      <div class="card-expansion">
        <div class="card mb-3 md-card" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="@/assets/funcional.jpg" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Funcional</h5>
                <p class="card-text">
                 Trata-se de um método de treino que utiliza exercícios que aprimoram nosso corpo para realização de um esporte ou de movimentos e funções do dia a dia, como agachar, correr, sentar, pular, empurrar ou carregar um objeto. 
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <button type="button" class="btn btn-success">Adicionar ao treino!</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 md-card" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="@/assets/LevantamentoDePeso.jpg"
                class="img-fluid rounded-start"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Levantamento de peso</h5>
                <p class="card-text">
                  Mais do que uma modalidade esportiva olímpica, o levantamento de peso olímpico (LPO) pode ser parte de um treinamento funcional importante para a saúde.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <button type="button" class="btn btn-success">Adicionar ao treino!</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 md-card" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="@/assets/Definiotion.jpg" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Definição</h5>
                <p class="card-text">
                  Uma preocupação comum aos iniciantes é achar que ao fazer um trabalho de hipertrofia, o treino para definição muscular vai deixá-los “grandes demais” ou “muito marombados”, na linguagem conhecida do mundo fitness.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <button type="button" class="btn btn-success">Adicionar ao treino!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Meio">
      <div>
        <md-steppers :md-active-step="active" md-vertical md-linear>
          <md-step
            id="first"
            md-label="First Step"
            md-description="Optional"
            :md-editable="false"
            :md-donev-model:propName="first"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <md-button
              class="md-raised md-primary"
              @click="setDone('first', 'second')"
              >Continue</md-button
            >
          </md-step>

          <md-step
            id="second"
            md-label="Second Step"
            :md-error="secondStepError"
            :md-editable="false"
            :md-donev-model:propName="second"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <md-button
              class="md-raised md-primary"
              @click="setDone('second', 'third')"
              >Continue</md-button
            >
            <md-button class="md-raised md-primary" @click="setError()"
              >Set error!</md-button
            >
          </md-step>

          <md-step
            id="third"
            md-label="Third Step"
            :md-editable="false"
            :md-donev-model:propName="third"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
              eius amet aliquid, illo minus blanditiis tempore, dolores voluptas
              dolore placeat nulla.
            </p>
            <md-button class="md-raised md-primary" @click="setDone('third')"
              >Done</md-button
            >
          </md-step>
        </md-steppers>
      </div>
    </div>

    <div class="fim">
      <h1>Aqui vem a footer</h1>
    </div>
  </div>
</template> 

<script>
export default {
  name: "StepperNonEditable",
  data: () => ({
    active: "first",
    first: false,
    second: false,
    third: false,
    secondStepError: null,
  }),
  methods: {
    setDone(id, index) {
      this[id] = true;

      this.secondStepError = null;

      if (index) {
        this.active = index;
      }
    },
    setError() {
      this.secondStepError = "This is an error!";
    },
  },
};
</script>

<style src="./Style_TP.css"></style>
