var http = require('http');

function onRequest(request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Server started!');
    console.log("Request received.");
}

http.createServer(onRequest).listen(8000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8000/');