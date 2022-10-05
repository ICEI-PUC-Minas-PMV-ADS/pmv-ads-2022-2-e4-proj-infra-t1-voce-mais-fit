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
      <div class=" card-expansion">
        <md-card>
          <md-card-media class="foto_card"> 
            <img  src="@/assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" 
              alt="People">
               
          </md-card-media>

          <md-card-header>
            <div class="md-title">Costas</div>
            <div class="md-subhead">Puxada frontal</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button>Adicionar ao treino</md-button>
              </div>

              <md-card-expand-trigger>
                <md-button>Saiba mais</md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                itaque ea, nostrum odio. Dolores, sed accusantium quasi non,
                voluptas eius illo quas, saepe voluptate pariatur in deleniti
                minus sint. Excepturi.
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
        <md-card>
          <md-card-media class="foto_card">
             <img  src="@/assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" 
              alt="People"
            /> 
          </md-card-media>

          <md-card-header>
            <div class="md-title">Costas</div>
            <div class="md-subhead">Puxada frontal</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button>Adicionar ao treino</md-button>
              </div>

              <md-card-expand-trigger>
                <md-button>Saiba mais</md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                itaque ea, nostrum odio. Dolores, sed accusantium quasi non,
                voluptas eius illo quas, saepe voluptate pariatur in deleniti
                minus sint. Excepturi.
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
        <md-card>
          <md-card-media class="foto_card">
             <img
               src="@/assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" 
              alt="People"
            />
          </md-card-media>

          <md-card-header>
            <div class="md-title">Costas</div>
            <div class="md-subhead">Puxada frontal</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button>Adicionar ao treino</md-button>
              </div>

              <md-card-expand-trigger>
                <md-button>Saiba mais</md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                itaque ea, nostrum odio. Dolores, sed accusantium quasi non,
                voluptas eius illo quas, saepe voluptate pariatur in deleniti
                minus sint. Excepturi.
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
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

<style scoped>
.Topo {
  height: 400px;
  display: auto;
  align-content: grid;
  background-color: brown;
}
.card-expansion {
  padding: 25px 50px 75px 100px;
  align-items: flex-start;
  margin: 0px 20px 30px 60px;
}

.md-card {
  width: 700px;
  display: inline-block;
  align-content: space-between;
  vertical-align: inherit; 
  margin: 10px 10px 10px 10px;
 /*  flex-direction: inherit; */
 
}
.Meio {
  padding: 25px 50px 75px 100px;
  align-content: inline;
  height: 500px;
  background-color: orange;
}
.md-button {
  width: 500px;
}
.foto_card{
  
  background-repeat: no-repeat, repeat;
}
.fim {
  height: 500px;
  background-color: purple;
}

</style>
