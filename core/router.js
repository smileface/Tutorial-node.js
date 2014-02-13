function route(handle, pathName) {
    console.log("Route request for "+pathName);
    if (typeof handle[pathName] === 'function') {
        handle[pathName]();
    } else {
        console.log("No request handler for "+pathName);
    }
}

exports.route = route;
