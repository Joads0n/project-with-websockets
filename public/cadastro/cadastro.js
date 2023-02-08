import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = form["input-usuario"].value;
    const passworld = form["input-senha"].value;

    emitirCadastrarUsuario({ user, passworld });
});