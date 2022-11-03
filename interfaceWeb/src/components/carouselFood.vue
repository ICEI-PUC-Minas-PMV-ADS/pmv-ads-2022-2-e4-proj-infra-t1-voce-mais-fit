<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <p>Lista 1</p>
    </div>
    <div class="carousel-item">
      <p>Lista 2</p>
    </div>
    <div class="carousel-item">
      <p>Lista 3</p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
p{
    color: #FFFF;
    padding-top: 1%;
    font-size: 23px;
}
.carousel{
    display: flex;
    justify-content: center;
}
.carousel-control-prev{
    margin-top: 2%;
}
.carousel-control-next{
    margin-top: 2%;
}
.carousel-inner {
    margin-top: 2%;
    background-color: #222222;
    border-radius: 10px;
    position: relative;
    width: 98%;
    overflow: hidden;
    height: 200px;
}
</style>