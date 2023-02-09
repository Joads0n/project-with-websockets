import { obterDocumentos, adicionarDocumento, encontrarDocumento } from "../database/documentosDb.js";
import { findUser } from "../database/usersDB.js";
import authenticateUser from "./authenticateUser.js";

function recordEventsLogin(socket, io) {
    socket.on('autenticar_usuario', async (data) => {
        const user = await findUser(data.user);

        if (user) {
            const authenticated = authenticateUser(data.passworld, user);
            if (authenticated) {
                socket.emit("autenticacao_sucesso");
            } else {
                socket.emit("autenticacao_erro");
            }
        } else {
            socket.emit("usuario_nao_encontrado");
        }
    });
}

export default recordEventsLogin;