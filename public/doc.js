const socket = io();

const textEditor = document.getElementById("editor-texto");

textEditor.addEventListener("keyup", () => {
    socket.emit("texto_editor", textEditor.value);
});

socket.on("texto_editor_clientes", (text) => {
    textEditor.value = text;
})