<template>
  <div id="app">
    <vue-particles
    class="particles__portfolio"
    color="#ffc300"
    :linesDistance="180"
    linesColor="#000000"
    :moveSpeed="4"
    :clickEffect="flase"
    
    ></vue-particles>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
$prueba: blue;
.p-indent {
  text-indent: 30px;
}
a {
  cursor: pointer;
}
body {
  background-color: #0c151d;
}
h1 {
  color: #f1f2f4;
}
h2 {
  color: #f1f2f4;
}
p,
li {
  color: #c2c6c9;
}
.btn {
  font-weight: 400;
}
.btn-v-primary {
  background-color: #ffc300;
  color: #2e2e2e;
  border: 0;
}
.btn-v-secondary {
  background: #171f26;
  color: #a3abb2;
}
.card-text,
.list-group-item {
  color: #3d3d3d;
}
.particles__portfolio{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
