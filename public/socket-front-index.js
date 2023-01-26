import { inserirLinksDocumento } from "./index.js";

const socket = io();

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

export { emitirAdicionarDocumento };