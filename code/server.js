var express = require('express');
var server = express();

server.configure(function(){
  server.use(express.static(__dirname + '/'));
});

server.listen(3000);
console.log('server listening on 3000');
