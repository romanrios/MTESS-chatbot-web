import { VOLVER, VOLVER_EMPRESAS } from "./const.js";

export const flow_empleojoven_tengoempresa_faq = {
    empleojoven_tengoempresa_faq: {
        mensaje: [
            "Preguntas Frecuentes Empresas:"
        ],
        opciones: [
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
            { text: "Si el empleado que contrato cumple 30 durante los 6 meses, ¿puede participar?", next: "empleojoven_empresas_14" },
            { text: "¿Qué pasa si el empleado no cumple las expectativas, puedo desvincularlo antes de los 6 meses?", next: "empleojoven_empresas_15" },
            { text: "Volver a Empleo Joven", next: "empleojoven" },
        ]
    },

    empleojoven_empresas_02: {
        mensaje: [
            "En ese caso hay que completar el formulario de contacto de la página web, aportando la mayor cantidad de datos de la empresa (C.U.I.T., razón social, dirección, teléfono, etc). El Equipo Técnico de Portal de Empleo se estará comunicando para arribar a una solución a la brevedad."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
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
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_04: {
        mensaje: [
            "Para publicar un aviso, la empresa tiene que previamente estar registrada en Portal de Empleo. Una vez completado ese paso, ingrese con su usuario y contraseña y diríjase al menú que se despliega de la esquina superior derecha.",
            "Allí encontrará la opción <b>Ofrecer Puesto</b>, la cual muestra el formulario de puesto vacante. La oferta de un puesto le permite tener acceso a la base de datos de postulantes."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_05: {
        mensaje: [
            "No hay límite. Se pueden publicar todos los avisos que su empresa necesite de forma gratuita."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
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
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_07: {
        mensaje: [
            "Al confeccionar el aviso, en “cantidad de vacantes” se coloca el número de empleados que se desea adherir. Al completar la primera preselección de candidato, no se debe imprimir la DDJJ, sino continuar seleccionando perfiles.",
            "Cuando finalizaron de escoger a todos los candidatos, se imprime la DDJJ. Caso contrario, si se imprime prematuramente, el portal interpreta que la selección finalizó y cierra el aviso."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_08: {
        mensaje: [
            "Los postulantes pueden contactarse por medio del sitio en respuesta a los avisos publicados. Cuando un postulante hace click en la opción <b>Postularme</b>, que aparece en el aviso publicado, el sistema envía automáticamente un email a la empresa indicando su postulación y adjuntando el CV."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_09: {
        mensaje: [
            '<b>NACIONALES</b><br><b>Ley N°22.431</b> (modificada por la Ley N°23.021, art. 23): "El 70% del total de las remuneraciones abonadas en ejercicio fiscal podrá ser deducido de la base del impuesto a las ganancias de dicho período".<br><b>Ley N°24.013</b><br>Art. 87: "El empleador será eximido, en el primer año de contratación, del pago del 50% de las contribuciones patronales y a las cajas de jubilaciones correspondientes, de las asignaciones y subsidios familiares, al INSSPyJ y al Fondo Nacional de Empleo".<br>Art. N° 88: Establece que los empleadores que contraten un cuatro por ciento (4%) o más de su personal con trabajadores con discapacidad y deban emprender obras en sus establecimientos para suprimir las llamadas barreras arquitectónicas, gozarán de créditos especiales para la financiación de las mismas.<br>Art. N° 89: Las obras sociales están obligadas a incorporar trabajadores con discapacidad, ya que tienen derecho a la Prestación Médica Obligatoria (POM) Los contratos de seguro de accidentes de trabajo no podrán discriminar ni en la prima ni en las condiciones, en razón de la calificación del trabajador asegurado con discapacidad.<br><b>Ley N°26.476</b>, título II, capítulo II, Regularización Impositiva: "Los empleadores por el término de 24 (VEINTICUATRO) meses contados a partir del mes de inicio gozarán de una reducción de sus contribuciones con destino a la seguridad social. Los primeros 12 (DOCE) meses se ingresará el 50% y los segundos 12 (DOCE) meses el 75%".<br><b>PROVINCIALES</b><br><b>Ley Nº 13853</b><br>Art. Nº 38: Establece un estímulo fiscal a los empleadores que concedan empleo a personas con discapacidad, los que tendrán una deducción especial en la base imponible del impuesto a los ingresos brutos equivalentes al 100% de las retribuciones correspondientes al personal con discapacidad en cada período fiscal.'
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_10: {
        mensaje: [
            "Sí, puede participar de Empleo Joven cualquier CUIT registrado ante AFIP como empleador."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_11: {
        mensaje: [
            "Sí. La cantidad de empleados no es un impedimento."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_12: {
        mensaje: [
            "No, no hay límite de adhesiones."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    empleojoven_empresas_14: {
        mensaje: [
            "Sí. Debe tener entre 18 y 30 al momento de la adhesión."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_empresas_15: {
        mensaje: [
            "Sí. En ese caso, se reintegrará sólo lo abonado en el lapso en que se mantuvo la relación laboral."
        ],
        opciones: [
            { text: VOLVER_EMPRESAS, next: "empleojoven_tengoempresa_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    }
}