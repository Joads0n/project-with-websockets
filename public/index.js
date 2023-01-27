import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    emitirAdicionarDocumento(inputDocumento.value);
    inputDocumento.value = "";
});

function inserirLinksDocumento(nomeDocumento) {
    listaDocumentos.innerHTML += `
        <a
            href="documento.html?nome=${nomeDocumento}"
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