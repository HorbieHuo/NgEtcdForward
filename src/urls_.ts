import { Router } from "./router";
import { BaseHandler } from "./basehandler";
import { Exception_404, EtcdApi } from "./api";

function urlMap(): Map<string, BaseHandler> {
    let url_: Map<string, BaseHandler> = new Map;
    url_.set("/etcd", new EtcdApi());
    return url_;
}

export function RouterInst(): Router {
    let router: Router = new Router();
    router.Exception_404(new Exception_404());
    let url_ = urlMap();
    url_.forEach((v, k) => {
        router.Add(k, v);
    });
    return router;
}
