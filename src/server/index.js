var app = require('./server.js');
var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Canceller app listening on port#', port);
});
