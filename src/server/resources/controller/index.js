var router = require('express').Router();
const exec = require('child_process').exec;
var gitHubRepoKiller = require('./gitHubController.js');
// pqoueythnsjhfk
var firebaseCanceller = require('./firebaseCanceller.js');

router.route('/')
  .post((req, res) => {
    console.log('console inside constroller/index.js');
    console.log('req.body.githubHandle = ', req.body.githubHandle);
    firebaseCanceller('Brandon/firebaseCanceller');
    gitHubRepoKiller(req.body.githubHandle);
    res.status(200).json('res.status from constroller/index.js!!')
  })

module.exports = router;
