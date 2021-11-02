

const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (actual, expected) => {
  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
    
  } else {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  }
  
};
module.exports = assertArraysEqual;
