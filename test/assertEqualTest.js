const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

//assertEqual("Lighthouse Labs", "Lighthouse Labs");
describe("assertEqual()", () => {
  it('Should return true for assertEqual(1,1)', () => {
    assert.strictEqual(assertEqual(1,1));
  });
});

assertEqual(1,1);