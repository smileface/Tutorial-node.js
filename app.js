var server = require("./core/server.js");
var router = require("./core/router.js");
var routes = require("./core/routes/index.js");

var handle = {};
handle["/"] = routes.main;
handle["/start"] = routes.start;
handle["/upload"] = routes.upload;

server.start(router.route, handle);
