import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;

const pathCurrent = url.fileURLToPath(import.meta.url);
const dirPublic = path.join(pathCurrent, "../..", "public");

app.use(express.static(dirPublic));

const serverHttp = http.createServer(app);

serverHttp.listen(port, () => {
    console.log(`SERVE ON PORT ${port}`);
});

const io = new Server(serverHttp);

io.on("connection", () => {
    console.log('um cliente se conectou!');
})