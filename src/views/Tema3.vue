<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estados financieros

    .row
      .col-md-8
        .col-sm-10 
          p Una empresa está conformada por una estructura financiera y una estructura operacional. La primera, está conformada por los activos, los pasivos y el patrimonio, y la segunda, está conformada por los ingresos, los gastos y los costos de la empresa. A continuación, se desarrolla un
           span.text-bold  estado de situación financiera 
           | y un 
           span.text-bold estado de resultado integral 
           |de una empresa. 
          .tarjeta.color-secundario.p-2.mt-2
            .row.justify-content-md-center
              .col-md-2.mt-3
                  img(src="@/assets/curso/temas/tema3/img1.png")
              .col-md-6
                  h3.mt-3 Estados financieros
                  p.text-small Para ampliar la información anterior, lo invitamos a leer el documento. 
              .col-lg-3.mt-3
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Estados_financieros.pdf')" target="_blank")
                 span Descargar
                  i.fas.fa-file-download      
                                        
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema3/img2.png", alt="alt")
          
    <Separador></Separador>      

    h5.mt-5 Análisis de los estados financieros

    p.mt-5 Es importante que los propietarios de empresas tengan ordenados y actualizados los estados financieros de la entidad, porque de esta manera se permite conocer los niveles de rentabilidad de su inversión, observar el crecimiento de la empresa, conocer la liquidez y la capacidad de pago de la organización, conceder préstamos o apalancamiento económico y, finalmente, tomar decisiones que beneficien a la empresa.
    p.mt-5.mb-5 Para profundizar sobre el análisis de los estados financieros, lo invitamos a ver el siguiente video.
    figure
     .video
       iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
       figcaption Video: Leyenda del video      

    .row.justify-content-center.mt-5
     .col-sm-10.p-3
      .cajon.color-primario.tarjeta-naranja.p-4
        p Las finanzas son un método para establecer los resultados financieros de las decisiones de negocios, aplicando diferentes técnicas, o con el fin de diagnosticar la situación financiera de la organización y permitir presentar conclusiones y recomendaciones para la correcta toma de decisiones.

    p.mt-5.mb-5 El análisis financiero se divide en: análisis vertical y análisis horizontal. A continuación se profundiza sobre cada uno de estos.

    TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Análisis vertical")
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Análisis vertical
              p Es un análisis estático, estudia la situación financiera en un momento dado, no evidencia los cambios ocurridos en el transcurso del tiempo. Se analizan los estados financieros de un solo período.
              p.mt-5 Para su cálculo, se divide el valor de una cuenta del activo sobre el total del activo que viene a ser la base de comparación.
              .row.justify-content-center
                .col-md-4
                  figura
                    img(src='@/assets/curso/temas/tema3/formula1.png', alt='alt')

        .py-3.py-md-4(titulo="Análisis horizontal")
          .row
            .col-md-12.mb-4.mb-md-0
              h4 Análisis horizontal
              p Compara estados financieros homogéneos correspondientes a dos o más periodos, es dinámico; permite determinar cambios o variaciones de un periodo a otro e interpretar dichas variaciones para una oportuna toma de decisiones. Se estudian los estados financieros de más de un período y/o más de una empresa.
              .row.justify-content-center
                .col-md-4
                  figura
                    img(src='@/assets/curso/temas/tema3/formula2.png', alt='alt')

    h5.mt-5 Razones o indicadores financieros
      .row.justify-content-center.mt-5
        .col-md-6
          figure
            img(src="@/assets/curso/temas/tema3/img3.png", alt="alt")

    p.mt-5.mb-5  A continuación, se presentan las razones e indicadores financieros: 

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
      .row(titulo="Tasa de interés")
        .col-12.mb-md-0.p-5
          p Indican cuál es la 
           span.text-bold capacidad
           |  tanto operativa como financiera, que tiene la empresa para 
           span.text-bold generar fondos 
           | suficientes para cubrir sus obligaciones a 
           span.text-bold corto 
           | plazo.
          .row.justify-content-center
           .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='')

      div(titulo="Razón corriente")
        .col-12.mb-md-0.p-5
          p Mide la disponibilidad, a corto plazo, que tiene la empresa para cubrir sus obligaciones del pasivo corriente. Cuántos pesos del activo corriente están respaldando cada peso de deuda, inferior a un año. Al dividir el activo corriente entre el pasivo corriente, sabremos cuántos activos corrientes tendremos para cubrir o respaldar esos pasivos exigibles a corto plazo.
          h5 Interpretación

          p La empresa dispone de $(resultado de la ecuación) del activo corriente como respaldo para cubrir cada peso del pasivo inferior a un año.
          p.mt-3  El criterio tiene una relación adecuada entre los activos y pasivos corrientes de 1 a 1, especialmente desde el punto de vista del acreedor; el indicador es adecuado cuando los valores sean más altos. No obstante, esta última percepción debe tener en cuenta que un índice demasiado elevado puede ocultar un manejo inadecuado de activos corrientes, pudiendo tener las empresas excesos de liquidez poco productivos.
          .row.justify-content-center
           .col-sm-8
              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt='')

              figure
                img(src='@/assets/curso/temas/tema3/formula3.png', alt='')

      div(titulo="Razón ácida")
        .col-12.mb-md-0.p-5
          p Pretende medir la capacidad inmediata que tiene la empresa para cancelar sus pasivos a corto plazo sin depender de las existencias de mercancía o gastos pagados por anticipado. Revela a la empresa sus obligaciones corrientes, pero sin contar con la venta de sus existencias, es decir, básicamente con los saldos de efectivo, el producido de sus cuentas por cobrar, sus inversiones temporales y algún otro activo de fácil liquidación que pueda haber, diferente a los inventarios.
          h5 Interpretación

          p La empresa cuenta con $(resultado de la ecuación) para responder por cada peso que debe a corto tiempo.
          p.mt-3  No se puede precisar cuál es el valor ideal para este indicador; el más adecuado podría acercarse a 1, aunque es admisible por debajo de este nivel. Existe una gran diferencia, por razones obvias, entre lo que debe ser la prueba ácida para una empresa industrial, por ejemplo, que para una empresa comercial, pues de acuerdo con su actividad, las cantidades de inventario que manejan son distintas, teniendo esta cuenta diferente influencia en la valoración de la liquidez
          .row.justify-content-center
           .col-sm-8
              figure
                img(src='@/assets/curso/temas/tema3/formula4.png', alt='')

      div(titulo="Capital de trabajo neto ")
        .col-12.mb-md-0.p-5
          p Valor que le queda a la empresa, después de haber pagado sus pasivos de corto plazo, permitiendo la toma de decisiones importantes para la empresa
          h5 Interpretación

          p.mt-3  La empresa cuenta con un capital neto de trabajo (resultado de la ecuación) el cual le permite pagar sus gastos operativos anuales, una vez cubiertos los valores de las obligaciones a corto plazo
          .row.justify-content-center
           .col-sm-8
              figure
                img(src='@/assets/curso/temas/tema3/formula5.png', alt='')

      div(titulo="Razones de endeudamiento")
        .col-12.mb-md-0.p-5
          p Este indicador también llamado de apalancamiento, permite conocer en qué grado y de qué forma participan los acreedores en la financiación de la empresa. También, permite conocer la capacidad que tiene la empresa para acceder a nuevos créditos.
          .row.justify-content-center
           .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img6.png', alt='')

      div(titulo="Razón de deuda ")
        .col-12.mb-md-0.p-5
          p Establece el porcentaje de participación de los acreedores, con relación a la financiación de los activos de la organización.
          h5 Interpretación

          p.mt-3  Indica a qué (resultado de ecuación) % de los activos de la organización tienen derecho los acreedores al ser financiados por ellos; si el indicador es bajo, le permite acceso a más crédito.
          .row.justify-content-center
           .col-sm-8
              figure
                img(src='@/assets/curso/temas/tema3/formula6.png', alt='')

      div(titulo="Endeudamiento financiero ")
        .col-12.mb-md-0.p-5
          p Este indicador representa las obligaciones financieras con respecto a las ventas. Un indicador recomendable menor al 10 %.
          h5 Interpretación

          p.mt-3  Indica que el (resultado de la ecuación) % de las obligaciones financieras corresponde a las ventas o las obligaciones financieras participan en un (resultado de la ecuación) % de sus ventas.
          .row.justify-content-center
           .col-sm-8
              figure
                img(src='@/assets/curso/temas/tema3/formula7.png', alt='')

      div(titulo="Impacto de la carga financiera ")
        .col-12.mb-md-0.p-5
          p Es el porcentaje de los gastos financieros con respecto a las ventas del periodo.
          h5 Interpretación

          p.mt-3  Los gastos financieros representan el (resultado de la ecuación) % de las ventas. Este indicador brinda al sector financiero, seguridad.
          .row.justify-content-center
           .col-sm-8
              figure
                img(src='@/assets/curso/temas/tema3/formula8.png', alt='')

      div(titulo="Indicadores de apalancamiento ")
        .col-12.mb-md-0.p-5
          p Mide el grado de compromiso del patrimonio de los socios para con los acreedores de la empresa. Busca el equilibrio de propietarios con recursos de terceros. 
          h5 Interpretación

          p.mt-3  Indica que tiene (resultado de la ecuación) centavos de deuda por cada peso de patrimonio. 
          .row.justify-content-center
           .col-sm-8
              figure
                img(src='@/assets/curso/temas/tema3/formula9.png', alt='')                
</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema3',
  components: { Separador },
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
