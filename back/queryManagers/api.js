// Main method, exported at the end of the file. It's the one that will be called when a REST request is received.
function manageRequest(request, response) {
    response.statusCode = 200;
    response.end(`Thanks for calling ${request.url}`);
}

exports.manage = manageRequest;