var githubRouter = require('express').Router();
var githubController = require('./githubController.js');

githubRouter.route('/')
  .get((req, res) => {
    console.log('inside githubRouter');
    res.end();
  });

module.exports = githubRouter;
