<template>
  <div class="welcome">
    <div
      class="
        welcome__animation
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <p class="h1 welcome__title">Bienvenidos</p>
      <h1 class="h2">César Mongez</h1>
      <h2 class="h2">Desarrollador Front End</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
  methods: {
    goHome() {
      this.$router.replace({ path: "/home" });
    },
  },
  mounted() {
    setTimeout(() => this.goHome(), 2200);
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  overflow: hidden;
  &__animation {
    height: 100vh;
    width: 100vw;
    animation-duration: 1.4s;
    animation-name: slidein;
  }
  &__title{
    font-size: 4em;
  }
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 250%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>