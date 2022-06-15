<template>
  <header class="container-fluid">
    <div
      class="
        row
        hero
        justify-content-center
        align-items-center
        mt-3
        p-1
        mt-md-4
      "
    >
      <span class="border-profile"
        ><img
          class="img-fluid hero__img col-5 col-md-4 m-0 p-0"
          src="../assets/profile-picture.png"
          alt="César Mongez foto"
          title="Foto de perfil"
      /></span>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="hero__title col-12 h2 text-center mt-2">César Mongez</h1>
        <h2 class="hero__subtitle h6 text-center col-12">
          Desarrollador Front End
        </h2>
        <SocialNetworks class="w-75" />
      </div>
      <div
        class="
          hero__buttonGroup
          col-12
          d-flex
          justify-content-center
          align-items-center
          flex-wrap
          mt-2 mt-sm-4
        "
      >
        <a  href="curriculo.pdf" target="_blank">
          <button title="Ver currículum vitae" class="hero__button btn btn-v-primary btn-warning m-1 p-1">
            Ver Currículum
          </button></a
        >
        <a download="001_Cesar_Mongez_Front_End_CV" href="curriculo.pdf" target="_blank">
          <button title="Descargar currículum vitae" class="hero__button btn btn-v-primary btn-warning m-1 p-1">
            Descargar CV
          </button></a
        >
        <a href="mailto:camongez28@gmail.com"><button title="Enviar correo" mailto="" class="hero__button btn btn-v-secondary btn-dark m-1 p-1">
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
.hero {
  &__img {
    min-width: 80px;
    height: auto;
    max-width: 215px;
    border-radius: 100%;
    background-color: #666;
  }
}
.border-profile {
  border: 10px solid #ffc300;
  border-radius: 100%;
}
</style>