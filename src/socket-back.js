import io from "./server.js";

io.on("connection", (socket) => {
    console.log('um cliente se conectou! ID:', socket.id);
    
    socket.on('selecionar_documento', nameDocument => {
        socket.join(nameDocument);
    })
    socket.on("texto_editor", ({ text, nameDocument }) => {
        // socket.broadcast.emit("texto_editor_clientes", text);

        socket.to(nameDocument).emit('texto_editor_clientes', text);
    });
});

