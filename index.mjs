import http from "http";

const hostname = "127.0.0.1";
const port = 6000;

const server = http.createServer((req, res) => {
  // log the request body to console
  getBody(req)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("DONE");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getBody(request) {
  return new Promise((resolve) => {
    const bodyParts = [];
    let body;
    request
      .on("data", (chunk) => {
        bodyParts.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(bodyParts).toString();
        resolve(body);
      });
  });
}
