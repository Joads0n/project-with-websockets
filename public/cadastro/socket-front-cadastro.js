const socket = io();

function emitirCadastrarUsuario(data) {
    socket.emit("cadastrar_usuario", data);
}

socket.on("cadastro_sucesso", () => {
    alert("Cadastro realizado com sucesso");
});

socket.on("cadastro_erro", () => {
    alert("Erro no cadastro");
});

export { emitirCadastrarUsuario };