<template>
  <footer id="Contacto" class="bg-footer mt-5 container">
    <div class=" flex-column d-flex flex-md-row justify-content-center align-items-center">
      <hr>
      
      <p class="text-center col-12 col-md-4">Creado por <a href="https://github.com/cmongez/portafolio" target="_blank">César Mongez</a></p>
      <p class="title_8 text-center col-12 col-md-4">© Todos los derechos reservados 2022</p> 
      <SocialNetworks class="col-12 col-md-4" />
    </div>
  </footer>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks.vue'
export default {
    name:'Footer',
    components:{
      SocialNetworks
    }

}
</script>

<style>

</style>