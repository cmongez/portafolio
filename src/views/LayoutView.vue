<template>
  <div>
    <NavBar />
    <Particles />
    <router-view />
    <Footer />
 </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Particles from '@/components/Particles.vue';
export default {
name:'LayoutView',
components:{
  NavBar,
  Footer,
  Particles
}
}
</script>

<style>

</style>