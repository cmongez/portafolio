<template>
  <ul
    class="socialNetworks d-flex justify-content-center align-items-center mt-2"
  >
    <li class="socialNetworks__item">
      <a
        href="https://www.linkedin.com/in/cmongez/"
        target="_blank"
        class="socialNetworks__link "
        ><i
          title="Perfil de LinkedIn"
          class="fa-brands fa-linkedin socialNetworks__icon"
        ></i
      ></a>
    </li>
    <li class="socialNetworks__item">
      <a
        href="https://github.com/cmongez"
        target="_blank"
        class="socialNetworks__link "
        ><i class="fa-brands fa-github socialNetworks__icon" title="Perfil de GitHub"></i>
      </a>
    </li>
    <li class="socialNetworks__item">
      <a
        href="https://github.com/cmongez/portafolio"
        target="_blank"
        class="socialNetworks__link"
        ><i
          title="Codigo portafolio"
          class="fa-solid fa-briefcase socialNetworks__icon"
        ></i
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialNetworks",
};
</script>

<style lang="scss">
.socialNetworks {
  list-style: none;

  &__item {
    margin-left: 10px;
    margin-right: 10px;
  }
  &__icon{
    color: #c2c6c9;
    font-size: 30px;
    &:hover{
    color: #f0f1f1;
    }
  }
}
</style>