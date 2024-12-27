import { VOLVER } from "./const.js";

export const flow_practicas = {
    practicas: {
        mensaje: ["Sección de ayuda de Prácticas Laborales Formativas:"],
        opciones: [
            { text: "¿Qué es Prácticas Laborales Formativas?", next: "practicas_quees" },
            { text: "¿Cuáles son los requisitos?", next: "practicas_requisitos" },
            { text: "¿Cómo se gestiona?", next: "practicas_gestion" },
            { text: "Preguntas Frecuentes", next: "practicas_faq" },
            { text: VOLVER, next: "inicio" }
        ]
    },


    practicas_quees: {
        mensaje: [
            "A través del programa de <b>Prácticas Laborales Formativas</b> los santafesinos podrán transitar una instancia de capacitación en un ámbito de trabajo real durante un plazo determinado, adquiriendo así conocimientos, competencias y habilidades que mejoren sus condiciones de empleabilidad, mientras perciben por ello un estímulo económico equivalente al 50% del Salario Mínimo Vital y Móvil a cargo del Gobierno de la Provincia de Santa Fe, por un período de hasta 6 meses.",
            "Si tenés una empresa, un comercio o un emprendimiento y querés solicitar el programa Prácticas Laborales Formativas ingresá en este <a href='https://www.santafe.gob.ar/trabdigno/login' target='_blank'>👉&nbsp;Enlace</a>"
        ],
        opciones: [
            { text: "Volver a Prácticas Laborales Formativas", next: "practicas" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    practicas_requisitos: {
        mensaje: [
            "<b>Requisitos de la entidad</b><br/>• Contratar un seguro de accidentes personales.<br/>• Proporcionar el acompañamiento de un tutor.<br/>• Contar con instalaciones habilitadas, con insumos y herramientas necesarias.<br/>• Cumplir con las normas de higiene y seguridad.<br/>• En caso de persona humana, estar empadronado en Monotributo con categoría B como mínima.",
            "<b>Requisitos del practicante</b><br/>• Ser mayor de 18 años.<br/>• Residir en la Provincia de Santa Fe.<br/>• Encontrarse en situación de desempleo.<br/>• También podrán ser practicantes las personas empadronadas en Monotributo con categoría A como máximo."
        ],
        opciones: [
            { text: "Volver a Prácticas Laborales Formativas", next: "practicas" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    practicas_gestion: {
        mensaje: [
            "Las postulaciones deben ser realizadas por las empresas una vez que hayan identificado al practicante a incorporar.",
            "Para gestionar un proyecto de práctica laboral formativa, primero se debe realizar la registración en este <a href='https://www.santafe.gob.ar/trabdigno/login/menu' target='_blank'>👉 Enlace</a> <br/> Luego, la entidad encargada debe cargar el proyecto antes del día 20 de cada mes. Después, el proyecto será evaluado y, si es aprobado, la práctica comenzará el primer día hábil del mes siguiente."
        ],
        opciones: [
            { text: "Volver a Prácticas Laborales Formativas", next: "practicas" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    practicas_faq: {
        mensaje: [
            "Podés realizar una consulta personalizada vía WhatsApp ingresando al siguiente <a href='https://wa.me/5493425310158' target='_blank'>👉&nbsp;Enlace</a>"
        ],
        opciones: [
            { text: "Volver a Prácticas Laborales Formativas", next: "practicas" },
            { text: VOLVER, next: "inicio" }
        ]
    }
}