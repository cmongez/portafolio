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
    <li class="socialNetworks__item">
      <a href="" target="_blank" class="socialNetworks__link"
        ><img
          class="socialNetworks__img img-fluid"
          src="https://cdn-icons-png.flaticon.com/512/1021/1021129.png"
          alt="Icono certificados"
      /></a>
    </li>
    <li class="socialNetworks__item">
      <a href="https://github.com/cmongez/portafolio" target="_blank" class="socialNetworks__link"
        ><img
          class="socialNetworks__img img-fluid"
          src="https://cdn-icons-png.flaticon.com/512/639/639394.png"
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
    min-width: 20px;
    max-width: 25px;
  }
}

</style>