var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World');
}).listen(app.get('port') || 3000);

console.log('Server strted on localhost:' + app.get('port') + '; press Ctrl-C to terminate.');