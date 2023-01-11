import { atualizaTextoEditor } from "./document.js";

const socket = io();

function emitorTextoEditor(text) {
    socket.emit("texto_editor", text);
}

socket.on("texto_editor_clientes", (text) => {
    atualizaTextoEditor(text);
});

export { emitorTextoEditor };