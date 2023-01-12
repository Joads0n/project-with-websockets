import { atualizaTextoEditor } from "./document.js";

const socket = io();

function selecionarDocumento(name) {
    socket.emit('selecionar_documento', name);
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (text) => {
    atualizaTextoEditor(text);
});

export { emitirTextoEditor, selecionarDocumento };