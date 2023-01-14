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
    
    socket.on('selecionar_documento', nameDocument => {
        const document = encontrarDocumento(nameDocument)
        console.log(document);
        socket.join(nameDocument);
    })
    socket.on("texto_editor", ({ text, nameDocument }) => {
        // socket.broadcast.emit("texto_editor_clientes", text);

        socket.to(nameDocument).emit('texto_editor_clientes', text);
    });
});

function encontrarDocumento(name) {
    const document = documents.find((document) => {
        return document.nome === name;
    });

    return document;
}

