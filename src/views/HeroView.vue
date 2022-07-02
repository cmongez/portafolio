<template>
  <header class="container-fluid d-flex justify-content-center  align-items-center">
    <div
    id="hero"
      class="
        row
        hero
        flex-column
        justify-content-around
        
        align-items-center
        mt-3
        p-1
        mt-md-4
      "
    >
      
        <img
          class="align-self-center border-profile img-fluid hero__img col-4 col-md-4 mb-3 mb-md-0 p-0"
          src="../assets/profile-picture.png"
          alt="César Mongez foto"
          title="Foto de perfil"
      />
      <div class="d-flex flex-column  justify-content-center align-items-center">
        <h1 class="hero__title h1 text-center h2 mt-2">César Mongez</h1>
        <h2 class="hero__subtitle h5 mb-4 text-center ">
          Desarrollador Front End
        </h2>
        
      </div>
      <SocialNetworks />
        <div
        class="
          hero__buttonGroup
          d-flex
          justify-content-center
          align-items-center
          flex-wrap
          
        "
      >
        <a  href="001_Cesar_Mongez_Front_End_Curriculum_Vitae.pdf" target="_blank">
          <button title="Ver currículum vitae" class="hero__button btn btn-v-primary btn-warning m-1 px-2">
            Ver Currículum
          </button></a
        >
        <a download="001_Cesar_Mongez_Front_End_Curriculum_Vitae" href="001_Cesar_Mongez_Front_End_Curriculum_Vitae.pdf" target="_blank">
          <button title="Descargar currículum vitae" class="hero__button btn btn-v-primary btn-warning m-1 px-2">
            Descargar CV
          </button></a
        >
        <a href="mailto:camongez28@gmail.com"><button title="Enviar correo" mailto="" class="hero__button btn btn-v-secondary btn-dark m-1 px-2">
          Contáctame
        </button></a>
      </div>
   
      
    </div>
  </header>
</template>

<script>
import SocialNetworks from "@/components/SocialNetworks.vue";
export default {
  name: "HeroView",
  components: {
    SocialNetworks,
  },
};
</script>

<style lang="scss" scoped >
header{
  min-height: 92vh;
}
.hero {
  height: 500px;
  &__img {
    max-height: 215px;
    max-width: 215px;
    border-radius: 100%;
    background-color: #666;
  }
 
}
.border-profile {
  border: 10px solid #ffc300;
  border-radius: 100%;
}
@media screen and (min-height: 1000px) {
  header {
  min-height: 700px;
  }

}

</style>