import recordEventsBegin from "./recordEvents/home.js";
import recordEventsDocument from "./recordEvents/document.js";
import recordEventsRegister from "./recordEvents/register.js";
import io from "./server.js";

io.on("connection", (socket) => {
    recordEventsBegin(socket, io);
    recordEventsDocument(socket, io);
    recordEventsRegister(socket, io);
});