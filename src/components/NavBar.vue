<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-lg-5 ">
    <div class="container px-4">
      <router-link class="navbar-brand d-sm-none"  to="/">CMongez</router-link>
    <router-link class="navbar-brand  ml-lg-5 d-none d-sm-inline" to="/"
      >César Mongez</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-lg-end mr-lg-5" id="navbarText">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link text-center"
            >Home<span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-center" href="#sobremi">Sobre mi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-center" href="#habilidades">Habilidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-center" href="#proyectos">Proyectos</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  background-color: #000814;
  padding-left:100px;
  padding-right:100px;
}
</style>