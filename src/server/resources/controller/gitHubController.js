// exports = module.exports = {}; // use exports for mutiples - module.exports for single functions
var router = require('express').Router();
const exec = require('child_process').exec;
// pqoueythnsjhfk

module.exports = function(namesList) {
  console.log(`namesList in gitHubController = ${namesList}`);
  // exec('echo "hello" >> ./resources/controller/pqoueythnsjhfk3.txt', (error, stdout, stderr) => {  // works 
  exec(`forkchop tmr hackreactor fulcrum-students ${namesList}`, (error, stdout, stderr) => {
    console.log('inside .exec');
    if (error) {
      console.error(`Brandon, you have an error - exec error: ${error}`);
      return;
    }
    console.log('inside non-error part of exec');
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}

/*
exec("cat example.txt | forkchop tmr hackreactor fulcrum-students")
"tmr hackreactor fulcrum-students 'member1 member2'"
"echo 'member1 member2' | forkchop tmr hackreactor fulcrum-students"
*/
