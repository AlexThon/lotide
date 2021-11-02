
const middle = require('../middle');
const assert = require('chai').assert;

describe("middle", () => {
  it('Should return 2 for [1, 2, 3]', () => {
    assert.strictEqual(middle([1,2,3]), 2);
  });
});