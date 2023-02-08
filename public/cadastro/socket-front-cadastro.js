const socket = io();

function emitirCadastrarUsuario(data) {
    socket.emit("cadastrar_usuario", data);
}

export { emitirCadastrarUsuario };