var router = require('express').Router();
const exec = require('child_process').exec;

module.exports = function(names) {
  exec(`echo ${names} | forkchop tmr hackreactor fulcrum-students`, (error, stdout, stderr) => {
    if (error) {
      console.error(`You have an error - exec error: ${error}`);
      return;
    }
    console.log('inside non-error part of exec');
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}
