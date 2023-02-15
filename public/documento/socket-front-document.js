import { getCookie } from "../utils/cookies.js";
import { alertarERedirecionar, atualizaTextoEditor } from "./document.js";

const socket = io("/usuarios", {
    auth: {
        token: getCookie("tokenJwt")
    }
});

socket.on("connect_error", (error) => {
    alert(error);
    window.location.href = "/login/index.html";
});

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

function emitirExcluirDocumento(name) {
    socket.emit("excluir_documento", name);
};

socket.on("excluir_documento_sucesso", (nameDocument) => {
    alertarERedirecionar(nameDocument);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };