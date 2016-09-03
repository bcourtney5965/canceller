var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '..', 'client')));

//for testing
app.get('/test', function(req, res) {
  console.log('inside \'/test\' route');
  res.json({this: 'is a test'});
});
module.exports = app;
