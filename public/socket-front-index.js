import { inserirLinksDocumento, removerLinkDocumento } from "./index.js";
import { getCookie } from "./utils/cookies.js";

const socket = io("/usuarios", {
    auth: {
        token: getCookie("tokenJwt")
    }
});

socket.on("connect_error", (error) => {
    alert(error);
    window.location.href = "/login/index.html";
});

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach(documento => {
        inserirLinksDocumento(documento.name);
    });
});

function emitirAdicionarDocumento(nome) {
    socket.emit("adicionar_documento", nome);
}

socket.on("adicionar_documento_interface", (nome) => {
    inserirLinksDocumento(nome)
});

socket.on("documento_existente", (nome) => {
    alert(`O documento ${nome} já existe!`);
});

socket.on("excluir_documento_sucesso", (nameDocument) => {
    removerLinkDocumento(nameDocument);
});

export { emitirAdicionarDocumento };