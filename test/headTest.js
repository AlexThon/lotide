//const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;
const head = require('../head');

describe("head", () => {
  it('Should return 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
});

