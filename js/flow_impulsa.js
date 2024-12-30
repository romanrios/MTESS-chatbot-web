import { VOLVER } from "./const.js";

export const flow_impulsa = {
    impulsa: {
        mensaje: ["Sección de Ayuda de Impulsa:"],
        opciones: [
            { text: "¿Qué es Impulsa?", next: "impulsa_quees" },
            { text: "Oferta formativa", next: "impulsa_oferta" },
            { text: "Postular una capacitación", next: "impulsa_postular" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    impulsa_quees: {
        mensaje: [
            "<b>Impulsa</b> es un programa del gabinete productivo de la Provincia de Santa Fe que busca fortalecer el sector productivo local a través de capacitaciones específicas. Su objetivo es preparar a los santafesinos con habilidades que respondan a las necesidades del mercado laboral y potencien las economías regionales.",
            "La iniciativa mejora la empleabilidad al alinear la formación con las demandas del sector privado, optimizando las matrices productivas y enfocándose en áreas estratégicas clave del territorio provincial.",
            "En colaboración con los Ministerios de Educación, Desarrollo Productivo y Trabajo, Empleo y Seguridad Social, se ofrece una amplia variedad de capacitaciones con certificación oficial en toda la provincia, apoyadas por recursos y espacios de aprendizaje continuo.",
            "Conocé todo sobre este programa ingresando en este <a href='https://www.santafe.gob.ar/ms/impulsa/' target='_blank'>👉 Enlace</a>"
        ],
        opciones: [
            { text: "Volver a Impulsa", next: "impulsa" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    impulsa_oferta: {
        mensaje: ["Para conocer toda la oferta formativa vigente ingresá en este <a href='https://www.santafe.gob.ar/ms/impulsa/oferta-formativa-completa/' target='_blank'>👉&nbsp;Enlace</a>"],
        opciones: [
            { text: "Volver a Impulsa", next: "impulsa" },
            { text: VOLVER, next: "inicio" }
        ]
    },
    impulsa_postular: {
        mensaje: ["Para postular una capacitación ingresá en este <a href='https://twww.santafe.gob.ar/simtyss/portalempleo/?menu_subportales/ver_info_programa/1/' target='_blank'>👉&nbsp;Enlace</a> (Sección <b>Santa Fe Capacita</b>)"],
        opciones: [
            { text: "Volver a Impulsa", next: "impulsa" },
            { text: VOLVER, next: "inicio" }
        ]
    }
}