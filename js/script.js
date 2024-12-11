let flows;

document.addEventListener("DOMContentLoaded", async () => {
    flows = await fetch("./js/flows.json").then(response => response.json());
    startChat("inicioBienvenida");
});

function startChat(flowName) {
    const flow = flows[flowName];
    if (Array.isArray(flow.mensaje)) {
        // Llama a displayMultipleMessages con un callback para mostrar las opciones
        displayMultipleMessages(flow.mensaje, 0, () => {
            displayOptions(flow.opciones);
        });
    } else {
        displayMessage("bot", flow.mensaje);
        displayOptions(flow.opciones);
    }
}

function displayMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Añadir animación para los mensajes
    if (sender == "user") {
        messageElement.classList.add("transparent");
    } else {
        setTimeout(() => { messageElement.classList.add("visible"); }, 1000);
    }
}

function displayMultipleMessages(messages, index = 0, callback = null) {
    if (index < messages.length) {
        displayMessage("bot", messages[index]);
        setTimeout(() => {
            displayMultipleMessages(messages, index + 1, callback);
        }, 1000); // Intervalo entre mensajes en milisegundos
    } else if (callback) {
        callback(); // Llama al callback después de mostrar todos los mensajes
    }
}
function displayOptions(options) {
    const chatBox = document.getElementById("chat-box");
    options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.onclick = () => handleOption(option.text, option.next);
        chatBox.appendChild(optionElement);

        // Añadir animación para las opciones
        setTimeout(() => { optionElement.classList.add("visible"); }, 1000);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleOption(selectedText, nextFlow) {
    clearOptions();
    displayMessage("user", selectedText);
    startChat(nextFlow);
}

function clearOptions() {
    const chatBox = document.getElementById("chat-box");
    const options = chatBox.querySelectorAll(".option");
    options.forEach(option => option.remove());
}




// SEND MESSAGE

// Agregar evento para enviar mensaje con Enter
document.getElementById("user-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById("user-input");
    const userMessage = input.value.trim().toLowerCase(); // Convertir a minúsculas para comparación

    // Validar que el mensaje no esté vacío
    if (userMessage === "") return;

    // Mostrar el mensaje del usuario en el chat
    displayMessage("user", input.value);

    // Limpiar el campo de entrada
    input.value = "";

    // Eliminar las opciones actuales
    clearOptions();

    // Verificar si el mensaje contiene "hola"
    if (userMessage.includes("hola")) {
        // Mostrar saludo personalizado
        displayMessage("bot", "¡Hola! Es un gusto ayudarte. Si bien no puedo responder consultas personalizadas, cuento con mucha información útil que puedes explorar seleccionando las opciones disponibles.");
        startChat("inicio");
        return; // Terminar ejecución después de mostrar saludo y opciones
    }

    // Buscar flujo de respuesta o usar el predeterminado
    const flow = flows["defaultResponse"]; // Cambiar según lógica específica si es necesario

    if (flow) {
        if (Array.isArray(flow.mensaje)) {
            displayMultipleMessages(flow.mensaje, 0, () => {
                displayOptions(flow.opciones);
            });
        } else {
            displayMessage("bot", flow.mensaje);
            displayOptions(flow.opciones);
        }
    } else {
        // Si no existe el flujo predeterminado, ofrece las opciones del inicio
        displayMessage("bot", "Si bien no puedo responder consultas personalizadas, cuento con mucha información útil que puedes explorar seleccionando las opciones disponibles.");
        startChat("inicio");
    }
}
