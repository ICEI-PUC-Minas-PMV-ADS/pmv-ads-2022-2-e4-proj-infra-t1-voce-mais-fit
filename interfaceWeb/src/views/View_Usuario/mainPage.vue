<template>
  <div>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Bem-vindo, Senhor @</h3>
      <md-button>Refresh</md-button>
      <md-button class="md-primary">
        <md-avatar>
          <img src="https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9keWJ1aWxkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Avatar" />
          <md-tooltip md-direction="top">Top</md-tooltip>
        </md-avatar>
      </md-button>
    </md-toolbar>
    <div class="Topo">
      <md-card>
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="16:9">
            <img
              src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Skyscraper"
            />
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">Gradient background</span>
              <span class="md-subhead">16/9 image</span>
            </md-card-header>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
      <md-card>
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="16:9">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Skyscraper"
            />
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">Gradient background</span>
              <span class="md-subhead">16/9 image</span>
            </md-card-header>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
      <md-card>
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="16:9">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Skyscraper"
            />
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">Gradient background</span>
              <span class="md-subhead">16/9 image</span>
            </md-card-header>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
    <div class="Meio">
      <md-field>
        <label>Insira</label>
        <md-input v-model="withLabel" placeholder="os carboidratos"></md-input>
      </md-field>

      <md-field>
        <label>Insira</label>
        <md-input v-model="withLabel" placeholder="proteinas"></md-input>
      </md-field>
      <md-field>
        <label>Insira</label>
        <md-input v-model="withLabel" placeholder="gorduras"></md-input>
      </md-field>
      <md-field>
        <label>Insira</label>
        <md-input v-model="withLabel" placeholder="Kcal"></md-input>
      </md-field>
      <md-button class="md-raised md-primary">Adicionar Alimento</md-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>


<style scoped>
.Topo {
  margin-top: 5%;
  margin-left: 30%;
  display: flex;
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.Meio {
  align-content: inline;
  margin: 10%;
}
</style>