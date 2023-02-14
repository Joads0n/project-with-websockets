import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { getCookie, removeCookie } from "./utils/cookies.js";

const tokenJwt = getCookie("tokenJwt");

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
const logoutButton = document.getElementById("botao-logout"); 

logoutButton.addEventListener("click", () => {
    removeCookie("tokenJwt");
    alert("Usuário deslogado com sucesso");
    window.location.href = "/login/index.html";
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    emitirAdicionarDocumento(inputDocumento.value);
    inputDocumento.value = "";
});

function inserirLinksDocumento(nomeDocumento) {
    listaDocumentos.innerHTML += `
        <a
            href="documento/index.html?nome=${nomeDocumento}"
            class="list-group-item list-group-item-action"
            id="documento-${nomeDocumento}"
        >
            ${nomeDocumento}
        </a>
    `;
}

function removerLinkDocumento(nameDocument) {
    const documento = document.getElementById(`documento-${nameDocument}`);
    listaDocumentos.removeChild(documento);
}

export { inserirLinksDocumento, removerLinkDocumento };