<template>
  <div id="app">
    
    <Particles />
    <router-view />
  </div>
</template>
<script>
import Particles from "@/components/particles/Particles.vue";
export default {
  name: "App",
  components: {
    Particles,
  },
};
</script>
<style lang="scss">

// variables
$my-primary: #23283e;
$my-secondary: #f1f2f4 ;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
html{
  scroll-behavior: smooth;
}

.p-indent {
  text-indent: 30px;
}
a {
  cursor: pointer;
}
body {
  width: 100%;
  background-color: $my-primary;
  position: relative;
}

h1 {
  color: $my-secondary;
}
h2 {
  color: $my-secondary;
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
@media screen and (min-width: 1500px) {
  #hero,#sobremi,#habilidades,#certificados {
  width: 1200px;
  }
  #app{
  width: 100%;
  }

}
</style>
