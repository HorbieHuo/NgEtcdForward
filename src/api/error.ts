import { IncomingMessage, ServerResponse } from "http";
import { BaseHandler } from "../basehandler";

export function On404(req: IncomingMessage, res: ServerResponse) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({message: "page not found"}));
}

export class Exception_404 extends BaseHandler {
    constructor() {
        super()
    }

    protected get(req: IncomingMessage, res: ServerResponse) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: "page not found"}));
    }
}