// Create web server
// Start server with command: node comments.js
// Test server with command: curl http://localhost:3000

// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var querystring = require('querystring');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url);
  var parsedQuery = querystring.parse(parsedUrl.query);
  console.log(parsedQuery);

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
});

// Listen on port 3000, IP defaults to