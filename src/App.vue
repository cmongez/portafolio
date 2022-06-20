<template>
  <div id="app">
    
    <Particles />
    <router-view />
  </div>
</template>
<script>
import Particles from "@/components/Particles.vue";
export default {
  name: "App",
  components: {
    Particles,
  },
};
</script>
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
</style>
