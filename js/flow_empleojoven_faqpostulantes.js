import { VOLVER, VOLVER_POSTULANTES } from "./const.js";

export const flow_empleojoven_faqpostulantes = {
    empleojoven_faqpostulantes: {
        mensaje: [
            "Preguntas Frecuentes Postulantes:"
        ],
        opciones: [
            { text: "Ya tenía cuenta en el Portal, pero cambió el ingreso y no puedo acceder con mi usuario y contraseña.", next: "empleojoven_postulantes_02" },
            { text: "¿Cómo me postulo a un aviso?", next: "empleojoven_postulantes_03" },
            { text: "¿Cómo busco un aviso?", next: "empleojoven_postulantes_08" },
            { text: "¿Tengo que estar registrado para ver los detalles de un aviso?", next: "empleojoven_postulantes_09" },
            { text: "¿Puedo participar de Empleo Joven más de una vez?", next: "empleojoven_postulantes_13" },
            { text: "Volver a Empleo Joven", next: "empleojoven" }
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
            { text: VOLVER_POSTULANTES, next: "empleojoven_faqpostulantes" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_postulantes_03: {
        mensaje: [
            '<b>1.</b> Para conocer la oferta de puestos vigentes, ingresá a la sección <b>Busco Trabajo</b>. (debes estar registrado y haber ingresado con tu usuario y contraseña).',
            "<b>2.</b> Podés buscar avisos filtrando la información por localidad o puesto o ver la información completa sin agregar ningún filtro. Presionando el botón <b>Buscar</b>, se mostrarán abajo los resultados de la búsqueda.",
            "<b>3.</b> Haciendo clic en <b>Ver detalle</b>, verás los requisitos del puesto y los datos de contacto de la empresa. Si el puesto se adapta a tu perfil laboral y es de tu interés, podés enviar tu CV a través de Portal de Empleo. Para ello hacé click en el botón <b>Postularme</b> (sobre el final de la página). No envíes tu CV a los avisos en los que no cumples los requisitos mínimos, ya que no serás tomado en cuenta para el puesto y puedes perder oportunidades futuras en esa empresa."
        ],
        opciones: [
            { text: VOLVER_POSTULANTES, next: "empleojoven_faqpostulantes" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    empleojoven_postulantes_08: {
        mensaje: [
            "Para conocer la oferta de puestos vigentes, ingresá a la sección <b>Busco Trabajo</b>. Podés buscar avisos filtrando la información por localidad o puesto o ver la información completa sin agregar ningún filtro. Una vez que se presiona el botón <b>Buscar</b>, se mostrarán los resultados de la búsqueda.",
            "En cada aviso se encuentra información básica del puesto publicado. Para conocer más especificaciones del puesto, se debe hacer clic en <b>Ver puesto</b>. El sistema abre entonces una ventana en la pantalla con todos los detalles del puesto de trabajo avisado por la empresa. El aviso puede ser descargado o impreso."
        ],
        opciones: [
            { text: VOLVER_POSTULANTES, next: "empleojoven_faqpostulantes" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_postulantes_09: {
        mensaje: [
            "Sí, es necesario estar registrado para ver la información completa del aviso, los datos del empleador y utilizar el servicio. Las personas que no estén registradas pueden ver los puestos vacantes pero no pueden acceder a los requisitos ni tampoco a los datos de contacto."
        ],
        opciones: [
            { text: VOLVER_POSTULANTES, next: "empleojoven_faqpostulantes" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    empleojoven_postulantes_13: {
        mensaje: [
            "No. El periodo máximo en el que podés permanecer dentro del programa es de 6 meses, o 12 si tenes discapacidad."
        ],
        opciones: [
            { text: VOLVER_POSTULANTES, next: "empleojoven_faqpostulantes" },
            { text: VOLVER, next: "inicio" }
        ]
    }
}