import { obterDocumentos, adicionarDocumento, atualizaDocumento, encontrarDocumento, excluirDocumento } from "./database/documentosDb.js";
import io from "./server.js";

io.on("connection", (socket) => {

    socket.on('obter_documentos', async (devolverDocumentos) => {
        const documentos = await obterDocumentos();
        devolverDocumentos(documentos);
    });

    socket.on('adicionar_documento', async (nome) => {
        const documentoExiste = (await encontrarDocumento(nome)) !== null;

        if (documentoExiste) {
            socket.emit("documento_existente", nome);
        } else {
            const resultado = await adicionarDocumento(nome)
            
            if (resultado.acknowledged) {
                io.emit("adicionar_documento_interface", nome);
            }
        }
    });
    
    socket.on('selecionar_documento', async (nameDocument, devolverTexto) => {
        socket.join(nameDocument);

        const document = await encontrarDocumento(nameDocument)
        
        if (document) {
            // socket.emit("text_document", document.text);

            devolverTexto(document.text);
        }
    });

    socket.on("texto_editor", async ({ text, nameDocument }) => {
        const atualizacao = await atualizaDocumento(nameDocument, text);

        if (atualizacao.modifiedCount) {
            socket.to(nameDocument).emit('texto_editor_clientes', text);
        }
        
        // socket.broadcast.emit("texto_editor_clientes", text);
    });

    socket.on("excluir_documento", async (nameDocument) => {
        const resultado = await excluirDocumento(nameDocument);
        
        if (resultado.deletedCount) {
            io.emit("excluir_documento_sucesso", nameDocument);
        }
    });
});