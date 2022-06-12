<template>
  <div>
    <h1>Bienvenidos</h1>
    <p>Cargando...</p>
  </div>
</template>

<script>
export default {
  name:'WelcomeView',
  data(){
    return{

    }
  },
  methods:{
    envia(){
      this.$router.replace({ path:'/home'})
    }
  },
  mounted(){
    setTimeout(()=>{
    this.envia()
},2000);
  }

}
</script>

<style>

</style>