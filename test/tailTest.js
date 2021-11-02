
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual.js');

describe("assertArraysEqual()", () => {
  it('Should return not equal (!==) for [1,3,4,5] and [3,4,5]', () => {
    assert.deepEqual(assertArraysEqual([1,3,4,5],[3,4,5]));
  });
});


