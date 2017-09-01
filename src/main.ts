import * as http from "http";
import { RouterInst } from "./urls_";

let host = "127.0.0.1";
let port = 9999;
let router = RouterInst();

let httpServer = http.createServer((req, res) => {
    console.log(req.url);
    let handler = router.Get(req.url);
    handler.Dispatch(req, res);
    // res.statusCode=200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end("Hello Typescript On Node.js\n");
});

httpServer.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});