var http = require("http"),
url = require('url'),
server = http.createServer();

server.on('request', function(req, res) {
	console.log("--incoming request--", req.url);
	var incomingURL = url.parse(req.url, true);
	console.log(incomingURL);
	if(incomingURL.path === '/hello') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end("Hello world");
	} else if(incomingURL.path === '/goodbye') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end("Goodbye world");
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end("Resource Not Found On Server..");
	}
	// res.writeHead(200, {'Content-Type': 'text/plain'});
	// res.end("hello world");
});

server.listen(9000);