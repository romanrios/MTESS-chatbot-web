const VOLVER = "Volver al Inicio";
const VOLVER_POSTULANTES = "Preguntas Frecuentes Postulantes";
const VOLVER_EMPRESAS = "Preguntas Frecuentes Empresas";


export const flows = {
  // Bienvenida
  inicioBienvenida: {
    mensaje: [
      "¡Hola! Soy el Asistente Virtual de la <b>Secretaría de Empleo y Desarrollo Emprendedor</b> del Gobierno Santa Fe 👋",
      "¿Sobre qué tema te interesaría consultarme?"
    ],
    opciones: [
      { text: "Impulsa", next: "impulsa" },
      { text: "Empleo Joven", next: "empleojoven" },
      { text: "Prácticas Laborales Formativas", next: "practicas" },
      { text: "Otra consulta", next: "otra" }
    ]
  },
  // Inicio
  inicio: {
    mensaje: ["¿Sobre qué tema te interesaría consultarme?"],
    opciones: [
      { text: "Impulsa", next: "impulsa" },
      { text: "Empleo Joven", next: "empleojoven" },
      { text: "Prácticas Laborales Formativas", next: "practicas" },
      { text: "Otra consulta", next: "otra" }
    ]
  },
  // Impulsa
  impulsa: {
    mensaje: [
      "<b>Impulsa</b>, Aprender, Producir, Trabajar, es una iniciativa liderada por el gabinete productivo de la Provincia de Santa Fe.",
      "Este plan se centra en la sinergia entre el Ministerio de Educación, el Ministerio de Desarrollo Productivo y el Ministerio de Trabajo, Empleo y Seguridad Social, con el objetivo de coordinar estratégicamente la capacitación laboral y la formación profesional de las personas.",
      "Su desafío es mejorar sustancialmente las condiciones de empleabilidad, alineándose con las necesidades del sector privado, optimizando las matrices productivas y atendiendo a las áreas estratégicas que definen el territorio provincial.",
      "Así, se pretende equipar a los ciudadanos con herramientas que potencien su inserción en el mercado laboral y contribuyan al incremento de la productividad dentro de la Provincia de Santa Fe.",
      "Entre el Ministerio de Educación, el Ministerio de Desarrollo Productivo y el Ministerio de Trabajo, Empleo y Seguridad Social se concentra una gran cantidad de oferta formativa a lo largo y a lo ancho de la provincia, con certificación oficial, espacios de aprendizaje continuos, capacidad instalada para realizarlo y programas que acompañan el funcionamiento de los mismos y que éste gabinete busca articular eficientemente.",
      "Si querés conocer toda la oferta formativa vigente ingresá en este <a href='https://www.santafe.gob.ar/ms/impulsa/oferta-formativa-completa/' target='_blank'>👉&nbsp;Enlace</a>",
      "Si querés postular una capacitación ingresá en este <a href='https://twww.santafe.gob.ar/simtyss/portalempleo/?menu_subportales/ver_info_programa/1/' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: VOLVER, next: "inicio" }
    ]
  },
  // Empleo Joven
  empleojoven: {
    mensaje: [
      "Sección de Ayuda de Empleo Joven:"
    ],
    opciones: [
      { text: "¿Qué es Empleo Joven?", next: "empleojoven_quees" },
      { text: "Preguntas Frecuentes Postulantes", next: "empleojoven_postulantes" },
      { text: "Preguntas Frecuentes Empresas", next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },

  empleojoven_quees: {
    mensaje: [
      "<b>Empleo Joven</b> es un programa provincial de intermediación laboral entre personas y empresas que busca favorecer la inserción y estabilidad laboral de las personas, brindando un estímulo económico a la contratación laboral registrada.",
      "De esta forma, también acompañamos a quienes producen y generan empleo en todo el territorio provincial.",
      "El estímulo económico es el equivalente al 85% del Salario Mínimo Vital y Móvil y el beneficio se extiende de 4 a 6 meses.",
      "Si estás buscando empleo, o si estás buscando personal, registrate en el portal accediendo a este <a href='https://www.santafe.gob.ar/simtyss/portalempleo/?home/' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: "Volver a Empleo Joven", next: "empleojoven"},
      { text: VOLVER, next: "inicio" }
    ]
  },


  // Empleo Joven - FAQ Postulantes
  empleojoven_postulantes: {
    mensaje: [
      "Preguntas Frecuentes Postulantes:"
    ],
    opciones: [
      { text: "¿Cómo hago para registrarme y cargar mi CV?", next: "empleojoven_postulantes_01" },
      { text: "Ya tenía cuenta en el Portal, pero cambió el ingreso y no puedo acceder con mi usuario y contraseña.", next: "empleojoven_postulantes_02" },
      { text: "¿Cómo me postulo a un aviso?", next: "empleojoven_postulantes_03" },
      { text: "¿Se pueden modificar los datos de mi CV?", next: "empleojoven_postulantes_04" },
      { text: "¿Se pueden agregar más datos a mi CV?", next: "empleojoven_postulantes_05" },
      { text: "¿El usuario tiene fecha de caducidad?", next: "empleojoven_postulantes_06" },
      { text: "Los datos publicados, ¿son de acceso público?", next: "empleojoven_postulantes_07" },
      { text: "¿Cómo busco un aviso?", next: "empleojoven_postulantes_08" },
      { text: "¿Tengo que estar registrado para ver los detalles de un aviso?", next: "empleojoven_postulantes_09" },
      { text: "¿Dónde puedo ver los avisos a los que me postulé?", next: "empleojoven_postulantes_10" },
      { text: "¿Cómo me contacto con una empresa que publicó un aviso?", next: "empleojoven_postulantes_11" },
      { text: "¿Cómo me contacta una empresa que está interesada en mi persona?", next: "empleojoven_postulantes_12" },
      { text: "¿Dónde puedo ver los avisos a los que me postulé?", next: "empleojoven_postulantes_13" },
      { text: "¿Puedo participar de EmpleoJoven más de una vez?", next: "empleojoven_postulantes_14" },
      { text: "Volver", next: "empleojoven" }
    ]
  },
  empleojoven_postulantes_01: {
    mensaje: [
      "El ingreso al portal es a través de ID Ciudadana.",
      "<b>¿Qué es la ID Ciudadana?</b> Es el sistema de Identificación Digital del Gobierno de la Provincia de Santa Fe que permite a los ciudadanos registrarse como Usuarios para el uso de sus sistemas informáticos y el acceso a servicios digitales. Al concluir el proceso de registro, obtendrás un usuario y contraseña única para acceder a diversos Sistemas de la Provincia (ejemplo: Libreta digital, Aula Virtual, Portal de Autogestión, Boleto educativo gratuito, Turnos, Firma Digital, etc.).",
      "<b>No tengo ID Ciudadana:</b> Podrás gestionarla rápidamente y de manera 100% online <a href='https://www.santafe.gob.ar/idciudadana/registro/' target='_blank'>ingresando aquí.</a>",
      "<b>Ya tengo mi ID Ciudadana:</b> Simplemente hacé click en Iniciar Sesión > Soy Postulante, y podrás autenticarte con tu ID Ciudadana.",
      "Una vez que te hayas autenticado, tendrás que completar un sencillo formulario con tu curriculum vitae (CV). Una vez hayas cargado tu CV, tu registro estará finalizado y podrás postularte a avisos de puestos de trabajo vacantes."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_02: {
    mensaje: [
      "Tu cuenta sigue activa, sólo cambiamos la modalidad de ingreso al portal.",
      "A partir del 11/11/2024, tu usuario y contraseña anterior quedan en desuso, y el acceso es a través de ID Ciudadana.",
      "Si ya habías cargado tu CV, no te preocupes, no deberás ingresar información nueva.",
      "Una vez que te hayas autenticado asociaremos automáticamente tu cuenta a través de tu número de CUIL y podrás operar con normalidad en el portal."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_03: {
    mensaje: [
      '<b>1.</b> Para conocer la oferta de puestos vigentes, ingresá a la sección <b>Busco Trabajo</b>". (debes estar registrado y haber ingresado con tu usuario y contraseña).',
      "<b>2.</b> Podés buscar avisos filtrando la información por localidad o puesto o ver la información completa sin agregar ningún filtro. Presionando el botón <b>Buscar</b>, se mostrarán abajo los resultados de la búsqueda.",
      "<b>3.</b> Haciendo clic en <b>Ver detalle</b>, verás los requisitos del puesto y los datos de contacto de la empresa. Si el puesto se adapta a tu perfil laboral y es de tu interés, podés enviar tu CV a través de Portal de Empleo. Para ello hacé click en el botón <b>Postularme</b> (sobre el final de la página). No envíes tu CV a los avisos en los que no cumples los requisitos mínimos, ya que no serás tomado en cuenta para el puesto y puedes perder oportunidades futuras en esa empresa."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_04: {
    mensaje: [
      "Se puede revisar, corregir y actualizar tus datos en todo momento en la página web de Portal de Empleo. Te aconsejamos mantener actualizado el CV para que aumenten las posibilidades de ser convocado a una entrevista de trabajo, ya que además la fecha de tu CV se actualiza automáticamente."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_05: {
    mensaje: [
      "Sólo se puede incluir en el CV la información que Portal de Empleo te solicita."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_06: {
    mensaje: [
      "Luego de 6 meses, si el sistema no registra ninguna actividad, es decir que no se modificó el CV, ni se realizó ninguna postulación o incluso no se ingresó al sistema, se dará de baja tu CV, previo aviso a tu correo electrónico. Puedes volver a inscribirte en Portal de Empleo todas las veces que lo desees."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_07: {
    mensaje: [
      "Portal de Empleo asegura a los usuarios que se respetará en todo momento la confidencialidad de sus datos conforme a lo fijado por la Ley 25326 de Protección de Datos Personales y su reglamentación. Por tanto, los datos de los usuarios no serán conocidos por terceros ni exhibidos públicamente en ningún medio."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_08: {
    mensaje: [
      "Para conocer la oferta de puestos vigentes, ingresá a la sección <b>Busco Trabajo</b>. Podés buscar avisos filtrando la información por localidad o puesto o ver la información completa sin agregar ningún filtro. Una vez que se presiona el botón <b>Buscar</b>, se mostrarán los resultados de la búsqueda.",
      "En cada aviso se encuentra información básica del puesto publicado. Para conocer más especificaciones del puesto, se debe hacer clic en <b>Ver puesto</b>. El sistema abre entonces una ventana en la pantalla con todos los detalles del puesto de trabajo avisado por la empresa. El aviso puede ser descargado o impreso."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_09: {
    mensaje: [
      "Si, es necesario estar registrado para ver la información completa del aviso, los datos del empleador y utilizar el servicio. Las personas que no estén registradas pueden ver los puestos vacantes pero no pueden acceder a los requisitos ni tampoco a los datos de contacto."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_10: {
    mensaje: [
      "Ingresando con tu usuario y contraseña, hacé click en tu nombre y luego en la opción <b>Panel de Control</b>. Allí tendrás un seguimiento de todos los puestos a los que te postulaste por medio del sitio."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_11: {
    mensaje: [
      "Una vez que identifiques un puesto que te interesa, debajo de los detalles tendrás el botón <b>Postularme</b>, si lo presionás el sistema le envía un email a la empresa que lo publicó; indicándole tu postulación y adjuntando tu CV."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_12: {
    mensaje: [
      "Una empresa se puede contactar mediante email o telefónicamente, si está interesada en tu perfil laboral para una eventual entrevista."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_13: {
    mensaje: [
      "Una empresa se puede contactar mediante email o telefónicamente, si está interesada en tu perfil laboral para una eventual entrevista."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_postulantes_14: {
    mensaje: [
      "No. El periodo máximo en el que podés permanecer dentro del programa es de 6 meses, o 12 si tenes discapacidad."
    ],
    opciones: [
      { text: VOLVER_POSTULANTES, next: "empleojoven_postulantes" },
      { text: VOLVER, next: "inicio" }
    ]
  },

  // Empleo Joven - FAQ Empresas
  empleojoven_empresas: {
    mensaje: [
      "Preguntas Frecuentes Empresas:"
    ],
    opciones: [
      { text: "¿Cómo hago para registrarme?", next: "empleojoven_empresas_01" },
      { text: "¿Qué pasa si el CUIT de mi empresa no aparece registrado?", next: "empleojoven_empresas_02" },
      { text: "Ya tenía cuenta en el portal ¿Cómo accedo con mi usuario y contraseña anterior?", next: "empleojoven_empresas_03" },
      { text: "¿Cómo hago para publicar un aviso?", next: "empleojoven_empresas_04" },
      { text: "¿Hay un límite de avisos que puedo publicar?", next: "empleojoven_empresas_05" },
      { text: "¿Cómo me contacto con un postulante? Uso del buscador", next: "empleojoven_empresas_06" },
      { text: "¿Cómo selecciono más de un postulante?", next: "empleojoven_empresas_07" },
      { text: "¿Cómo me contacta un postulante?", next: "empleojoven_empresas_08" },
      { text: "Beneficios impositivos al tomar personas con Discapacidad", next: "empleojoven_empresas_09" },
      { text: "Si soy monotributista, ¿puedo participar?", next: "empleojoven_empresas_10" },
      { text: "Si no tengo ningún empleado registrado aún, ¿puedo participar?", next: "empleojoven_empresas_11" },
      { text: "¿Hay límite de cantidad de empleados que se pueden adherir?", next: "empleojoven_empresas_12" },
      { text: "¿Cuánto demoran los reintegros?", next: "empleojoven_empresas_13" },
      { text: "Si el empleado que contrato cumple 30 durante los 6 meses, ¿puede participar?", next: "empleojoven_empresas_14" },
      { text: "¿Qué pasa si el empleado no cumple las expectativas, puedo desvincularlo antes de los 6 meses?", next: "empleojoven_empresas_15" },
      { text: "¿Se puede prorrogar el beneficio?", next: "empleojoven_empresas_16" },
      { text: "Volver", next: "empleojoven" },
    ]
  },
  empleojoven_empresas_01: {
    mensaje: [
      "Las empresas ingresan al portal autenticándose con Clave Fiscal de AFIP.",
      '<b>Si aún no adheriste al servicio "Portal Empleo" en AFIP:</b>',
      "Podrás encontrar el servicio en:<br>• Administrador de relaciones<br>• Adherir Servicio<br>• Botón API - Administración Provincial de Impuestos - Provincia de Santa Fe<br>• Opción Servicios Interactivos<br>• Sevicio: Trabajo– SANTA FE – Capacitación y Formación Profesional",
      "<b>Si ya adheriste al servicio en AFIP:</b>",
      "• Simplemente hacé click en Iniciar Sesión > Soy Empresa. Te redirigiremos al portal de AFIP para autenticarte con clave fiscal.",
      "• Una vez autenticado en AFIP, si tenés varios CUITs delegados, elegís con cual operar.",
      "Si es el primer ingreso al portal, te pediremos que confirmes que la información de tu empresa es correcta, e ingreses un email de contacto. Una vez completado este último paso, podrás comenzar a buscar postulantes y ofrecer puestos vacantes."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_02: {
    mensaje: [
      "En ese caso hay que completar el formulario de contacto de la página web, aportando la mayor cantidad de datos de la empresa (C.U.I.T., razón social, dirección, teléfono, etc). El Equipo Técnico de Portal de Empleo se estará comunicando para arribar a una solución a la brevedad."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_03: {
    mensaje: [
      "Tu cuenta sigue activa, sólo cambió la metodología de acceso, no es necesario gestionar una nueva cuenta.",
      "A partir del 11/11/2024, el acceso es con Clave Fiscal AFIP: Ya no necesitarás tu usuario y contraseña anteriores.",
      "Una vez ingreses con clave fiscal, podrás gestionar normalmente tus avisos y selección de postulantes en el portal.",
      "En caso de dificultades para acceder, escribinos a <a href='mailto:mejortrabajo@santafe.gob.ar'>mejortrabajo@santafe.gob.ar</a> o <a href='https://www.santafe.gob.ar/simtyss/portalempleo/?home/#anchor-contacto' target='_blank'>Completá el formulario de contacto.</a>"
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_04: {
    mensaje: [
      "Para publicar un aviso, la empresa tiene que previamente estar registrada en Portal de Empleo. Una vez completado ese paso, ingrese con su usuario y contraseña y diríjase al menú que se despliega de la esquina superior derecha.",
      "Allí encontrará la opción <b>Ofrecer Puesto</b>, la cual muestra el formulario de puesto vacante. La oferta de un puesto le permite tener acceso a la base de datos de postulantes."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_05: {
    mensaje: [
      "No hay límite. Se pueden publicar todos los avisos que su empresa necesite de forma gratuita."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_06: {
    mensaje: [
      "Portal de Empleo cuenta con un buscador que permite al empresario recorrer la base de datos de postulantes del sitio. Para ello debe ingresar a la sección <b>Busco Personal</b> y utilizar el filtro para recortar la búsqueda.",
      "Si una empresa está interesada en un postulante en particular, haciendo click en <b>Ver postulante</b> puede visualizar el CV del mismo. A través del botón <b>Contactarse</b>, se le envía al postulante un email avisándole que la empresa está interesada en contactarlo.",
      "Recuerde que la empresa debe publicar al menos 1 aviso para ver la información completa de los postulantes."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_07: {
    mensaje: [
      "Al confeccionar el aviso, en “cantidad de vacantes” se coloca el número de empleados que se desea adherir. Al completar la primera preselección de candidato, no se debe imprimir la DDJJ, sino continuar seleccionando perfiles.",
      "Cuando finalizaron de escoger a todos los candidatos, se imprime la DDJJ. Caso contrario, si se imprime prematuramente, el portal interpreta que la selección finalizó y cierra el aviso."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_08: {
    mensaje: [
      "Los postulantes pueden contactarse por medio del sitio en respuesta a los avisos publicados. Cuando un postulante hace click en la opción <b>Postularme</b>, que aparece en el aviso publicado, el sistema envía automáticamente un email a la empresa indicando su postulación y adjuntando el CV."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_09: {
    mensaje: [
      '<b>NACIONALES</b><br><b>Ley N°22.431</b> (modificada por la Ley N°23.021, art. 23): "El 70% del total de las remuneraciones abonadas en ejercicio fiscal podrá ser deducido de la base del impuesto a las ganancias de dicho período".<br><b>Ley N°24.013</b><br>Art. 87: "El empleador será eximido, en el primer año de contratación, del pago del 50% de las contribuciones patronales y a las cajas de jubilaciones correspondientes, de las asignaciones y subsidios familiares, al INSSPyJ y al Fondo Nacional de Empleo".<br>Art. N° 88: Establece que los empleadores que contraten un cuatro por ciento (4%) o más de su personal con trabajadores con discapacidad y deban emprender obras en sus establecimientos para suprimir las llamadas barreras arquitectónicas, gozarán de créditos especiales para la financiación de las mismas.<br>Art. N° 89: Las obras sociales están obligadas a incorporar trabajadores con discapacidad, ya que tienen derecho a la Prestación Médica Obligatoria (POM) Los contratos de seguro de accidentes de trabajo no podrán discriminar ni en la prima ni en las condiciones, en razón de la calificación del trabajador asegurado con discapacidad.<br><b>Ley N°26.476</b>, título II, capítulo II, Regularización Impositiva: "Los empleadores por el término de 24 (VEINTICUATRO) meses contados a partir del mes de inicio gozarán de una reducción de sus contribuciones con destino a la seguridad social. Los primeros 12 (DOCE) meses se ingresará el 50% y los segundos 12 (DOCE) meses el 75%".<br><b>PROVINCIALES</b><br><b>Ley Nº 13853</b><br>Art. Nº 38: Establece un estímulo fiscal a los empleadores que concedan empleo a personas con discapacidad, los que tendrán una deducción especial en la base imponible del impuesto a los ingresos brutos equivalentes al 100% de las retribuciones correspondientes al personal con discapacidad en cada período fiscal.'
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_10: {
    mensaje: [
      "Si, puede participar de Empleo Joven cualquier CUIT registrado ante AFIP como empleador."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_11: {
    mensaje: [
      "Si. La cantidad de empleados no es un impedimento."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_12: {
    mensaje: [
      "No, no hay límite de adhesiones."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_13: {
    mensaje: [
      "Una vez que la empresa completa la documentación requerida para el reintegro, se estima que la demora es de 20 días hábiles."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_14: {
    mensaje: [
      "Si. Debe tener entre 18 y 30 al momento de la adhesión."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_15: {
    mensaje: [
      "Si. En ese caso, se reintegrará sólo lo abonado en el lapso en que se mantuvo la relación laboral."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },
  empleojoven_empresas_16: {
    mensaje: [
      "No se puede prorrogar. La duración es la seleccionada al momento de la adhesión. Sí se puede presentar un nueva en cualquier momento."
    ],
    opciones: [
      { text: VOLVER_EMPRESAS, next: "empleojoven_empresas" },
      { text: VOLVER, next: "inicio" }
    ]
  },







  // Prácticas Laborales Formativas
  practicas: {
    mensaje: [
      "A través del programa de <b>Prácticas Laborales Formativas</b> los santafesinos podrán transitar una instancia de capacitación en un ámbito de trabajo real durante un plazo determinado, adquiriendo así conocimientos, competencias y habilidades que mejoren sus condiciones de empleabilidad, mientras perciben por ello un estímulo económico equivalente al 50% del Salario Mínimo Vital y Móvil a cargo del Gobierno de la Provincia de Santa Fe, por un período de hasta 6 meses.",
      "Si tenés una empresa, un comercio o un emprendimiento y querés solicitar el programa Prácticas Laborales Formativas ingresá en este <a href='https://www.santafe.gob.ar/trabdigno/login' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: VOLVER, next: "inicio" }
    ]
  },
  otra: {
    mensaje: [
      "Para realizar otra consulta ingresá al siguiente <a href='https://wa.me/5493425330074' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: VOLVER, next: "inicio" }
    ]
  }


};