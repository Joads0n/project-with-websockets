import { emitirTextoEditor, selecionarDocumento } from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search);
const nameDocument = params.get('nome');

const textEditor = document.getElementById("editor-texto");
const titleDocument = document.getElementById('titulo-documento');

titleDocument.textContent = nameDocument || 'Documento sem título';

selecionarDocumento(nameDocument);

textEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        text: textEditor.value,
        nameDocument
    });
});

function atualizaTextoEditor(text) {
    textEditor.value = text;
}

export { atualizaTextoEditor };