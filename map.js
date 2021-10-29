// Our map function will take in two arguments:
// An array to map
// A callback function
// function will return a new array based on the results of the callback function

const map = function(array, callback) {
  // empty for now :)
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);