<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-left
      .col-sm-3.mb-3
        figure
          img(src="@/assets/curso/temas/introduccion/introduccion.png", alt="alt")

      .col-sm-9.mb-3  
        p.mt-5 Apreciado aprendiz, bienvenido a este componente formativo donde se abordará temas como la gestión, matemática financiera, contabilidad, análisis financiero y centrales de riesgo, herramientas situadas en el mercado e indispensables para el normal funcionamiento de una entidad u organización, porque son instrumentos que hacen parte de las operaciones normales; de aquí deriva la importancia de conocer y manejar los estados financieros, para fortalecer en gran medida las habilidades en atención comercial y operación en seguros.      
    
    .col-sm-8.mb-3
      p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo. ¡Éxitos en este proceso de aprendizaje!
    figure
     .video
       iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
       figcaption Video: Leyenda del video      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
