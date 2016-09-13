var router = require('express').Router();

router.route('/')
  .post((req, res) => {
    console.log('console inside constroller/index.js');
    console.log('req.body = ', req.body);
    res.status(200).json('res.status from constroller/index.js!!')
  });

module.exports = router;
