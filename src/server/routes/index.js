var githubRouter = require('../resources/github/githubRouter.js');
// var router = require. 


module.exports = function(app) {
  app.use('/api', githubRouter);
}
