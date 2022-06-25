<template>
  <section
    id="habilidades"
    class="col-12 col-sm-10 col-md-9 container-fluid p-0"
  >
    <div class="container-fluid">
      <h2>Habilidades</h2>
      <p class="p-indent">
        He desarrollado implementando la metodologia BEM, metodologias ágiles,
        consumo de API mediante Fetch y Axios, manejo del DOM, POO. En el stack
        de tecnologias con las que desarrollo se encuentran:
      </p>
      <i class="text-warning">*Puedes filtrar por tecnologias*</i>
      <div
        class="
          skillsList
          skills
          d-flex
          justify-content-start
          align-items-center
          p-2 mt-2
          flex-wrap
        "
      >
        <article class="skills__container mb-5">
          <section class="skills__skill" @click="skillsFilter('HTML')">
            <i class="devicon-html5-plain colored skills__skill__icon"></i>

            HTML
          </section>

          <section class="skills__skill" @click="skillsFilter('CSS')">
            <i class="devicon-css3-plain colored skills__skill__icon"></i>

            CSS
          </section>

          <section class="skills__skill" @click="skillsFilter('JavaScript')">
            <i class="devicon-javascript-plain colored skills__skill__icon"></i>

            JavaScript
          </section>

          <section class="skills__skill" @click="skillsFilter('Bootstrap')">
            <i class="devicon-bootstrap-plain colored skills__skill__icon"></i>

            Bootstrap
          </section>

          <section class="skills__skill" @click="skillsFilter('SASS')">
            <i class="devicon-sass-original colored skills__skill__icon"></i>

            SASS
          </section>

          <section class="skills__skill" @click="skillsFilter('Git')">
            <i class="devicon-git-plain colored skills__skill__icon"></i>
            GIT
          </section>

          <section class="skills__skill" @click="skillsFilter('GitHub')">
            <i class="devicon-github-original colored skills__skill__icon"></i>

            GitHub
          </section>

          <section class="skills__skill" @click="skillsFilter('Vue')">
            <i class="devicon-vuejs-plain colored skills__skill__icon"></i>

            Vue
          </section>
          <section class="skills__skill" @click="skillsFilter('Vuex')">
            <i class="devicon-vuejs-plain colored skills__skill__icon"></i>

            Vuex
          </section>
          <section class="skills__skill" @click="skillsFilter('')">
            <i class="devicon-canva-original colored skills__skill__icon"></i>

            Canva
          </section>
           <section class="skills__skill" @click="skillsFilter('')">

            Todos
          </section>
        </article>
      </div>
    </div>

    <div
      id="proyectos"
      class="
        container-fluid
        row
        d-flex
        align-items-stretch
        justify-content-between
        m-0
        mb-5
      "
    >
      <h2 class="col-12 p-0">Proyectos <span v-show="projectsSubtitleBoolean"> {{ projectsSubtitle }}</span></h2>
      <div
        v-for="item in getSkillsFilter"
        :key="item.id"
        class="crecer col-12 col-sm-6 col-lg-6 p-2"
      >
        <div class="card mb-2">
          <img
            :src="require(`../assets/${item.img}`)"
            class="card-img-top bg-dark"
            alt="..."
          />
          <div class="card-body flex-grow-2">
            <h5 class="card-title text-center">{{ item.name }}</h5>
            <p class="card-text flex-grow-3">
              {{ item.description }}
            </p>
          </div>
          <ul class="list-group list-group-flush flex-grow-2">
            <li class="list-group-item text-center">
              {{ item.technologies }}
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
      projectsFilter: [],
      projectsSubtitle: "",
      projectsSubtitleBoolean:false
    };
  },
  computed: {
    getSkillsFilter() {
      return this.projectsFilter;
    },
  },
  methods: {
    async getData() {
      this.projects = await getProjects();
      this.projects = this.projects.reverse();
    },
    skillsFilter(skill) {
      skill !== "" ? this.projectsSubtitleBoolean = true : this.projectsSubtitleBoolean = false;
      this.projectsSubtitle = ` que incluyen ${skill}`
      this.projectsFilter = this.projects.filter((item) => {

        return item.technologies.match(skill);
      });
    },
  },
  async created() {
    await this.getData();
    await this.skillsFilter("");
  },
};
</script>

<style lang="scss" scoped>
.crecer {
  display: flex;
  align-items: stretch;
}

.skills {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
  }
  &__skill {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 95px;
    height: 95px;
    background-color: #2a2f4c;
    font-size: 0.95rem;
    border-radius: 1em;
    color: #bdbddd;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    &__icon {
      font-size: 2rem;
    }
  }
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
//MEDIAQUERIES
@media screen and (min-width: 1000px) {
  .skills {
    &__container {
      margin-bottom: 3.5em;
      margin-left: auto;
      margin-right: auto;
    }
    &__skill {
      transform: translateY(0);
      transition: transform 0.35;
      &:hover {
        transform: translateY(-8px);
        transition: transform 0.35s;
      }
    }
  }
}
</style>