const http = require('http');
const url = require('url');
const port = 9999; // note: you should modify this because at the moment we haven't taken care of port contention
const handleRequest = function(request, response) {
  const parsedRequest = url.parse(request.url, true);
  
  response.writeHead(200);
  response.end("Hello, World, from " + process.env.MY_NODE_NAME +"!\n");
}
var www = http.createServer(handleRequest);
www.listen(port);

