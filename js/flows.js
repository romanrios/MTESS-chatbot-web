
import { VOLVER } from "./const.js";
import { flow_empleojoven } from "./flow_empleojoven.js";
import { flow_impulsa } from "./flow_impulsa.js";
import { flow_practicas } from "./flow_practicas.js";

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
  ...flow_impulsa,

  // Empleo Joven
  ...flow_empleojoven,

  // Prácticas Laborales Formativas
  ...flow_practicas,

  // Otras consultas
  otra: {
    mensaje: [
      "Para realizar una consulta personalizada vía Whatsapp, ingresá al siguiente <a href='https://wa.me/5493425310158' target='_blank'>👉&nbsp;Enlace</a>"
    ],
    opciones: [
      { text: VOLVER, next: "inicio" }
    ]
  }
};