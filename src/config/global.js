export default {
  global: {
    componenteFormativo:
      'Manuales de suscripción, inspección y elaboración de informes',
    descripcionCurso:
      'Tramitar un contrato para una póliza de riesgo surge de la necesidad de protección frente a un peligro. Es menester, entonces, contratar un seguro para evitar o mitigar consecuencias desfavorables, y es por esto que las pólizas son fundamentales para ahorrar y proteger. Esto implica tener en cuenta: amparos, exclusiones, valores asegurados, deducibles, tasas, amparos adicionales, indemnizaciones, coberturas y modificaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal_01.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal_01.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-01.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-02.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Matemáticas financiera',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de la información y contabilidad básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normas internacionales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estado de resultados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Registros contables',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estados financieros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Centrales de riesgos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Contabilidad básica',
      referencia:
        'Decreto 2649 de 1993. Por el cual se reglamenta la Contabilidad en General y se expiden los principios o normas de contabilidad generalmente aceptados en Colombia. Diciembre 29 de 1993. ',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9863',
    },
    {
      tema: 'Contabilidad básica',
      referencia:
        'Ley 1314 de 2009. Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento. Julio 13 de 2009. DO. No. 47.409',
      tipo: 'Ley',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1677255#:~:text=por%20la%20cual%20se%20regulan,responsables%20de%20vigilar%20su%20cumplimiento',
    },
    {
      tema: 'Registros contables',
      referencia:
        'Decreto 2650 de 1993. (Instituto Nacional de Contadores Públicos). Por el cual se modifica el Plan Único de Cuentas para Comerciantes. Diciembre 29 de 1993. ',
      tipo: 'Decreto',
      link: 'https://incp.org.co/Site/2012/legislativa/2650.pdf',
    },
    {
      tema: 'Estados financieros',
      referencia:
        'Superintendencia Financiera de Colombia. (1995). Circular básica contable y financiera. ',
      tipo: 'Circular',
      link: 'https://www.superfinanciera.gov.co/jsp/15466',
    },
  ],
  glosario: [
    {
      termino: 'Amortización',
      significado:
        'es la distribución sistemática del importe amortizable de un activo a lo largo de su vida útil.',
    },
    {
      termino: 'Capital',
      significado:
        'medios para la producción, tales como: maquinaria, planta física de empresas, equipos de producción, entre otros.',
    },
    {
      termino: 'Capitalización de intereses',
      significado:
        'si al final del periodo de inversión, en vez de devolver los intereses devengados al prestamista, estos se suman al capital original para, a partir de ahí calcular un nuevo interés, se dice que los intereses se capitalizan.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'es la capacidad de prevenir y tener la disposición necesaria para llevar a cabo futuras rentas, dependiendo de la solidez económica y de la estabilidad laboral. Este fenómeno es causado por los cambios en variables económicas, que sirven para anticipar rentas para el futuro.',
    },
    {
      termino: 'Indicadores financieros',
      significado:
        'son el producto de establecer resultados numéricos basados en relacionar dos cifras o cuentas, bien sea del Balance General y/o del Estado de Pérdidas y Ganancias. Los resultados así obtenidos por sí solos no tienen mayor significado; solo cuando los relacionamos unos con otros y los comparamos con los de años anteriores, para así formarnos una idea acerca del comportamiento de algún aspecto específico de esta.',
    },
    {
      termino: 'Inversión',
      significado:
        'activo o recurso tangible o intangible, comprometido en un proyecto con la expectativa de ganancia y la asunción de riesgo económico.',
    },
    {
      termino: 'Liquidez',
      significado:
        'representa la calidad de los activos para ser convertidos en dinero efectivo de forma inmediata, sin pérdida significativa de su valor, de tal manera que cuánto más fácil es convertir un activo en dinero, se dice que es más líquido. Por definición, el activo con mayor liquidez es el dinero, es decir los billetes y monedas tienen una absoluta liquidez; de igual manera, los depósitos bancarios a la vista, conocidos como dinero bancario, también gozan de absoluta liquidez y, por lo tanto, desde el punto de vista macroeconómico también son considerados dinero.',
    },
    {
      termino: 'Rendimiento',
      significado:
        'interés que un activo devenga como compensación a su poseedor.',
    },
    {
      termino: 'Riesgo',
      significado:
        'el riesgo se describe como la posibilidad que un resultado esperado no se produzca. Cuanto más alto sea el nivel de riesgo, tanto mayor será la tasa de rendimiento y viceversa.',
    },
    {
      termino: 'SARLAFT',
      significado:
        'El Sistema para la Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo SARLAFT, es el conjunto integrado de elementos referidos como políticas, procedimientos, documentación, estructura organizacional, órganos de control, infraestructura tecnológica, divulgación y capacitación, relacionados con el tema, a través de los cuales las instituciones vigiladas por la Superintendencia Financiera de Colombia, responden a las amenazas de ser utilizadas para la práctica de conductas delictivas por tales conceptos, con el objeto de disminuir las posibilidades de pérdidas por la exposición al riesgo de LA/FT.',
    },
  ],
  referencias: [
    {
      referencia:
        'Decreto Ley 663 de 1993. Por medio del cual se actualiza el Estatuto Orgánico del Sistema Financiero  y se modifica su titulación y numeración. Abril de 1993. DO No. 40.820',
      link:
        'https://normativa.colpensiones.gov.co/colpens/docs/estatuto_organico_sistema_financiero.htm',
    },
    {
      referencia: 'SIC. (s.f.). Sobre el Habeas Data Financiero. SIC.',
      link: 'https://www.sic.gov.co/sobre-el-habeas-data-financiero',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (s.f.). Circular Básica Jurídica (C.E. 029/14)',
      link:
        'https://www.superfinanciera.gov.co/jsp/loader.jsf?lServicio=Publicaciones&lTipo=publicaciones&lFuncion=loadContenidoPublicacion&id=10083443',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (1995). Circular básica contable y financiera.',
      link: 'https://www.superfinanciera.gov.co/jsp/15466',
    },
    {
      referencia: 'Supersociedades. (s.f.). Superintendencia de Sociedades.',
      link:
        'https://www.supersociedades.gov.co/nuestra_entidad/normatividad/normatividad_conceptos_juridicos/3040.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
