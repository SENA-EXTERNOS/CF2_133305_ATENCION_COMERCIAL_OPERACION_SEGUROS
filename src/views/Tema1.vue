<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Matemática financiera
    .bg17      
      .row.justify-content-center
        .row.justify-content-left
          .col-sm-3.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
          .col-sm-9.mb-3
            p.mt-5 Las matemáticas financieras y el valor razonable, son temas importantes; por eso lo invitamos a reconocer la importancia de estos temas en nuestra vida diaria y en las empresas. Las matemáticas financieras tienen la finalidad de calcular, valorar, analizar y proyectar la representación del dinero en el tiempo y su capacidad para adquirir bienes y servicios.
            .cajon.color-primario.tarjeta-naranja.p-4
              .fila.justificar-contenido-entre.alinear-elementos-centro                  
                  p Es importante para la empresa y las personas, incentivar habilidades de conocimiento fundamental en ejecución, aplicadas a la matemática financiera en las áreas contables y financieras de una empresa, debido a que estas ayudan a calcular cuál sería el mejor método de apalancamiento financiero que puede aplicar una empresa o una persona, en el momento de hacer una inversión. 

          h3.titulo-tercero Interés
          p.mt-3 Es el precio que se paga por utilizar un crédito en dinero o el rendimiento financiero de un dinero prestado; el interés se puede calcular en días, meses, bimestres, trimestres, semestres y años, todo depende de la entidad y las normas financieras crediticias. 
          p.mt-5 Existen dos tipos de interés: el interés simple y el interés compuesto. 

        p.p-5 A continuación, se presentan las definiciones y ejemplos de interés simple e interés compuesto:

      SlyderA(tipo="b").color-primario.p-5.bg5
        .row.justify-content-center.align-items-start          
          .col-lg-5
            h5 Interés simple
            p Se paga al final de cada periodo, por lo tanto, el capital prestado o invertido, se mantiene, no varía; la cantidad recibida por interés siempre va a ser la misma y eso significa, que no hay capitalización de los intereses. 
            p.mt-4 El interés resulta de multiplicar el capital prestado, por la tasa o porcentaje, por las unidades de tiempo total que corresponde a la obligación.
          .col-lg-6
            figure
                img(src='@/assets/curso/temas/tema1/sl1.svg', alt='alt')
        .row.justify-content-center.align-items-start      
          .col-lg-5
            p.text-bold Ejemplo 
            p Maicol coloca un CDT en una entidad financiera y desea saber: ¿Qué interés producen $60.000 en un año, en 6 meses y veintiún días, al 24 %?         
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/sl9.png', alt='alt')

        .row.justify-content-center.align-items-start 
          .col-lg-5
            h5 Monto de un capital utilizando interés simple 
            p Se denomina monto de un capital, valor futuro, valor acumulado o valor nominal, a la suma entre el capital más el interés simple.             
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/sl8.png', alt='alt')
        
        .row.justify-content-center.align-items-start      
          .col-lg-5
            p.text-bold Ejemplo 
            p Si con el ejercicio anterior sabemos el monto, calculamos el monto para comprobar que está bien $82.440.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/sl7.png', alt='alt')

        .row.justify-content-center.align-items-start 
          .col-lg-5
            h5 Valor futuro de interés simple
            p El monto o valor futuro con interés simple (F) es la suma entre el capital inicial y el interés simple ganado. 
            p Reemplazando y simplificando, se obtiene el siguiente conjunto de ecuaciones como se observa en la imagen.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/sl6.svg', alt='alt')

        .row.justify-content-center.align-items-start 
          .col-lg-5
            h5 Interés compuesto
            p Al final de cada periodo el capital cambia, debido a que los intereses se adicionan al capital y forman un nuevo capital denominado monto; sobre este monto se vuelven a calcular intereses y, por lo tanto, hay capitalización de los intereses.
            p Se define la operación financiera, el capital aumenta al final de cada periodo por la suma de los intereses vencidos. El resultado es el valor del capital que se le denomina valor futuro y al valor de los intereses, el interés compuesto. El interés compuesto es indispensable en la Ingeniería Económica, Matemática Financiera, Evaluación de Proyectos y, en general, por todo el sistema financiero colombiano.
            p Este interés se valora periodo a periodo del dinero comprometido en la operación financiera y, por tal motivo, es el tipo de interés más utilizado en el sistema financiero.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/sl5.png', alt='alt')

        .row.justify-content-center.align-items-start 
          .col-lg-5
            h5 Ejemplo
            p.mt-1 Una persona invierte el día de hoy una suma de $300.000 en un CDT que paga 8 % cuatrimestral; se solicita demostrar cómo se presenta la capitalización de este dinero durante dos años.<br>C = $300.000<br>i = 8 %<br>T = 6 porque son dos años (1 cuatrimestre es = 4 meses entonces 1 año tiene 3 cuatrimestres)
            p El valor futuro del CDT es: $476.062<br>Interés compuesto es: $176.062            
            p Este es otro método para realizar, de una forma más rápida, la amortización del dinero en la inversión.
            p F = C (1 + i)ⁿ<br>F = $300.000 (1 + 8 %)⁶ = $476.062,30
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/sl4.png', alt='alt')

        .row.justify-content-center.align-items-start 
          .col-lg-5
            h5 Cálculo de un Valor Presente (VP) con un Valor Futuro (VF)
            p Tomando como base la información del ejemplo anterior, podemos desarrollar este cálculo.              
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema1/sl3.png', alt='alt')

        .row.justify-content-center.align-items-start      
          .col-lg-5
            .h5 Ejemplo
            p.mt-4 Maicol recibirá la suma de $476.062 dentro de dos años, por un CDT que paga el 8 % cuatrimestral; ¿cuánto fue la inversión de la persona?.
          .col-lg-6  
              figure
                  img(src='@/assets/curso/temas/tema1/sl2.png', alt='alt')

    h3.mt-3 Tasa de interés

    p Existen diferentes tipos de interés que se pueden aplicar a diversos casos de estudio de la vida real. Algunos de estos son: tasa de interés periódico, tasa de interés nominal, tasa de interés efectiva, entre otros.
    p.mt-3 A continuación, se definen las tasas de interés y se presentan las fórmulas y algunos ejemplos resueltos.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
      .row(titulo="Tasa de interés")
        .col-12.mb-md-0.p-5
          p Modalidad en el cobro de los intereses: se cobran por periodo anticipado, es decir, intereses que se descuentan al inicio de cada periodo y otros por periodo vencido, que son los que se cobran al final de cada periodo. 
          p Por lo anterior, es común escuchar expresiones como 20 % nominal anual capitalizable trimestralmente, 7 % trimestral, 7 % trimestral anticipado, 24 % nominal trimestre anticipado y 25 % efectivo anual. 
          
          h5 Fórmula:
          .row.justify-content-center
           .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/tema1/formula1.svg', alt='')
          h5 Ejemplo: 
          p.mb-4 Un estudiante consigna hoy en una cuenta de ahorros su mesada de $700.000; al cabo de 5 meses, tiene en la cuenta de ahorros $800.000. 
          .col-sm.mb-5.mb-sm-0

          ol.lista-ol--cuadro
            li 
              .lista-color--vineta
                span.text-bold >
              | &nbsp ¿Cuál es la tasa de interés que está generando la cuenta de ahorros?
            li 
              .lista-color--vineta
                span.text-bold > 
              | &nbsp El interés se puede causar al principio del periodo (anticipado), o al final del periodo (vencido). 
            li 
              .lista-color--vineta
                span.text-bold > 
              | &nbsp Esto aplica únicamente para las tasas periódicas y nominales. 
            li 
              .lista-color--vineta
                span.text-bold > 
              | &nbsp En la mayoría de las transacciones financieras se acostumbra que sean vencidas.                 
            li 
              .lista-color--vineta
                span.text-bold >
              | &nbsp Los intereses se clasifican en: interés periódico, interés nominal e interés efectivo.

          h5 Solución:
          .row.justify-content-center
           .col-lg-3.col-6
              figure
                img(src='@/assets/curso/temas/tema1/formula2.png', alt='')

      div(titulo="Tasa de interés periódico")
        .col-12.mb-md-0.p-5
          p Se simboliza como 
           span.text-bold ip, 
           |y se aplica siempre al final de cada periodo. Es aquella tasa en la cual se indican dos elementos básicos: la tasa y el periodo de aplicación.
          p.mt-3 Mientras no se indique lo contrario, se maneja como vencida, lo cual indica que también habrá tasa de interés anticipada. Es una tasa que puede ser incluida en las fórmulas que se desarrollan en las matemáticas financieras.

          h5 Fórmula:
          .row.justify-content-center
           .col-sm-2
              figure
                img(src='@/assets/curso/temas/tema1/formula3.png', alt='')

          .col-md.mb-5.mb-sm-0
           p donde:
           ol.lista-ol
              li 
                | m = frecuencia de conversión
              li 
                | ip = interés periódico
              li  
                | in = interés nominal
                  

          h5 Ejemplo: 
          p.mb-4 2 % mensual, 4 % bimestral, 6 % trimestral, 18 % semestral y 30 % anual. 
          p.mb-4 Es la tasa que se causa en un periodo de conversión (% por día, mes, bimestre, semestre, trimestre, año) o de pago de intereses, que se obtiene dividiendo la tasa nominal entre los periodos de conversión. 
          p.mb-4 Tasa periódica es aquella que se utiliza generalmente en todos los cálculos en el interés compuesto, pues esta capitaliza los intereses período a período, motivo por el cual, es la que siempre se considera en la solución de problemas financieros.

          h5 Tasas periódicas:
          .row.justify-content-center
           .col-lg-8
              img.img-a.img-t(src='@/assets/curso/temas/tema1/1.svg', alt='')

      div(titulo="Tasa de interés nominal")
        .col-12.mb-md-0.p-5
          p Es una tasa de interés de referencia y se denomina como r, por ser de referencia, no mide el valor real del dinero.
          p.mt-3 Es una tasa de interés que necesita de tres elementos básicos: la tasa, el periodo de referencia y el periodo de composición.
          p.mt-3 El periodo de referencia, mientras no se diga lo contrario, siempre será el año y se dice que está implícito y, por lo tanto, no es necesario señalarlo. 
          p El periodo de composición puede recibir el nombre de periodo de capitalización.

          h5 Fórmula:
          .row.justify-content-center
           .col-sm-2
              figure
                img(src='@/assets/curso/temas/tema1/formula5.png', alt='')

          .col-md.mb-5.mb-sm-0
           p donde:
           ol.lista-ol
              li 
                | in = interés nominal
              li 
                | ip = interés periódico
              li  
                | r = tasa de referencia
              li 
                | m = frecuencia de conversión                

          h5 Tasa nominal:
          .row.justify-content-center
           .col-lg-8
              img.img-a.img-t(src='@/assets/curso/temas/tema1/2.svg', alt='')

      div(titulo="Tasa de interés efectiva")
        .col-12.mb-md-0.p-5
          p Es la tasa cuyos intereses se reinvierten o se capitalizan al final del periodo; por lo tanto, esta tasa siempre es compuesta y vencida. 
          p.mt-3 Esta tasa se usa anual, se conoce como tasa efectiva anual, tasa anual efectiva, o tasa anual, y corresponde a la tasa periódica donde el período es un año. 


          h5 Tasa interés efectivo:
          .row.justify-content-center
           .col-sm-3
              figure
                img(src='@/assets/curso/temas/tema1/formula7.png', alt='')

    h3.mt-5 Anualidades

    p Los pagos o cuotas iguales se conocen como anualidades. Debe tenerse en cuenta que cada cuota se compone de un abono a capital y un pago de intereses calculados sobre saldos.
    p.mt-3.mb-5 Con el siguiente tema se va a trabajar con las diversas anualidades, para tener un mayor conocimiento en el área financiera.


    TabsC.color-acento-contenido
      .py-4.py-md-5(titulo="Anualidad ordinaria vencida")
          p.mt-3 Las anualidades ordinarias vencidas, son aquellas en las cuales el primer pago se efectúa un periodo después de la fecha de negociación, conocida como 
            span.text-bold periodo cero. 
            | El valor futuro es equivalente a la serie uniforme vencida del pago de las cuotas.
            
          h5 Fórmula:
            .row.justify-content-center
              .col-sm-3.mt-2
                figure
                  img(src='@/assets/curso/temas/tema1/formula8.png', alt='')

          .col-md.mb-5.mb-sm-0
            ol.lista-ol
              li 
                | A = Anualidad, pago o cuota
              li 
                | P = Valor equivalente
              li  
                | i = interés
              li 
                | n = tiempo

          h5 Ejemplo: 
            p.mt-3 se hacen pagos efectuados al final de cada año, durante 12 años por un valor de $2.000.000 desembolsados al primer año a una tasa de 20 % anual.  

            .row.justify-content-center
              .col-sm-4.mt-2
                figure
                  img(src='@/assets/curso/temas/tema1/4.svg', alt='')


      .py-4.py-md-5(titulo="Valor presente de una anualidad ordinaria o vencida")
          p.mt-3 Cantidad de dinero, diferido en cuotas iguales, en períodos iguales, y aún bajo interés compuesto, entregará un valor equivalente total en el momento presente.

          h5 Fórmula:
            .row.justify-content-center
              .col-sm-3.mt-2
                figure
                  img(src='@/assets/curso/temas/tema1/formula10.png', alt='')

          .col-md.mb-5.mb-sm-0
            ol.lista-ol
              li 
                | A = Anualidad, pago o cuota
              li 
                | P = Valor equivalente
              li  
                | i = interés
              li 
                | n = tiempo

          h5 Ejemplo: 
            p.mt-3 ¿Cuánto se debe depositar el día de hoy con el fin de retirar $5.000.000 al final de cada año, durante 12 años, si la tasa de interés es del 10 % anual?

            .row.justify-content-center
              .col-lg-6.col-sm-8.mt-2
                figure
                  img(src='@/assets/curso/temas/tema1/formula11.svg', alt='')

      .py-4.py-md-5(titulo="Valor futuro de una anualidad ordinaria o vencida")
          p.mt-3 Valor acumulado al final de n periodos, acordando depósitos de $X cantidad y reconociendo un interés del i % por periodo.

          h5 Fórmula:
            .row.justify-content-center
              .col-sm-6.mt-2
                figure
                  img(src='@/assets/curso/temas/tema1/formula12.png', alt='')

          h5 Ejemplo: 
            p.mt-3 qué valor final corresponde a una serie uniforme de desembolsos de $10.000.000 efectuados al final de cada año, durante 12 años, si la tasa de interés es del 20 % anual.

            .row.justify-content-center
              .col-lg-6.mt-2
                figure
                  img(src='@/assets/curso/temas/tema1/formula13.svg', alt='')

    .row.justify-content-center
      .col-md-10
        .tarjeta.color-secundario.p-3.mt-5
          .row.justify-content-center.align-items-center
            .col-lg-1.col-3.mb-lg-0.mb-4
                img(src="@/assets/curso/temas/tema1/img2.png")
            .col-lg
                h3.mt-3 Ejercicios de aplicación matemática financiera
                p Para poner en práctica todos estos conocimientos, lo invitamos a solucionar los ejercicios propuestos en el documento.  
            .col-lg-2
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Ejercicios_aplicación_matemática_financiera.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download      
                      


            
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
