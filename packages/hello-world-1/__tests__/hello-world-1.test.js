'use strict';

const helloWorld1 = require('..');

describe('hello-world-1', () => {
  it('should pass', () => {
    helloWorld1();
    expect(true).toBe(true);
  });
});
