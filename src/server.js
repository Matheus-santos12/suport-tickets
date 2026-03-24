import http from "node:http";

function listener(request, response) {}

const server = http.createServer(listener).listen(3333);
