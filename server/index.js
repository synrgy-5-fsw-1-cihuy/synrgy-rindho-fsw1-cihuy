console.log("Implement servermu disini yak 😝!");

const http = require('http');
const fs = require('fs');
const path = require('path');
const static = require('node-static');
const PUBLIC_DIR = path.join(__dirname, '../public');
const fileStatic = new(static.Server)(PUBLIC_DIR);

const {PORT = 8000} = process.env;

function htmlReaderFile(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIR, htmlFileName);
    const readHtmlFile = fs.readFileSync(htmlFilePath, 'utf-8');

    return readHtmlFile;
}


// Request response handler
function onRequest(request, response) {
    switch (request.url) {
        case '/':
            response.writeHead(200);
            response.end(htmlReaderFile('index.html'));
            return;
        case '/about':
            response.writeHead(200);
            response.end(htmlReaderFile('about.html'));
            return;
        case '/public/assets':
            fileStatic.serve(request, response);
            return;
    
        default:
            response.writeHead(404);
            response.end(htmlReaderFile('404.html'));
            return;
    }
}

// Server instance
const server = http.createServer(onRequest);

// Listen port nya
server.listen(PORT, 'localhost', () => {
    console.log(`Server running at localhost:${PORT}`);
});
