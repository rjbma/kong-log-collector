import http from "http";

const port = 6000;

const server = http
  .createServer((req, res) => {

    // log the request body to console
    getBody(req).then((body) => {
      console.log(body);
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("OK");
  })
  .listen(port, undefined, () => {
    console.log('Started log-collector')
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
