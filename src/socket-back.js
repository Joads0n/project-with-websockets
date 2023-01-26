import { atualizaDocumento, encontrarDocumento } from "./documents.Db.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log('um cliente se conectou! ID:', socket.id);
    
    socket.on('selecionar_documento', async (nameDocument, devolverTexto) => {
        socket.join(nameDocument);

        const document = await encontrarDocumento(nameDocument)
        
        if (document) {
            // socket.emit("text_document", document.text);

            devolverTexto(document.text);
        }
    })
    socket.on("texto_editor", async ({ text, nameDocument }) => {
        const atualizacao = await atualizaDocumento(nameDocument, text);

        if (atualizacao.modifiedCount) {
            socket.to(nameDocument).emit('texto_editor_clientes', text);
        }
        
        // socket.broadcast.emit("texto_editor_clientes", text);
    });
});