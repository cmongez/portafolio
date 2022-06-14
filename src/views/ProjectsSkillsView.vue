<template>
  <section id="habilidades" class="col-12 col-sm-10 col-md-9 container-fluid p-0">
    <div class="container-fluid">
      <h2>Habilidades</h2>
    <p class="p-indent">
      Egresé del Bootcamp como Desarrollador de Aplicaciones Front End Trainee
      usando el siguiente stack de tecnologías y metodologías:
    </p>
    <ul
      class="
        skillsList
        d-flex
        justify-content-start
        align-items-center
        p-2 p-md-4
        flex-wrap
      "
    >
      <li class="skillsList__item btn">HTML</li>
      <li class="skillsList__item">CCS</li>
      <li class="skillsList__item">Bootstrap</li>
      <li class="skillsList__item">Metodología BEM</li>
      <li class="skillsList__item">SASS</li>
      <li class="skillsList__item">Git</li>
      <li class="skillsList__item">JavaScript</li>
      <li class="skillsList__item">POO</li>
      <li class="skillsList__item">API</li>
      <li class="skillsList__item">DOM</li>
      <li class="skillsList__item">Vue.js</li>
      <li class="skillsList__item">Vue Router</li>
      <li class="skillsList__item">Vuex</li>
    </ul>
    </div>
    
    <div class="row d-flex align-items-center justify-content-center">
      <h2 class="col-12 px-4">Proyectos</h2>
      <div class="col-12 col-sm-6 col-lg-4 p1">
        <div class="card mb-2">
          <img
            src="../assets/project-3.png"
            class="card-img-top bg-dark"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">TecniShop</h5>
            <p class="card-text">
              Practica de metodología BEM, diseño responsive e importación de
              fuentes.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
              HTML - CSS - BEM - Responsive
            </li>
          </ul>
          <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
            <a href="https://cmongez.github.io/tecnishop/" target="_blank">
              <button class="hero__button btn btn-v-primary btn-warning">
                Ver Demo
              </button></a
            >
            <a href="https://github.com/cmongez/tecnishop" target="_blank">
              <button class="hero__button btn btn-v-secondary btn-dark m-1 p-1">
                Ir a GitHub
              </button></a
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 p1">
        <div class="card  mb-2">
          <img
            src="../assets/project-2.png"
            class="card-img-top bg-dark"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">Star Wars Responsive</h5>
            <p class="card-text">
              Practica de diseño responsive y mobile first.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
              HTML - CSS - Bootstrap - Responsive
            </li>
          </ul>
          <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
            <a
              href="https://cmongez.github.io/star-wars-responsive/"
              target="_blank"
            >
              <button class="hero__button btn btn-v-primary btn-warning">
                Ver Demo
              </button></a
            >
            <a
              href="https://github.com/cmongez/star-wars-responsive"
              target="_blank"
            >
              <button class="hero__button btn btn-v-secondary btn-dark m-1 p-1">
                Ir a GitHub
              </button></a
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4  p1">
        <div class="card mb-2">
          <img
            src="../assets/project-1.png"
            class="card-img-top bg-dark"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">Libreria Digital</h5>
            <p class="card-text">
              Mi primera práctica realizando una pagina web completa.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">HTML - CSS</li>
          </ul>
          <div class="card-body d-flex flex-wrap justify-content-center align-items-center">
            <a
              href="https://cmongez.github.io/libreria-digital/"
              target="_blank"
            >
              <button class="hero__button btn btn-v-primary btn-warning">
                Ver Demo
              </button></a
            >
            <a
              href="https://github.com/cmongez/libreria-digital"
              target="_blank"
            >
              <button class="hero__button btn btn-v-secondary btn-dark m-1 p-1">
                Ir a GitHub
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSkillsView",
};
</script>

<style lang="scss" scoped>

.skillsList {
  &__item {
    list-style: none;
    padding: 10px;
    color: #3d3d3d;
    border: 1px;
    background-color: #ffc300;
    border-radius: 15px;
    margin: 5px;
    font-weight: bold;
  }
}
</style>