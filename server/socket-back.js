import recordEventsBegin from "./recordEvents/recordEventsBegin.js";
import recordEventsDocument from "./recordEvents/recordEventsDocument.js";
import recordEventsRegister from "./recordEvents/recordEventsRegister.js";
import io from "./server.js";

io.on("connection", (socket) => {
    recordEventsBegin(socket, io);
    recordEventsDocument(socket, io);
    recordEventsRegister(socket, io);
});