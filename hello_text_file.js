var http = require('http');
var fs   = require('fs');
http.createServer(function(req, res){
	console.log('request starting');
	
	fs.readFile('./Hello.txt', function(error, content){
		if(error){
			res.writeHead(500);
			res.end();
		} else {
			res.writeHead(200, {'Content-Type' : 'text'});
			res.end(content);
		}
	});
}).listen(8124, '127.0.0.1');
