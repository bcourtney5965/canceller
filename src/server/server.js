var express = require('express');
var app = express();

var port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World! You are in server');
});

app.listen(port, function () {
  console.log('Canceller app listening on port#', port);
});