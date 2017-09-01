import { IncomingMessage, ServerResponse } from "http";
import { BaseHandler } from "../basehandler";

export class EtcdApi extends BaseHandler {
    constructor() {
        super();
    }

    protected get(req: IncomingMessage, res: ServerResponse) {
        console.log("etcd api get .....");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: "etcd api get"}));
    }

    protected put(req: IncomingMessage, res: ServerResponse) {}
}