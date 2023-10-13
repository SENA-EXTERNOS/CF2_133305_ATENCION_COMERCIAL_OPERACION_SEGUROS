<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de la información y contabilidad básica
    
    .row.justify-content-center
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema2/img19.png", alt="alt")    
      .col-lg-8.p-3
        p La contabilidad es una disciplina donde podemos registrar los movimientos contables y financieros de un ente económico. Por medio de ella, podemos obtener información, basada en hechos reales, de una empresa o negocio que se presenta durante un periodo que es igual a un año, donde se recopila información para la toma de decisiones. Debido a que esta información de una organización o empresa es confidencial, se hace necesario gestionarla y almacenarla en bases de datos, para su manejo y protección.      

    h5.mt-5.mb-3 Gestión de la información
    .row.justify-content-center
      .col-sm-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img18.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La gestión de la información utiliza medios como las computadoras, un componente indispensable en la sociedad moderna para procesar datos con ahorro de tiempo y esfuerzo. Es el manejo de base de datos de clientes de la empresa aseguradora, donde debemos tenerla bajo seguridad y el principio de la prudencia, dado que es información importante y secreta que administra la empresa. 
                
    h5.mt-5 Tipos de información
    .row
      .col-lg-8.p-3
        .cajon.color-primario.tarjeta-naranja.p-4
          p La información que se encuentra en las bases de datos es muy variable y, por este motivo, no existe una sola clase sino varias, como son las bases de datos estáticas, las bases de datos dinámicas, los directorios y las bases de datos especializadas.
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")

    p.mt-5 A continuación, se presentan las diferentes clases de bases de datos:
    
    .row.text-center
      .col-lg-3.col-sm-6.col-10.mb-4.mb-lg-0
        .tarjeta--boton.tarjeta-slide.arriba.color-secundario.p-4(@mouseover="indicadorTarjetaSlide=false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .row.justify-content-center
           .tarjeta-slide__contenedor
             .tarjeta-slide__contenido          
               p Son aquellas bases de datos estáticas en las que no se puede modificar la información que contienen.  
             .col-md-4             
                .tarjeta-slide__img.responsive(:style="{'background-color': '#E5F2DB','background-image': `url(${require('@/assets/curso/temas/tema2/tj1.png')})`}")

      .col-lg-3.col-sm-6.col-10.mb-4.mb-lg-0      
        .tarjeta--boton.tarjeta-slide.arriba.color-secundario.p-4(@mouseover="indicadorTarjetaSlide=false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .row.justify-content-center
           .tarjeta-slide__contenedor
             .tarjeta-slide__contenido          
               p Es aquella base de datos que, además de la consulta, se puede modificar, actualizando la información que se encuentra en ella. Según su contenido, la podemos identificar.
             .img-fluid             
                .tarjeta-slide__img(:style="{'background-color': '#E5F2DB','background-image': `url(${require('@/assets/curso/temas/tema2/tj2.png')})`}")                 

      .col-lg-3.col-sm-6.col-10.mb-4.mb-lg-0
        .tarjeta--boton.tarjeta-slide.arriba.color-secundario.p-4(@mouseover="indicadorTarjetaSlide=false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .row.justify-content-center
           .tarjeta-slide__contenedor
             .tarjeta-slide__contenido          
               p Base de datos donde encontramos listados de información de clientes para su contacto.
             .img-fluid             
                .tarjeta-slide__img(:style="{'background-color': '#E5F2DB','background-image': `url(${require('@/assets/curso/temas/tema2/tj3.png')})`}") 

      .col-lg-3.col-sm-6.col-10.mb-4.mb-lg-0
        .tarjeta--boton.tarjeta-slide.arriba.color-secundario.p-4(@mouseover="indicadorTarjetaSlide=false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .row.justify-content-center
           .tarjeta-slide__contenedor
             .tarjeta-slide__contenido          
               p Bases de datos donde tenemos información específica de los clientes.
             .img-fluid             
                .tarjeta-slide__img(:style="{'background-color': '#E5F2DB','background-image': `url(${require('@/assets/curso/temas/tema2/tj4.png')})`}")                 

    h5.mt-5  Contabilidad básica
    .row
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema2/img2.png", alt="alt")
      .col-lg-8.p-3
        p El objetivo de la contabilidad es el de mejorar el tratamiento de los recursos financieros de una empresa. Por otra parte, podemos encontrar en el decreto 2649 de 1993, el concepto de contabilidad: “la contabilidad permite identificar, medir, clasificar, registrar, interpretar, evaluar e informar las operaciones de un ente económico, de forma clara completa y fidedigna”; podemos deducir que es una ciencia y un arte de las transacciones financieras registradas por una empresa, basada en la razón del objeto social y ubicando al ente para la obtención de informes financieros. La contabilidad se basa en la ecuación patrimonial: activo = pasivo + patrimonio.

    .row.justify-content-center
      .col-md-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.ih(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El artículo 1º del Decreto 2649 de 1993, expresa que la contabilidad se debe ceñir a los principios y normas que la regulan, de tal manera que le permita identificar, medir, clasificar, registrar, interpretar, analizar, evaluar e informar, las operaciones del ente económico de forma clara, completa y fidedigna. Información contable, cualidades:
            br
            br 
            ul.lista-ul
              li 
                i.fas.fa-angle-right.c1
                p.mb-0 Comprensible y clara.
              li 
                i.fas.fa-angle-right.c1
                p.mb-0 Útil, pertinente y confiable.
              li 
                i.fas.fa-angle-right.c1
                p.mb-0 Oportuna con el valor de la realimentación.
              li 
                i.fas.fa-angle-right.c1
                p.mb-0 Neutral, verificable mostrando fielmente los hechos económicos de la empresa.
              li 
                i.fas.fa-angle-right.c1
                p.mb-0 Comparable cuando ha sido preparada basada en informes. 
    .row.mt-5
      .col-lg-3.col-6.mb-lg-0.mb-4.mt-3
        p.mb-4 A continuación, se presentan algunos conceptos de la contabilidad, según el #[b decreto 2649 de 1993.]
        figure
          img.img-a.img-tmx-auto(src="@/assets/curso/temas/tema2/2.png", alt="alt")
      .col-lg-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-4
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12                   
                  h3.texto-centro Ente económico
                  p.mb-5.texto-centro Es como se denomina a la empresa o actividad económica organizada.<br>
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12                
                h3.texto-centro Continuidad
                p.texto-centro Los hechos económicos deben ser contabilizados y revelados, informando si la empresa puede continuar o no estará funcionando normalmente en periodos futuros.
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row.justify-content-center 
              .col-sm-12 
                h3.texto-centro Unidad de medida 
                p.texto-centro Se refiere a la moneda funcional que es la que compete al entorno económico fundamental en el que opera la entidad y que, por lo general, es el entorno en el que ella produce y utiliza el efectivo ante todo.
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12  
                h3.texto-centro Periodo 
                p.texto-centro Preparación de los estados financieros, situación por la que incursiona la empresa durante un ciclo de operaciones que se presenta por lo menos una vez al año con un corte al 31 de diciembre.
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12  
                h3.texto-centro Valuación y medición  
                p.texto-centro Valuación se refiere al cálculo que se lleva a cabo con el fin de destinar un valor económico a un activo.
                p.texto-centro Medición se refiere al proceso para determinar el valor por el cual se reconoce a un activo, pasivo, ingreso o gasto.
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12  
                h3.texto-centro Esencia sobre la forma  
                p.texto-centro Es definida por las características y atributos que aseguran que la información proporcionada en los estados financieros es fidedigna y, de esta manera, cumpla con su objetivo que es ser útil en la toma de decisiones económicas.
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12  
                h3.texto-centro Realización  
                p.texto-centro Se fundamenta en que una transacción puede anotarse en la contabilidad si se puede constatar que, como resultado de ese movimiento, la empresa va a obtener un beneficio o una pérdida económica.
          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12  
                h3.texto-centro Asociación  
                p.texto-centro Se refiere a la relación que debe subsistir entre los ingresos recibidos, con los gastos y los costos ocasionados, para poder registrar esos movimientos simultáneamente, en la cuenta de resultados.

          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12  
                h3.texto-centro Mantenimiento del patrimonio  
                p.texto-centro Evaluación del patrimonio conforme con la ley, de lo aportado, confrontado con lo real.
                p.texto-centro Es esencial para conservar la capacidad del sujeto contable y se realiza por medio de las utilidades que este obtiene durante un período.

          .tarjeta.tarjeta-naranja.tarjeta-tamano.p-3.h-100
            .row.justify-content-center.mb-3
              .col-sm-2.col-lg-3.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
            .row
              .col-sm-12  
                h3.texto-centro Revelación plena  
                p.texto-centro Informa resumidamente, todo lo que se va a evaluar, su situación financiera y los cambios en el patrimonio; se aplica en el momento de realizar un estado financiero detallando los procesos contables en las notas a los estados. Esta norma revela a los estados financieros una información suplementaria sobre la situación económica, administrativa y financiera de la empresa.                
             
    h5.mt-5 Elementos de situación financiera

    p En el siguiente tema se identificará la estructura de un estado financiero, reconociendo que los elementos relacionados en primer plano en el balance son los activos, los pasivos y el patrimonio neto. 
    p.mb-5  A continuación, se describen los conceptos asociados a la ecuación patrimonial:      
    
    ImagenInfografica.color-secundario
      template(v-slot:imagen)
        .row.justify-content-center
          .col-sm-6  
            figure 
              img(src='@/assets/curso/temas/tema2/img6.png', alt='')
      .tarjeta(x="28%" y="40%" numero="+")
        figure 
          img(src='@/assets/curso/temas/tema2/tjd1.png', alt='')

      .tarjeta(x="72%" y="25%" numero="+")
        figure 
          img(src='@/assets/curso/temas/tema2/tjd2.png', alt='')

      .tarjeta(x="72%" y="60%" numero="+")
        figure 
          img(src='@/assets/curso/temas/tema2/tjd3.png', alt='')

    separador
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
       h2 2.1 Normas internacionales
    
    .row.justify-content-center
      .col-md-10
        figure
          img(src="@/assets/curso/temas/tema2/img7.png", alt="alt")

    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.color-primario.tarjeta-naranja.p-4  
           p.mb-0 Existen dos grandes normas a nivel internacional: <b>las Normas Internacionales de Información Financiera (NIIF)</b> – #[em International Financial Reporting Standards] (IFRS) y las <b>Normas Internacionales de Contabilidad (NIC)</b> – <i>International Accounting Standards</i> (IAS). Las NIIF están conformadas desde la norma 1, hasta la norma 13 y las NIC comprenden desde la norma 1, hasta la norma 41.

    p.mt-5 A continuación, se profundiza un poco más sobre las normas internacionales:

    .row.justify-content-center.mt-5
      .col-lg-8.order-lg-1.order-2
        LineaTiempoD(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(numero="1" titulo="NIIF – Normas Internacionales de Información Financiera")
            .px-2
              p Las NIIF forman parte de unos estándares contables universales fundados para agrupar o unificar la información financiera, presentada por el sector empresarial, para beneficiar la ejecución de negocios nacionales e internacionales.
              p De acuerdo con lo anterior, para poseer unos estándares contables universales y simplificar la ejecución de negocios, la <i>International Accounting Standards Board</i>, más conocida como IASB, fundó las Normas Internacionales de Información Financiera (NIIF). En el caso de Colombia, estas normas internacionales de contabilidad fueron acogidas hasta el año 2009, con la expedición de la Ley 1314 del mismo año y donde estas normas se comenzaron a implementar en el año 2014.

          .row(numero="2" titulo="NIC – Normas Internacionales de Contabilidad")
            .px-2
              p Las Normas Internacionales de Contabilidad, conocidas como NIC, hacen parte de una serie de reglas emitidas por el Comité de Normas Internacionales de Contabilidad, fundadas con el objetivo de instaurar un estándar para la presentación y elaboración de los estados financieros de las organizaciones. El objetivo primordial de estas normas es que las organizaciones puedan realizar sus estados financieros de una forma en la que se refleje fielmente la situación económica de la misma, así como que estos estados sean entendidos por la mayoría de los usuarios de la información financiera.

          .row(numero="3" titulo="CINIIF – Comité de Interpretaciones de Normas Internacionales de Información Financiera")
            .px-2
              p El CINIIF es el ente encargado de emitir interpretaciones sobre los Estándares Internacionales, en todo el mundo. En el ámbito contable internacional se considera que las interpretaciones realizadas por el CINIIF, se clasifican en tres grupos.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/temas/tema2/img8.png", alt="alt")

    p.mt-5 A continuación, se presentan las características de los tres grupos:

    ImagenInfografica
      template(v-slot:imagen)
        .row.justify-content-center
          .col-sm-6  
            figure 
              img(src='@/assets/curso/temas/tema2/img9.png', alt='')
      .tarjeta.bgimg.p-4(x="48%" y="20%")
        h4.text-center Grupo uno
        ul.lista-ul
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Emisores de valores, entidades de interés público.
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Activos superiores a 30,000 SMMLV.
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Planta de personal superior a 200 trabajadores.         

      .tarjeta.bgimg.p-4(x="35%" y="65%" )
        h4.text-center Grupo tres
        ul.lista-ul
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Activos inferiores a 500 SMMLV.
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Planta de personal igual o inferior a 10 trabajadores.         

      .tarjeta.bgimg.p-4(x="62%" y="60%" )
        h4.text-center Grupo dos
        ul.lista-ul
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Que no sean emisores de valores ni de interés público.
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Activos entre 500 y 30,000 SMMLV.
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Planta de personal entre 11 y 200 trabajadores.
          li 
            i.fas.fa-angle-right.cv
            p.mb-0 Ingresos iguales o superiores a 6000 SMMLV.         

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img10.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 CINIIF, NIIF y NIC
                  p.mb-0 Para ampliar la información, lo invitamos a leer el documento  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/ANEXO_CINIF_aplicadas_a_los_grupos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   
    
    <Separador></Separador>

    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
       h2 2.2 Estado de resultados 

    p.mt-5 Es un estado financiero de propósito general, que busca analizar la información obtenida durante un periodo, para proceder a la toma de decisiones en cuanto a la parte financiera de una empresa, relativa a los logros alcanzados por la administración de la entidad.
    p.mt-5 A continuación, se entrará con más detalle sobre el Estado de resultados:

    .row.justify-content-center.mt-5
      .col-md-10
        figure
          img(src="@/assets/curso/temas/tema2/img11.png", alt="alt")


    TabsC.color-primario.mt-5
      .tarjeta.color-primario--borde.color-contenido.p-4.mb-3(titulo="Composición de un estado<br> de resultados")
        .row.justify-content-center
          .col-md-2.mt-2
            figure
              img(src="@/assets/curso/temas/tema2/tj5.png", alt="alt")
          .col-md-8

            p  
             span.text-bold Ingresos: 
             |está conformado por los ingresos que genera una entidad debido a la venta de inventarios, la prestación de servicios y demás actividades que realice la empresa.
            p.mt-3
             span.text-bold Gastos y costos: 
             |son decrementos de los activos, o incrementos de los pasivos de una entidad durante un periodo contable, con la intención de generar ingresos, y con un impacto desfavorable en la utilidad o pérdida neta.
              
      .tarjeta.color-primario--borde.color-contenido.p-4.mb-3(titulo="¿Cómo se utiliza un estado<br> de resultados?")
        .row.justify-content-center
          .col-md-2.mt-2
            figure
              img(src="@/assets/curso/temas/tema2/tj6.png", alt="alt")
          .col-md-8

            p Se deriva de un balance de los ingresos, gastos y costos, que busca obtener los niveles de utilidad operativa de la empresa, durante un periodo. 
             
      .tarjeta.color-primario--borde.color-contenido.p-4.mb-3(titulo="Partes de un estado<br> de resultados")
        .row.justify-content-center
          .col-md-2.mt-2
            figure
              img(src="@/assets/curso/temas/tema2/tj7.png", alt="alt")
          .col-md-8

            ol.lista-ol--cuadro
              li 
                .color-lista-verde--vineta
                  span.text-bold >
                | &nbspSe coloca el nombre de la empresa.
              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspExpone el informe el cual debe estar expresado con la denominación de la moneda oficial. 
              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspIndicar el periodo al que corresponden los resultados obtenidos; pueden ser mensual, trimestral, semestral y anual.

      .tarjeta.color-primario--borde.color-contenido.p-4.mb-3(titulo="Utilidades")
        .row.justify-content-center
          .col-md-2.mt-2
            figure
              img(src="@/assets/curso/temas/tema2/tj8.png", alt="alt")
          .col-md-8

            ol.lista-ol--cuadro
              li 
                .color-lista-verde--vineta
                  span.text-bold >
                | &nbspEvaluar el desempeño.
              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspEstimar el potencial de crédito de las empresas.
              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspEstimar sus flujos de efectivo.
              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspTener una base para determinar los dividendos.              
              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspLos ingresos de actividades ordinarias: es la entrada bruta que le ingresa a la empresa por los beneficios económicos.

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspEl costo de ventas: es el valor que la empresa debe invertir para que al final, el cliente reciba el producto o el servicio que se le está ofreciendo.

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspLa ganancia bruta: es el total de las sumas percibidas en cada periodo mensual.                                   

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspOtros ingresos: son los ingresos de actividades que no tienen origen.

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspGastos de administración: son los gastos operacionales que se miden a nivel de la empresa y a nivel administrativo.

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspOtros gastos: se derivan de operaciones o transacciones inusuales que no son propias de la empresa.

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspGanancia o pérdida antes de impuesto: son actividades que constituyen la principal fuente de ingresos.  

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspGanancias por impuestos: se incluyen al determinar la ganancia o pérdida en cualquier periodo.

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspGanancia procedente de operaciones continuadas: es el resultado antes de impuestos, sobre los beneficios económicos.                                                                        

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspVariación absoluta: expresa qué cantidad representa de un año a otro. 

              li 
                .color-lista-verde--vineta
                  span.text-bold > 
                | &nbspVariación relativa: representa el mismo valor, pero en porcentaje.


    h5.mt-5 NIIF 9 – Instrumentos Financieros
      .row.justify-content-center
        .col-sm-10
          .cajon.color-primario.tarjeta-naranja.p-4.mt-3
            p El objetivo de esta Norma es establecer los principios para la información financiera sobre activos financieros y pasivos financieros, de forma que se presente información útil y relevante para los usuarios de los estados financieros, para la evaluación de los importes.

    h5.mt-5 NIIF 10
      .row.justify-content-center
        .col-sm-10
          .cajon.color-secundario.color-yellow-recuadro.p-4.mt-3
            p Esta Norma establece que los estados financieros consolidados presentan los activos, pasivos, patrimonio, ingresos, gastos, y flujos de efectivo de la empresa y sus sucursales como una sola entidad económica.
           
    <Separador></Separador>           
    #t_2_3.titulo-segundo.color-acento-contenido.mt-5
      h2 2.3 Registros contables

    .row
      .col-md-4
        figure
          img.pb-5(src="@/assets/curso/temas/tema2/img12.png", alt="alt")
      .col-md-8
        p Toda empresa, desde que inicia las actividades financieras y contables y durante su actividad financiera económica, debe tener un registro que son los libros o documentos físicos donde se registran todas las operaciones dentro de la entidad y se reflejan los asientos contables de la empresa.
        p.mb-5 Continuando con este tema, se exponen unas plantillas modelos de cómo se deben diligenciar los registros contables.    

      SlyderA(tipo="b").color-primario.bg5.p-5
        .row.justify-content-center.align-items-start        
          .col-lg-5.col-md-12
            h5 Registro simple
            p Es el asiento contable que se realiza de una forma práctica y resumida de las cuentas.
          .col-lg-6.col-md-12                
            img.img-a.img-t(src='@/assets/curso/temas/tema2/sld1.png', alt='alt')
        .row.justify-content-center.align-items-start   
          .col-lg-5.col-md-12
            h5 Registro compuesto
            p Es el asiento contable que se realiza de una forma detallada y extensa con subcuentas, para tener claridad suficiente en el asiento contable. 
          .col-lg-6.col-md-12      
            img.img-a.img-t(src='@/assets/curso/temas/tema2/sld2.png', alt='alt')
        .row.justify-content-center.align-items-start 
          .col-lg-5.col-md-12
            h5 Cuenta T
            p Esta herramienta sirve para liquidar las cuentas y poder colocar este resultado, ya sea en el libro mayor y el balance, o en los informes donde se necesite la información.
          .col-lg-6.col-md-12
            img.img-a.img-t(src='@/assets/curso/temas/tema2/sld3.png', alt='alt')


    h5.mt-5 ¿Cómo elaborar un registro contable?

    p.mt-5 A continuación, se presenta un ejemplo de cómo elaborar un registro contable.
    p.mt-5.mb-5 
     span.text-bold Ejemplo: 
     | la empresa adquiere un local por valor de $100.000.000 en efectivo.


    .row.justify-content-center.mt-5.bg6.mg-img.pt-5
      .col-md-7
        LineaTiempoD(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(numero="1" titulo="Paso 1")
            .col-md-12.mb-8.mb-md-0
              p Identificar la transacción que se está desarrollando. Observar el local y el efectivo entregado por la empresa; ambos son activos, uno representado en un local y el otro como salida de efectivo.
               .row.justify-content-center
                 .col-sm-8
                   figure
                     img(src="@/assets/curso/temas/tema2/img13.png", alt="alt")
          .row(numero="2" titulo="Paso 2")
            .col-md-12.mb-8.mb-md-0
              p Analizar la naturaleza de los elementos de los estados financieros que se están afectando. En el ejercicio se afectan dos activos los cuales son de naturaleza débito, lo que quiere decir que cuando un activo aumenta, este se registra en el Débito y cuando disminuye se registra en el lado contrario, el Crédito.
               .row.justify-content-center
                 .col-sm-8
                   figure
                     img(src="@/assets/curso/temas/tema2/img15.png", alt="alt")
          .row(numero="3" titulo="Paso 3")
           .col-md-12.mb-8.mb-md-0
              p Registro Contable. Una vez quede claro cada uno de los criterios anteriores, se dispone a efectuar el registro contable
               .row.justify-content-center
                 .col-sm-8
                   figure
                     img(src="@/assets/curso/temas/tema2/img16.png", alt="alt")
      .col-md-4
        figure
          img(src="@/assets/curso/temas/tema2/img14.png", alt="alt")

    .row.justify-content-center.mt-5.pt-5
      .col-sm-10.p-3
        .cajon.color-primario.tarjeta-naranja.transparencia-cuadro.p-4
          p.mb-0 Los libros auxiliares son documentos que permiten llevar el movimiento contable de cada cuenta a nivel auxiliar de la empresa y tienen como fin mostrar el detalle de cada una de estas, para que faciliten el control de los recursos de la empresa, sobre todo aquellas que tienen bastante movimiento como son: efectivo, bancos, clientes, proveedores, IVA, ventas, entre otras.


</template>

<script>
export default {
  name: 'Tema2',
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
