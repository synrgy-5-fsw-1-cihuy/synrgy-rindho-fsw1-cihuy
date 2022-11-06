const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const PUBLIC_DIR = path.join(__dirname, "../public");

const { PORT = 8000 } = process.env;

function htmlReaderFile(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIR, htmlFileName);
  const readHtmlFile = fs.readFileSync(htmlFilePath, "utf-8");

  return readHtmlFile;
}

// Request response handler
function onRequest(request, response) {
  switch (request.url) {
    case "/":
      response.writeHead(200);
      response.end(htmlReaderFile("index.html"));
      return;
    case "/cars":
      response.writeHead(200);
      response.end(htmlReaderFile("cari-mobil.html"));
      return;

    default:
      const fileTypes = {
        css: "text/css",
        js: "application/javascript",
        ico: "image/x-icon",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        svg: "image/svg+xml",
        json: "application/json",
        map: "application/json",
        txt: "text/plain",
        ttf: "application/x-font-ttf",
        woff2: "application/font-woff2"
      };
      
      let pathname = url.parse(request.url, true).pathname;
      pathname = path.join(PUBLIC_DIR, pathname)

      fs.readFile(pathname, (err, file) => {
        if (err) {
          response.status = 404;
          response.end("404 Not Found");
          return;
        }

        for (const [key] of Object.entries(fileTypes)) {
          const end = `.${key}`;
          if (request.url.endsWith(end)) {
            response.setHeader("Content-Type", fileTypes[key]);
            response.end(file);
            return;
          }
        }
      });
      return;
  }
}

// Server instance
const server = http.createServer(onRequest);

// Listen port nya
server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
