var githubRouter = require('../resources/github/githubRouter.js');

module.exports = function(app) {
  app.use('/api', githubRouter);
}
