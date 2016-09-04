var express = require('express');
var app = express();
var path = require('path');
var middleware = require('./middleware');
var routes = require('./routes');

app.use(express.static(path.join(__dirname, '..', 'client')));

middleware(app);

//for testing
app.get('/test', function(req, res) {
  console.log('inside \'/test\' route');
  res.json({this: 'is a test'});
});

routes(app);

module.exports = app;
