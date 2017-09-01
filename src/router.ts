// import url=require("url");
import * as url from "url";
import { BaseHandler } from "./basehandler";

export class Router {
    
    private routerMap: Map<string, BaseHandler> = new Map();
    private callback_404: BaseHandler;

    constructor() {}

    public Add(urlStr: string, callback: BaseHandler) {
        this.routerMap.set(urlStr, callback);
    }

    public Get(urlStr: string | undefined): BaseHandler {
        let callback: BaseHandler | undefined;
        if (typeof urlStr === "string") {
            let urlObj = url.parse(urlStr);
            let urlPathname = urlObj.pathname;
            if (urlPathname)
                callback = this.routerMap.get(urlPathname);
        } else {
            return this.callback_404;
        }
        if (!callback) return this.callback_404;
        return callback;
    }

    public Exception_404(callback: BaseHandler) {
        this.callback_404 = callback;
    }
}

