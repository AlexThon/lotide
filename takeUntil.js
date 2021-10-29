/**
 *
 * It will take in two parameters:
 *  1. The array to work with
    2. The callback (which Lodash calls "predicate")
    The function will return
    a "slice of the array with elements taken from the beginning."
 *
*/

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else if (callback(item)) {
      return results;
    }
  }
};


const eqArrays = (arrayA, arrayB) => {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (const item of arrayB) {
    if (!arrayA.includes(item)) {
      return false;
    }
  }
  return true;
};
  
const assertArraysEqual = (actual, expected) => {
  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed: [${actual}] !== [${expected}]`);
      
  } else {
    console.log(`Assertion Passed: [${actual}] === [${expected}]`);
  }
    
};
    
  

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [1,2,5,7,2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
