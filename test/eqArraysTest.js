const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

describe("eqArrays", () => {
  it('Should return true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1,2,3],[1, 2, 3]));
  });
});

