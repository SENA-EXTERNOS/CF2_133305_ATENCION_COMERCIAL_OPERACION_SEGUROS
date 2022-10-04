<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Centrales de riesgos

    .row
      .col-md-8
        p El sistema financiero tiene como función captar recursos legales de los particulares y convertirlos en depósitos a la vista como las cuentas de ahorro, o a término como los CDT, para colocarlos en el mercado a través de instrumentos como los préstamos, descuentos, anticipos o cualquier operación de crédito. En este proceso, pueden llegar recursos lícitos e ilícitos, por lo que el Estado estructuró la normatividad que apunta a neutralizar y analizar tales conductas delictivas; por tanto, se establecen parámetros para que las entidades vigiladas, desarrollen e implementen el SARLFAT; su mayor efectividad depende de la adaptación a la naturaleza, actividades, productos y características de cada entidad, sin perder de vista que se trata de un interés global que redunda en bien de toda la comunidad mundial.                       
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema4/img1.png", alt="alt")

    TabsB.color-acento-contenido.color-verde-contenido-tab.mt-5
      .py-4.py-md-5(titulo="Lavado de activos" :icono="require('@/assets/curso/temas/tema4/ic1.png')")
        .row
          .col-md-7.p-5
            h4 Lavado de activos
            p Es legalizar recursos de origen ilícito; la procedencia de dichos bienes no se sabe de dónde salen, nunca será legal, a pesar de la cantidad de transacciones que se realicen. En repetidas oportunidades, las personas no saben cuándo se está cometiendo el delito de lavado de activos. Toda persona jurídica o natural que adquiera, resguarde, invierta, transporte, transforme, custodie, o administre bienes procedentes de actividades de enriquecimiento ilícito, narcotráfico, extorsión, rebelión, secuestro, delitos contra la administración pública, tráfico de migrantes, trata de personas, tráfico de armas o delitos contra el sistema financiero, están incurriendo en delitos de lavado. Estos delincuentes son denominados como individuos al margen de la ley          
          .col-md-5.p-5
            .row.justify-content-center
              .col-md-8   
                 figure
                   img(src='@/assets/curso/temas/tema4/img2.png', alt='alt')
  
      .py-4.py-md-5(titulo="Centrales de información financiera" :icono="require('@/assets/curso/temas/tema4/ic2.png')")
        .row
          .col-md-7.p-5
            h4 Centrales de información financiera
            p La Superintendencia Bancaria expidió, entre otras, las Resoluciones No. 1980 y 2195 de 1994, por medio de las cuales dispuso la obligatoriedad de vigilar permanentemente el cumplimiento de las normas referentes a cupo individual de crédito y sobre los niveles de concentración crediticia, exigiendo a las entidades vigiladas la consulta de bancos de datos de información comercial y, en particular, el endeudamiento consolidado vigente de los clientes con el conjunto del sector financiero, información que se ubica y maneja en las llamadas centrales de riesgo. Así mismo, por Resolución No. 023 de 1995 de la referida superintendencia, se hace obligatorio remitir a esta la información relacionada con el endeudamiento de clientes, información que debe ser producto de la correspondiente evaluación de cartera.
          .col-md-5.p-5
            .row.justify-content-center
              .col-md-8     
                 figure
                   img(src='@/assets/curso/temas/tema4/img3.png', alt='alt')

    h5.mt-5.mb-5 Derechos de los titulares de la información

    p.mb-5 Los titulares tendrán los siguientes derechos: 

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--white")
      .row(titulo="Frente a los operadores de los bancos de datos")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img4.png', alt='alt')

        .col-md-6.mb-4.mb-md-0
           ol.lista-ol--cuadro
              li 
                .lista-naranja--vineta
                  span.text-bold >
                | &nbspEjercer el derecho fundamental al hábeas data en los términos de la presente ley, mediante la utilización de los procedimientos de consultas o reclamos, sin perjuicio de los demás mecanismos constitucionales y legales.
              li 
                .lista-naranja--vineta
                  span.text-bold > 
                | &nbspSolicitar el respeto y la protección de los demás derechos constitucionales o legales, así como de las demás disposiciones de la presente ley, mediante la utilización del procedimiento de reclamos y peticiones. 
              li 
                .lista-naranja--vineta
                  span.text-bold > 
                | &nbspSolicitar prueba de la certificación de la existencia de la autorización expedida por la fuente, o por el usuario.          
              li 
                .lista-naranja--vineta
                  span.text-bold > 
                | &nbspSolicitar información acerca de los usuarios autorizados para obtener información.        
      .row(titulo="Frente a las fuentes de la información")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img5.png', alt='alt')

        .col-md-6.mb-4.mb-md-0
           ol.lista-ol--cuadro
              li 
                .lista-naranja--vineta
                  span.text-bold >
                | &nbspEjercer los derechos fundamentales al hábeas data y de petición, cuyo cumplimiento se podrá realizar a través de los operadores, conforme lo previsto en los procedimientos de consultas y reclamos de esta ley, sin perjuicio de los demás mecanismos constitucionales o legales.
              li 
                .lista-naranja--vineta
                  span.text-bold > 
                | &nbspSolicitar información o pedir la actualización o rectificación de los datos contenidos en la base de datos, lo que realizará el operador, con base en la información aportada por la fuente, conforme se establece en el procedimiento para consultas, reclamos y peticiones.
              li 
                .lista-naranja--vineta
                  span.text-bold > 
                | &nbspSolicitar prueba de la autorización, cuando dicha autorización sea requerida conforme lo previsto en la presente ley.

      .row(titulo="Frente a los usuarios")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img6.png', alt='alt')

        .col-md-6.mb-4.mb-md-0
           ol.lista-ol--cuadro
              li 
                .lista-naranja--vineta
                  span.text-bold >
                | &nbspSolicitar información sobre la utilización que el usuario le está dando a la información, cuando dicha información no hubiere sido suministrada por el operador.
              li 
                .lista-naranja--vineta
                  span.text-bold > 
                | &nbspSolicitar prueba de la autorización, cuando ella sea requerida conforme lo previsto en la presente ley.

    .row.justify-content-center.mt-5
     .col-sm-10.p-3
      .cajon.color-primario.tarjeta-naranja.p-4
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados.

                     
</template>

<script>
export default {
  name: 'Tema3',
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
