<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row
      .col-md-10
        .titulo-sexto.color-primario.mb-3
          h5 Atención comercial y operación en seguros
          p.mt-3 Síntesis: Gestión, matemática financiera, contabilidad, análisis financieros y centrales de riesgos.          
      .col-md-1.d-flex.flex-row-reverse
            figure
              img(src="@/assets/curso/temas/logoSena.png", alt="alt")

    
    p.mb-10 La siguiente imagen presenta una síntesis de las temáticas estudiadas en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/SINTESIS.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
