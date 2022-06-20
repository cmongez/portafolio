<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
$prueba:blue;
.p-indent{
  text-indent: 30px;


}
a{
  cursor: pointer;
}
body{
  background-color: #0C151D;
}
h1{
  color: #F1F2F4;
}
h2{
  color: #F1F2F4;
}
p,li{
  color:#c2c6c9;
}
.btn{
  
  font-weight: 400;
}
.btn-v-primary{
  background-color: #ffc300;
  color:#2e2e2e;
  border:0;
}
.btn-v-secondary{
  background: #171F26;
  color: #A3ABB2;
}
.card-text,.list-group-item{
  color: #3D3D3D;
}

</style>
