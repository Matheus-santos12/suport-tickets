export async function jsonHAndler(request, response) {
  const buffers = [];

  for await (chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }
  response.setHeader("Content-type", "application/json");
}
