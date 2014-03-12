function route(handle, pathName, response, postData) {
    console.log("Route request for "+pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName](response, postData);
    } else {
        console.log("No request handler for "+pathName);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("404 Page not found");
        response.end();
    }
}

exports.route = route;
