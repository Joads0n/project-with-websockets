import io from "./server.js";

const documents = [
    {
        nome: "JavaScript",
        text: "texto de javascript..."
    },
    {
        nome: "Node",
        text: "texto de node..."
    },
    {
        nome: "Socket.io",
        text: "texto de socket.io..."
    },
];

io.on("connection", (socket) => {
    console.log('um cliente se conectou! ID:', socket.id);
    
    socket.on('selecionar_documento', (nameDocument, devolverTexto) => {
        socket.join(nameDocument);

        const document = encontrarDocumento(nameDocument)
        if(document) {
            // socket.emit("text_document", document.text);

            devolverTexto(document.text);
        }
    })
    socket.on("texto_editor", ({ text, nameDocument }) => {
        const document = encontrarDocumento(nameDocument);

        if (document) {
            document.text = text;
            socket.to(nameDocument).emit('texto_editor_clientes', text);
        }
        
        // socket.broadcast.emit("texto_editor_clientes", text);
    });
});

function encontrarDocumento(name) {
    const document = documents.find((document) => {
        return document.nome === name;
    });

    return document;
}

