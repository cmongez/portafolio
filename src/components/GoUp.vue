<template>
  <aside
  
    v-on:scroll.passive="scrollGoUp()"
    class="go-up"
    id="container-aside"
  >
    <a class="go-up__link" href="#header">
      <i class="go-up__icon fa-solid fa-arrow-up" aria-hidden="true"></i>
    </a>
  </aside>
</template>

<script>
export default {
  name: "GoUp",
  created() {
    window.addEventListener("scroll", this.scrollGoUp);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollGoUp);
  },
  methods:{
    scrollGoUp() {
      const containerAside = document.getElementById('container-aside');
      if (window.innerWidth >= 800 && window.scrollY > 200) {
        containerAside.classList.add("go-up--show");
      } else {
        containerAside.classList.remove("go-up--show");
        
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.go-up {
  display: none;
  cursor: pointer;
  &--show {
  display: block;
  position: fixed;
  bottom: 2em;
  right: 2em;
  font-size: 1.5rem;
}
  a {
  color: inherit;
}
}
.fa-arrow-up{
color:#c2c6c9
}


</style>