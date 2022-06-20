<template>
  <div class="home d-flex justify-content-center align-items-center flex-column">
    
    <HeroView />
    <AboutMeView />
    <ProjectsSkillsView />
    

  </div>
</template>

<script>
// @ is an alias to /src
import HeroView from '@/views/HeroView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ProjectsSkillsView from '@/views/ProjectsSkillsView.vue'


export default {
  name: 'HomeView',
  components: {
    HeroView,
    AboutMeView,
    ProjectsSkillsView,
   
  }
}
</script>
