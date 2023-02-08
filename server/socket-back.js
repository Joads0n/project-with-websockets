import recordEventsBegin from "./recordEvents/recordEventsBegin.js";
import recordEventsDocument from "./recordEvents/recordEventsDocument.js";
import io from "./server.js";

io.on("connection", (socket) => {
    recordEventsBegin(socket, io);
    recordEventsDocument(socket, io);  
});