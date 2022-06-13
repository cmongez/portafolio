<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand d-sm-none" href="#">CMongez</a>
  <router-link class="navbar-brand d-none d-sm-inline" to="/home">César Mongez</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-center" >Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-center" href="#sobremi" >Sobre mi</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-center" href="#habilidades">Habilidades</a>
      </li>
    </ul>
    <span class="navbar-text text-center">
      Navbar text with an inline element
    </span>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>