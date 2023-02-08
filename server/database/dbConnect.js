import * as dotenv from 'dotenv';
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(`mongodb+srv://joadson:${process.env.PASSWORLD}@alura.er1r1.mongodb.net/?retryWrites=true&w=majority`);

let documentosColecao, usersCollection;

try {
    await client.connect();
    const db = client.db('alura-websockets');
    documentosColecao = db.collection("documentos");
    usersCollection = db.collection("users");
    
    console.log("Conectado ao banco de dados com sucesso!")
} catch (error) {
    console.log(error);
}

export { documentosColecao, usersCollection };
