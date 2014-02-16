var pathCore = __dirname+'/core/';

var server = require(pathCore+"server.js");
var router = require(pathCore+"router.js");
var routes = require(pathCore+"routes/index.js");

var handle = {};
handle["/"] = routes.main;
handle["/start"] = routes.start;
handle["/upload"] = routes.upload;

server.start(router.route, handle);
