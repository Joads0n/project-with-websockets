import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function adicionarDocumento(name) {
    const resultado = documentosColecao.insertOne({ name, text: "" });
    return resultado;
}

function encontrarDocumento(name) {
    const document = documentosColecao.findOne({ name });

    return document;
}

function atualizaDocumento(name, text) {
    const atualizacao = documentosColecao.updateOne({ name }, { $set : { text } })
    return atualizacao;
}

export { obterDocumentos, adicionarDocumento, encontrarDocumento, atualizaDocumento };