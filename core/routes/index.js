var exec = require("child_process").exec;
var queryString = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function main(response) {
    console.log("Request handler for index");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post" enctype="multipart/form-data">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.write(body);
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

function upload(response, request) {
    console.log("Request handler for path /upload");

    var form = new formidable.IncomingForm();
    console.log("about to parse");

    form.parse(request, function(error, fields, files) {
        console.log("parsing done");

        fs.rename(files.upload.path, "/tmp/test.png", function(error){
           if (error) {
               fs.unlink("/tmp/test.png");
               fs.rename(files.upload.path, "/tmp/test.png");
           }
        });
    });

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("received image: <br/>");
    response.write("<image src='/show'/>");
    response.end();
}

function show(response) {
    console.log("Request handler for path /show");
    fs.readFile("/tmp/test.png", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(file, "binary");
            response.end();
        }
    });

}

exports.main = main;
exports.start = start;
exports.upload = upload;
exports.show = show;
