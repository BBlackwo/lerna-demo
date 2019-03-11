const chalk = require('chalk');

'use strict';

module.exports = helloWorld1;

function helloWorld1() {
  console.log(chalk.green('Hello') + ' World ' + chalk.red('1'));
}

helloWorld1();
