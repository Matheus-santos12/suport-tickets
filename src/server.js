import http from "node:http";

import { jsonHAndler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(request, response) {
  await jsonHAndler(request, response);
  routeHandler(request, response);
}

const server = http.createServer(listener).listen(3333);
