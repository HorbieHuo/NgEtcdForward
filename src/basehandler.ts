import { IncomingMessage, ServerResponse } from "http";
import { URL } from "url";

export class BaseHandler {
    constructor() {}

    public Dispatch(req: IncomingMessage, res: ServerResponse) {
        let method = req.method;
        switch (method) {
            case "GET": {
                this.get(req, res);
                break;
            }
            case "POST": {
                this.post(req, res);
                break;
            }
            case "PUT": {
                this.put(req, res);
                break;
            }
            case "DELETE": {
                this.delete(req, res);
                break;
            }
            default: {
                this.defaultHandler(req, res);
                break;
            }
        }
    }

    protected getUrlInfo(req: IncomingMessage): URL | undefined {
        if (req.url) {
            const urlInfo = new URL(req.url);
            return urlInfo; 
        }
        return undefined;
    }

    protected defaultHandler(req: IncomingMessage, res: ServerResponse) {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: "Method Not Allowed"}));
    }

    protected get(req: IncomingMessage, res: ServerResponse) {
        this.defaultHandler(req, res);
    }

    protected post(req: IncomingMessage, res: ServerResponse) {
        this.defaultHandler(req, res);
    }

    protected put(req: IncomingMessage, res: ServerResponse) {
        this.defaultHandler(req, res);
    }

    protected delete(req: IncomingMessage, res: ServerResponse) {
        this.defaultHandler(req, res);
    }
}