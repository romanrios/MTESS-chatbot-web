let flows;

document.addEventListener("DOMContentLoaded", async () => {
    flows = await fetch("flows.json").then(response => response.json());
    startChat("inicio");
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
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Añadir animación para los mensajes
    if (sender == "user") {
        messageElement.classList.add("visible");
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
