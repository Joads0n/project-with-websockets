import express from "express";
import url from "url";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const pathCurrent = url.fileURLToPath(import.meta.url);
const dirPublic = path.join(pathCurrent, "../..", "public");

app.use(express.static(dirPublic));

app.listen(port, () => {
    console.log(`SERVE ON PORT ${port}`);
})