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

app.post('*', (req, res) => {
  console.log('this works');
  console.log('req.body = ', req.body);
  console.log('req.body.githubHandle.split(" ") = ', req.body.githubHandle.split(" "));
  // res.end(200);
  res.status(200).json('inside githubRouter')
});
routes(app);

module.exports = app;
