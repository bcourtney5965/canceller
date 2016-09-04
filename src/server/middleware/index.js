var logger = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded())
  app.use(logger('combined'));
}
