<template>
  <div>
    <NavBar />
    <HomeView />
    <Footer />
 </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HomeView from '@/views/HomeView.vue'
import Footer from '@/components/Footer.vue'
export default {
name:'LayoutView',
components:{
  NavBar,
  HomeView,
  Footer,
}
}
</script>

<style>

</style>