<template>
  <section class="col-12 col-sm-10 col-md-9 container">
    <h2>Habilidades</h2>
    <p class="p-indent">
      Egrese del Bootcamp como Desarrollador de Aplicaciones Front End Trainee
      usando el stack de tecnologías y metodologías: 
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
      <li class="skillsList__item">GIT</li>
      <li class="skillsList__item">JavaScript</li>
      <li class="skillsList__item">POO</li>
      <li class="skillsList__item">API</li>
      <li class="skillsList__item">DOM</li>
      <li class="skillsList__item">Vue.js</li>
      <li class="skillsList__item">Vue Router</li>
      <li class="skillsList__item">Vuex</li>
    </ul>
    <div class="row d-flex justify-content-center">
      <img
        src="../assets/project-1.png"
        alt=""
        class="img-fluid col-11 col-sm-6 col-lg-4 mb-2"
      />
      <img
        src="../assets/project-2.png"
        alt=""
        class="img-fluid col-11 col-sm-6 col-lg-4 mb-2"
      />
      <img
        src="../assets/project-3.png"
        alt=""
        class="img-fluid col-11 col-sm-6 col-lg-4 mb-2"
      />
      <img
        src="../assets/project-4.png"
        alt=""
        class="img-fluid col-11 col-sm-6 col-lg-4 mb-2"
      />
      <img
        src="../assets/project-5.png"
        alt=""
        class="img-fluid col-11 col-sm-6 col-lg-4 mb-2"
      />
      <img
        src="../assets/project-6.png"
        alt=""
        class="img-fluid col-11 col-sm-6 col-lg-4 mb-2"
      />
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