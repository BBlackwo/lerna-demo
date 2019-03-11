const helloWorld1 = require('hello-world-1');

'use strict';

module.exports = helloWorld2;

function helloWorld2() {
  console.log('Hello world 2');
  helloWorld1();
}

helloWorld2();