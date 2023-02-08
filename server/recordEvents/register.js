import { registryUser } from "../database/usersDB.js";

function recordEventsRegister(socket, io) {
    socket.on("cadastrar_usuario", async (data) => {
        const result = await registryUser(data);
    });
}

export default recordEventsRegister;