<template>
  <section
    id="habilidades"
    class="col-12 col-sm-10 col-md-9 container-fluid p-0"
  >
    <div class="container-fluid">
      <h2>Habilidades</h2>
      <p class="p-indent">
        Egresé del Bootcamp como Desarrollador de Aplicaciones Front End usando
        el siguiente stack de tecnologías y metodologías:
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
        <li class="skillsList__item">HTML</li>
        <li class="skillsList__item">CCS</li>
        <li class="skillsList__item">Metodología BEM</li>
        <li class="skillsList__item">Bootstrap</li>
        <li class="skillsList__item">SASS</li>
        <li class="skillsList__item">Git</li>
        <li class="skillsList__item">GitHub</li>
        <li class="skillsList__item">JavaScript</li>
        <li class="skillsList__item">POO</li>
        <li class="skillsList__item">API</li>
        <li class="skillsList__item">DOM</li>
        <li class="skillsList__item">Vue.js</li>
        <li class="skillsList__item">Vue Router</li>
        <li class="skillsList__item">Vuex</li>
      </ul>
    </div>

    <div
      id="proyectos"
      class="
        container-fluid
        row
        d-flex
        align-items-stretch
        justify-content-center
        m-0
      "
    >
      <h2 class="col-12 p-0">Proyectos</h2>
      <div
        v-for="item in projects"
        :key="item.id"
        class="crecer col-12 col-sm-6 col-lg-6 p-2 p-sm-3"
      >
        <div class="card mb-2">
          <img
            :src="require(`../assets/${item.img}`)"
            class="card-img-top bg-dark"
            alt="..."
          />
          <div class="card-body flex-grow-2">
            <h5 class="card-title text-center">{{item.name}}</h5>
            <p class="card-text flex-grow-3">
              {{item.description}}
            </p>
          </div>
          <ul class="list-group list-group-flush flex-grow-2">
            <li class="list-group-item text-center">
              {{item.technologies}}
            </li>
          </ul>
          <div
            class="
              card-body
              d-flex
              flex-wrap
              justify-content-center
              align-items-center
              flex-grow-0
            "
          >
            <a :href="item.demo" target="_blank">
              <button class="hero__button btn btn-v-primary btn-warning">
                Ver Demo
              </button></a
            >
            <a :href="item.repository" target="_blank">
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
import { getProjects } from "@/api/projects.js";
getProjects();
export default {
  name: "ProjectsSkillsView",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    async getData() {
      this.projects = await getProjects();
      this.projects = this.projects.reverse();
      console.log("prueba", this.projects);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.crecer {
  display: flex;
  align-items: stretch;
}

.skillsList {
  &__item {
    list-style: none;
    padding: 10px;
    color: #3d3d3d;
    border: 1px;
    background-color: #fcdf7f;
    margin: 5px;
    font-weight: 500;
  }
}

.card-img-top:hover {
  filter: opacity(0.8);
}
</style>