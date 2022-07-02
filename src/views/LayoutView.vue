<template>
  <div>
    <NavBar />
    <router-view  />
    <GoUp />
    <Footer />
 </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import GoUp from '@/components/GoUp.vue'
export default {
name:'LayoutView',
components:{
  NavBar,
  Footer,
  GoUp
}
}
</script>

<style lang="scss" scoped>


</style>