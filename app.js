var http = require("http");
var connect = require('connect');

var app = connect()
    .use(connect.static('home'))
    .use(function(req, res){
 });

var server = http.createServer(app);

server.listen(9999, function () {
    console.log('server is listening');
});