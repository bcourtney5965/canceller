var router = require('express').Router();
const exec = require('child_process').exec;
var gitHubRepoKiller = require('./gitHubController.js');
var firebaseCanceller = require('./firebaseCanceller.js');

router.route('/')
  .post((req, res) => {
    console.log('console inside constroller/index.js');
    console.log('req.body.names = ', req.body.names);
    var names = req.body.names;
    function normalInput (names) {
      let output = names.toString();
      if (output.match(/^\[object/)) {
        output = ''
      }
      return output.replace(/,/gi, ' ');
    }  
    names = normalInput(names)
    firebaseCanceller('Brandon/firebaseCanceller');
    gitHubRepoKiller(req.body.names);
    res.status(200).json('res.status from constroller/index.js!!')
  })

module.exports = router;
