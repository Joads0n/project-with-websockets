import { emitirAutenticarUsuario } from "./socket-front-login.js";

const form = document.getElementById("form-login");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = form["input-usuario"].value;
    const passworld = form["input-senha"].value;

    emitirAutenticarUsuario({ user, passworld });
});