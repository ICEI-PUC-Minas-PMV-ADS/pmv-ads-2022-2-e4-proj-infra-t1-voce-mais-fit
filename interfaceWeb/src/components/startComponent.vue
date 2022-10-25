<template>
  <div class="allContainer">
  <div class="container">
    <h2 id="firstTitle"> MAKE YOUR </h2>
    <h1 id="secondTitle"> BODY </h1>
  </div>
  </div>
</template>
<script>
export default {

};
</script>


<style scoped>

.allContainer {
box-sizing: border-box;
width: 100%vh;
height: 100vh;
background-color: #AB0139;

}

.container{
  position: absolute;
width: 475px;
height: 503px;
left: calc(50% - 475px/2 + 0.5px);
top: 398px;

border: 10px solid #FD0054;

}

#firstTitle {
color: #FAFAFA;
text-align: center;
font-size: 45px;
padding: 80px;

}

#secondTitle {
 color: #FAFAFA;
text-align: center;
font-size: 130px;
 

}

</style>