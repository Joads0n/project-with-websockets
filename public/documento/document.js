import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search);
const nameDocument = params.get('nome');

const textEditor = document.getElementById("editor-texto");
const titleDocument = document.getElementById('titulo-documento');
const botaoExcluir = document.getElementById("excluir-documento");

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

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nameDocument);
});

function alertarERedirecionar(name) {
    if (name === nameDocument) {
        alert(`Documento ${name} excluído!`);
        window.location.href = "/";
    }
}

export { atualizaTextoEditor, alertarERedirecionar };