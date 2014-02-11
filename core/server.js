var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request,response) {
        var pathName = url.parse(request.url).pathname;
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello user');

        route(pathName);
    }

    http.createServer(onRequest).listen(8000, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:8000/');
}

exports.start = start;
