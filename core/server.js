var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathName = url.parse(request.url).pathname;
        console.log('Request for '+pathName+' received');

        route(handle, pathName, response, request);

    }

    http.createServer(onRequest).listen(8000, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:8000/');
}

exports.start = start;
