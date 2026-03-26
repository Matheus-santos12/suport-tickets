import http from "node:http";

import { jsonHAndler } from "./middlewares/jsonHandler.js";

async function listener(request, response) {
  await jsonHAndler(request, response);
  console.log(request.body);
}

const server = http.createServer(listener).listen(3333);
