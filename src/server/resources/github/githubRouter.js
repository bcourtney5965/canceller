var githubRouter = require('express').Router();
// var githubController = require('./githubController.js');

githubRouter.route('/')
  .post((req, res) => {
    console.log('inside githubRouter');
    console.log('req.body = ', req.body);
    // res.end();
    res.status(200).json('inside githubRouter')
  });

module.exports = githubRouter;
