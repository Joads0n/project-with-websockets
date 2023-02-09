import { registryUser } from "../database/usersDB.js";

function recordEventsRegister(socket, io) {
    socket.on("cadastrar_usuario", async (data) => {
        const result = await registryUser(data);

        if (result.acknowledged) {
            socket.emit("cadastro_sucesso");
        } else {
            socket.emit("cadastro_erro");
        }
    });
}

export default recordEventsRegister;