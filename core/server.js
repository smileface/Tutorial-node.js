var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request,response) {
        var postData = "";
        var pathName = url.parse(request.url).pathname;
        console.log('Request for '+pathName+' received');

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk: "+postDataChunk+"\r\n");
        });

        request.addListener("end", function() {
            route(handle, pathName, response, postData);
        });

    }

    http.createServer(onRequest).listen(8000, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:8000/');
}

exports.start = start;
