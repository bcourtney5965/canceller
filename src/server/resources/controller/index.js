var router = require('express').Router();
const exec = require('child_process').exec;

router.route('/')
  .post((req, res) => {
    console.log('console inside constroller/index.js');
    console.log('req.body = ', req.body);
    exec('cat /Users/brandoncourtney/Desktop/test/file1.txt > /Users/brandoncourtney/Desktop/test/file3.txt', (error, stdout, stderr) => {
      console.log('inside .exec');
      if (error) {
        console.error(`Brandon, you have an error - exec error: ${error}`);
        return;
      }
      console.log('inside non-error part of exec');
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
    res.status(200).json('res.status from constroller/index.js!!')
  })

module.exports = router;