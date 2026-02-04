<template>
  <section id="habilidades" class="col-12 col-sm-10 col-md-9 container-fluid p-0">
    <div class="container-fluid">
      <h2>Habilidades</h2>
      <p class="p-indent">
        Full Stack Developer con especialización en arquitecturas GIS y soluciones Fintech. Experiencia comprobada integrando sistemas geoespaciales complejos (PostGIS, Mapbox) y desarrollando dashboards de inteligencia financiera escalables. Dominio de Stack MERN/PERN, Python (FastAPI), TypeScript y metodologías Agile para entrega continua de valor en entornos Enterprise.
      </p>
      <i class="text-warning">*Puedes filtrar por tecnologias*</i>
      <div class="skillsList skills d-flex justify-content-start align-items-center p-2 mt-2 flex-wrap">
        <article class="skills__container new-style mb-5">
          <!-- HTML -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('HTML')">
            <i class="devicon-html5-plain colored skills__skill__icon"></i>
            HTML
          </a>

          <!-- CSS -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('CSS')">
            <i class="devicon-css3-plain colored skills__skill__icon"></i>
            CSS
          </a>

          <!-- JavaScript -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('JavaScript')">
            <i class="devicon-javascript-plain colored skills__skill__icon"></i>
            JavaScript
          </a>

          <!-- TypeScript -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('TypeScript')">
            <i class="devicon-typescript-plain colored skills__skill__icon"></i>
            TypeScript
          </a>

          <!-- Python -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Python')">
            <i class="devicon-python-plain colored skills__skill__icon"></i>
            Python
          </a>

          <!-- Java -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Java')">
            <i class="devicon-java-plain colored skills__skill__icon"></i>
            Java
          </a>

          <!-- React -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('React')">
            <i class="devicon-react-original colored skills__skill__icon"></i>
            React
          </a>

          <!-- Next.js -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Next.js')">
            <i class="devicon-nextjs-original colored skills__skill__icon"></i>
            Next.js
          </a>

          <!-- Vue -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Vue')">
            <i class="devicon-vuejs-plain colored skills__skill__icon"></i>
            Vue
          </a>

          <!-- Vuex -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Vuex')">
            <i class="devicon-vuejs-plain colored skills__skill__icon"></i>
            Vuex
          </a>

          <!-- Redux -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Redux')">
            <i class="devicon-redux-original colored skills__skill__icon"></i>
            Redux
          </a>

          <!-- Node.js -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Node')">
            <i class="devicon-nodejs-plain colored skills__skill__icon"></i>
            Node.js
          </a>

          <!-- PostgreSQL -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('PostgreSQL')">
            <i class="devicon-postgresql-plain colored skills__skill__icon"></i>
            PostgreSQL
          </a>

          <!-- SQL Server -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('SQL Server')">
            <i class="devicon-microsoftsqlserver-plain colored skills__skill__icon"></i>
            SQL Server
          </a>

          <!-- MySQL -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('MySQL')">
            <i class="devicon-mysql-plain colored skills__skill__icon"></i>
            MySQL
          </a>

          <!-- AWS -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('AWS')">
            <i class="devicon-amazonwebservices-original colored skills__skill__icon"></i>
            AWS
          </a>

          <!-- Azure -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Azure')">
            <i class="devicon-azure-plain colored skills__skill__icon"></i>
            Azure
          </a>

          <!-- Bootstrap -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Bootstrap')">
            <i class="devicon-bootstrap-plain colored skills__skill__icon"></i>
            Bootstrap
          </a>

          <!-- Material UI -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Material')">
            <i class="devicon-materialui-plain colored skills__skill__icon"></i>
            Material
          </a>

          <!-- SASS -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('SASS')">
            <i class="devicon-sass-original colored skills__skill__icon"></i>
            SASS
          </a>

          <!-- Git -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('Git')">
            <i class="devicon-git-plain colored skills__skill__icon"></i>
            GIT
          </a>

          <!-- GitHub -->
          <a href="#proyectos" class="skills__skill" @click="skillsFilter('GitHub')">
            <i class="devicon-github-original colored skills__skill__icon"></i>
            GitHub
          </a>

          <a href="#proyectos" class="skills__skill" @click="skillsFilter('')">Todos</a>
        </article>
      </div>
    </div>

    <div id="proyectos" class="projects container-fluid row d-flex align-items-stretch justify-content-around m-0 mb-5">
      <h2 class="projects__subtitle col-12 p-0">
        Proyectos
        <span v-show="projectsSubtitleBoolean"> {{ projectsSubtitle }}</span>
      </h2>
      <div v-for="item in getSkillsFilter" :key="item.id" class="projects__list p-2">
        <div class="projects__card d-flex flex-column mb-2">
          <a :href="item.demo" target="_blank"
            ><img :src="require(`../assets/${item.img}`)" alt="..." class="img-fluid"
          /></a>
          <div class="h-100 d-flex flex-column justify-content-between">
            <div class="projects__card__info">
              <h5 class="projects__card__info__title text-center">
                {{ item.name }}
              </h5>
              <p class="projects__card__info__paragraph">
                {{ item.description }}
              </p>
            </div>
            <ul class="projects__card__technologies">
              <li class="projects__card__technologies__item text-center">
                {{ item.technologies }}
              </li>
            </ul>
            <div class="projects__card__buttons mt-3 mb-3 d-flex flex-wrap justify-content-center align-items-center">
              <a v-if="item.demo" :href="item.demo" target="_blank">
                <button class="hero__button btn btn-v-primary btn-warning">Ver Demo</button></a
              >
              <a v-if="item.repository" :href="item.repository" target="_blank">
                <button class="hero__button btn btn-v-secondary">Ir a GitHub</button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getProjects } from '@/api/projects.js';
import { db } from '@/config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
getProjects();
export default {
  name: 'ProjectsSkillsView',
  data() {
    return {
      projects: [],
      projectsFilter: [],
      projectsSubtitle: '',
      projectsSubtitleBoolean: false,
    };
  },
  computed: {
    getSkillsFilter() {
      return this.projectsFilter;
    },
  },
  methods: {
    async getData() {
      const data = await getDocs(collection(db, 'projects'));
      data.forEach((doc) => this.projects.push(doc.data()));

      // Featured projects (Source of truth: Next.js v2)
      this.projects.push({
        id: 100,
        name: 'NVIRO — Sistema de Gestión Geoespacial',
        description: 'Arquitectura GIS completa integrando PostgreSQL/PostGIS, mapas interactivos (Mapbox/Leaflet) y visualización satelital (GeoTIFF). Desarrollo de aplicaciones móviles offline-first en React Native para captura de datos ambientales en terreno.',
        technologies: 'React, React Native, TypeScript, Node.js, PostgreSQL, PostGIS, Mapbox, Leaflet, AWS',
        img: 'nviro.png',
        demo: null,
        repository: null
      });

      this.projects.push({
        id: 99,
        name: 'Agrosuper — Suite de Inteligencia Financiera & Dashboard Corporativo',
        description: 'Construcción de un Dashboard integral con React para la visualización dinámica de indicadores. El sistema centraliza datos mediante APIs en Python (FastAPI) y SQL Server, transformándolos en reportes de gestión interactivos y auditorías en tiempo real.',
        technologies: 'Python, FastAPI, React, Redux, SQL Server, Azure',
        img: 'agrosuper.jpeg',
        demo: null,
        repository: null
      });

      this.projects = this.projects
        .sort((a, b) => {
          return a.id - b.id;
        })
        .reverse();
    },
    skillsFilter(skill) {
      skill !== '' ? (this.projectsSubtitleBoolean = true) : (this.projectsSubtitleBoolean = false);
      this.projectsSubtitle = ` que incluyen ${skill}`;
      this.projectsFilter = this.projects.filter((item) => {
        return item.technologies.match(skill);
      });
    },
  },
  async created() {
    await this.getData();
    await this.skillsFilter('');
  },
};
</script>

<style lang="scss" scoped>
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
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
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
//MEDIAQUERIES SKILLS
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

//projects styles
.projects {
  &__list {
    width: 100%;
  }
  &__card {
    background-color: #2a2f4c;
    margin-bottom: 1.6em;
    border-radius: 1em;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin-left: auto;
    margin-right: auto;
    &__buttons {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      column-gap: 0.7em;
      font-size: 1.3rem;
    }

    &__info {
      padding: 1em;

      &__paragraph {
        text-align: justify;
        font-size: 0.8rem;
        line-height: 1.4em;
        color: #bdbddd;
        background-color: #2a2f4c;
      }
      &__title {
        margin-top: 0;
        font-size: 1rem;
        color: #fff;
      }
    }
    &__technologies {
      max-width: 85%;
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      font-size: 0.8rem;
      gap: 0.7em;
      color: #bdbddd;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

@media screen and (min-width: 350px) {
  .projects {
    &__list {
      max-width: 350px;
    }
    &__card__technologies {
      gap: 0.9em;
    }
  }
}

@media screen and (min-width: 600px) {
  .projects__list {
    max-width: 310px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.3em;
  }
}

@media screen and (min-width: 800px) {
  .projects__card__technologies {
    max-width: 80%;
  }
}

@media screen and (min-width: 1000px) {
  .projects {
    &__list {
      gap: 1.5em;
      max-width: 310px;
      transform: translateY(0);
      transition: -webkit-transform 0.35s;
      transition: transform 0.35s;
      &:hover {
        transform: translateY(-10px);
        transition: transform 0.35s;
      }
    }
    &__card {
      &__buttons {
        font-size: 1.44rem;
      }
      &__info__title {
        font-size: 1.2rem;
      }
      &__info__paragraph {
        font-size: 0.86rem;
      }
    }
  }
}
</style>