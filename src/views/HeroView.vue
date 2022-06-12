<template>
  <header class="container-fluid">
    <div class="row hero justify-content-center align-items-center mt-3 mt-md-5">
        <img class="img-fluid hero__img col-5 col-md-4 p-1" src="https://img.freepik.com/vector-gratis/lindo-perro-sacando-lengua-ilustracion-icono-dibujos-animados_138676-2709.jpg" alt="">
        <div class="d-flex flex-column justify-content-center align-items-center ">
            <h1 class="hero__title col-12 h2 text-center mt-2">César Mongez</h1>
            <h2 class="hero__subtitle h6 text-center col-12">Desarrollador Front End</h2>
            <SocialNetworks />
            </div>
        <div class="hero__buttonGroup col-12 d-flex justify-content-center align-items-center mt-2 mt-sm-4">
            <button class="hero__button btn  btn-v-primary btn-warning m-1 p-1">
                Descargar CV
            </button>
            <button class="hero__button btn btn-v-secondary btn-dark  m-1 p-1">
                Contactame
            </button>
        </div>
        
        
    </div>
  </header>
</template>

<script>
import SocialNetworks from '@/components/SocialNetworks.vue'
export default {
    name:'HeroView',
    components:{
        SocialNetworks
    }
    


}
</script>

<style lang="scss" scoped >
.hero{
    &__img{
        min-width: 124px;
        max-width: 215px;
        border-radius: 100%;
        border:10px solid #666
    }
}

</style>