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
      { text: "Volver", next: "inicio" }
    ]
  },
  // Empleo Joven
  empleojoven: {
    mensaje: [
      "<b>Empleo Joven</b> es un programa provincial de intermediación laboral entre personas y empresas que busca favorecer la inserción y estabilidad laboral de las personas, brindando un estímulo económico a la contratación laboral registrada.",
      "De esta forma, también acompañamos a quienes producen y generan empleo en todo el territorio provincial.",
      "El estímulo económico es el equivalente al 85% del Salario Mínimo Vital y Móvil y el beneficio se extiende de 4 a 6 meses.",
      "Si estás buscando empleo, registrate en este <a href='https://twww.santafe.gob.ar/simtyss/portalempleo/?busqueda_detallada_puesto_pe/' target='_blank'>👉&nbsp;Enlace</a>",
      "Si estás buscando personal, registrate en este <a href='https://twww.santafe.gob.ar/simtyss/portalempleo/?busqueda_detallada_postulante_pe/' target='_blank'>👉&nbsp;Enlace</a>",
      "Si querés conocer más sobre este programa ingresá a este <a href='https://twww.santafe.gob.ar/simtyss/portalempleo/?home/' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: "Preguntas Frecuentes Postulantes", next: "empleojoven_postulantes" },
      { text: "Preguntas Frecuentes Empresas", next: "empleojoven_empresas" },
      { text: "Volver", next: "inicio" }
    ]
  },
  // Prácticas Laborales Formativas
  practicas: {
    mensaje: [
      "A través del programa de <b>Prácticas Laborales Formativas</b> los santafesinos podrán transitar una instancia de capacitación en un ámbito de trabajo real durante un plazo determinado, adquiriendo así conocimientos, competencias y habilidades que mejoren sus condiciones de empleabilidad, mientras perciben por ello un estímulo económico equivalente al 50% del Salario Mínimo Vital y Móvil a cargo del Gobierno de la Provincia de Santa Fe, por un período de hasta 6 meses.",
      "Si tenés una empresa, un comercio o un emprendimiento y querés solicitar el programa Prácticas Laborales Formativas ingresá en este <a href='https://www.santafe.gob.ar/trabdigno/login' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: "Volver", next: "inicio" }
    ]
  },
  otra: {
    mensaje: [
      "Para realizar otra consulta ingresá al siguiente <a href='https://wa.me/5493425330074' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: "Volver", next: "inicio" }
    ]
  },
  // Empleo Joven - FAQ Postulantes
  empleojoven_postulantes: {
    mensaje: [
      "Preguntas Frecuentes Postulantes:"
    ],
    opciones: [
      { text: "¿Cómo hago para registrarme y cargar mi CV?", next: "empleojoven_postulantes_01" },
      { text: "Ya tenía cuenta en el Portal, pero cambió el ingreso y no puedo acceder con mi usuario y contraseña.", next: "inicio" },
      { text: "¿Cómo me postulo a un aviso?", next: "inicio" },
      { text: "¿Se pueden modificar los datos de mi CV?", next: "inicio" },
      { text: "¿Se pueden agregar más datos a mi CV?", next: "inicio" },
      { text: "¿El usuario tiene fecha de caducidad?", next: "inicio" },
      { text: "Los datos publicados, ¿son de acceso público?", next: "inicio" },
      { text: "¿Cómo busco un aviso?", next: "inicio" },
      { text: "¿Tengo que estar registrado para ver los detalles de un aviso?", next: "inicio" },
      { text: "¿Dónde puedo ver los avisos a los que me postulé?", next: "inicio" },
      { text: "¿Cómo me contacto con una empresa que publicó un aviso?", next: "inicio" },
      { text: "¿Cómo me contacta una empresa que está interesada en mi persona?", next: "inicio" },
      { text: "¿Dónde puedo ver los avisos a los que me postulé?", next: "inicio" },
      { text: "¿Puedo participar de EmpleoJoven más de una vez?", next: "inicio" },
      { text: "Volver", next: "inicio" }
    ]
  },
  // Empleo Joven - FAQ Empresas
  empleojoven_empresas: {
    mensaje: [
      "Preguntas Frecuentes Empresas:"
    ],
    opciones: [
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" },
      { text: "Volver", next: "inicio" }
    ]
  },
};


