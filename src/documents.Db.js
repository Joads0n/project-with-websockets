import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function encontrarDocumento(name) {
    const document = documentosColecao.findOne({ name });

    return document;
}

function atualizaDocumento(name, text) {
    const atualizacao = documentosColecao.updateOne({ name }, { $set : { text } })
    return atualizacao;
}

export { obterDocumentos, encontrarDocumento, atualizaDocumento };