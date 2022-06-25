<template>
  <section id="certificados"
   class=" col-12 col-sm-10 col-md-9 mb-4 container-fluid  certificates" >
    <h2>Formación Adicional</h2>
    <ul class=" pl-4 certificates__list">
      <li class="certificates__item">
       
          Desarrollador Aplicaciones Front End (Bootcamp) <span class="certificates__link"> [En espera del
          certificado]</span>
      </li>
      <li class="certificates__item">
        
          Scrum Fundamentals Certified <a
          href="certificates/CertificadoSCRUMFundamentalsCesarMongez.pdf"
          target="_blank"
        ><i class="fa-solid fa-up-right-from-square certificates__link" aria-hidden="true"></i></a
        >
      </li>
      
      <li class="certificates__item">
        
          Fundamentos del desarrollo web: Full Stack o Front-end (LinkedIn
          Learning) <a
          href="certificates/CertificadoFundamentosdeldesarrolloFrontendCesarMongez.pdf"
          target="_blank"
        ><i class="fa-solid fa-up-right-from-square certificates__link" aria-hidden="true"></i></a
        >
      </li>
      <li class="certificates__item">
        
          Introducción al Desarrollo Web: HTML y CSS I y II (Google Actívate) <a
          href="certificates/CertificadoHTMLCSSIyIIGoogleActivateCesarMongez.pdf"
          target="_blank"
        ><i class="fa-solid fa-up-right-from-square certificates__link " aria-hidden="true"></i></a
        >
      </li>
      <li class="certificates__item">
        Comercio Electrónico (Google Actívate) <a
          href="certificates/CertificadoComercioElectronicoGoogleActivate.pdf"
          target="_blank"
          ><i class="fa-solid fa-up-right-from-square certificates__link" aria-hidden="true"></i></a
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CertificatesView",
};
</script>

<style lang="scss" scoped>
.certificates{
  &__link{
    color:#ffc300;
  }
}



</style>