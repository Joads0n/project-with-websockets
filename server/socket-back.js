import recordEventsBegin from "./recordEvents/home.js";
import recordEventsDocument from "./recordEvents/document.js";
import recordEventsRegister from "./recordEvents/register.js";
import recordEventsLogin from "./recordEvents/login.js";

import io from "./server.js";

io.on("connection", (socket) => {
    recordEventsRegister(socket, io);
    recordEventsLogin(socket, io);
    recordEventsBegin(socket, io);
    recordEventsDocument(socket, io);
});