<template>
  <ul class="socialNetworks d-flex justify-content-around align-items-center col-8 mt-2">
    <li class="socialNetworks__item">
      <a
        href="https://www.linkedin.com/in/cmongez/"
        target="_blank"
        class="socialNetworks__link"
        ><img
          class="socialNetworks__img img-fluid"
          src="../assets/linkedin.png"
          alt="Icono LinkedIn"
      /></a>
    </li>
    <li class="socialNetworks__item">
      <a
        href="https://github.com/cmongez"
        target="_blank"
        class="socialNetworks__link"
        ><img
          class="socialNetworks__img img-fluid"
          src="../assets/github.png"
          alt="Icono GitHub"
      /></a>
    </li>
    <li class="socialNetworks__item pt-1 pr-1 pl-1">
      <a href="" target="_blank" class="socialNetworks__link"
        ><img
          class="socialNetworks__img img-fluid"
          src="../assets/certificate.png"
          alt="Icono certificados"
      /></a>
    </li>
    <li class="socialNetworks__item">
      <a  class="socialNetworks__link"
        ><img
          class="socialNetworks__img img-fluid"
          src="../assets/portfolio.png"
          alt="Icono codigo portafolio"
      /></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialNetworks",
};
</script>

<style lang="scss" scoped>
.socialNetworks {
    list-style: none;
  &__img {
    min-width: 25px;
    max-width: 30px;
  }
}

</style>