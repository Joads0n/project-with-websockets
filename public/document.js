import { emitorTextoEditor } from "./socket-front-document.js";

const textEditor = document.getElementById("editor-texto");

textEditor.addEventListener("keyup", () => {
    emitorTextoEditor(textEditor.value);
});

function atualizaTextoEditor(text) {
    textEditor.value = text;
}

export { atualizaTextoEditor };