import { atualizaTextoEditor } from "./document.js";

const socket = io();

function selecionarDocumento(name) {
    socket.emit('selecionar_documento', name, (text) => {
        atualizaTextoEditor(text)
    });
}

function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
}

// socket.on("text_document", (text) => {
//     atualizaTextoEditor(text);
// });

socket.on("texto_editor_clientes", (text) => {
    atualizaTextoEditor(text);
});

export { emitirTextoEditor, selecionarDocumento };