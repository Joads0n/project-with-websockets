import { atualizaDocumento, encontrarDocumento, excluirDocumento } from "../database/documentosDb.js";

function recordEventsDocument(socket, io) {
    socket.on('selecionar_documento', async (nameDocument, devolverTexto) => {
        socket.join(nameDocument);

        const document = await encontrarDocumento(nameDocument)

        if (document) {
            devolverTexto(document.text);
        }
    });

    socket.on("texto_editor", async ({ text, nameDocument }) => {
        const atualizacao = await atualizaDocumento(nameDocument, text);

        if (atualizacao.modifiedCount) {
            socket.to(nameDocument).emit('texto_editor_clientes', text);
        }
    });

    socket.on("excluir_documento", async (nameDocument) => {
        const resultado = await excluirDocumento(nameDocument);

        if (resultado.deletedCount) {
            io.emit("excluir_documento_sucesso", nameDocument);
        }
    });
}

export default recordEventsDocument;