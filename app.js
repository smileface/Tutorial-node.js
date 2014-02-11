var server = require("./core/server.js");
var router = require("./core/router.js");

server.start(router.route);
