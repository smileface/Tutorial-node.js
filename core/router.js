function route(handle, pathName, response, request) {
    console.log("Route request for "+pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName](response, request);
    } else {
        console.log("No request handler for "+pathName);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("404 Page not found");
        response.end();
    }
}

exports.route = route;
