import { registryUser, findUser } from "../database/usersDB.js";

function recordEventsRegister(socket, io) {
    socket.on("cadastrar_usuario", async (data) => {
        const user = await findUser(data.user);
        
        if (user === null) {
            const result = await registryUser(data);
            
            if (result.acknowledged) {
                socket.emit("cadastro_sucesso");
            } else {
                socket.emit("cadastro_erro");
            }
        } else {
            socket.emit("usuario_ja_existente");
        }
    });
}

export default recordEventsRegister;