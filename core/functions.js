function printOutPage(response, code, content) {
    response.writeHead(code, {'Content-Type': 'text/plain'});
    response.write(content);
    response.end();
}

exports.printOutPage = printOutPage;