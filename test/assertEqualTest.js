const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("assertEqual()", () => {
  it('Should return true for assertEqual(1,1)', () => {
    assert.strictEqual(assertEqual(1,1));
  });
});

