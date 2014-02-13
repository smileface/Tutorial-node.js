function main() {
    console.log("Request handler for index");
}

function start() {
    console.log("Request handler for path /start");
}

function upload() {
    console.log("Request handler for path /upload");
}

exports.main = main;
exports.start = start;
exports.upload = upload;
