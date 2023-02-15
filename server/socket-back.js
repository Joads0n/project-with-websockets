import recordEventsBegin from "./recordEvents/home.js";
import recordEventsDocument from "./recordEvents/document.js";
import recordEventsRegister from "./recordEvents/register.js";
import recordEventsLogin from "./recordEvents/login.js";

import io from "./server.js";
import authorizeUser from "./middlewares/authorizeUser.js";

const namespaceUsers = io.of("/usuarios")

namespaceUsers.use(authorizeUser);
namespaceUsers.on("connection", (socket) => {
    recordEventsBegin(socket, namespaceUsers);
    recordEventsDocument(socket, namespaceUsers);
});

io.of("/").on("connection", (socket) => {
    recordEventsRegister(socket, io);
    recordEventsLogin(socket, io);
});