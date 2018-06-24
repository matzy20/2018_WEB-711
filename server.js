var express = require('express');
var app = express();
var PORT = 8000;
var path = require('path');


app.use(express.static(path.resolve (__dirname, 'Public')));

var server = app.listen(PORT, function(){
  console.log('Listening on port', server.address().port);
});