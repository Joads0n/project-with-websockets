import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(name) {
    const document = documentosColecao.findOne({ name });

    return document;
}

function atualizaDocumento(name, text) {
    const atualizacao = documentosColecao.updateOne({ name }, { $set : { text } })
    return atualizacao;
}

export { encontrarDocumento, atualizaDocumento };