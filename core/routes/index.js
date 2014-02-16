var exec = require("child_process").exec;

function main(response) {
    console.log("Request handler for index");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Main page');
    response.end();
}

function start(response) {
    console.log("Request handler for path /start");

    exec("find /", { timeout: 10000, maxBuffer: 20000*1024 }, function(error, stdout, stderr) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("Request handler for path /upload");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello upload');
    response.end();
}

exports.main = main;
exports.start = start;
exports.upload = upload;
