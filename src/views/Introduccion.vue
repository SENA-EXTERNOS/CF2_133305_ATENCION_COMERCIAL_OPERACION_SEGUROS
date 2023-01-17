<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-around.align-items-center.mt-5.mb-5
      .col-lg-4.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/temas/introduccion/introduccion.png", alt="alt")
            
      .col-lg-8.mb-5.mb-lg-0
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Apreciado aprendiz, bienvenido a este componente formativo donde se abordarán temas como la gestión de la información, matemática financiera, contabilidad, análisis financiero y centrales de riesgo; herramientas indispensables para el normal funcionamiento de una organización, debido a que son instrumentos que hacen parte de las operaciones normales de una empresa; de aquí proviene la importancia de conocer y manejar los estados financieros, para fortalecer, en gran medida, las habilidades en la atención comercial y la operación en seguros.
    
    .col-sm-8.mb-3
      p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo.
    figure
     .video
       iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
             

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
