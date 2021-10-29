

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
  
