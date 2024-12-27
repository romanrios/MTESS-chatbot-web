import { VOLVER } from "./const.js";
import { flow_empleojoven_tengoempresa_faq } from "./flow_empleojoven_tengoempresa_faq.js";

export const flow_empleojoven_tengoempresa = {
    empleojoven_tengoempresa: {
        mensaje: ["Sección de ayuda de Empleo Joven para Empresas: "],
        opciones: [
            { text: "Requisitos Empresas", next: "empleojoven_tengoempresa_requisitos" },
            { text: "¿Cómo hago para registrarme?", next: "empleojoven_tengoempresa_registro" },
            { text: "Preguntas Frecuentes Empresas", next: "empleojoven_tengoempresa_faq" },
            { text: "Volver a Empleo Joven", next: "empleojoven" }
        ]
    },

    empleojoven_tengoempresa_requisitos: {
        mensaje: [
            "• Empleadores del sector privado de cualquier actividad económica.<br>• No tengan sanciones en los últimos dos años por violación a la normativa laboral. Salvo, que teniéndolas las hayan cancelado o bien tengan un convenio de pago vigente. <br>• No hayan realizado despidos colectivos dentro de los seis meses previos a la solicitud de adhesión. <br> • No hayan tenido con el beneficiario relación laboral previa en los últimos tres (3) meses.<br>• No se encuentren cobrando beneficios de otros organismos relacionados al trabajador beneficiario por el presente programa.<br>• El empleador deberá estar inscripto y con sus datos actualizados en el registro de SIPAF que posee el MTEySS. A tal efecto, se deberá cumplimentar el <a href='https://www.santafe.gob.ar/simtyss/portalempleo/pdfs/Formulario_Inscripci%C3%B3n_Actualizaci%C3%B3n_SIPAF_2024.pdf?v=20240228' target='_blank'>formulario</a> de SIPAF junto con la documentación que se detalla en el presente <a href='https://www.santafe.gob.ar/simtyss/portalempleo/pdfs/Instructivo_SIPAF_2024.pdf' target='_blank'>instructivo</a>.<br>• <a href='https://www.santafe.gob.ar/simtyss/portalempleo/pdfs/Terminos_condiciones_EmpleoJoven.pdf?v=20240227' target='_blank'>Leer términos y condiciones completo</a>"
        ],
        opciones: [
            { text: "Volver a Empleo Joven - Empresas", next: "empleojoven_tengoempresa" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    empleojoven_tengoempresa_registro: {
        mensaje: [
            "Las empresas ingresan al portal autenticándose con Clave Fiscal de AFIP.",
            '<b>Si aún no adheriste al servicio "Portal Empleo" en AFIP:</b>',
            "Podrás encontrar el servicio en:<br>• Administrador de relaciones<br>• Adherir Servicio<br>• Botón API - Administración Provincial de Impuestos - Provincia de Santa Fe<br>• Opción Servicios Interactivos<br>• Servicio: Trabajo - SANTA FE - Capacitación y Formación Profesional",
            "<b>Si ya adheriste al servicio en AFIP:</b>",
            "• Simplemente hacé click en Iniciar Sesión > Soy Empresa. Te redirigiremos al portal de AFIP para autenticarte con clave fiscal.",
            "• Una vez autenticado en AFIP, si tenés varios CUITs delegados, elegís con cual operar.",
            "Si es el primer ingreso al portal, te pediremos que confirmes que la información de tu empresa es correcta, e ingreses un email de contacto. Una vez completado este último paso, podrás comenzar a buscar postulantes y ofrecer puestos vacantes."
        ],
        opciones: [
            { text: "Volver a Empleo Joven - Empresas", next: "empleojoven_tengoempresa" },
            { text: VOLVER, next: "inicio" }
        ]
    },

...flow_empleojoven_tengoempresa_faq


   
}