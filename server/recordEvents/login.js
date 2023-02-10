import { findUser } from "../database/usersDB.js";
import generateJwt from "../utils/generateJwt.js";
import authenticateUser from "./authenticateUser.js";

function recordEventsLogin(socket, io) {
    socket.on('autenticar_usuario', async (data) => {
        const user = await findUser(data.user);

        if (user) {
            const authenticated = authenticateUser(data.passworld, user);
            if (authenticated) {
                const tokenjwt = generateJwt({ nameUser: data.user});
                socket.emit("autenticacao_sucesso", tokenjwt);
            } else {
                socket.emit("autenticacao_erro");
            }
        } else {
            socket.emit("usuario_nao_encontrado");
        }
    });
}

export default recordEventsLogin;