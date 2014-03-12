var exec = require("child_process").exec;
var queryString = require("querystring");

function main(response, postData) {
    console.log("Request handler for index");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.write(body);
    response.end();
}

function start(response, postData) {
    console.log("Request handler for path /start");

    exec("find /", { timeout: 10000, maxBuffer: 20000*1024 }, function(error, stdout, stderr) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(stdout);
        response.end();
    });
}

function upload(response, postData) {
    console.log("Request handler for path /upload");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("You've sent the text: " + queryString.parse(postData).text);
    response.end();
}

exports.main = main;
exports.start = start;
exports.upload = upload;
