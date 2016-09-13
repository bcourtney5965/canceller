var router = require('../resources/controller');

module.exports = function(app) {
  app.use('/api', router);
}
