import { VOLVER } from "./const.js";
import { flow_empleojoven_faqpostulantes } from "./flow_empleojoven_faqpostulantes.js";
import { flow_empleojoven_tengoempresa } from "./flow_empleojoven_tengoempresa.js";

export const flow_empleojoven = {
    empleojoven: {
        mensaje: [
            "Sección de Ayuda de Empleo Joven:"
        ],
        opciones: [
            { text: "¿Qué es Empleo Joven?", next: "empleojoven_quees" },
            { text: "¿Cuáles son los requisitos?", next: "empleojoven_requisitos" },
            { text: "¿Cómo hago para registrarme y cargar mi CV?", next: "empleojoven_registro" },
            { text: "Avisos laborales", next: "empleojoven_avisos" },
            { text: "Preguntas Frecuentes", next: "empleojoven_faqpostulantes" },
            { text: "Tengo una empresa", next: "empleojoven_tengoempresa" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    empleojoven_quees: {
        mensaje: [
            "<b>Empleo Joven®</b> es un programa provincial de intermediación laboral entre personas y empresas que busca favorecer la inserción y estabilidad laboral de las personas, brindando un estímulo económico a la contratación laboral registrada.",
            "De esta forma, también acompañamos a quienes producen y generan empleo en todo el territorio provincial.",
            "El estímulo económico es el equivalente al 85% del Salario Mínimo Vital y Móvil y el beneficio se extiende de 4 a 6 meses.",
            "Si estás buscando empleo, o si estás buscando personal, registrate en el portal accediendo a este <a href='https://www.santafe.gob.ar/simtyss/portalempleo/?home/' target='_blank'>👉&nbsp;Enlace</a>"
        ],
        opciones: [
            { text: "Volver a Empleo Joven", next: "empleojoven" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    empleojoven_requisitos: {
        mensaje: [
            "• Personas entre 18 y 30 años, inclusive.<br>• Residan en forma permanente en la Provincia de Santa Fe.<br>• Hayan completado el nivel secundario formal obligatorio, o se encuentren terminando sus estudios, o suscriban, en su caso, compromiso de continuación de sus estudios.<br>• La persona se debe encontrar en situación de desempleo.<br>• Trabajadores con discapacidad: Deben contar con el certificado que se expide en el marco de la Ley Nº 22.431."
        ],
        opciones: [
            { text: "Volver a Empleo Joven", next: "empleojoven" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    empleojoven_registro: {
        mensaje: [
            "El ingreso al portal es a través de ID Ciudadana.",
            "<b>¿Qué es la ID Ciudadana?</b> Es el sistema de Identificación Digital del Gobierno de la Provincia de Santa Fe que permite a los ciudadanos registrarse como Usuarios para el uso de sus sistemas informáticos y el acceso a servicios digitales. Al concluir el proceso de registro, obtendrás un usuario y contraseña única para acceder a diversos Sistemas de la Provincia (ejemplo: Libreta digital, Aula Virtual, Portal de Autogestión, Boleto educativo gratuito, Turnos, Firma Digital, etc.).",
            "<b>No tengo ID Ciudadana:</b> Podrás gestionarla rápidamente y de manera 100% online <a href='https://www.santafe.gob.ar/idciudadana/registro/' target='_blank'>ingresando aquí.</a>",
            "<b>Ya tengo mi ID Ciudadana:</b> Simplemente hacé click en Iniciar Sesión > Soy Postulante, y podrás autenticarte con tu ID Ciudadana.",
            "Una vez que te hayas autenticado, tendrás que completar un sencillo formulario con tu curriculum vitae (CV). Una vez hayas cargado tu CV, tu registro estará finalizado y podrás postularte a avisos de puestos de trabajo vacantes."
        ],
        opciones: [
            { text: "Volver a Empleo Joven", next: "empleojoven" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    empleojoven_avisos: {
        mensaje: ["Para ver las ofertas laborales ingresá en este <a href='https://www.santafe.gob.ar/simtyss/portalempleo/?home/' target='_blank'>👉 Enlace</a>  y seleccioná la opción Postulantes. Para poder postularte tenés que estar registrado."],
        opciones: [
            { text: "Volver a Empleo Joven", next: "empleojoven" },
            { text: VOLVER, next: "inicio" }
        ]
    },

    ...flow_empleojoven_faqpostulantes,

    ...flow_empleojoven_tengoempresa

} 